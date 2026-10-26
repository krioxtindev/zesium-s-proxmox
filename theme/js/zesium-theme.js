/**
 * ==============================================================================
 * Zesium - Proxmox Manager
 * 100% Real Proxmox VE Administration (No Demos, No Emojis, Pure Live API)
 * © Zesium. All rights reserved.
 * ==============================================================================
 */

(function () {
  'use strict';

  console.log('%c Zesium - Proxmox Manager %c Live Hypervisor Mode ',
    'background: #ffffff; color: #000000; font-weight: bold; padding: 2px 8px; border-radius: 4px;',
    'background: #18181c; color: #10b981; padding: 2px 8px; border-radius: 4px;'
  );

  // Clean SVG Icons (Zero Unicode Emojis)
  const Icons = {
    logo: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1z"/></svg>`,
    server: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    container: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    iso: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
    storage: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    backup: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
    network: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    firewall: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    shell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    tasks: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    cluster: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    vnc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    restart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`,
    stop: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><rect x="8" y="8" width="8" height="8" rx="1" fill="#ffffff"/></svg>`,
    start: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
    deleteIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
    upload: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`
  };

  // State Management - 100% Real Live Proxmox Data
  const State = {
    currentView: 'servers',
    activeServerId: null,
    selectedTab: 'summary',
    servers: [],
    isos: [],
    storages: [],
    backups: [],
    networks: [],
    firewallRules: [],
    tasks: []
  };

  // Suppress "No valid subscription" nag
  function suppressNag() {
    if (window.Proxmox && Proxmox.Utils) {
      Proxmox.Utils.checked_command = function (orig_cmd) {
        if (typeof orig_cmd === 'function') orig_cmd();
      };
    }
  }

  // Toast Notification
  function showToast(title, message, duration = 4000) {
    const existing = document.querySelector('.zes-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'zes-toast';
    toast.innerHTML = `
      <div class="zes-toast-icon">✓</div>
      <div class="zes-toast-body">
        <div class="zes-toast-title">${title || 'Notification'}</div>
        <div class="zes-toast-desc">${message || ''}</div>
      </div>
      <button class="zes-toast-close" onclick="this.parentElement.remove()">✕</button>
    `;
    document.body.appendChild(toast);

    if (duration > 0) {
      setTimeout(() => {
        if (toast && toast.parentElement) toast.remove();
      }, duration);
    }
  }

  // Global Zesium Controller API
  window.Zesium = {
    showToast: showToast,

    navigateTo: function (view, id = null, tab = 'summary') {
      State.currentView = view;
      if (id) State.activeServerId = id;
      State.selectedTab = tab;

      document.querySelectorAll('.zes-menu-item').forEach(el => {
        el.classList.toggle('active', el.dataset.view === view);
      });

      this.render();
      this.updateBreadcrumbs();

      // Trigger respective live data fetches
      if (view === 'servers') this.fetchLiveServers();
      else if (view === 'isos') this.fetchISOs();
      else if (view === 'storage') this.fetchStorages();
      else if (view === 'backups') this.fetchBackups();
      else if (view === 'network') this.fetchNetworks();
      else if (view === 'firewall') this.fetchFirewall();
      else if (view === 'tasks') this.fetchTasks();
    },

    setServerTab: function (tab) {
      State.selectedTab = tab;
      this.render();
    },

    // Real Native Proxmox Wizards & Dialogs
    openCreateVMWizard: function () {
      if (window.Ext && Ext.ClassManager.get('PVE.qemu.CreateWizard')) {
        Ext.create('PVE.qemu.CreateWizard', { nodename: 'pve' }).show();
      }
    },

    openCreateCTWizard: function () {
      if (window.Ext && Ext.ClassManager.get('PVE.lxc.CreateWizard')) {
        Ext.create('PVE.lxc.CreateWizard', { nodename: 'pve' }).show();
      }
    },

    openUploadISOWindow: function () {
      if (window.Ext && Ext.ClassManager.get('PVE.window.UploadToStorage')) {
        Ext.create('PVE.window.UploadToStorage', {
          nodename: 'pve',
          storage: 'local',
          content: 'iso',
          autoShow: true,
          taskDone: () => Zesium.fetchISOs()
        });
      }
    },

    openDownloadUrlWindow: function () {
      if (window.Ext && Ext.ClassManager.get('PVE.window.DownloadUrlToStorage')) {
        Ext.create('PVE.window.DownloadUrlToStorage', {
          nodename: 'pve',
          storage: 'local',
          content: 'iso',
          autoShow: true,
          taskDone: () => Zesium.fetchISOs()
        });
      }
    },

    openAddFirewallRuleWindow: function () {
      if (window.Ext && Ext.ClassManager.get('PVE.FirewallRuleEdit')) {
        Ext.create('PVE.FirewallRuleEdit', {
          base_url: '/cluster/firewall/rules',
          autoShow: true,
          taskDone: () => Zesium.fetchFirewall()
        });
      }
    },

    openBackupWindow: function (vmid = null) {
      if (window.Ext && Ext.ClassManager.get('PVE.window.Backup')) {
        Ext.create('PVE.window.Backup', {
          nodename: 'pve',
          vmid: vmid,
          autoShow: true,
          taskDone: () => Zesium.fetchBackups()
        });
      }
    },

    openNodeShell: function () {
      const node = (window.Proxmox && Proxmox.NodeName) ? Proxmox.NodeName : 'pve';
      window.open(`/?console=shell&novnc=1&node=${node}`, 'pve_shell', 'width=1024,height=768,toolbar=no,menubar=no,location=no,status=no,scrollbars=yes,resizable=yes');
    },

    openVNC: function (id) {
      const server = this.getActiveServer();
      if (!server) return;
      const node = server.node || 'pve';
      const vmid = server.vmid;
      const type = server.type === 'lxc' ? 'lxc' : 'kvm';
      const vncUrl = `/?console=${type}&novnc=1&node=${node}&vmid=${vmid}`;
      window.open(vncUrl, `vnc_${vmid}`, 'width=1024,height=768,toolbar=no,menubar=no,location=no,status=no,scrollbars=yes,resizable=yes');
    },

    // Real Server Lifecycle Actions via Proxmox API
    startServer: function (id) {
      const server = this.getActiveServer();
      if (!server) return;
      Proxmox.Utils.API2Request({
        url: `/nodes/${server.node}/${server.type}/${server.vmid}/status/start`,
        method: 'POST',
        success: () => {
          showToast('Server Starting', `Start signal sent to ${server.name} (VMID ${server.vmid}).`);
          setTimeout(() => this.fetchLiveServers(), 1500);
        },
        failure: (err) => showToast('Action Failed', err.htmlStatus || 'Could not start server')
      });
    },

    stopServer: function (id) {
      const server = this.getActiveServer();
      if (!server) return;
      Proxmox.Utils.API2Request({
        url: `/nodes/${server.node}/${server.type}/${server.vmid}/status/stop`,
        method: 'POST',
        success: () => {
          showToast('Server Stopped', `Stop signal sent to ${server.name} (VMID ${server.vmid}).`);
          setTimeout(() => this.fetchLiveServers(), 1500);
        },
        failure: (err) => showToast('Action Failed', err.htmlStatus || 'Could not stop server')
      });
    },

    restartServer: function (id) {
      const server = this.getActiveServer();
      if (!server) return;
      Proxmox.Utils.API2Request({
        url: `/nodes/${server.node}/${server.type}/${server.vmid}/status/reboot`,
        method: 'POST',
        success: () => {
          showToast('Server Restarting', `Reboot signal sent to ${server.name} (VMID ${server.vmid}).`);
          setTimeout(() => this.fetchLiveServers(), 1500);
        },
        failure: (err) => showToast('Action Failed', err.htmlStatus || 'Could not restart server')
      });
    },

    deleteServer: function (id) {
      const server = this.getActiveServer();
      if (!server) return;
      if (!confirm(`Are you sure you want to PERMANENTLY DESTROY ${server.name} (VMID ${server.vmid})? This action cannot be undone.`)) {
        return;
      }

      Proxmox.Utils.API2Request({
        url: `/nodes/${server.node}/${server.type}/${server.vmid}`,
        method: 'DELETE',
        params: { purge: 1 },
        success: () => {
          showToast('Server Destroyed', `VMID ${server.vmid} purged.`);
          this.navigateTo('servers');
        },
        failure: (err) => showToast('Delete Failed', err.htmlStatus || 'Could not delete server')
      });
    },

    logout: function () {
      if (window.Proxmox && Proxmox.Utils && Proxmox.Utils.authClear) {
        Proxmox.Utils.authClear();
      }
      document.cookie = 'PVEAuthCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      try {
        window.localStorage.removeItem('ProxmoxUser');
      } catch (e) {}
      window.location.reload();
    },

    toggleNativeView: function () {
      const isActive = document.body.classList.toggle('zesium-active');
      const app = document.getElementById('zesium-app');
      if (app) app.style.display = isActive ? 'flex' : 'none';
      showToast('Interface Toggled', isActive ? 'Switched to Zesium Convoy layout.' : 'Switched to Proxmox Native view.');
    },

    getActiveServer: function () {
      return State.servers.find(s => String(s.id) === String(State.activeServerId)) || State.servers[0] || null;
    },

    // Live Data Fetchers
    fetchLiveServers: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;

      Proxmox.Utils.API2Request({
        url: '/cluster/resources',
        method: 'GET',
        success: (response) => {
          const list = response.result.data || [];
          const vms = list.filter(item => item.type === 'qemu' || item.type === 'lxc');

          State.servers = vms.map(item => {
            const isLxc = item.type === 'lxc';
            const ramMb = item.maxmem ? Math.round(item.maxmem / (1024 * 1024)) : 0;
            const diskGb = item.maxdisk ? (item.maxdisk / (1024 * 1024 * 1024)).toFixed(1) : '0';
            const vcpu = item.maxcpu || (isLxc ? 1 : 2);

            return {
              id: String(item.vmid),
              vmid: item.vmid,
              name: item.name || (isLxc ? `CT ${item.vmid}` : `VM ${item.vmid}`),
              type: item.type,
              node: item.node || 'pve',
              os: isLxc ? 'LXC Container' : 'QEMU Virtual Machine',
              state: item.status || 'stopped',
              vcpu: `${vcpu} vCPU`,
              ram: `${ramMb} MB`,
              disk: `${diskGb} GB`,
              uptime: item.uptime ? `${Math.round(item.uptime / 60)} min` : '-'
            };
          });

          this.render();
        }
      });
    },

    fetchISOs: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/storage/local/content?content=iso',
        method: 'GET',
        success: (response) => {
          State.isos = response.result.data || [];
          this.render();
        }
      });
    },

    fetchStorages: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/storage',
        method: 'GET',
        success: (response) => {
          State.storages = response.result.data || [];
          this.render();
        }
      });
    },

    fetchBackups: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/storage/local/content?content=backup',
        method: 'GET',
        success: (response) => {
          State.backups = response.result.data || [];
          this.render();
        }
      });
    },

    fetchNetworks: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/network',
        method: 'GET',
        success: (response) => {
          State.networks = response.result.data || [];
          this.render();
        }
      });
    },

    fetchFirewall: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/cluster/firewall/rules',
        method: 'GET',
        success: (response) => {
          State.firewallRules = response.result.data || [];
          this.render();
        }
      });
    },

    fetchTasks: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/cluster/tasks',
        method: 'GET',
        success: (response) => {
          State.tasks = (response.result.data || []).slice(0, 25);
          this.render();
        }
      });
    },

    updateBreadcrumbs: function () {
      const bc = document.getElementById('zes-breadcrumbs');
      if (!bc) return;

      if (State.currentView === 'servers') {
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Virtual Servers</span>
        `;
      } else if (State.currentView === 'server-detail') {
        const s = this.getActiveServer();
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-link" onclick="Zesium.navigateTo('server-detail', '${s ? s.id : ''}')">${s ? s.name : 'Server'}</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current" style="text-transform: capitalize;">${State.selectedTab}</span>
        `;
      } else {
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current" style="text-transform: capitalize;">${State.currentView.replace('-', ' ')}</span>
        `;
      }
    },

    // Render Active View
    render: function () {
      const container = document.getElementById('zes-main');
      if (!container) return;

      if (State.currentView === 'servers') {
        const hasServers = State.servers.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Virtual Servers</h1>
            <p class="zes-page-subtitle">Select virtual machines or containers to manage hardware, power, and console sessions</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search servers..." />
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="zes-btn-primary" onclick="Zesium.openCreateVMWizard()">
                + Create VM
              </button>
              <button class="zes-action-btn" onclick="Zesium.openCreateCTWizard()">
                + Create CT
              </button>
            </div>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th style="width: 40px;"><input type="checkbox" style="accent-color: #fff;" /></th>
                  <th>VMID ⇅</th>
                  <th>Server Name</th>
                  <th>Type</th>
                  <th>Node</th>
                  <th>State ⇅</th>
                  <th>Memory</th>
                  <th>CPU</th>
                  <th>Disk</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${hasServers ? State.servers.map(s => `
                  <tr style="cursor: pointer;" onclick="Zesium.navigateTo('server-detail', '${s.id}')">
                    <td onclick="event.stopPropagation()"><input type="checkbox" style="accent-color: #fff;" /></td>
                    <td style="font-family: monospace; font-weight: 700; color: #ffffff;">${s.vmid}</td>
                    <td>
                      <div style="font-weight: 600; color: #fff;">${s.name}</div>
                      <div style="font-size: 11px; color: #71717a;">${s.os}</div>
                    </td>
                    <td><span style="font-size: 11px; padding: 2px 6px; background: #27272a; border-radius: 4px; text-transform: uppercase;">${s.type}</span></td>
                    <td>${s.node}</td>
                    <td>
                      <span class="zes-status-dot ${s.state}"></span>
                      <span style="text-transform: capitalize; font-weight: 500;">${s.state}</span>
                    </td>
                    <td>${s.ram}</td>
                    <td>${s.vcpu}</td>
                    <td>${s.disk}</td>
                    <td>
                      <button class="zes-action-btn" style="padding: 4px 8px; font-size: 11px;" onclick="event.stopPropagation(); Zesium.openVNC('${s.id}')">
                        VNC
                      </button>
                    </td>
                  </tr>
                `).join('') : `
                  <tr>
                    <td colspan="10" style="text-align: center; padding: 70px 20px; color: #71717a;">
                      <div style="font-size: 15px; margin-bottom: 16px; color: #8e8e93;">No virtual machines or containers found on node pve.</div>
                      <div style="display: flex; gap: 12px; justify-content: center;">
                        <button class="zes-btn-primary" onclick="Zesium.openCreateVMWizard()">
                          + Create VM
                        </button>
                        <button class="zes-action-btn" onclick="Zesium.openCreateCTWizard()">
                          + Create CT
                        </button>
                      </div>
                    </td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'server-detail') {
        const s = this.getActiveServer();
        if (!s) {
          container.innerHTML = `<div style="padding: 50px; text-align: center; color: #71717a;">No server selected. <button class="zes-btn-primary" onclick="Zesium.navigateTo('servers')">Back to Servers</button></div>`;
          return;
        }

        const isRunning = s.state === 'running';

        container.innerHTML = `
          <div class="zes-server-header">
            <div class="zes-server-meta">
              <div class="zes-server-os-icon" style="background-color: #27272a; border: 1px solid #3f3f46; display: flex; align-items: center; justify-content: center;">
                ${s.type === 'lxc' ? Icons.container : Icons.server}
              </div>
              <div>
                <div class="zes-server-title-row">
                  <span class="zes-status-dot ${s.state}"></span>
                  <span class="zes-server-name">${s.name} (VMID: ${s.vmid})</span>
                </div>
                <div class="zes-server-specs-line">
                  <span>Type: <strong style="color: #d4d4d8; text-transform: uppercase;">${s.type}</strong></span>
                  <span>Node: <strong style="color: #d4d4d8;">${s.node}</strong></span>
                  <span>Uptime: ${s.uptime}</span>
                </div>
                <div style="margin-top: 6px; display: flex; gap: 8px; font-size: 12px; color: #a1a1aa;">
                  <span>${s.os}</span>
                  <span>•</span>
                  <span>${s.vcpu}</span>
                  <span>•</span>
                  <span>${s.ram}</span>
                  <span>•</span>
                  <span>${s.disk}</span>
                </div>
              </div>
            </div>

            <div class="zes-server-actions">
              <button class="zes-action-btn" onclick="Zesium.openVNC('${s.id}')">
                ${Icons.vnc} Console
              </button>
              <button class="zes-action-btn" onclick="Zesium.restartServer('${s.id}')">
                ${Icons.restart} Reboot
              </button>
              <button class="zes-action-btn ${isRunning ? 'btn-stop' : ''}" style="${!isRunning ? 'background-color: #10b981; border-color: #10b981;' : ''}" onclick="${isRunning ? 'Zesium.stopServer()' : 'Zesium.startServer()'}">
                ${isRunning ? `${Icons.stop} Stop` : `${Icons.start} Start`}
              </button>
              <button class="zes-action-btn" style="border-color: #ef4444; color: #ef4444;" onclick="Zesium.deleteServer('${s.id}')">
                ${Icons.deleteIcon} Destroy
              </button>
            </div>
          </div>

          <div class="zes-nav-tabs">
            <button class="zes-nav-tab ${State.selectedTab === 'summary' ? 'active' : ''}" onclick="Zesium.setServerTab('summary')">Summary</button>
            <button class="zes-nav-tab ${State.selectedTab === 'hardware' ? 'active' : ''}" onclick="Zesium.setServerTab('hardware')">Hardware</button>
            <button class="zes-nav-tab ${State.selectedTab === 'backup' ? 'active' : ''}" onclick="Zesium.setServerTab('backup')">Backup</button>
          </div>

          <div class="zes-cards-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">Assigned vCPU</div>
              <div style="font-size: 24px; font-weight: 700; color: #fff; margin: 8px 0;">${s.vcpu}</div>
              <div style="font-size: 11px; color: #71717a;">QEMU / KVM Host Scheduler</div>
            </div>
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">Memory Allocation</div>
              <div style="font-size: 24px; font-weight: 700; color: #fff; margin: 8px 0;">${s.ram}</div>
              <div style="font-size: 11px; color: #71717a;">Dedicated RAM Pool</div>
            </div>
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">Disk Size</div>
              <div style="font-size: 24px; font-weight: 700; color: #fff; margin: 8px 0;">${s.disk}</div>
              <div style="font-size: 11px; color: #71717a;">Storage on ${s.node}</div>
            </div>
          </div>
        `;
      } else if (State.currentView === 'isos') {
        const hasIsos = State.isos.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">ISO Images</h1>
            <p class="zes-page-subtitle">Upload and manage operating system installation media in storage 'local'</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search ISOs..." />
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="zes-btn-primary" onclick="Zesium.openUploadISOWindow()">
                ${Icons.upload} Upload ISO
              </button>
              <button class="zes-action-btn" onclick="Zesium.openDownloadUrlWindow()">
                ${Icons.download} Download from URL
              </button>
            </div>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Format</th>
                  <th>Size</th>
                  <th>Volid</th>
                </tr>
              </thead>
              <tbody>
                ${hasIsos ? State.isos.map(iso => `
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">${iso.volid.split('/').pop()}</td>
                    <td><span style="font-size: 11px; padding: 2px 6px; background: #27272a; border-radius: 4px;">${iso.format || 'iso'}</span></td>
                    <td>${(iso.size / (1024 * 1024 * 1024)).toFixed(2)} GB</td>
                    <td style="font-family: monospace; font-size: 11px; color: #71717a;">${iso.volid}</td>
                  </tr>
                `).join('') : `
                  <tr>
                    <td colspan="4" style="text-align: center; padding: 60px 20px; color: #71717a;">
                      <div style="font-size: 14px; margin-bottom: 12px; color: #a1a1aa;">No ISO images in storage 'local'.</div>
                      <div style="display: flex; gap: 10px; justify-content: center;">
                        <button class="zes-btn-primary" onclick="Zesium.openUploadISOWindow()">Upload ISO</button>
                        <button class="zes-action-btn" onclick="Zesium.openDownloadUrlWindow()">Download from URL</button>
                      </div>
                    </td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'storage') {
        const hasStorage = State.storages.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Storage Pools</h1>
            <p class="zes-page-subtitle">Configured disks, directory pools, and thin-provisioned LVM storage</p>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Storage ID</th>
                  <th>Type</th>
                  <th>Status</th>
                  <th>Content Types</th>
                  <th>Total Size</th>
                  <th>Available</th>
                  <th>Usage</th>
                </tr>
              </thead>
              <tbody>
                ${hasStorage ? State.storages.map(st => {
                  const totalGb = (st.total / (1024 * 1024 * 1024)).toFixed(1);
                  const availGb = (st.avail / (1024 * 1024 * 1024)).toFixed(1);
                  const pct = Math.round((st.used_fraction || 0) * 100);
                  return `
                    <tr>
                      <td style="font-weight: 700; color: #ffffff;">${st.storage}</td>
                      <td><span style="font-size: 11px; padding: 2px 6px; background: #27272a; border-radius: 4px;">${st.type}</span></td>
                      <td><span class="zes-status-dot ${st.active ? 'running' : 'stopped'}"></span> ${st.active ? 'Active' : 'Disabled'}</td>
                      <td style="font-size: 12px; color: #a1a1aa;">${st.content}</td>
                      <td>${totalGb} GB</td>
                      <td>${availGb} GB</td>
                      <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <div style="width: 80px; height: 6px; background: #27272a; border-radius: 99px; overflow: hidden;">
                            <div style="width: ${pct}%; height: 100%; background: ${pct > 85 ? '#ef4444' : '#10b981'};"></div>
                          </div>
                          <span style="font-size: 12px; font-weight: 500;">${pct}%</span>
                        </div>
                      </td>
                    </tr>
                  `;
                }).join('') : `
                  <tr><td colspan="7" style="text-align: center; padding: 40px; color: #71717a;">Loading storages...</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'backups') {
        const hasBackups = State.backups.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Backups</h1>
            <p class="zes-page-subtitle">VZDump backup archives stored in Proxmox storage</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search backups..." />
            </div>
            <button class="zes-btn-primary" onclick="Zesium.openBackupWindow()">
              + Create Backup
            </button>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Archive Name</th>
                  <th>Format</th>
                  <th>Size</th>
                  <th>Volid</th>
                </tr>
              </thead>
              <tbody>
                ${hasBackups ? State.backups.map(b => `
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">${b.volid.split('/').pop()}</td>
                    <td><span style="font-size: 11px; padding: 2px 6px; background: #27272a; border-radius: 4px;">${b.format}</span></td>
                    <td>${(b.size / (1024 * 1024 * 1024)).toFixed(2)} GB</td>
                    <td style="font-family: monospace; font-size: 11px; color: #71717a;">${b.volid}</td>
                  </tr>
                `).join('') : `
                  <tr>
                    <td colspan="4" style="text-align: center; padding: 60px 20px; color: #71717a;">
                      <div style="font-size: 14px; margin-bottom: 12px; color: #a1a1aa;">No backups stored in 'local'.</div>
                      <button class="zes-btn-primary" onclick="Zesium.openBackupWindow()">+ Create Backup</button>
                    </td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'network') {
        const hasNets = State.networks.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Network Bridges & Interfaces</h1>
            <p class="zes-page-subtitle">Physical network adapters, Linux bridges, and virtual switches</p>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Interface</th>
                  <th>Type</th>
                  <th>Active</th>
                  <th>CIDR Address</th>
                  <th>Gateway</th>
                  <th>Autostart</th>
                </tr>
              </thead>
              <tbody>
                ${hasNets ? State.networks.map(n => `
                  <tr>
                    <td style="font-weight: 700; color: #ffffff;">${n.iface}</td>
                    <td><span style="font-size: 11px; padding: 2px 6px; background: #27272a; border-radius: 4px; text-transform: uppercase;">${n.type}</span></td>
                    <td><span class="zes-status-dot ${n.active ? 'running' : 'stopped'}"></span> ${n.active ? 'Active' : 'Down'}</td>
                    <td style="font-family: monospace;">${n.cidr || n.address || '-'}</td>
                    <td style="font-family: monospace;">${n.gateway || '-'}</td>
                    <td>${n.autostart ? 'Yes' : 'No'}</td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="6" style="text-align: center; padding: 40px; color: #71717a;">Loading interfaces...</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'firewall') {
        const hasRules = State.firewallRules.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Cluster Firewall</h1>
            <p class="zes-page-subtitle">Packet filtering rules applied to VMs, containers, and node management interfaces</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search rules..." />
            </div>
            <button class="zes-btn-primary" onclick="Zesium.openAddFirewallRuleWindow()">
              + Add Rule
            </button>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Action</th>
                  <th>Direction</th>
                  <th>Protocol</th>
                  <th>Source</th>
                  <th>Dest</th>
                  <th>Port</th>
                </tr>
              </thead>
              <tbody>
                ${hasRules ? State.firewallRules.map(r => `
                  <tr>
                    <td style="font-family: monospace;">${r.pos}</td>
                    <td><span style="font-weight: 600; color: ${r.action === 'ACCEPT' ? '#10b981' : '#ef4444'};">${r.action}</span></td>
                    <td>${r.type}</td>
                    <td>${r.proto || 'any'}</td>
                    <td style="font-family: monospace;">${r.source || 'any'}</td>
                    <td style="font-family: monospace;">${r.dest || 'any'}</td>
                    <td style="font-family: monospace;">${r.dport || 'any'}</td>
                  </tr>
                `).join('') : `
                  <tr>
                    <td colspan="7" style="text-align: center; padding: 50px; color: #71717a;">
                      No cluster firewall rules defined. Click "+ Add Rule" to create one.
                    </td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'tasks') {
        const hasTasks = State.tasks.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Cluster Task Log</h1>
            <p class="zes-page-subtitle">Audit history of background operations, console sessions, and guest actions</p>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Start Time</th>
                  <th>Node</th>
                  <th>User</th>
                  <th>Task Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${hasTasks ? State.tasks.map(t => {
                  const dateStr = t.starttime ? new Date(t.starttime * 1000).toLocaleString() : '-';
                  const isOk = t.status === 'OK';
                  return `
                    <tr>
                      <td style="font-size: 12px; color: #d4d4d8;">${dateStr}</td>
                      <td>${t.node}</td>
                      <td style="font-family: monospace; font-size: 12px;">${t.user}</td>
                      <td><span style="font-size: 11px; padding: 2px 6px; background: #27272a; border-radius: 4px; font-weight: 600;">${t.type}</span></td>
                      <td>
                        <span class="zes-status-dot ${isOk ? 'running' : 'stopped'}"></span>
                        <span style="color: ${isOk ? '#10b981' : '#ef4444'}; font-weight: 500;">${t.status}</span>
                      </td>
                    </tr>
                  `;
                }).join('') : `
                  <tr><td colspan="5" style="text-align: center; padding: 40px; color: #71717a;">Loading tasks...</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      }
    },

    // Clean Login Screen (No Emojis, No Fake Services, © Zesium)
    mountLoginScreen: function () {
      const existing = document.getElementById('zesium-login-wrapper');
      if (existing) return;

      const wrap = document.createElement('div');
      wrap.id = 'zesium-login-wrapper';
      wrap.className = 'zes-login-wrapper';
      wrap.innerHTML = `
        <div class="zes-login-left">
          <div class="zes-login-brand">
            <div class="zes-login-brand-left">
              <img src="/pve2/images/zesium/logo.svg" class="zes-login-brand-logo" alt="Zesium Logo" />
              <div>
                <span class="zes-login-brand-title">Zesium</span>
                <span style="display: block; font-size: 11px; color: #71717a; font-weight: 500;">Proxmox Manager</span>
              </div>
            </div>
          </div>

          <div class="zes-login-center">
            <div class="zes-alert-warning" style="margin-bottom: 24px; font-size: 12px;">
              <span>•</span>
              <div>
                Admin access only. Unauthorized access is strictly prohibited.
              </div>
            </div>

            <h1 class="zes-login-heading">Welcome back</h1>
            <p class="zes-login-subheading">Sign in with your server credentials to access Proxmox VE.</p>

            <form id="zes-login-form" onsubmit="event.preventDefault(); Zesium.handleLogin();">
              <div class="zes-login-form-group">
                <label class="zes-login-label">Username</label>
                <input type="text" id="zes-login-username" class="zes-login-input" value="root" placeholder="root" required autocomplete="username" />
              </div>

              <div class="zes-login-form-group">
                <label class="zes-login-label">Password</label>
                <input type="password" id="zes-login-password" class="zes-login-input" placeholder="Password" required autocomplete="current-password" autofocus />
              </div>

              <div class="zes-login-form-group">
                <label class="zes-login-label">Realm</label>
                <select id="zes-login-realm" class="zes-login-input" style="background-color: #18181b;">
                  <option value="pam" selected>Linux PAM standard authentication</option>
                  <option value="pve">Proxmox VE authentication server</option>
                </select>
              </div>

              <div id="zes-login-error" style="display: none; color: #ef4444; font-size: 13px; margin-bottom: 12px;"></div>

              <button type="submit" id="zes-login-submit-btn" class="zes-login-btn-submit">
                Sign in
              </button>
            </form>
          </div>

          <div class="zes-login-footer">
            <span>© Zesium. All rights reserved.</span>
          </div>
        </div>

        <div class="zes-login-right">
          <div class="zes-login-hero-text">
            <h2 class="zes-login-hero-title">Zesium Proxmox.</h2>
            <p class="zes-login-hero-desc">High-performance hypervisor management and bare-metal orchestration powered by Proxmox VE.</p>
          </div>
        </div>
      `;

      document.body.appendChild(wrap);
    },

    handleLogin: function () {
      const u = document.getElementById('zes-login-username').value.trim();
      const p = document.getElementById('zes-login-password').value;
      const r = document.getElementById('zes-login-realm').value;
      const errBox = document.getElementById('zes-login-error');
      const btn = document.getElementById('zes-login-submit-btn');

      btn.disabled = true;
      btn.innerText = 'Signing in...';
      if (errBox) errBox.style.display = 'none';

      let username = u;
      let realm = r;

      if (username.includes('@')) {
        const parts = username.split('@');
        username = parts[0];
        realm = parts[1] || realm;
      }

      const params = new URLSearchParams();
      params.append('username', username);
      params.append('password', p);
      params.append('realm', realm);
      params.append('new-format', '1');

      fetch('/api2/extjs/access/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      })
      .then(res => res.json())
      .then(data => {
        const auth = (data && data.data) ? data.data : data;
        if (auth && auth.ticket) {
          if (window.Proxmox && Proxmox.Utils && Proxmox.Utils.setAuthData) {
            Proxmox.Utils.setAuthData(auth);
          }
          if (window.Ext && Ext.util && Ext.util.Cookies) {
            Ext.util.Cookies.set('PVEAuthCookie', auth.ticket, null, '/', null, true, 'lax');
          }
          document.cookie = `PVEAuthCookie=${auth.ticket}; path=/; secure; samesite=lax`;

          try {
            window.localStorage.setItem('ProxmoxUser', JSON.stringify(auth));
          } catch (e) {}

          window.location.reload();
        } else {
          btn.disabled = false;
          btn.innerText = 'Sign in';
          if (errBox) {
            const msg = data.errors ? Object.values(data.errors).join(', ') : (data.message || 'Login failed. Please check credentials.');
            errBox.innerText = msg;
            errBox.style.display = 'block';
          }
        }
      })
      .catch(err => {
        btn.disabled = false;
        btn.innerText = 'Sign in';
        if (errBox) {
          errBox.innerText = 'Connection error. Please try again.';
          errBox.style.display = 'block';
        }
      });
    },

    // Mount Main App Shell
    mountApp: function () {
      const existing = document.getElementById('zesium-app');
      if (existing) return;

      document.body.classList.add('zesium-active');

      const fullUser = (window.Proxmox && Proxmox.UserName) ? Proxmox.UserName : 'root@pam';
      const nodeName = (window.Proxmox && Proxmox.NodeName) ? Proxmox.NodeName : 'pve';
      const usernameOnly = fullUser.split('@')[0];
      const initials = usernameOnly.slice(0, 2).toUpperCase();

      const app = document.createElement('div');
      app.id = 'zesium-app';
      app.innerHTML = `
        <!-- Left Slim Rail (56px) -->
        <div id="zes-rail">
          <div class="zes-rail-logo" title="Zesium - Proxmox Manager" onclick="Zesium.navigateTo('servers')">
            <img src="/pve2/images/zesium/logo.svg" alt="Zesium Logo" />
          </div>

          <div class="zes-rail-nav">
            <button class="zes-rail-btn active" title="Virtual Servers" onclick="Zesium.navigateTo('servers')">
              ${Icons.server}
              <span>Servers</span>
            </button>
            <button class="zes-rail-btn" title="ISO Images" onclick="Zesium.navigateTo('isos')">
              ${Icons.iso}
              <span>ISOs</span>
            </button>
            <button class="zes-rail-btn" title="Storage Pools" onclick="Zesium.navigateTo('storage')">
              ${Icons.storage}
              <span>Storage</span>
            </button>
            <button class="zes-rail-btn" title="Networking" onclick="Zesium.navigateTo('network')">
              ${Icons.network}
              <span>Network</span>
            </button>
            <button class="zes-rail-btn" title="Firewall" onclick="Zesium.navigateTo('firewall')">
              ${Icons.firewall}
              <span>Firewall</span>
            </button>
            <button class="zes-rail-btn" title="Node Shell" onclick="Zesium.openNodeShell()">
              ${Icons.shell}
              <span>Shell</span>
            </button>
          </div>
        </div>

        <!-- Main Navigation Sidebar (240px) -->
        <div id="zes-sidebar">
          <div class="zes-sidebar-header">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
              <span style="font-size: 16px; font-weight: 700; color: #ffffff; letter-spacing: -0.01em;">Zesium</span>
              <span style="font-size: 12px; color: #71717a; font-weight: 500;">Proxmox Manager</span>
            </div>
            <div class="zes-team-selector" onclick="Zesium.navigateTo('servers')">
              <div class="zes-team-avatar">
                ${Icons.cluster}
              </div>
              <div class="zes-team-info">
                <div class="zes-team-name">Node: ${nodeName}</div>
                <div class="zes-team-role">Cluster Management</div>
              </div>
            </div>
          </div>

          <div class="zes-sidebar-menu">
            <!-- Virtual Guests -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">Virtual Guests</div>
              <a class="zes-menu-item active" data-view="servers" onclick="Zesium.navigateTo('servers')">
                ${Icons.server}
                <span>Virtual Servers</span>
              </a>
            </div>

            <!-- Storage & Media -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">Storage & Media</div>
              <a class="zes-menu-item" data-view="isos" onclick="Zesium.navigateTo('isos')">
                ${Icons.iso}
                <span>ISO Images</span>
              </a>
              <a class="zes-menu-item" data-view="storage" onclick="Zesium.navigateTo('storage')">
                ${Icons.storage}
                <span>Storage Pools</span>
              </a>
              <a class="zes-menu-item" data-view="backups" onclick="Zesium.navigateTo('backups')">
                ${Icons.backup}
                <span>Backups</span>
              </a>
            </div>

            <!-- Networking & Security -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">Network & Security</div>
              <a class="zes-menu-item" data-view="network" onclick="Zesium.navigateTo('network')">
                ${Icons.network}
                <span>Network Bridges</span>
              </a>
              <a class="zes-menu-item" data-view="firewall" onclick="Zesium.navigateTo('firewall')">
                ${Icons.firewall}
                <span>Firewall</span>
              </a>
            </div>

            <!-- System Administration -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">System</div>
              <a class="zes-menu-item" data-view="shell" onclick="Zesium.openNodeShell()">
                ${Icons.shell}
                <span>Node Shell</span>
              </a>
              <a class="zes-menu-item" data-view="tasks" onclick="Zesium.navigateTo('tasks')">
                ${Icons.tasks}
                <span>Cluster Task Log</span>
              </a>
            </div>
          </div>

          <!-- Bottom Profile Card & Copyright (Zesium) -->
          <div class="zes-sidebar-footer">
            <div class="zes-user-card" onclick="Zesium.logout()" title="Click to Sign out">
              <div class="zes-user-badge">${initials}</div>
              <div class="zes-user-details">
                <div class="zes-user-name">${usernameOnly}</div>
                <div class="zes-user-email">${fullUser}</div>
              </div>
              <div class="zes-user-chevron" title="Sign out">
                ${Icons.logout}
              </div>
            </div>
            <div style="text-align: center; padding-top: 10px; font-size: 11px; color: #52525b; letter-spacing: 0.02em;">
              © Zesium
            </div>
          </div>
        </div>

        <!-- Content Area -->
        <div id="zes-content-wrapper">
          <!-- Top Bar -->
          <div id="zes-topbar">
            <div id="zes-breadcrumbs" class="zes-breadcrumbs">
              <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
              <span class="crumb-sep">›</span>
              <span class="crumb-current">Virtual Servers</span>
            </div>

            <div class="zes-topbar-right">
              <div style="font-size: 12px; color: #a1a1aa; display: flex; align-items: center; gap: 8px;">
                <span class="zes-status-dot running"></span>
                <span style="font-weight: 600; color: #ffffff;">Node: ${nodeName}</span>
                <span style="color: #52525b;">•</span>
                <span style="color: #a1a1aa;">${fullUser}</span>
              </div>

              <button class="zes-topbar-btn" onclick="Zesium.toggleNativeView()">
                Proxmox Native View ↗
              </button>

              <button class="zes-topbar-btn" onclick="Zesium.logout()" title="Sign out">
                ${Icons.logout} Sign out
              </button>
            </div>
          </div>

          <!-- Main View Body -->
          <div id="zes-main"></div>
        </div>
      `;

      document.body.appendChild(app);

      this.render();
      this.fetchLiveServers();
    }
  };

  // Bootstrap Controller
  function init() {
    suppressNag();

    const isAuth = window.Proxmox && Proxmox.Utils && Proxmox.Utils.authOK && Proxmox.Utils.authOK();

    if (!isAuth) {
      document.body.classList.remove('zesium-active');
      Zesium.mountLoginScreen();
    } else {
      const login = document.getElementById('zesium-login-wrapper');
      if (login) login.remove();
      Zesium.mountApp();
    }
  }

  if (typeof Ext !== 'undefined') {
    Ext.onReady(init);
  } else {
    document.addEventListener('DOMContentLoaded', init);
  }
})();
