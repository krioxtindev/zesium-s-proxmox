# 🦅 Zesium - Proxmox Manager

> A modern, luxury, enterprise dark theme and full UI overhaul for **Proxmox Virtual Environment (PVE 7.x, 8.x & 9.x)**, designed for server administrators. © Zesium. All rights reserved.

![Zesium Login](theme/images/datacenter-bg.png)

---

## ✨ Features

- 🔐 **Split-Screen Modern Login**
  - Left column: Sleek dark obsidian login with eagle vector logo, amber alert notice, and clean inputs.
  - Right column: High-resolution black & white enterprise server room corridor with dramatic lighting.
- ⚡ **Ultra-Slim Left Rail & Modern Sidebar**
  - Slim 58px icon rail (`Cloud`, `Network`, `Storage`, `Teams`, `Account`) with vector eagle branding.
  - Modern sidebar navigation with **Resources** (`Virtual Servers`, `Custom ISOs`, `Snapshots`, `Floating IPs`, `Bandwidth`), **Networking** (`Firewall Groups`, `Private Networks`), and **Setup** (`SSH Keys`, `Scripts`).
  - User profile badge card for Martin Šintler (`MŠ`).
- 🖥 **Virtual Server Detail View (Screenshot 193958.png match)**
  - Server status indicator (`● test-ubuntu26.04`), specs line (`Primary IP`, `Hostname`, `Created`).
  - Action buttons: `[ 🖥 VNC ]` (opens real Proxmox console), `[ ⟳ Restart ]`, `[ ⏻ Stop ]` (bright red), and `[ ... ]`.
  - Horizontal modern tabs: `Overview`, `Settings`, `Graphs`, `Backups`, `Firewall`, `Mount ISO`, `Audit Log`, `Reverse DNS`, `Upgrade`, `Reinstall`, `Admin`.
  - **Upgrade View**: KVM Standard, Premium, and Ryzen product cards with corner checkmarks, location pills (`🇺🇸 Kansas City, MO`), and plan tier table.
- 🚀 **Order / Deploy Server Wizard (Screenshots 212110.png, 212115.png, 212121.png match)**
  - Product family selection cards, datacenter location selector, OS distribution selector (`Ubuntu`, `Debian`, `AlmaLinux`, `RockyLinux`), root password generator, and sticky bottom price bar with `Create Server` button.
- 🛡 **Firewall Groups & Private Networks (Screenshots 212041.png, 212051.png, 212059.png match)**
  - Reusable firewall rule sets, inbound and outbound rules editor.
  - Blue explanatory info banner for private networks.
- 🔔 **Floating Toast Notification System (Screenshot 212051.png match)**
  - Fixed bottom-right dark pill notifications with green circle checkmark and clean typography.
- 🚫 **Automatic Subscription Nag Suppressor**
  - Suppresses the annoying *"No valid subscription"* dialog automatically.
- 🔄 **Classic PVE Toggle**
  - Switch between the Convoy luxury interface and stock Proxmox ExtJS anytime with 1 click.

---

## 🚀 Quick Install (On any Proxmox server)

Run this single command on your Proxmox node as `root`:

```bash
curl -sSL https://raw.githubusercontent.com/krioxtindev/zesium-s-proxmox/main/install.sh | bash
```

Or clone the repository and run:

```bash
git clone https://github.com/krioxtindev/zesium-s-proxmox.git
cd zesium-s-proxmox
chmod +x install.sh uninstall.sh
./install.sh
```

Then refresh your browser with **`Ctrl + F5`** (or `Cmd + Shift + R`).

---

## 🗑 Uninstallation (100% Clean)

To completely restore the default factory Proxmox VE interface:

```bash
./uninstall.sh
```

---

## 🛠 Project Structure

```
zesium-s-proxmox/
├── install.sh              # 1-command installer for any Proxmox node
├── uninstall.sh            # Complete uninstaller (restores stock UI)
├── deploy.js               # Dev tool to push assets directly to server in 1 sec
├── theme/
│   ├── css/
│   │   ├── fonts.css       # Inter font & CSS design tokens
│   │   ├── zesium-theme.css# ExtJS component styling
│   │   └── zesium-app.css  # Convoy / Advin application layout & components
│   ├── js/
│   │   ├── zesium-theme.js # Nag suppressor & ExtJS hooks
│   │   └── zesium-app.js   # Reactive Convoy UI controller & API bridge
│   └── images/
│       ├── logo.svg        # Soaring eagle vector mark
│       └── datacenter-bg.png # Black & white datacenter corridor background
└── README.md
```

---

© 2026 Zesium / Martin Šintler. All rights reserved.
