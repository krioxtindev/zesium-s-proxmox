const { spawnSync, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const sshExe = 'C:\\Users\\marti\\AppData\\Local\\Programs\\Git\\usr\\bin\\ssh.exe';
const host = 'root@85.239.155.209';

console.log('--- [1/4] Preparing directories on Proxmox server ---');
spawnSync(sshExe, [host, 'mkdir -p /usr/share/pve-manager/css /usr/share/pve-manager/js /usr/share/pve-manager/images/zesium && rm -f /usr/share/pve-manager/css/zesium-app.css /usr/share/pve-manager/js/zesium-app.js'], { stdio: 'inherit' });

console.log('--- [2/4] Packaging and uploading theme files ---');
const archivePath = path.join(__dirname, 'theme_dist.tar.gz');

// Create tar.gz of theme directory
execSync(`tar -czf "${archivePath}" -C "${path.join(__dirname, 'theme')}" css js images`);

// Upload archive to server via SSH pipe
const fileData = fs.readFileSync(archivePath);
const uploadRes = spawnSync(sshExe, [host, 'tar -xzf - -C /tmp/ && cp -r /tmp/css/* /usr/share/pve-manager/css/ && cp -r /tmp/js/* /usr/share/pve-manager/js/ && cp -r /tmp/images/* /usr/share/pve-manager/images/zesium/ && rm -rf /tmp/css /tmp/js /tmp/images'], {
  input: fileData,
  stdio: ['pipe', 'inherit', 'inherit']
});

// Clean up local tar
if (fs.existsSync(archivePath)) {
  fs.unlinkSync(archivePath);
}

if (uploadRes.status !== 0) {
  console.error('File upload failed!');
  process.exit(1);
}

const v = Date.now();
const injectScript = `
TPL="/usr/share/pve-manager/index.html.tpl"
BACKUP="/usr/share/pve-manager/index.html.tpl.zesium-backup"

if [ ! -f "$BACKUP" ]; then
  cp "$TPL" "$BACKUP"
  echo "Created backup: $BACKUP"
fi

# Remove old injection if present
sed -i '/<!-- ZESIUM-THEME-START -->/,/<!-- ZESIUM-THEME-END -->/d' "$TPL"

# Inject before </head>
INJECT="    <!-- ZESIUM-THEME-START -->\\\\n    <link rel=\\\\\\"preconnect\\\\\\" href=\\\\\\"https://fonts.googleapis.com\\\\\\" />\\\\n    <link rel=\\\\\\"preconnect\\\\\\" href=\\\\\\"https://fonts.gstatic.com\\\\\\" crossorigin />\\\\n    <link rel=\\\\\\"stylesheet\\\\\\" href=\\\\\\"https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap\\\\\\" />\\\\n    <link rel=\\\\\\"stylesheet\\\\\\" type=\\\\\\"text/css\\\\\\" href=\\\\\\"/pve2/css/fonts.css?v=${v}\\\\\\" />\\\\n    <link rel=\\\\\\"stylesheet\\\\\\" type=\\\\\\"text/css\\\\\\" href=\\\\\\"/pve2/css/zesium-theme.css?v=${v}\\\\\\" />\\\\n    <script type=\\\\\\"text/javascript\\\\\\" src=\\\\\\"/pve2/js/zesium-theme.js?v=${v}\\\\\\">\\\\x3C/script>\\\\n    <!-- ZESIUM-THEME-END -->"

sed -i "/<\\\\/head>/i $INJECT" "$TPL"

`;

spawnSync(sshExe, [host, injectScript], { stdio: 'inherit' });

console.log('--- [4/4] Reloading pveproxy service ---');
spawnSync(sshExe, [host, 'systemctl reload pveproxy'], { stdio: 'inherit' });

console.log('\\n✅ Zesium Proxmox Theme successfully deployed to https://85.239.155.209:8006/ !');
