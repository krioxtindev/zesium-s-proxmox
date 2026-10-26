#!/usr/bin/env bash
# ==============================================================================
# Zesium - Proxmox Manager Uninstaller
# Completely restores stock Proxmox VE web interface
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
       PROXMOX VE THEME UNINSTALLER
EOF
echo -e "${NC}"

# Check root permissions
if [ "$EUID" -ne 0 ]; then
  echo -e "${RED}[Error] Please run this uninstaller as root!${NC}"
  exit 1
fi

PVE_MANAGER_DIR="/usr/share/pve-manager"
TPL_FILE="${PVE_MANAGER_DIR}/index.html.tpl"
BACKUP_FILE="${PVE_MANAGER_DIR}/index.html.tpl.zesium-backup"
IMAGES_DIR="${PVE_MANAGER_DIR}/images/zesium"
CSS_DIR="${PVE_MANAGER_DIR}/css"
JS_DIR="${PVE_MANAGER_DIR}/js"

echo -e "${BLUE}==>${NC} Restoring default Proxmox VE UI..."

# 1. Restore template from backup
if [ -f "$BACKUP_FILE" ]; then
  echo -e "${GREEN}[1/3]${NC} Restoring index.html.tpl from backup..."
  cp "$BACKUP_FILE" "$TPL_FILE"
  rm -f "$BACKUP_FILE"
else
  echo -e "${YELLOW}[Notice]${NC} Backup file not found. Stripping Zesium injection tags manually..."
  sed -i '/<!-- ZESIUM-THEME-START -->/,/<!-- ZESIUM-THEME-END -->/d' "$TPL_FILE"
fi

# 2. Remove theme asset files
echo -e "${GREEN}[2/3]${NC} Removing theme assets..."
rm -f "${CSS_DIR}/fonts.css"
rm -f "${CSS_DIR}/zesium-theme.css"
rm -f "${CSS_DIR}/zesium-app.css"
rm -f "${JS_DIR}/zesium-theme.js"
rm -f "${JS_DIR}/zesium-app.js"
rm -rf "$IMAGES_DIR"

# 3. Reload pveproxy
echo -e "${GREEN}[3/3]${NC} Reloading Proxmox web proxy service..."
systemctl reload pveproxy

echo ""
echo -e "${GREEN}======================================================${NC}"
echo -e "${GREEN}  Default Proxmox VE theme successfully restored!     ${NC}"
echo -e "${GREEN}======================================================${NC}"
echo -e "Press ${CYAN}Ctrl + F5${NC} in your browser to clear cache."
echo ""
