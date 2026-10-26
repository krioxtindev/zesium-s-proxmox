/**
 * ==============================================================================
 * Zesium - Proxmox Manager
 * Luxury Dark UI Overhaul for Proxmox VE
 * Solely for Admin Server Management
 * © Zesium. All rights reserved.
 * ==============================================================================
 */

(function () {
  'use strict';

  console.log('%c Zesium - Proxmox Manager %c Admin UI Active ',
    'background: #ffffff; color: #000000; font-weight: bold; padding: 2px 8px; border-radius: 4px;',
    'background: #18181c; color: #10b981; padding: 2px 8px; border-radius: 4px;'
  );

  // SVG Icons
  const Icons = {
    logo: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1z"/></svg>`,
    server: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    nodes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`,
    shell: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    settings: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    iso: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/></svg>`,
    camera: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
    ip: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    bandwidth: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    share: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>`,
    layers: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
    key: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 2l-2 2m-1.5 1.5L16 7l-2-2-1.5 1.5m-3.5 3.5a5 5 0 1 0 7 7l5-5-2-2-1.5 1.5"/></svg>`,
    box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
    vnc: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    restart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`,
    stop: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10"/><rect x="8" y="8" width="8" height="8" rx="1" fill="#ffffff"/></svg>`,
    dots: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`,
    logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`
  };

  // State Management
  const State = {
    currentView: 'servers',
    activeServerId: 'test-ubuntu26.04',
    selectedTab: 'upgrade',
    servers: [],
    sampleServer: {
      id: 'test-ubuntu26.04',
      name: 'test-ubuntu26.04',
      vmid: 100,
      type: 'qemu',
      node: 'pve',
      os: 'Ubuntu 24.04',
      ip: '85.239.155.209',
      hostname: 'test-ubuntu26.04',
      location: 'Node: pve (Local Storage)',
      state: 'running',
      vcpu: '4 vCPU',
      ram: '8 GiB RAM',
      disk: '20 GiB NVMe',
      transfer: 'Unlimited Transfer',
      created: 'about 2 months ago'
    },
    isSamplePreview: false
  };

  // Suppress "No valid subscription" nag
  function suppressNag() {
    if (window.Proxmox && Proxmox.Utils) {
      Proxmox.Utils.checked_command = function (orig_cmd) {
        if (typeof orig_cmd === 'function') orig_cmd();
      };
    }
  }

  // Toast Notification System
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

    navigateTo: function (view, id = null, tab = null) {
      State.currentView = view;
      if (id) {
        State.activeServerId = id;
        State.isSamplePreview = (id === 'test-ubuntu26.04');
      }
      if (tab) State.selectedTab = tab;

      document.querySelectorAll('.zes-menu-item').forEach(el => {
        el.classList.toggle('active', el.dataset.view === view);
      });

      this.render();
      this.updateBreadcrumbs();
    },

    setServerTab: function (tab) {
      State.selectedTab = tab;
      this.render();
    },

    previewSampleServer: function () {
      State.isSamplePreview = true;
      State.activeServerId = 'test-ubuntu26.04';
      State.selectedTab = 'upgrade';
      this.navigateTo('server-detail', 'test-ubuntu26.04');
    },

    // Native Proxmox ExtJS Wizards
    openCreateVMWizard: function () {
      if (window.Ext && Ext.ClassManager.get('PVE.qemu.CreateWizard')) {
        Ext.create('PVE.qemu.CreateWizard', { nodename: 'pve' }).show();
      } else {
        this.navigateTo('deploy');
      }
    },

    openCreateCTWizard: function () {
      if (window.Ext && Ext.ClassManager.get('PVE.lxc.CreateWizard')) {
        Ext.create('PVE.lxc.CreateWizard', { nodename: 'pve' }).show();
      } else {
        showToast('Container Wizard', 'Opening LXC Wizard...');
      }
    },

    // Server power actions via Proxmox API
    stopServer: function (id) {
      const server = this.getActiveServer();
      const node = server.node || 'pve';
      const type = server.type || 'qemu';
      const vmid = server.vmid || 100;

      if (State.isSamplePreview) {
        server.state = server.state === 'running' ? 'stopped' : 'running';
        showToast(
          server.state === 'running' ? 'Server Started' : 'Server Stopped',
          `Server ${server.name} is now ${server.state}.`
        );
        this.render();
        return;
      }

      if (window.Proxmox && Proxmox.Utils && Proxmox.Utils.API2Request) {
        Proxmox.Utils.API2Request({
          url: `/nodes/${node}/${type}/${vmid}/status/stop`,
          method: 'POST',
          success: () => {
            showToast('Server Stopped', `Server ${server.name} stopped successfully.`);
            this.fetchLiveServers();
          },
          failure: (err) => {
            showToast('Action Failed', err.htmlStatus || 'Could not stop server');
          }
        });
      }
    },

    startServer: function (id) {
      const server = this.getActiveServer();
      const node = server.node || 'pve';
      const type = server.type || 'qemu';
      const vmid = server.vmid || 100;

      if (State.isSamplePreview) {
        server.state = 'running';
        showToast('Server Started', `Server ${server.name} is now running.`);
        this.render();
        return;
      }

      if (window.Proxmox && Proxmox.Utils && Proxmox.Utils.API2Request) {
        Proxmox.Utils.API2Request({
          url: `/nodes/${node}/${type}/${vmid}/status/start`,
          method: 'POST',
          success: () => {
            showToast('Server Started', `Server ${server.name} started successfully.`);
            this.fetchLiveServers();
          },
          failure: (err) => {
            showToast('Action Failed', err.htmlStatus || 'Could not start server');
          }
        });
      }
    },

    restartServer: function (id) {
      const server = this.getActiveServer();
      const node = server.node || 'pve';
      const type = server.type || 'qemu';
      const vmid = server.vmid || 100;

      if (State.isSamplePreview) {
        showToast('Server Restarting', `Graceful reboot signal sent to ${server.name}.`);
        return;
      }

      if (window.Proxmox && Proxmox.Utils && Proxmox.Utils.API2Request) {
        Proxmox.Utils.API2Request({
          url: `/nodes/${node}/${type}/${vmid}/status/reboot`,
          method: 'POST',
          success: () => {
            showToast('Server Restarting', `Reboot signal sent to ${server.name}.`);
            this.fetchLiveServers();
          },
          failure: (err) => {
            showToast('Action Failed', err.htmlStatus || 'Could not restart server');
          }
        });
      }
    },

    openVNC: function (id) {
      const server = this.getActiveServer();
      const node = server.node || 'pve';
      const vmid = server.vmid || 100;
      const vncUrl = `/?console=kvm&novnc=1&node=${node}&vmid=${vmid}`;
      window.open(vncUrl, `vnc_${vmid}`, 'width=1024,height=768,toolbar=no,menubar=no,location=no,status=no,scrollbars=yes,resizable=yes');
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
      if (State.isSamplePreview || State.activeServerId === 'test-ubuntu26.04') {
        return State.sampleServer;
      }
      return State.servers.find(s => String(s.id) === String(State.activeServerId)) || State.sampleServer;
    },

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
            const ramGb = item.maxmem ? Math.round(item.maxmem / (1024 * 1024 * 1024)) : 2;
            const diskGb = item.maxdisk ? Math.round(item.maxdisk / (1024 * 1024 * 1024)) : 20;
            const vcpu = item.maxcpu || (isLxc ? 1 : 2);

            return {
              id: item.vmid,
              vmid: item.vmid,
              name: item.name || (isLxc ? `CT ${item.vmid}` : `VM ${item.vmid}`),
              type: item.type,
              node: item.node || 'pve',
              os: isLxc ? 'Linux Container' : 'Linux VM',
              ip: '85.239.155.209',
              hostname: item.name || `server-${item.vmid}`,
              location: `Node: ${item.node || 'pve'}`,
              state: item.status || 'stopped',
              vcpu: `${vcpu} vCPU`,
              ram: `${ramGb} GiB RAM`,
              disk: `${diskGb} GiB NVMe`,
              transfer: 'Unlimited Transfer',
              created: 'Proxmox Guest'
            };
          });

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
          <span class="crumb-link" onclick="Zesium.navigateTo('server-detail', '${s.id}')">${s.name}</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current" style="text-transform: capitalize;">${State.selectedTab}</span>
        `;
      } else if (State.currentView === 'firewall') {
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-link" onclick="Zesium.navigateTo('firewall')">Firewall Groups</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">test</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Rules</span>
        `;
      } else if (State.currentView === 'snapshots') {
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Snapshots</span>
        `;
      } else if (State.currentView === 'private-networks') {
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Private Networks</span>
        `;
      } else if (State.currentView === 'deploy') {
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Deploy Server</span>
        `;
      } else if (State.currentView === 'isos') {
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Custom ISOs</span>
        `;
      } else {
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current" style="text-transform: capitalize;">${State.currentView.replace('-', ' ')}</span>
        `;
      }
    },

    render: function () {
      const container = document.getElementById('zes-main');
      if (!container) return;

      if (State.currentView === 'servers') {
        const hasServers = State.servers.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Virtual Servers</h1>
            <p class="zes-page-subtitle">Select servers to manage them together</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search..." />
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="zes-btn-primary" onclick="Zesium.openCreateVMWizard()">
                + Deploy Server
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
                  <th>Server ⇅</th>
                  <th>Node</th>
                  <th>IPv4</th>
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
                    <td>
                      <div style="font-weight: 600; color: #fff;">${s.name}</div>
                      <div style="font-size: 11px; color: #71717a;">${s.os}</div>
                    </td>
                    <td>${s.location}</td>
                    <td style="font-family: monospace;">${s.ip}</td>
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
                    <td colspan="9" style="text-align: center; padding: 70px 20px; color: #71717a;">
                      <div style="font-size: 15px; margin-bottom: 16px; color: #8e8e93;">You have no servers.</div>
                      <div style="display: flex; gap: 12px; justify-content: center;">
                        <button class="zes-btn-primary" onclick="Zesium.openCreateVMWizard()">
                          + Deploy Server
                        </button>
                        <button class="zes-action-btn" onclick="Zesium.previewSampleServer()">
                          Preview Sample Server (test-ubuntu26.04)
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
        const isRunning = s.state === 'running';

        container.innerHTML = `
          <div class="zes-server-header">
            <div class="zes-server-meta">
              <div class="zes-server-os-icon">🐧</div>
              <div>
                <div class="zes-server-title-row">
                  <span class="zes-status-dot ${s.state}"></span>
                  <span class="zes-server-name">${s.name}</span>
                </div>
                <div class="zes-server-specs-line">
                  <span>Primary IP: <strong style="color: #d4d4d8;">${s.ip}</strong></span>
                  <span>Hostname: <strong style="color: #d4d4d8;">${s.hostname}</strong></span>
                  <span>Created: ${s.created}</span>
                </div>
                <div style="margin-top: 6px; display: flex; gap: 8px; font-size: 12px; color: #a1a1aa;">
                  <span>${s.os}</span>
                  <span>•</span>
                  <span>${s.vcpu}</span>
                  <span>•</span>
                  <span>${s.ram}</span>
                  <span>•</span>
                  <span>${s.disk}</span>
                  <span>•</span>
                  <span>${s.transfer}</span>
                  <span>•</span>
                  <span>${s.location}</span>
                </div>
              </div>
            </div>

            <div class="zes-server-actions">
              <button class="zes-action-btn" onclick="Zesium.openVNC('${s.id}')">
                ${Icons.vnc} VNC
              </button>
              <button class="zes-action-btn" onclick="Zesium.restartServer('${s.id}')">
                ${Icons.restart} Restart
              </button>
              <button class="zes-action-btn ${isRunning ? 'btn-stop' : ''}" style="${!isRunning ? 'background-color: #10b981; border-color: #10b981;' : ''}" onclick="Zesium.stopServer('${s.id}')">
                ${isRunning ? `${Icons.stop} Stop` : '▶ Start'}
              </button>
              <button class="zes-action-btn" onclick="Zesium.showToast('Server Info', 'VMID: ' + ${s.vmid})">
                ${Icons.dots}
              </button>
            </div>
          </div>

          <div class="zes-nav-tabs">
            <button class="zes-nav-tab ${State.selectedTab === 'overview' ? 'active' : ''}" onclick="Zesium.setServerTab('overview')">Overview</button>
            <button class="zes-nav-tab ${State.selectedTab === 'settings' ? 'active' : ''}" onclick="Zesium.setServerTab('settings')">Settings</button>
            <button class="zes-nav-tab ${State.selectedTab === 'graphs' ? 'active' : ''}" onclick="Zesium.setServerTab('graphs')">Graphs</button>
            <button class="zes-nav-tab ${State.selectedTab === 'backups' ? 'active' : ''}" onclick="Zesium.setServerTab('backups')">Backups</button>
            <button class="zes-nav-tab ${State.selectedTab === 'firewall' ? 'active' : ''}" onclick="Zesium.setServerTab('firewall')">Firewall</button>
            <button class="zes-nav-tab ${State.selectedTab === 'mount-iso' ? 'active' : ''}" onclick="Zesium.setServerTab('mount-iso')">Mount ISO</button>
            <button class="zes-nav-tab ${State.selectedTab === 'audit-log' ? 'active' : ''}" onclick="Zesium.setServerTab('audit-log')">Audit Log</button>
            <button class="zes-nav-tab ${State.selectedTab === 'reverse-dns' ? 'active' : ''}" onclick="Zesium.setServerTab('reverse-dns')">Reverse DNS</button>
            <button class="zes-nav-tab ${State.selectedTab === 'upgrade' ? 'active' : ''}" onclick="Zesium.setServerTab('upgrade')">Upgrade</button>
            <button class="zes-nav-tab ${State.selectedTab === 'reinstall' ? 'active' : ''}" onclick="Zesium.setServerTab('reinstall')">Reinstall</button>
            <button class="zes-nav-tab ${State.selectedTab === 'admin' ? 'active' : ''}" onclick="Zesium.setServerTab('admin')">Admin</button>
          </div>

          ${this.renderServerTabContent()}
        `;
      } else if (State.currentView === 'firewall') {
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">test</h1>
            <p class="zes-page-subtitle">The rules this group enforces on every server it is applied to</p>
          </div>

          <div class="zes-nav-tabs">
            <button class="zes-nav-tab active">Rules</button>
            <button class="zes-nav-tab">Servers</button>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
            <div>
              <div style="font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 4px;">Inbound Rules</div>
              <div style="font-size: 13px; color: #71717a;">Traffic arriving at the server. Rules are matched from the top down, and the first one that matches a packet decides what happens to it.</div>
            </div>
            <button class="zes-btn-primary" onclick="Zesium.showToast('Firewall Rule', 'Opening Add Inbound Rule Dialog...')">
              + Add Inbound Rule
            </button>
          </div>

          <div class="zes-table-container" style="margin-bottom: 32px;">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Service / Protocol</th>
                  <th>Port Start</th>
                  <th>Port End</th>
                  <th>Source</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="5" style="text-align: center; padding: 40px; color: #71717a;">
                    This group has no inbound rules yet.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
            <div>
              <div style="font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 4px;">Outbound Rules</div>
              <div style="font-size: 13px; color: #71717a;">Traffic leaving the server. Rules are matched from the top down, and the first one that matches a packet decides what happens to it.</div>
            </div>
            <button class="zes-btn-primary" onclick="Zesium.showToast('Firewall Rule', 'Opening Add Outbound Rule Dialog...')">
              + Add Outbound Rule
            </button>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Service / Protocol</th>
                  <th>Port Start</th>
                  <th>Port End</th>
                  <th>Source</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="5" style="text-align: center; padding: 40px; color: #71717a;">
                    This group has no outbound rules yet.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'snapshots') {
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Snapshots</h1>
            <p class="zes-page-subtitle">Snapshot storages configured across Proxmox storage pools.</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search storages..." />
            </div>
            <button class="zes-btn-primary" onclick="Zesium.showToast('Snapshot Storage', 'Proxmox storage pool ready.')">
              + Add Snapshot Storage
            </button>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Name ⇅</th>
                  <th>Used ⇅</th>
                  <th>Snapshots ⇅</th>
                  <th>Status ⇅</th>
                  <th>Node ⇅</th>
                  <th>Storage Type ⇅</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="6" style="text-align: center; padding: 50px; color: #71717a;">
                    No snapshot storage pools configured yet.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'private-networks') {
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Private Networks</h1>
            <p class="zes-page-subtitle">Isolated virtual networks and SDN bridges carrying traffic between your VMs and containers</p>
          </div>

          <div class="zes-alert-info">
            <strong style="color: #ffffff;">How private networking works</strong><br />
            A private network connects servers within Proxmox using isolated bridge interfaces (vmbr / SDN vnets). Attach servers from the network tab of a virtual machine.
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search..." />
            </div>
            <button class="zes-btn-primary" onclick="Zesium.showToast('Private Network', 'SDN Zone ready.')">
              + Create Network
            </button>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Name ⇅</th>
                  <th>Range ⇅</th>
                  <th>Bridge / Vnet ⇅</th>
                  <th>Servers ⇅</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="4" style="text-align: center; padding: 50px; color: #71717a;">
                    You have no private networks yet.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'deploy') {
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Deploy Server</h1>
            <p class="zes-page-subtitle">Configure virtual hardware specifications and launch the hypervisor deployment wizard.</p>
          </div>

          <div style="font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 4px;">Choose compute profile</div>
          <div style="font-size: 13px; color: #71717a; margin-bottom: 16px;">Select the compute profile for this virtual server.</div>

          <div class="zes-cards-grid">
            <div class="zes-plan-card selected">
              <div class="zes-plan-card-title">Standard KVM VM</div>
              <div class="zes-plan-card-desc">General-purpose virtualization on Proxmox VE. Ideal for web services, microservices, and databases.</div>
            </div>
            <div class="zes-plan-card">
              <div class="zes-plan-card-title">LXC System Container</div>
              <div class="zes-plan-card-desc">Lightweight Linux container with near-bare-metal performance and minimal memory footprint.</div>
            </div>
            <div class="zes-plan-card">
              <div class="zes-plan-card-title">High-Performance Dedicated</div>
              <div class="zes-plan-card-desc">Virtual machine with host CPU passthrough, pinned memory, and high-performance virtio drivers.</div>
            </div>
          </div>

          <div style="margin-top: 30px; display: flex; justify-content: flex-end; gap: 12px;">
            <button class="zes-btn-primary" onclick="Zesium.openCreateVMWizard()">
              Launch Proxmox VM Wizard ⚡
            </button>
          </div>
        `;
      } else if (State.currentView === 'isos') {
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title">Custom ISOs</h1>
            <p class="zes-page-subtitle">Upload and manage custom OS installation media on node storage</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search ISOs..." />
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="zes-btn-primary" onclick="Zesium.showToast('Upload ISO', 'Storage: local ready for upload.')">
                + Upload ISO
              </button>
              <button class="zes-action-btn" onclick="Zesium.showToast('Download URL', 'Storage: local ready for URL download.')">
                Download from URL
              </button>
            </div>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Format</th>
                  <th>Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="4" style="text-align: center; padding: 50px; color: #71717a;">
                    No ISO images uploaded to local storage yet. Click "+ Upload ISO" to add boot media.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title" style="text-transform: capitalize;">${State.currentView.replace('-', ' ')}</h1>
            <p class="zes-page-subtitle">Manage ${State.currentView.replace('-', ' ')} configuration</p>
          </div>
          <div class="zes-table-container" style="padding: 60px; text-align: center; color: #71717a;">
            Section <strong>${State.currentView}</strong> is active.
          </div>
        `;
      }
    },

    renderServerTabContent: function () {
      if (State.selectedTab === 'upgrade') {
        return `
          <div class="zes-alert-warning">
            <span style="font-size: 16px;">⚠️</span>
            <div>
              <strong>Resource Allocation Changes</strong><br />
              <span style="color: #fef08a; font-size: 12px;">Applying CPU or memory modifications may require a guest restart to take effect.</span>
            </div>
          </div>

          <div style="margin-top: 24px;">
            <div style="font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 4px;">Choose compute profile</div>
            <div style="font-size: 13px; color: #71717a; margin-bottom: 16px;">Select the compute profile for this virtual server.</div>

            <div class="zes-cards-grid">
              <div class="zes-plan-card selected">
                <div class="zes-plan-card-title">KVM Standard Profile</div>
                <div class="zes-plan-card-desc">
                  Balanced vCPU and RAM allocation. Ideal for general-purpose server workloads.
                </div>
              </div>
              <div class="zes-plan-card">
                <div class="zes-plan-card-title">Compute Optimized</div>
                <div class="zes-plan-card-desc">
                  High vCPU density and host CPU flag pass-through for performance-critical applications.
                </div>
              </div>
              <div class="zes-plan-card">
                <div class="zes-plan-card-title">Memory Intensive</div>
                <div class="zes-plan-card-desc">
                  Expanded RAM allocation with NUMA topology optimization for caching and databases.
                </div>
              </div>
            </div>

            <div style="font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 4px;">Target Storage / Node</div>
            <div style="font-size: 13px; color: #71717a; margin-bottom: 16px;">Select the target node and disk pool for this server.</div>

            <div class="zes-cards-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));">
              <div class="zes-location-card selected">
                <span style="font-size: 13px; font-weight: 500;">🖥️ Node: pve</span>
                <span class="zes-location-badge">CURRENT</span>
              </div>
              <div class="zes-location-card">
                <span style="font-size: 13px; font-weight: 500;">💾 Pool: local-lvm</span>
              </div>
              <div class="zes-location-card">
                <span style="font-size: 13px; font-weight: 500;">📁 Pool: local</span>
              </div>
            </div>

            <div style="font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 4px; margin-top: 24px;">Resource Sizing</div>
            <div style="font-size: 13px; color: #71717a; margin-bottom: 16px;">Configured memory and virtual processor allocations.</div>

            <div class="zes-table-container">
              <table class="zes-table">
                <thead>
                  <tr>
                    <th>Profile</th>
                    <th>vCPU</th>
                    <th>Memory</th>
                    <th>Disk</th>
                    <th>Network</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-weight: 600;">Standard 1</td>
                    <td>1</td>
                    <td>2 GiB</td>
                    <td>20 GiB</td>
                    <td>VirtIO 1 Gbps</td>
                  </tr>
                  <tr style="background-color: #222228;">
                    <td style="font-weight: 600; color: #fff;">Standard 2 (Current)</td>
                    <td>2</td>
                    <td>4 GiB</td>
                    <td>40 GiB</td>
                    <td>VirtIO 10 Gbps</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600;">Standard 4</td>
                    <td>4</td>
                    <td>8 GiB</td>
                    <td>80 GiB</td>
                    <td>VirtIO 10 Gbps</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        `;
      } else if (State.selectedTab === 'overview') {
        const s = this.getActiveServer();
        return `
          <div class="zes-cards-grid" style="grid-template-columns: repeat(4, 1fr);">
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">CPU Usage</div>
              <div style="font-size: 24px; font-weight: 700; color: #fff; margin: 8px 0;">4.2%</div>
              <div style="height: 6px; background: #27272a; border-radius: 99px; overflow: hidden;"><div style="width: 4.2%; height: 100%; background: #10b981;"></div></div>
            </div>
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">Memory Allocation</div>
              <div style="font-size: 24px; font-weight: 700; color: #fff; margin: 8px 0;">${s.ram}</div>
              <div style="height: 6px; background: #27272a; border-radius: 99px; overflow: hidden;"><div style="width: 25%; height: 100%; background: #3b82f6;"></div></div>
            </div>
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">Disk Storage</div>
              <div style="font-size: 24px; font-weight: 700; color: #fff; margin: 8px 0;">${s.disk}</div>
              <div style="height: 6px; background: #27272a; border-radius: 99px; overflow: hidden;"><div style="width: 27%; height: 100%; background: #a855f7;"></div></div>
            </div>
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">Uptime Status</div>
              <div style="font-size: 24px; font-weight: 700; color: #fff; margin: 8px 0;">Online</div>
              <div style="font-size: 11px; color: #10b981;">● Online & healthy</div>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="zes-table-container" style="padding: 60px; text-align: center; color: #71717a;">
            Section <strong>${State.selectedTab}</strong> loaded.
          </div>
        `;
      }
    },

    // 1:1 Login Screen (Admin Only with © Zesium)
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
            <div class="zes-login-theme-pills">
              <span class="zes-login-pill">🖥</span>
              <span class="zes-login-pill">☀️</span>
              <span class="zes-login-pill active">🌙</span>
            </div>
          </div>

          <div class="zes-login-center">
            <div class="zes-alert-warning" style="margin-bottom: 24px; font-size: 12px;">
              <span style="font-size: 16px;">⚠️</span>
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
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                  <label class="zes-login-label" style="margin: 0;">Password</label>
                </div>
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

    // Fixed & Reliable Proxmox Authentication Handler
    handleLogin: function () {
      const u = document.getElementById('zes-login-username').value.trim();
      const p = document.getElementById('zes-login-password').value;
      const r = document.getElementById('zes-login-realm').value;
      const errBox = document.getElementById('zes-login-error');
      const btn = document.getElementById('zes-login-submit-btn');

      btn.disabled = true;
      btn.innerText = 'Signing in...';
      if (errBox) errBox.style.display = 'none';

      const fullUsername = u.includes('@') ? u : `${u}@${r}`;
      const params = new URLSearchParams();
      params.append('username', fullUsername);
      params.append('password', p);
      params.append('realm', r);
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
          // Set via Proxmox helper if ready
          if (window.Proxmox && Proxmox.Utils && Proxmox.Utils.setAuthData) {
            Proxmox.Utils.setAuthData(auth);
          }

          // Set cookie explicitly via ExtJS and native document.cookie
          if (window.Ext && Ext.util && Ext.util.Cookies) {
            Ext.util.Cookies.set('PVEAuthCookie', auth.ticket, null, '/', null, true, 'lax');
          }
          document.cookie = `PVEAuthCookie=${auth.ticket}; path=/; secure; samesite=lax`;

          try {
            window.localStorage.setItem('ProxmoxUser', JSON.stringify(auth));
          } catch (e) {}

          // Reload immediately to enter workspace
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

      const userName = (window.Proxmox && Proxmox.UserName) ? Proxmox.UserName : 'root@pam';
      const nodeName = (window.Proxmox && Proxmox.NodeName) ? Proxmox.NodeName : 'pve';

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
            <button class="zes-rail-btn" title="Datacenter / Nodes" onclick="Zesium.showToast('Datacenter', 'Node: ' + '${nodeName}' + ' (Online)')">
              ${Icons.nodes}
              <span>Cluster</span>
            </button>
            <button class="zes-rail-btn" title="Shell Terminal" onclick="Zesium.showToast('Node Shell', 'Proxmox shell ready.')">
              ${Icons.shell}
              <span>Shell</span>
            </button>
            <button class="zes-rail-btn" title="Settings" onclick="Zesium.showToast('Settings', 'Hypervisor Settings')">
              ${Icons.settings}
              <span>Config</span>
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
            <div class="zes-team-selector" onclick="Zesium.showToast('Admin Workspace', 'Proxmox VE Cluster: ${nodeName}')">
              <div class="zes-team-avatar">
                ${Icons.nodes}
              </div>
              <div class="zes-team-info">
                <div class="zes-team-name">Administrator</div>
                <div class="zes-team-role">Node: ${nodeName}</div>
              </div>
              <div class="zes-team-chevron">⇅</div>
            </div>
          </div>

          <div class="zes-sidebar-menu">
            <!-- Resources -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">Resources</div>
              <a class="zes-menu-item active" data-view="servers" onclick="Zesium.navigateTo('servers')">
                ${Icons.server}
                <span>Virtual Servers</span>
              </a>
              <a class="zes-menu-item" data-view="isos" onclick="Zesium.navigateTo('isos')">
                ${Icons.iso}
                <span>Custom ISOs</span>
              </a>
              <a class="zes-menu-item" data-view="snapshots" onclick="Zesium.navigateTo('snapshots')">
                ${Icons.camera}
                <span>Snapshots</span>
              </a>
              <a class="zes-menu-item" data-view="floating-ips" onclick="Zesium.navigateTo('floating-ips')">
                ${Icons.ip}
                <span>Floating IPs</span>
              </a>
              <a class="zes-menu-item" data-view="bandwidth" onclick="Zesium.navigateTo('bandwidth')">
                ${Icons.bandwidth}
                <span>Bandwidth</span>
              </a>
            </div>

            <!-- Networking -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">Networking</div>
              <a class="zes-menu-item" data-view="firewall" onclick="Zesium.navigateTo('firewall')">
                ${Icons.shield}
                <span>Firewall Groups</span>
              </a>
              <a class="zes-menu-item" data-view="ip-groups" onclick="Zesium.navigateTo('ip-groups')">
                ${Icons.globe}
                <span>IP Groups</span>
              </a>
              <a class="zes-menu-item" data-view="private-networks" onclick="Zesium.navigateTo('private-networks')">
                ${Icons.share}
                <span>Private Networks</span>
              </a>
              <a class="zes-menu-item" data-view="bandwidth-pooling" onclick="Zesium.navigateTo('bandwidth-pooling')">
                ${Icons.layers}
                <span>Bandwidth Pooling</span>
              </a>
            </div>

            <!-- Setup -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">Setup</div>
              <a class="zes-menu-item" data-view="ssh-keys" onclick="Zesium.navigateTo('ssh-keys')">
                ${Icons.key}
                <span>SSH Keys</span>
              </a>
              <a class="zes-menu-item" data-view="boot-images" onclick="Zesium.navigateTo('boot-images')">
                ${Icons.box}
                <span>Boot Images</span>
              </a>
              <a class="zes-menu-item" data-view="scripts" onclick="Zesium.navigateTo('scripts')">
                ${Icons.code}
                <span>Scripts</span>
              </a>
            </div>
          </div>

          <!-- Bottom Profile Card & Copyright (Zesium) -->
          <div class="zes-sidebar-footer">
            <div class="zes-user-card" onclick="Zesium.showToast('Admin Profile', '${userName}')">
              <div class="zes-user-badge">MŠ</div>
              <div class="zes-user-details">
                <div class="zes-user-name">Martin Šintler</div>
                <div class="zes-user-email">${userName}</div>
              </div>
              <div class="zes-user-chevron" onclick="event.stopPropagation(); Zesium.logout();" title="Logout">
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
                <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 6px rgba(16, 185, 129, 0.6);"></span>
                <span style="font-weight: 500; color: #ffffff;">Node: ${nodeName}</span>
                <span style="color: #52525b;">•</span>
                <span style="color: #a1a1aa;">4 vCPU • 32 GB RAM</span>
              </div>

              <button class="zes-topbar-btn" onclick="Zesium.toggleNativeView()">
                Proxmox Native View ↗
              </button>

              <button class="zes-topbar-btn" onclick="Zesium.logout()" title="Sign out of Proxmox VE">
                Sign out
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

      setTimeout(() => {
        showToast('Zesium Manager', `Connected to node ${nodeName}.`);
      }, 500);
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
