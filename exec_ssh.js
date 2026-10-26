const { spawnSync } = require('child_process');

const cmd = process.argv.slice(2).join(' ');
const sshPath = 'C:\\Users\\marti\\AppData\\Local\\Programs\\Git\\usr\\bin\\ssh.exe';

const res = spawnSync(sshPath, ['root@85.239.155.209', cmd], {
  encoding: 'utf-8',
  maxBuffer: 10 * 1024 * 1024
});

if (res.stdout) process.stdout.write(res.stdout);
if (res.stderr) process.stderr.write(res.stderr);
process.exit(res.status || 0);
