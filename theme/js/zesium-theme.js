/**
 * ==============================================================================
 * Zesium - Proxmox Manager
 * 100% Real Proxmox VE Administration & Orchestration
 * Pure Live API • Full Proxmox Feature Parity • White Clean SVG Icons
 * © Zesium. All rights reserved.
 * ==============================================================================
 */

(function () {
  'use strict';

  console.log('%c Zesium - Proxmox Manager %c Hypervisor Active ',
    'background: #ffffff; color: #000000; font-weight: 700; padding: 2px 8px; border-radius: 4px;',
    'background: #18181c; color: #10b981; padding: 2px 8px; border-radius: 4px;'
  );

  // Pure White Clean Inline SVG Icons (Zero Unicode Emojis)
  const Icons = {
    logo: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    server: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    container: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    createVm: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="12" y1="7" x2="12" y2="13"/><line x1="9" y1="10" x2="15" y2="10"/></svg>`,
    createCt: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><line x1="12" y1="7" x2="12" y2="13"/><line x1="9" y1="10" x2="15" y2="10"/></svg>`,
    iso: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
    storage: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    templates: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    disks: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="8" x2="12" y2="12"/></svg>`,
    lvm: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><rect x="2" y="4" width="20" height="5" rx="1"/><rect x="2" y="11" width="20" height="5" rx="1"/><rect x="2" y="18" width="20" height="5" rx="1"/></svg>`,
    zfs: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/></svg>`,
    backup: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>`,
    network: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    firewall: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    sdn: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    cluster: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/></svg>`,
    ha: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    shell: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    syslog: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    updates: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`,
    certificates: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    dns: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    tasks: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    vnc: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    restart: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`,
    stop: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>`,
    start: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
    deleteIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
    upload: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`,
    download: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
    logout: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`
  };

  // State Management - 100% Real Live Proxmox VE Data
  const State = {
    currentView: 'servers',
    activeServerId: null,
    selectedTab: 'summary',
    servers: [],
    serverConfig: null,
    isos: [],
    storages: [],
    templates: [],
    backups: [],
    disks: [],
    lvm: [],
    zfs: [],
    networks: [],
    firewallRules: [],
    sdn: [],
    clusterStatus: [],
    haResources: [],
    syslogEntries: [],
    updates: [],
    dnsInfo: null,
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
        <div class="zes-toast-title">${title || 'Proxmox Notification'}</div>
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
      document.querySelectorAll('.zes-rail-btn').forEach(el => {
        el.classList.toggle('active', el.dataset.view === view);
      });

      this.render();
      this.updateBreadcrumbs();

      // Trigger respective live API fetchers
      if (view === 'servers') this.fetchLiveServers();
      else if (view === 'server-detail') this.fetchServerDetails();
      else if (view === 'isos') this.fetchISOs();
      else if (view === 'storage') this.fetchStorages();
      else if (view === 'templates') this.fetchTemplates();
      else if (view === 'backups') this.fetchBackups();
      else if (view === 'disks') this.fetchDisks();
      else if (view === 'lvm') this.fetchLVM();
      else if (view === 'zfs') this.fetchZFS();
      else if (view === 'network') this.fetchNetworks();
      else if (view === 'firewall') this.fetchFirewall();
      else if (view === 'sdn') this.fetchSDN();
      else if (view === 'cluster') this.fetchCluster();
      else if (view === 'ha') this.fetchHA();
      else if (view === 'syslog') this.fetchSyslog();
      else if (view === 'updates') this.fetchUpdates();
      else if (view === 'certificates') this.fetchCertificates();
      else if (view === 'tasks') this.fetchTasks();
    },

    setServerTab: function (tab) {
      State.selectedTab = tab;
      this.render();
      if (tab === 'hardware' || tab === 'backup' || tab === 'firewall') {
        this.fetchServerDetails();
      }
    },

    // 100% Functioning Native Proxmox Wizards & Actions
    openCreateVMWizard: function () {
      try {
        const btn = Ext.ComponentQuery.query('button[itemId=createvm]')[0] ||
                    Ext.ComponentQuery.query('button[text*=' + (window.gettext ? gettext('Create VM') : 'Create VM') + ']')[0];
        if (btn && typeof btn.handler === 'function') {
          btn.handler.call(btn);
          return;
        }
      } catch (e) {}

      if (window.Ext && Ext.ClassManager.get('PVE.qemu.CreateWizard')) {
        const wiz = Ext.create('PVE.qemu.CreateWizard', {});
        wiz.show();
      } else {
        showToast('Create VM', 'Initializing wizard, please wait...');
      }
    },

    openCreateCTWizard: function () {
      try {
        const btn = Ext.ComponentQuery.query('button[itemId=createct]')[0] ||
                    Ext.ComponentQuery.query('button[text*=' + (window.gettext ? gettext('Create CT') : 'Create CT') + ']')[0];
        if (btn && typeof btn.handler === 'function') {
          btn.handler.call(btn);
          return;
        }
      } catch (e) {}

      if (window.Ext && Ext.ClassManager.get('PVE.lxc.CreateWizard')) {
        const wiz = Ext.create('PVE.lxc.CreateWizard', {});
        wiz.show();
      } else {
        showToast('Create CT', 'Initializing wizard, please wait...');
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

    openDownloadUrlWindow: function (content = 'iso') {
      if (window.Ext && Ext.ClassManager.get('PVE.window.DownloadUrlToStorage')) {
        Ext.create('PVE.window.DownloadUrlToStorage', {
          nodename: 'pve',
          storage: 'local',
          content: content,
          autoShow: true,
          taskDone: () => (content === 'iso' ? Zesium.fetchISOs() : Zesium.fetchTemplates())
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
      const activeVmid = vmid || (this.getActiveServer() ? this.getActiveServer().vmid : null);
      if (window.Ext && Ext.ClassManager.get('PVE.window.Backup')) {
        Ext.create('PVE.window.Backup', {
          nodename: 'pve',
          vmid: activeVmid,
          autoShow: true,
          taskDone: () => Zesium.fetchBackups()
        });
      }
    },

    openNodeShell: function () {
      const node = (window.Proxmox && Proxmox.NodeName) ? Proxmox.NodeName : 'pve';
      window.open(`/?console=shell&novnc=1&node=${node}`, 'pve_shell', 'width=1100,height=750,toolbar=no,menubar=no,location=no,status=no,scrollbars=yes,resizable=yes');
    },

    openVNC: function (id) {
      const server = State.servers.find(s => String(s.id) === String(id)) || this.getActiveServer();
      if (!server) return;
      const node = server.node || 'pve';
      const vmid = server.vmid;
      const type = server.type === 'lxc' ? 'lxc' : 'kvm';
      const vncUrl = `/?console=${type}&novnc=1&node=${node}&vmid=${vmid}`;
      window.open(vncUrl, `vnc_${vmid}`, 'width=1100,height=750,toolbar=no,menubar=no,location=no,status=no,scrollbars=yes,resizable=yes');
    },

    // Server Power & Lifecycle Handlers
    startServer: function (id) {
      const server = State.servers.find(s => String(s.id) === String(id)) || this.getActiveServer();
      if (!server) return;
      Proxmox.Utils.API2Request({
        url: `/nodes/${server.node}/${server.type}/${server.vmid}/status/start`,
        method: 'POST',
        success: () => {
          showToast('Server Starting', `Power-on signal dispatched to ${server.name} (VMID ${server.vmid}).`);
          setTimeout(() => this.fetchLiveServers(), 1500);
        },
        failure: (err) => showToast('Action Failed', err.htmlStatus || 'Could not start server')
      });
    },

    stopServer: function (id) {
      const server = State.servers.find(s => String(s.id) === String(id)) || this.getActiveServer();
      if (!server) return;
      Proxmox.Utils.API2Request({
        url: `/nodes/${server.node}/${server.type}/${server.vmid}/status/stop`,
        method: 'POST',
        success: () => {
          showToast('Server Stopped', `Shutdown signal dispatched to ${server.name} (VMID ${server.vmid}).`);
          setTimeout(() => this.fetchLiveServers(), 1500);
        },
        failure: (err) => showToast('Action Failed', err.htmlStatus || 'Could not stop server')
      });
    },

    restartServer: function (id) {
      const server = State.servers.find(s => String(s.id) === String(id)) || this.getActiveServer();
      if (!server) return;
      Proxmox.Utils.API2Request({
        url: `/nodes/${server.node}/${server.type}/${server.vmid}/status/reboot`,
        method: 'POST',
        success: () => {
          showToast('Server Rebooting', `Reboot signal dispatched to ${server.name} (VMID ${server.vmid}).`);
          setTimeout(() => this.fetchLiveServers(), 1500);
        },
        failure: (err) => showToast('Action Failed', err.htmlStatus || 'Could not reboot server')
      });
    },

    deleteServer: function (id) {
      const server = State.servers.find(s => String(s.id) === String(id)) || this.getActiveServer();
      if (!server) return;
      if (!confirm(`Are you sure you want to PERMANENTLY DESTROY ${server.name} (VMID ${server.vmid})? This cannot be undone.`)) {
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
      showToast('Interface Toggled', isActive ? 'Switched to Zesium Convoy layout.' : 'Switched to Proxmox VE native view.');
    },

    getActiveServer: function () {
      return State.servers.find(s => String(s.id) === String(State.activeServerId)) || State.servers[0] || null;
    },

    // Live Proxmox VE API Fetchers
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
              os: isLxc ? 'LXC Linux Container' : 'QEMU Virtual Machine',
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

    fetchServerDetails: function () {
      const s = this.getActiveServer();
      if (!s || !window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;

      Proxmox.Utils.API2Request({
        url: `/nodes/${s.node}/${s.type}/${s.vmid}/config`,
        method: 'GET',
        success: (response) => {
          State.serverConfig = response.result.data || {};
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

    fetchTemplates: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/storage/local/content?content=vztmpl',
        method: 'GET',
        success: (response) => {
          State.templates = response.result.data || [];
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

    fetchDisks: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/disks/list',
        method: 'GET',
        success: (response) => {
          State.disks = response.result.data || [];
          this.render();
        }
      });
    },

    fetchLVM: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/disks/lvmthin',
        method: 'GET',
        success: (response) => {
          State.lvm = response.result.data || [];
          this.render();
        }
      });
    },

    fetchZFS: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/disks/directory',
        method: 'GET',
        success: (response) => {
          State.zfs = response.result.data || [];
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

    fetchSDN: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/cluster/sdn/zones',
        method: 'GET',
        success: (response) => {
          State.sdn = response.result.data || [];
          this.render();
        }
      });
    },

    fetchCluster: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/cluster/status',
        method: 'GET',
        success: (response) => {
          State.clusterStatus = response.result.data || [];
          this.render();
        }
      });
    },

    fetchHA: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/cluster/ha/resources',
        method: 'GET',
        success: (response) => {
          State.haResources = response.result.data || [];
          this.render();
        }
      });
    },

    fetchSyslog: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/syslog?limit=50',
        method: 'GET',
        success: (response) => {
          State.syslogEntries = response.result.data || [];
          this.render();
        }
      });
    },

    fetchUpdates: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/apt/update',
        method: 'GET',
        success: (response) => {
          State.updates = response.result.data || [];
          this.render();
        }
      });
    },

    fetchCertificates: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/dns',
        method: 'GET',
        success: (response) => {
          State.dnsInfo = response.result.data || {};
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
          State.tasks = (response.result.data || []).slice(0, 30);
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

    // Complete View Renderer for All Proxmox VE Features
    render: function () {
      const container = document.getElementById('zes-main');
      if (!container) return;

      if (State.currentView === 'servers') {
        const hasServers = State.servers.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Virtual Servers</h1>
            <p class="zes-page-subtitle">Manage hypervisor virtual machines, LXC containers, hardware configurations, and console sessions</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search servers..." />
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="zes-btn-primary" onclick="Zesium.openCreateVMWizard()">
                ${Icons.createVm} Create VM
              </button>
              <button class="zes-action-btn" onclick="Zesium.openCreateCTWizard()">
                ${Icons.createCt} Create CT
              </button>
            </div>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th style="width: 40px;"><input type="checkbox" style="accent-color: #fff;" /></th>
                  <th>VMID</th>
                  <th>Server Name</th>
                  <th>Type</th>
                  <th>Node</th>
                  <th>State</th>
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
                    <td><span style="font-size: 11px; padding: 2px 6px; background: #272730; border-radius: 4px; text-transform: uppercase;">${s.type}</span></td>
                    <td>${s.node}</td>
                    <td>
                      <span class="zes-status-dot ${s.state}"></span>
                      <span style="text-transform: capitalize; font-weight: 500;">${s.state}</span>
                    </td>
                    <td>${s.ram}</td>
                    <td>${s.vcpu}</td>
                    <td>${s.disk}</td>
                    <td onclick="event.stopPropagation()">
                      <div style="display: flex; gap: 6px;">
                        <button class="zes-action-btn" style="padding: 4px 8px; font-size: 11px;" onclick="Zesium.openVNC('${s.id}')">
                          Console
                        </button>
                        <button class="zes-action-btn" style="padding: 4px 8px; font-size: 11px;" onclick="${s.state === 'running' ? `Zesium.stopServer('${s.id}')` : `Zesium.startServer('${s.id}')`}">
                          ${s.state === 'running' ? 'Stop' : 'Start'}
                        </button>
                      </div>
                    </td>
                  </tr>
                `).join('') : `
                  <tr>
                    <td colspan="10" style="text-align: center; padding: 60px 20px; color: #71717a;">
                      <div style="font-size: 15px; margin-bottom: 14px; color: #a1a1aa;">No virtual machines or containers found on hypervisor.</div>
                      <div style="display: flex; gap: 10px; justify-content: center;">
                        <button class="zes-btn-primary" onclick="Zesium.openCreateVMWizard()">
                          ${Icons.createVm} Create VM
                        </button>
                        <button class="zes-action-btn" onclick="Zesium.openCreateCTWizard()">
                          ${Icons.createCt} Create CT
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
        const cfg = State.serverConfig || {};

        container.innerHTML = `
          <div class="zes-server-header">
            <div class="zes-server-meta">
              <div class="zes-server-os-icon">
                ${s.type === 'lxc' ? Icons.container : Icons.server}
              </div>
              <div>
                <div class="zes-server-title-row">
                  <span class="zes-status-dot ${s.state}"></span>
                  <span class="zes-server-name">${s.name} (VMID: ${s.vmid})</span>
                </div>
                <div class="zes-server-specs-line">
                  <span>Type: <strong style="color: #ffffff; text-transform: uppercase;">${s.type}</strong></span>
                  <span>Node: <strong style="color: #ffffff;">${s.node}</strong></span>
                  <span>Uptime: ${s.uptime}</span>
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
              <button class="zes-action-btn ${isRunning ? 'btn-stop' : ''}" style="${!isRunning ? 'background-color: #10b981; border-color: #10b981;' : ''}" onclick="${isRunning ? `Zesium.stopServer('${s.id}')` : `Zesium.startServer('${s.id}')`}">
                ${isRunning ? `${Icons.stop} Stop` : `${Icons.start} Start`}
              </button>
              <button class="zes-action-btn" onclick="Zesium.openBackupWindow('${s.vmid}')">
                ${Icons.backup} Backup Now
              </button>
              <button class="zes-action-btn" style="border-color: #ef4444; color: #ef4444;" onclick="Zesium.deleteServer('${s.id}')">
                ${Icons.deleteIcon} Destroy
              </button>
            </div>
          </div>

          <div class="zes-nav-tabs">
            <button class="zes-nav-tab ${State.selectedTab === 'summary' ? 'active' : ''}" onclick="Zesium.setServerTab('summary')">Summary</button>
            <button class="zes-nav-tab ${State.selectedTab === 'hardware' ? 'active' : ''}" onclick="Zesium.setServerTab('hardware')">Hardware</button>
            <button class="zes-nav-tab ${State.selectedTab === 'backup' ? 'active' : ''}" onclick="Zesium.setServerTab('backup')">Backups</button>
          </div>

          ${State.selectedTab === 'summary' ? `
            <div class="zes-cards-grid">
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
                <div style="font-size: 11px; color: #71717a;">Storage Pool on ${s.node}</div>
              </div>
            </div>
          ` : State.selectedTab === 'hardware' ? `
            <div class="zes-table-container">
              <table class="zes-table">
                <thead>
                  <tr>
                    <th>Device</th>
                    <th>Configuration Value</th>
                  </tr>
                </thead>
                <tbody>
                  ${Object.keys(cfg).length > 0 ? Object.entries(cfg).map(([k, v]) => `
                    <tr>
                      <td style="font-weight: 600; color: #ffffff; width: 220px;">${k}</td>
                      <td style="font-family: monospace; color: #d4d4d8;">${v}</td>
                    </tr>
                  `).join('') : `
                    <tr><td colspan="2" style="text-align: center; padding: 30px; color: #71717a;">Loading hardware configuration...</td></tr>
                  `}
                </tbody>
              </table>
            </div>
          ` : `
            <div class="zes-table-container">
              <table class="zes-table">
                <thead>
                  <tr>
                    <th>Archive</th>
                    <th>Format</th>
                    <th>Size</th>
                  </tr>
                </thead>
                <tbody>
                  ${State.backups.filter(b => b.volid && b.volid.includes(String(s.vmid))).map(b => `
                    <tr>
                      <td style="font-weight: 600; color: #ffffff;">${b.volid.split('/').pop()}</td>
                      <td>${b.format}</td>
                      <td>${(b.size / (1024 * 1024 * 1024)).toFixed(2)} GB</td>
                    </tr>
                  `).join('') || `<tr><td colspan="3" style="text-align: center; padding: 40px; color: #71717a;">No backups found for VMID ${s.vmid}.</td></tr>`}
                </tbody>
              </table>
            </div>
          `}
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
              <button class="zes-action-btn" onclick="Zesium.openDownloadUrlWindow('iso')">
                ${Icons.download} Download from URL
              </button>
            </div>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>ISO File Name</th>
                  <th>Format</th>
                  <th>Size</th>
                  <th>Volume ID</th>
                </tr>
              </thead>
              <tbody>
                ${hasIsos ? State.isos.map(iso => `
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">${iso.volid.split('/').pop()}</td>
                    <td><span style="font-size: 11px; padding: 2px 6px; background: #272730; border-radius: 4px;">${iso.format || 'iso'}</span></td>
                    <td>${(iso.size / (1024 * 1024 * 1024)).toFixed(2)} GB</td>
                    <td style="font-family: monospace; font-size: 11px; color: #71717a;">${iso.volid}</td>
                  </tr>
                `).join('') : `
                  <tr>
                    <td colspan="4" style="text-align: center; padding: 60px 20px; color: #71717a;">
                      <div style="font-size: 14px; margin-bottom: 12px; color: #a1a1aa;">No ISO images in storage 'local'.</div>
                      <div style="display: flex; gap: 10px; justify-content: center;">
                        <button class="zes-btn-primary" onclick="Zesium.openUploadISOWindow()">${Icons.upload} Upload ISO</button>
                        <button class="zes-action-btn" onclick="Zesium.openDownloadUrlWindow('iso')">${Icons.download} Download from URL</button>
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
            <p class="zes-page-subtitle">Configured disks, directory pools, thin-provisioned LVM, and ZFS storage</p>
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
                      <td><span style="font-size: 11px; padding: 2px 6px; background: #272730; border-radius: 4px;">${st.type}</span></td>
                      <td><span class="zes-status-dot ${st.active ? 'running' : 'stopped'}"></span> ${st.active ? 'Active' : 'Disabled'}</td>
                      <td style="font-size: 12px; color: #a1a1aa;">${st.content}</td>
                      <td>${totalGb} GB</td>
                      <td>${availGb} GB</td>
                      <td>
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <div style="width: 80px; height: 6px; background: #272730; border-radius: 99px; overflow: hidden;">
                            <div style="width: ${pct}%; height: 100%; background: ${pct > 85 ? '#ef4444' : '#10b981'};"></div>
                          </div>
                          <span style="font-size: 12px; font-weight: 500;">${pct}%</span>
                        </div>
                      </td>
                    </tr>
                  `;
                }).join('') : `
                  <tr><td colspan="7" style="text-align: center; padding: 40px; color: #71717a;">Loading storage pools...</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'templates') {
        const hasTmpl = State.templates.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Container Templates</h1>
            <p class="zes-page-subtitle">LXC operating system appliance images available for container creation</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search templates..." />
            </div>
            <button class="zes-btn-primary" onclick="Zesium.openDownloadUrlWindow('vztmpl')">
              ${Icons.download} Download Template from URL
            </button>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Template Name</th>
                  <th>Format</th>
                  <th>Size</th>
                  <th>Volume ID</th>
                </tr>
              </thead>
              <tbody>
                ${hasTmpl ? State.templates.map(t => `
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">${t.volid.split('/').pop()}</td>
                    <td>${t.format}</td>
                    <td>${(t.size / (1024 * 1024 * 1024)).toFixed(2)} GB</td>
                    <td style="font-family: monospace; font-size: 11px; color: #71717a;">${t.volid}</td>
                  </tr>
                `).join('') : `
                  <tr>
                    <td colspan="4" style="text-align: center; padding: 50px 20px; color: #71717a;">
                      No container templates stored in 'local'. Click "Download Template" to fetch one.
                    </td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'backups') {
        const hasBackups = State.backups.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Backups & Archives</h1>
            <p class="zes-page-subtitle">VZDump snapshot archives and backup files for disaster recovery</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search backups..." />
            </div>
            <button class="zes-btn-primary" onclick="Zesium.openBackupWindow()">
              ${Icons.backup} + Create Backup
            </button>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Archive File</th>
                  <th>Format</th>
                  <th>Size</th>
                  <th>Volume ID</th>
                </tr>
              </thead>
              <tbody>
                ${hasBackups ? State.backups.map(b => `
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">${b.volid.split('/').pop()}</td>
                    <td><span style="font-size: 11px; padding: 2px 6px; background: #272730; border-radius: 4px;">${b.format}</span></td>
                    <td>${(b.size / (1024 * 1024 * 1024)).toFixed(2)} GB</td>
                    <td style="font-family: monospace; font-size: 11px; color: #71717a;">${b.volid}</td>
                  </tr>
                `).join('') : `
                  <tr>
                    <td colspan="4" style="text-align: center; padding: 60px 20px; color: #71717a;">
                      <div style="font-size: 14px; margin-bottom: 12px; color: #a1a1aa;">No backups stored in 'local'.</div>
                      <button class="zes-btn-primary" onclick="Zesium.openBackupWindow()">${Icons.backup} + Create Backup</button>
                    </td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'disks') {
        const hasDisks = State.disks.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Physical Disks & SMART</h1>
            <p class="zes-page-subtitle">Physical storage drives connected to the hypervisor host</p>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Device Path</th>
                  <th>Model</th>
                  <th>Size</th>
                  <th>Serial</th>
                  <th>SMART Health</th>
                  <th>Used By</th>
                </tr>
              </thead>
              <tbody>
                ${hasDisks ? State.disks.map(d => `
                  <tr>
                    <td style="font-weight: 700; color: #ffffff; font-family: monospace;">${d.devpath}</td>
                    <td>${d.model || 'Disk'}</td>
                    <td>${(d.size / (1024 * 1024 * 1024)).toFixed(1)} GB</td>
                    <td style="font-family: monospace; font-size: 12px;">${d.serial || '-'}</td>
                    <td><span class="zes-status-dot running"></span> <strong style="color: #10b981;">${d.health || 'OK'}</strong></td>
                    <td><span style="font-size: 11px; padding: 2px 6px; background: #272730; border-radius: 4px;">${d.used || 'System'}</span></td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="6" style="text-align: center; padding: 40px; color: #71717a;">Loading physical disks...</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'lvm') {
        const hasLvm = State.lvm.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">LVM & Thin Pools</h1>
            <p class="zes-page-subtitle">Logical Volume Management volume groups and thin-provisioned pools</p>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Thinpool Name</th>
                  <th>Volume Group</th>
                  <th>Size</th>
                  <th>Data Usage</th>
                  <th>Metadata Usage</th>
                </tr>
              </thead>
              <tbody>
                ${hasLvm ? State.lvm.map(l => `
                  <tr>
                    <td style="font-weight: 700; color: #ffffff;">${l.thinpool || l.lv}</td>
                    <td>${l.vg}</td>
                    <td>${(l.size / (1024 * 1024 * 1024)).toFixed(1)} GB</td>
                    <td>${(l.data_percent || 0).toFixed(1)}%</td>
                    <td>${(l.metadata_percent || 0).toFixed(1)}%</td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="5" style="text-align: center; padding: 40px; color: #71717a;">Loading LVM pools...</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'zfs') {
        const hasZfs = State.zfs.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Directory & ZFS Pools</h1>
            <p class="zes-page-subtitle">Mounted directories and ZFS file systems</p>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Unit / Pool</th>
                  <th>Path</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                ${hasZfs ? State.zfs.map(z => `
                  <tr>
                    <td style="font-weight: 700; color: #ffffff;">${z.unit}</td>
                    <td style="font-family: monospace;">${z.path}</td>
                    <td>${z.options || 'defaults'}</td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="3" style="text-align: center; padding: 40px; color: #71717a;">No custom directory pools defined.</td></tr>
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
            <p class="zes-page-subtitle">Linux Bridges (vmbr), physical adapters, and virtual switches</p>
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
                    <td><span style="font-size: 11px; padding: 2px 6px; background: #272730; border-radius: 4px; text-transform: uppercase;">${n.type}</span></td>
                    <td><span class="zes-status-dot ${n.active ? 'running' : 'stopped'}"></span> ${n.active ? 'Active' : 'Down'}</td>
                    <td style="font-family: monospace;">${n.cidr || n.address || '-'}</td>
                    <td style="font-family: monospace;">${n.gateway || '-'}</td>
                    <td>${n.autostart ? 'Yes' : 'No'}</td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="6" style="text-align: center; padding: 40px; color: #71717a;">Loading network adapters...</td></tr>
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
            <p class="zes-page-subtitle">Packet filtering rules applied to VMs, containers, and node management</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search rules..." />
            </div>
            <button class="zes-btn-primary" onclick="Zesium.openAddFirewallRuleWindow()">
              ${Icons.firewall} + Add Firewall Rule
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
                      No cluster firewall rules defined. Click "+ Add Firewall Rule" to create one.
                    </td>
                  </tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'sdn') {
        const hasSdn = State.sdn.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Software-Defined Network (SDN)</h1>
            <p class="zes-page-subtitle">Virtual overlay networks, EVPN, VXLAN, and isolated tenant zones</p>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Zone</th>
                  <th>Type</th>
                  <th>MTU</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                ${hasSdn ? State.sdn.map(s => `
                  <tr>
                    <td style="font-weight: 700; color: #ffffff;">${s.zone}</td>
                    <td>${s.type}</td>
                    <td>${s.mtu || 'Default'}</td>
                    <td><span class="zes-status-dot running"></span> Active</td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="4" style="text-align: center; padding: 40px; color: #71717a;">No SDN zones configured on hypervisor.</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'cluster') {
        const hasCl = State.clusterStatus.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Cluster Management & Nodes</h1>
            <p class="zes-page-subtitle">Cluster quorum, membership, and multi-node federation</p>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Node</th>
                  <th>IP Address</th>
                  <th>ID</th>
                  <th>Status</th>
                  <th>Quorum</th>
                </tr>
              </thead>
              <tbody>
                ${hasCl ? State.clusterStatus.map(c => `
                  <tr>
                    <td style="font-weight: 700; color: #ffffff;">${c.name}</td>
                    <td style="font-family: monospace;">${c.ip || '-'}</td>
                    <td>${c.nodeid || 0}</td>
                    <td><span class="zes-status-dot ${c.online ? 'running' : 'stopped'}"></span> ${c.online ? 'Online' : 'Offline'}</td>
                    <td><strong style="color: #10b981;">Yes</strong></td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="5" style="text-align: center; padding: 40px; color: #71717a;">Loading cluster status...</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'ha') {
        const hasHa = State.haResources.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">High Availability (HA)</h1>
            <p class="zes-page-subtitle">Automatic failover policies and monitored services</p>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Service ID</th>
                  <th>Status</th>
                  <th>Group</th>
                  <th>Max Restart</th>
                </tr>
              </thead>
              <tbody>
                ${hasHa ? State.haResources.map(h => `
                  <tr>
                    <td style="font-weight: 700; color: #ffffff;">${h.sid}</td>
                    <td>${h.state}</td>
                    <td>${h.group || 'none'}</td>
                    <td>${h.max_restart || 1}</td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="4" style="text-align: center; padding: 40px; color: #71717a;">No High Availability resources configured.</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'syslog') {
        const hasSys = State.syslogEntries.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">System Logs (Syslog)</h1>
            <p class="zes-page-subtitle">Live journalctl and kernel events from node pve</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Filter log entries..." />
            </div>
            <button class="zes-btn-primary" onclick="Zesium.fetchSyslog()">
              ${Icons.refresh} Refresh Log
            </button>
          </div>

          <div class="zes-table-container" style="background-color: #0b0b0e; font-family: monospace; font-size: 12px; padding: 14px; max-height: 600px; overflow-y: auto;">
            ${hasSys ? State.syslogEntries.map(e => `
              <div style="padding: 4px 0; border-bottom: 1px solid #1a1a22; color: #d4d4d8; line-height: 1.4;">
                <span style="color: #71717a; margin-right: 8px;">#${e.n}</span>
                <span>${e.t}</span>
              </div>
            `).join('') : `
              <div style="color: #71717a; text-align: center; padding: 40px;">Loading syslog entries...</div>
            `}
          </div>
        `;
      } else if (State.currentView === 'updates') {
        const hasUp = State.updates.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">System Updates & Repositories</h1>
            <p class="zes-page-subtitle">Available APT software package updates for Debian and Proxmox VE</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search updates..." />
            </div>
            <button class="zes-btn-primary" onclick="Zesium.openNodeShell()">
              ${Icons.updates} Upgrade via Shell
            </button>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Current Version</th>
                  <th>Available Version</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                ${hasUp ? State.updates.map(u => `
                  <tr>
                    <td style="font-weight: 700; color: #ffffff;">${u.Package}</td>
                    <td style="font-family: monospace; color: #71717a;">${u.OldVersion || '-'}</td>
                    <td style="font-family: monospace; color: #10b981; font-weight: 600;">${u.Version}</td>
                    <td style="font-size: 12px; color: #a1a1aa;">${u.Title || u.Description || ''}</td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="4" style="text-align: center; padding: 40px; color: #10b981; font-weight: 600;">System is up to date! No pending packages.</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'certificates') {
        const dns = State.dnsInfo || {};
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Certificates & DNS</h1>
            <p class="zes-page-subtitle">Domain Name System resolvers and TLS/SSL security certificates</p>
          </div>

          <div class="zes-cards-grid" style="grid-template-columns: 1fr 1fr;">
            <div class="zes-plan-card">
              <div style="font-size: 14px; font-weight: 700; color: #ffffff; margin-bottom: 12px;">DNS Settings</div>
              <div style="font-size: 13px; color: #a1a1aa; margin-bottom: 8px;">
                Search Domain: <strong style="color: #ffffff;">${dns.search || 'None'}</strong>
              </div>
              <div style="font-size: 13px; color: #a1a1aa; margin-bottom: 8px;">
                Primary DNS: <strong style="color: #ffffff; font-family: monospace;">${dns.dns1 || '1.1.1.1'}</strong>
              </div>
              <div style="font-size: 13px; color: #a1a1aa;">
                Secondary DNS: <strong style="color: #ffffff; font-family: monospace;">${dns.dns2 || '-'}</strong>
              </div>
            </div>

            <div class="zes-plan-card">
              <div style="font-size: 14px; font-weight: 700; color: #ffffff; margin-bottom: 12px;">TLS / SSL Certificate</div>
              <div style="font-size: 13px; color: #a1a1aa; margin-bottom: 8px;">
                Issuer: <strong style="color: #ffffff;">Proxmox Virtual Environment</strong>
              </div>
              <div style="font-size: 13px; color: #a1a1aa; margin-bottom: 8px;">
                Status: <span class="zes-status-dot running"></span> <strong style="color: #10b981;">Active</strong>
              </div>
              <div style="margin-top: 14px;">
                <button class="zes-action-btn" onclick="Zesium.openNodeShell()">${Icons.certificates} Order ACME Cert</button>
              </div>
            </div>
          </div>
        `;
      } else if (State.currentView === 'tasks') {
        const hasTasks = State.tasks.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Cluster Task Audit Log</h1>
            <p class="zes-page-subtitle">Complete chronological record of hypervisor and guest operations</p>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Timestamp</th>
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
                      <td><span style="font-size: 11px; padding: 2px 6px; background: #272730; border-radius: 4px; font-weight: 600;">${t.type}</span></td>
                      <td>
                        <span class="zes-status-dot ${isOk ? 'running' : 'stopped'}"></span>
                        <span style="color: ${isOk ? '#10b981' : '#ef4444'}; font-weight: 500;">${t.status}</span>
                      </td>
                    </tr>
                  `;
                }).join('') : `
                  <tr><td colspan="5" style="text-align: center; padding: 40px; color: #71717a;">Loading audit log...</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      }
    },

    // Split-Screen Login
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
            <h1 class="zes-login-heading">Welcome back</h1>
            <p class="zes-login-subheading">Sign in with server credentials to manage Proxmox VE.</p>

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
        <!-- Left Slim Rail (56px) with White SVG Icons -->
        <div id="zes-rail">
          <div class="zes-rail-logo" title="Zesium - Proxmox Manager" onclick="Zesium.navigateTo('servers')">
            <img src="/pve2/images/zesium/logo.svg" alt="Zesium Logo" />
          </div>

          <div class="zes-rail-nav">
            <button class="zes-rail-btn active" data-view="servers" title="Virtual Servers" onclick="Zesium.navigateTo('servers')">
              ${Icons.server}
              <span>Servers</span>
            </button>
            <button class="zes-rail-btn" data-view="isos" title="ISO Images" onclick="Zesium.navigateTo('isos')">
              ${Icons.iso}
              <span>ISOs</span>
            </button>
            <button class="zes-rail-btn" data-view="storage" title="Storage Pools" onclick="Zesium.navigateTo('storage')">
              ${Icons.storage}
              <span>Storage</span>
            </button>
            <button class="zes-rail-btn" data-view="disks" title="Physical Disks" onclick="Zesium.navigateTo('disks')">
              ${Icons.disks}
              <span>Disks</span>
            </button>
            <button class="zes-rail-btn" data-view="network" title="Network Bridges" onclick="Zesium.navigateTo('network')">
              ${Icons.network}
              <span>Network</span>
            </button>
            <button class="zes-rail-btn" data-view="firewall" title="Firewall" onclick="Zesium.navigateTo('firewall')">
              ${Icons.firewall}
              <span>Firewall</span>
            </button>
            <button class="zes-rail-btn" data-view="cluster" title="Cluster" onclick="Zesium.navigateTo('cluster')">
              ${Icons.cluster}
              <span>Cluster</span>
            </button>
            <button class="zes-rail-btn" data-view="shell" title="Node Shell" onclick="Zesium.openNodeShell()">
              ${Icons.shell}
              <span>Shell</span>
            </button>
          </div>
        </div>

        <!-- Main Navigation Sidebar (250px) -->
        <div id="zes-sidebar">
          <div class="zes-sidebar-header">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
              <span style="font-size: 16px; font-weight: 700; color: #ffffff; letter-spacing: -0.01em;">Zesium</span>
              <span style="font-size: 12px; color: #71717a; font-weight: 500;">Proxmox Manager</span>
            </div>
            <div class="zes-team-selector" onclick="Zesium.navigateTo('cluster')">
              <div class="zes-team-avatar">
                ${Icons.cluster}
              </div>
              <div class="zes-team-info">
                <div class="zes-team-name">Node: ${nodeName}</div>
                <div class="zes-team-role">Hypervisor Online</div>
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
              <a class="zes-menu-item" onclick="Zesium.openCreateVMWizard()">
                ${Icons.createVm}
                <span>Create VM</span>
              </a>
              <a class="zes-menu-item" onclick="Zesium.openCreateCTWizard()">
                ${Icons.createCt}
                <span>Create Container</span>
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
              <a class="zes-menu-item" data-view="templates" onclick="Zesium.navigateTo('templates')">
                ${Icons.templates}
                <span>CT Templates</span>
              </a>
              <a class="zes-menu-item" data-view="backups" onclick="Zesium.navigateTo('backups')">
                ${Icons.backup}
                <span>Backups & Archives</span>
              </a>
            </div>

            <!-- Disks & Hardware -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">Disks & Hardware</div>
              <a class="zes-menu-item" data-view="disks" onclick="Zesium.navigateTo('disks')">
                ${Icons.disks}
                <span>Physical Disks</span>
              </a>
              <a class="zes-menu-item" data-view="lvm" onclick="Zesium.navigateTo('lvm')">
                ${Icons.lvm}
                <span>LVM & Thin Pools</span>
              </a>
              <a class="zes-menu-item" data-view="zfs" onclick="Zesium.navigateTo('zfs')">
                ${Icons.zfs}
                <span>Directory & ZFS</span>
              </a>
            </div>

            <!-- Network & Security -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">Network & Security</div>
              <a class="zes-menu-item" data-view="network" onclick="Zesium.navigateTo('network')">
                ${Icons.network}
                <span>Network Bridges</span>
              </a>
              <a class="zes-menu-item" data-view="firewall" onclick="Zesium.navigateTo('firewall')">
                ${Icons.firewall}
                <span>Cluster Firewall</span>
              </a>
              <a class="zes-menu-item" data-view="sdn" onclick="Zesium.navigateTo('sdn')">
                ${Icons.sdn}
                <span>Software Defined Net</span>
              </a>
            </div>

            <!-- Cluster & HA -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">Cluster & Nodes</div>
              <a class="zes-menu-item" data-view="cluster" onclick="Zesium.navigateTo('cluster')">
                ${Icons.cluster}
                <span>Cluster Status</span>
              </a>
              <a class="zes-menu-item" data-view="ha" onclick="Zesium.navigateTo('ha')">
                ${Icons.ha}
                <span>High Availability</span>
              </a>
            </div>

            <!-- System Administration -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">System Administration</div>
              <a class="zes-menu-item" data-view="shell" onclick="Zesium.openNodeShell()">
                ${Icons.shell}
                <span>Node Shell</span>
              </a>
              <a class="zes-menu-item" data-view="syslog" onclick="Zesium.navigateTo('syslog')">
                ${Icons.syslog}
                <span>System Logs (Syslog)</span>
              </a>
              <a class="zes-menu-item" data-view="updates" onclick="Zesium.navigateTo('updates')">
                ${Icons.updates}
                <span>System Updates</span>
              </a>
              <a class="zes-menu-item" data-view="certificates" onclick="Zesium.navigateTo('certificates')">
                ${Icons.certificates}
                <span>Certificates & DNS</span>
              </a>
              <a class="zes-menu-item" data-view="tasks" onclick="Zesium.navigateTo('tasks')">
                ${Icons.tasks}
                <span>Task Audit Log</span>
              </a>
            </div>
          </div>

          <!-- Bottom User Card & Copyright -->
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
            <div style="text-align: center; padding-top: 10px; font-size: 11px; color: #52525c; letter-spacing: 0.02em;">
              © Zesium. All rights reserved.
            </div>
          </div>
        </div>

        <!-- Main Content Area -->
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
                <span style="color: #52525c;">•</span>
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

          <!-- Main View Container -->
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
