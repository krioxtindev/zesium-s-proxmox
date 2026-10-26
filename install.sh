#!/usr/bin/env bash
# ==============================================================================
# Zesium - Proxmox Manager Theme Installer
# Compatible with Proxmox VE 7.x, 8.x, and 9.x
# ==============================================================================

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${CYAN}"
cat << "EOF"
  ______ _____ _____ _____ _    _ __  __ 
 |___  /| ____/ ____|_   _| |  | |  \/  |
    / / | |__| (___   | | | |  | | \  / |
   / /  |  __|\___ \  | | | |  | | |\/| |
  / /__ | |___|___) |_| |_| |__| | |  | |
 /_____|_____|_____/|_____|\____/|_|  |_|
       ZESIUM - PROXMOX MANAGER
EOF
echo -e "${NC}"

# Check root permissions
if [ "$EUID" -ne 0 ]; then
  echo -e "${RED}[Error] Please run this installer as root!${NC}"
  exit 1
fi

PVE_MANAGER_DIR="/usr/share/pve-manager"
TPL_FILE="${PVE_MANAGER_DIR}/index.html.tpl"
BACKUP_FILE="${PVE_MANAGER_DIR}/index.html.tpl.zesium-backup"
IMAGES_DIR="${PVE_MANAGER_DIR}/images/zesium"
CSS_DIR="${PVE_MANAGER_DIR}/css"
JS_DIR="${PVE_MANAGER_DIR}/js"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"

# Verify Proxmox installation
if [ ! -f "$TPL_FILE" ]; then
  echo -e "${RED}[Error] Proxmox VE web files not found in ${PVE_MANAGER_DIR}.${NC}"
  echo -e "${RED}Is Proxmox VE installed on this machine?${NC}"
  exit 1
fi

echo -e "${BLUE}==>${NC} Installing Zesium - Proxmox Manager Theme..."

# 1. Create clean backup if not already present
if [ ! -f "$BACKUP_FILE" ]; then
  echo -e "${GREEN}[1/5]${NC} Creating backup of original index.html.tpl..."
  cp "$TPL_FILE" "$BACKUP_FILE"
else
  echo -e "${YELLOW}[Notice]${NC} Existing backup found at ${BACKUP_FILE}. Keeping original backup."
fi

# 2. Create directories
echo -e "${GREEN}[2/5]${NC} Preparing directories..."
mkdir -p "$IMAGES_DIR"
mkdir -p "$CSS_DIR"
mkdir -p "$JS_DIR"

# Clean up any old overlay files
rm -f "${CSS_DIR}/zesium-app.css" "${JS_DIR}/zesium-app.js"

# 3. Copy theme files
echo -e "${GREEN}[3/5]${NC} Copying assets & stylesheets..."
if [ -d "${SCRIPT_DIR}/theme" ]; then
  cp -r "${SCRIPT_DIR}/theme/css/"* "$CSS_DIR/"
  cp -r "${SCRIPT_DIR}/theme/js/"* "$JS_DIR/"
  cp -r "${SCRIPT_DIR}/theme/images/"* "$IMAGES_DIR/"
else
  REPO_RAW="https://raw.githubusercontent.com/krioxtindev/zesium-s-proxmox/main"
  echo -e "${BLUE}Downloading assets from GitHub...${NC}"
  curl -sSL "${REPO_RAW}/theme/css/fonts.css" -o "${CSS_DIR}/fonts.css"
  curl -sSL "${REPO_RAW}/theme/css/zesium-theme.css" -o "${CSS_DIR}/zesium-theme.css"
  curl -sSL "${REPO_RAW}/theme/js/zesium-theme.js" -o "${JS_DIR}/zesium-theme.js"
  curl -sSL "${REPO_RAW}/theme/images/logo.svg" -o "${IMAGES_DIR}/logo.svg"
  curl -sSL "${REPO_RAW}/theme/images/datacenter-bg.png" -o "${IMAGES_DIR}/datacenter-bg.png"
fi

# Set proper permissions
chmod -R 644 "$IMAGES_DIR"/* "$CSS_DIR"/* "$JS_DIR"/*

# 4. Inject theme into index.html.tpl
echo -e "${GREEN}[4/5]${NC} Injecting theme into web template..."

# Remove any previously injected Zesium tags
sed -i '/<!-- ZESIUM-THEME-START -->/,/<!-- ZESIUM-THEME-END -->/d' "$TPL_FILE"

# Prepare injection snippet
V_TS=$(date +%s)
THEME_INJECTION=$(cat << EOF
    <!-- ZESIUM-THEME-START -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" />
    <link rel="stylesheet" type="text/css" href="/pve2/css/fonts.css?v=${V_TS}" />
    <link rel="stylesheet" type="text/css" href="/pve2/css/zesium-theme.css?v=${V_TS}" />
    <script type="text/javascript" src="/pve2/js/zesium-theme.js?v=${V_TS}"></script>
    <!-- ZESIUM-THEME-END -->
EOF
)

# Insert before </head>
sed -i "/<\/head>/i $(echo "$THEME_INJECTION" | sed 's/[\&/]/\\&/g' | tr '\n' '\a')" "$TPL_FILE"
tr '\a' '\n' < "$TPL_FILE" > "${TPL_FILE}.tmp" && mv "${TPL_FILE}.tmp" "$TPL_FILE"

# 5. Reload pveproxy service
echo -e "${GREEN}[5/5]${NC} Reloading Proxmox web proxy service..."
systemctl reload pveproxy

echo ""
echo -e "${GREEN}======================================================${NC}"
echo -e "${GREEN}  Zesium - Proxmox Manager successfully installed!    ${NC}"
echo -e "${GREEN}======================================================${NC}"
echo -e "Open your Proxmox VE web interface in your browser."
echo -e "Tip: Press ${CYAN}Ctrl + F5${NC} in your browser to clear cache."
echo ""
