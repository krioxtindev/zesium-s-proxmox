/**
 * ==============================================================================
 * Zesium - Proxmox Manager
 * 1:1 Complete UI Overhaul for Proxmox VE (Convoy / Advin UI Replica)
 * ==============================================================================
 */

(function () {
  'use strict';

  console.log('%c Zesium - Proxmox Manager %c 1:1 Convoy UI Active ',
    'background: #ffffff; color: #000000; font-weight: bold; padding: 2px 8px; border-radius: 4px;',
    'background: #18181c; color: #10b981; padding: 2px 8px; border-radius: 4px;'
  );

  // SVG Icon definitions matching Convoy exactly
  const Icons = {
    logo: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1z"/></svg>`,
    cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>`,
    teams: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    support: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    account: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>`,
    server: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
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
    external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
    dots: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>`,
    userBadge: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`
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
      location: 'Kansas City, MO',
      state: 'running',
      vcpu: '4 vCPU',
      ram: '8 GiB RAM',
      disk: '20 GiB NVMe',
      transfer: 'Unlimited Transfer',
      created: 'about 2 months ago',
      price: '8,00 US$',
      cycle: 'Monthly',
      nextDue: '2026-11-29',
      autopay: 'Enabled'
    },
    clusterStats: null,
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

  // Toast Notification System (Matches Screenshots 212051.png & 212028.png)
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

      // Update sidebar active state
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

    // ExtJS Native Wizards & Dialogs (Preserves 100% Proxmox Power!)
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
        this.showToast('Container Wizard', 'Launching Proxmox LXC Wizard...');
      }
    },

    // Server power actions
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
            showToast('Server Stopped', `Server ${server.name} stop command sent.`);
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
            showToast('Server Started', `Server ${server.name} start command sent.`);
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

    // Toggle between Convoy and legacy ExtJS workspace
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

    // Fetch real VMs & containers from Proxmox cluster
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
              location: `Kansas City, MO (Node: ${item.node || 'pve'})`,
              state: item.status || 'stopped',
              vcpu: `${vcpu} vCPU`,
              ram: `${ramGb} GiB RAM`,
              disk: `${diskGb} GiB NVMe`,
              transfer: 'Unlimited Transfer',
              created: 'Proxmox Guest',
              price: '8,00 US$',
              cycle: 'Monthly',
              nextDue: '2026-11-29',
              autopay: 'Enabled'
            };
          });

          this.render();
        }
      });
    },

    // Update top header breadcrumb navigation
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
          <span class="crumb-current">Order a Server</span>
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

    // Render active view in #zes-main
    render: function () {
      const container = document.getElementById('zes-main');
      if (!container) return;

      if (State.currentView === 'servers') {
        const hasServers = State.servers.length > 0;
        container.innerHTML = `
          <!-- Virtual Servers View (Matches Screenshot 212028.png) -->
          <div class="zes-page-header">
            <h1 class="zes-page-title">Virtual Servers</h1>
            <p class="zes-page-subtitle">Select servers to manage them together</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search..." oninput="Zesium.filterServers(this.value)" />
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="zes-btn-primary" onclick="Zesium.openCreateVMWizard()">
                + Deploy Server
              </button>
            </div>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th style="width: 40px;"><input type="checkbox" style="accent-color: #fff;" /></th>
                  <th>Server ⇅</th>
                  <th>Location</th>
                  <th>IPv4</th>
                  <th>State ⇅</th>
                  <th>Price</th>
                  <th>Cycle</th>
                  <th>Next due</th>
                  <th>Autopay</th>
                </tr>
              </thead>
              <tbody>
                ${hasServers ? State.servers.map(s => `
                  <tr style="cursor: pointer;" onclick="Zesium.navigateTo('server-detail', '${s.id}')">
                    <td onclick="event.stopPropagation()"><input type="checkbox" style="accent-color: #fff;" /></td>
                    <td>
                      <div style="font-weight: 600; color: #fff;">${s.name}</div>
                      <div style="font-size: 11px; color: #71717a;">${s.vcpu} • ${s.ram} • ${s.disk}</div>
                    </td>
                    <td>🇺🇸 ${s.location}</td>
                    <td style="font-family: monospace;">${s.ip}</td>
                    <td>
                      <span class="zes-status-dot ${s.state}"></span>
                      <span style="text-transform: capitalize; font-weight: 500;">${s.state}</span>
                    </td>
                    <td>${s.price}</td>
                    <td>${s.cycle}</td>
                    <td>${s.nextDue}</td>
                    <td>${s.autopay}</td>
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
          <!-- Server Detail View (Matches Screenshot 193958.png) -->
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
                  <span>🇺🇸 ${s.location}</span>
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
              <button class="zes-action-btn" onclick="Zesium.showToast('Server Options', 'VMID: ' + ${s.vmid})">
                ${Icons.dots}
              </button>
            </div>
          </div>

          <!-- Secondary Tab Navigation -->
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

          <!-- Tab Content (Upgrade view matches 193958.png 1:1) -->
          ${this.renderServerTabContent()}
        `;
      } else if (State.currentView === 'firewall') {
        container.innerHTML = `
          <!-- Firewall Groups View (Matches Screenshot 212051.png) -->
          <div class="zes-page-header">
            <h1 class="zes-page-title">test</h1>
            <p class="zes-page-subtitle">The rules this group enforces on every server it is applied to</p>
          </div>

          <div class="zes-nav-tabs">
            <button class="zes-nav-tab active">Rules</button>
            <button class="zes-nav-tab">Servers</button>
          </div>

          <!-- Inbound Rules -->
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

          <!-- Outbound Rules -->
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
          <!-- Snapshots View (Matches Screenshot 212036.png) -->
          <div class="zes-page-header">
            <h1 class="zes-page-title">Snapshots</h1>
            <p class="zes-page-subtitle">Snapshot storages you pay for by the GiB.</p>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search storages..." />
            </div>
            <button class="zes-btn-primary" onclick="Zesium.showToast('Snapshot Storage', 'Proxmox storage pool ready.')">
              🛒 Buy Storage
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
                  <th>Price ⇅</th>
                  <th>Cycle ⇅</th>
                  <th>Next due ⇅</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colspan="7" style="text-align: center; padding: 50px; color: #71717a;">
                    This team has no snapshot storage yet. Buy one to start taking snapshots.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'private-networks') {
        container.innerHTML = `
          <!-- Private Networks View (Matches Screenshot 212059.png) -->
          <div class="zes-page-header">
            <h1 class="zes-page-title">Private Networks</h1>
            <p class="zes-page-subtitle">Isolated networks carrying traffic between your own servers in one city</p>
          </div>

          <div class="zes-alert-info">
            <strong style="color: #ffffff;">How private networking works</strong><br />
            A private network connects servers within one city using a separate IP address range. Attach servers from the network page or a server's Private Network tab. Each server gets a private network interface that becomes available after its next reboot.
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
                  <th>City ⇅</th>
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
          <!-- Order a Server View (Matches Screenshots 212110.png, 212115.png, 212121.png) -->
          <div class="zes-page-header">
            <h1 class="zes-page-title">Order a Server</h1>
            <p class="zes-page-subtitle">Choose a plan and how the server should be set up. The cost comes out of your account credit and we start building it straight away.</p>
          </div>

          <div style="font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 4px;">Choose product group</div>
          <div style="font-size: 13px; color: #71717a; margin-bottom: 16px;">Select the product family this server is built from.</div>

          <div class="zes-cards-grid">
            <div class="zes-plan-card selected">
              <div class="zes-plan-card-title">KVM Standard VPS</div>
              <div class="zes-plan-card-desc">AMD EPYC Milan 7003 virtual servers. Great for general-purpose compute applications, such as remote desktops and hosting small websites.</div>
            </div>
            <div class="zes-plan-card">
              <div class="zes-plan-card-title">KVM Premium VPS</div>
              <div class="zes-plan-card-desc">AMD EPYC Genoa 9004 virtual servers. Affordable servers for applications requiring high CPU performance, such as databases and data processing.</div>
            </div>
            <div class="zes-plan-card">
              <div class="zes-plan-card-title">KVM 9950X VPS</div>
              <div class="zes-plan-card-desc">AMD Ryzen 9950X virtual servers. Great for applications demanding high clock speeds, such as game servers and general single-threaded applications.</div>
            </div>
          </div>

          <div style="font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 4px;">Choose location</div>
          <div style="font-size: 13px; color: #71717a; margin-bottom: 16px;">Select the city the server is built in.</div>

          <div class="zes-cards-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));">
            <div class="zes-location-card selected">
              <span style="font-size: 13px; font-weight: 500;">🇲🇾 Johor Bahru, MY</span>
              <span class="zes-status-dot running"></span>
            </div>
            <div class="zes-location-card">
              <span style="font-size: 13px; font-weight: 500;">🇺🇸 Kansas City, MO</span>
              <span class="zes-status-dot running"></span>
            </div>
            <div class="zes-location-card">
              <span style="font-size: 13px; font-weight: 500;">🇺🇸 Los Angeles, CA</span>
              <span class="zes-status-dot running"></span>
            </div>
            <div class="zes-location-card">
              <span style="font-size: 13px; font-weight: 500;">🇺🇸 Miami, FL</span>
              <span class="zes-status-dot running"></span>
            </div>
            <div class="zes-location-card">
              <span style="font-size: 13px; font-weight: 500;">🇩🇪 Nuremberg, DE</span>
              <span class="zes-status-dot running"></span>
            </div>
            <div class="zes-location-card">
              <span style="font-size: 13px; font-weight: 500;">🇺🇸 Secaucus, NJ</span>
              <span class="zes-status-dot stopped"></span>
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
          <!-- Custom ISOs View -->
          <div class="zes-page-header">
            <h1 class="zes-page-title">Custom ISOs</h1>
            <p class="zes-page-subtitle">Upload and manage custom OS installation media</p>
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

    // Render Tab content inside Server Detail (Matches Screenshot 193958.png)
    renderServerTabContent: function () {
      if (State.selectedTab === 'upgrade') {
        return `
          <div class="zes-alert-warning">
            <span style="font-size: 16px;">⚠️</span>
            <div>
              <strong>The upgrade can take up to 30 minutes</strong><br />
              <span style="color: #fef08a; font-size: 12px;">The server has to stay powered off while the new plan is applied and remains offline until the change completes.</span>
            </div>
          </div>

          <div style="margin-top: 24px;">
            <div style="font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 4px;">Choose product group</div>
            <div style="font-size: 13px; color: #71717a; margin-bottom: 16px;">Select the product family for this server.</div>

            <div class="zes-cards-grid">
              <div class="zes-plan-card selected">
                <div class="zes-plan-card-title">KVM Standard VPS</div>
                <div class="zes-plan-card-desc">
                  Available at $1.00 per GB of memory<br />
                  AMD EPYC Milan 7003 virtual servers. Great for general-purpose compute applications, such as remote desktops.
                </div>
              </div>
              <div class="zes-plan-card">
                <div class="zes-plan-card-title">KVM Premium VPS</div>
                <div class="zes-plan-card-desc">
                  Available at $1.25 per GB of memory<br />
                  AMD EPYC Genoa 9004 virtual servers. Affordable servers for applications requiring high CPU performance.
                </div>
              </div>
              <div class="zes-plan-card">
                <div class="zes-plan-card-title">KVM Ryzen VPS</div>
                <div class="zes-plan-card-desc">
                  Available at $1.75 per GB of memory<br />
                  AMD Ryzen 9950X virtual servers. Great for applications demanding high clock speeds, such as game servers.
                </div>
              </div>
            </div>

            <div style="font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 4px;">Choose location</div>
            <div style="font-size: 13px; color: #71717a; margin-bottom: 16px;">Select the location for this server.</div>

            <div class="zes-cards-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));">
              <div class="zes-location-card">
                <span style="font-size: 13px; font-weight: 500;">🇺🇸 Los Angeles, CA</span>
              </div>
              <div class="zes-location-card">
                <span style="font-size: 13px; font-weight: 500;">🇺🇸 Miami, FL</span>
              </div>
              <div class="zes-location-card selected">
                <span style="font-size: 13px; font-weight: 500;">🇺🇸 Kansas City, MO</span>
                <span class="zes-location-badge">CURRENT</span>
              </div>
              <div class="zes-location-card">
                <span style="font-size: 13px; font-weight: 500;">🇺🇸 NYC Metro</span>
              </div>
              <div class="zes-location-card">
                <span style="font-size: 13px; font-weight: 500;">🇩🇪 Nuremberg, DE</span>
              </div>
              <div class="zes-location-card">
                <span style="font-size: 13px; font-weight: 500;">🇲🇾 Johor, MY</span>
              </div>
            </div>

            <div style="font-size: 15px; font-weight: 600; color: #fff; margin-bottom: 4px; margin-top: 24px;">Choose plan</div>
            <div style="font-size: 13px; color: #71717a; margin-bottom: 16px;">Only plans that can safely hold the current server disk can be selected.</div>

            <div class="zes-table-container">
              <table class="zes-table">
                <thead>
                  <tr>
                    <th>Plan</th>
                    <th>vCPU</th>
                    <th>Memory</th>
                    <th>Disk</th>
                    <th>Transfer</th>
                    <th>Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-weight: 600;">KVM Standard 1</td>
                    <td>1</td>
                    <td>2 GiB</td>
                    <td>20 GiB</td>
                    <td>1 TB</td>
                    <td>$4.00</td>
                  </tr>
                  <tr style="background-color: #222228;">
                    <td style="font-weight: 600; color: #fff;">KVM Standard 2 (Current)</td>
                    <td>2</td>
                    <td>4 GiB</td>
                    <td>40 GiB</td>
                    <td>2 TB</td>
                    <td>$8.00</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600;">KVM Standard 4</td>
                    <td>4</td>
                    <td>8 GiB</td>
                    <td>80 GiB</td>
                    <td>4 TB</td>
                    <td>$16.00</td>
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

    // Inject Login Screen (Matches Screenshot 211834.png 1:1)
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
              <img src="/pve2/images/zesium/logo.svg" class="zes-login-brand-logo" alt="Logo" />
              <span class="zes-login-brand-title">Advin Servers</span>
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
                Having trouble signing in, or lost access to your email or two-factor authentication? Email us at <a href="mailto:company@advinservers.com" style="color: #fde68a;">company@advinservers.com</a>.
              </div>
            </div>

            <h1 class="zes-login-heading">Welcome back</h1>
            <p class="zes-login-subheading">Sign in with the same email address and password you use for the legacy billing portal.</p>

            <form id="zes-login-form" onsubmit="event.preventDefault(); Zesium.handleLogin();">
              <div class="zes-login-form-group">
                <label class="zes-login-label">Email</label>
                <input type="text" id="zes-login-username" class="zes-login-input" value="root" placeholder="Email" required />
              </div>

              <div class="zes-login-form-group">
                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                  <label class="zes-login-label" style="margin: 0;">Password</label>
                  <a href="#" style="font-size: 12px; color: #71717a; text-decoration: none;">Forgot your password?</a>
                </div>
                <input type="password" id="zes-login-password" class="zes-login-input" placeholder="Password" required />
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

            <div style="margin-top: 24px; font-size: 13px; color: #71717a;">
              Don't have an account? <a href="#" style="color: #ffffff; text-decoration: none; font-weight: 500;">Create one.</a>
            </div>
          </div>

          <div class="zes-login-footer">
            <a href="#">Contact Us</a>
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>

        <div class="zes-login-right">
          <div class="zes-login-hero-text">
            <h2 class="zes-login-hero-title">Affordable Cloud.</h2>
            <p class="zes-login-hero-desc">We use enterprise-grade hardware and software across datacenters around the world to provide you with a reliable and secure experience.</p>
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

      const fullUsername = u.includes('@') ? u : `${u}@${r}`;
      const params = new URLSearchParams();
      params.append('username', fullUsername);
      params.append('password', p);
      params.append('realm', r);

      fetch('/api2/extjs/access/ticket', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString()
      })
      .then(res => res.json())
      .then(data => {
        if (data.data && data.data.ticket) {
          document.cookie = `PVEAuthCookie=${data.data.ticket}; path=/; secure`;
          window.location.reload();
        } else {
          btn.disabled = false;
          btn.innerText = 'Sign in';
          if (errBox) {
            errBox.innerText = (data.errors ? Object.values(data.errors).join(', ') : 'Login failed. Please check your credentials.');
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

    // Inject Main Application Shell (Matches Convoy Screenshots 1:1)
    mountApp: function () {
      const existing = document.getElementById('zesium-app');
      if (existing) return;

      document.body.classList.add('zesium-active');

      const app = document.createElement('div');
      app.id = 'zesium-app';
      app.innerHTML = `
        <!-- Left Slim Rail (56px) -->
        <div id="zes-rail">
          <div class="zes-rail-logo" onclick="Zesium.navigateTo('servers')">
            <img src="/pve2/images/zesium/logo.svg" alt="Zesium Logo" />
          </div>

          <div class="zes-rail-nav">
            <button class="zes-rail-btn active" title="Cloud Servers" onclick="Zesium.navigateTo('servers')">
              ${Icons.cloud}
              <span>Cloud</span>
            </button>
            <button class="zes-rail-btn" title="Teams" onclick="Zesium.showToast('Teams', 'Owner Team Active')">
              ${Icons.teams}
              <span>Teams</span>
            </button>
            <button class="zes-rail-btn" title="Support" onclick="Zesium.showToast('Support', 'Support ticket portal ready.')">
              ${Icons.support}
              <span>Support</span>
            </button>
            <button class="zes-rail-btn" title="Account" onclick="Zesium.showToast('Account', 'Account settings')">
              ${Icons.account}
              <span>Account</span>
            </button>
          </div>
        </div>

        <!-- Main Navigation Sidebar (240px) -->
        <div id="zes-sidebar">
          <div class="zes-sidebar-header">
            <div style="font-size: 15px; font-weight: 700; color: #ffffff; margin-bottom: 12px; letter-spacing: -0.01em;">
              Advin Servers
            </div>
            <div class="zes-team-selector" onclick="Zesium.showToast('Team', 'Martin Šintler Team')">
              <div class="zes-team-avatar">
                ${Icons.teams}
              </div>
              <div class="zes-team-info">
                <div class="zes-team-name">Martin Šintler's Te...</div>
                <div class="zes-team-role">Owner</div>
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

            <!-- Other Products -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">Other Products</div>
              <a class="zes-menu-item" href="https://advinservers.com" target="_blank">
                ${Icons.globe}
                <span>Website Hosting</span>
                <span style="margin-left: auto; color: #71717a;">${Icons.external}</span>
              </a>
            </div>
          </div>

          <!-- Bottom Profile Card -->
          <div class="zes-sidebar-footer">
            <div class="zes-user-card" onclick="Zesium.showToast('User Profile', 'Martin Šintler (krioxtin@seznam.cz)')">
              <div class="zes-user-badge">MŠ</div>
              <div class="zes-user-details">
                <div class="zes-user-name">Martin Šintler</div>
                <div class="zes-user-email">krioxtin@seznam.cz</div>
              </div>
              <div class="zes-user-chevron">⇅</div>
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
              <div style="font-size: 13px; color: #a1a1aa; display: flex; align-items: center; gap: 8px;">
                <span>Martin Šintler's Credit</span>
                <span style="font-weight: 600; color: #ffffff;">0 US$ out of 1 000 US$</span>
                <div style="width: 50px; height: 4px; background: #27272a; border-radius: 99px;"></div>
              </div>

              <button class="zes-topbar-btn" onclick="Zesium.toggleNativeView()">
                Proxmox Native View ↗
              </button>
            </div>
          </div>

          <!-- Main View Body -->
          <div id="zes-main"></div>
        </div>
      `;

      document.body.appendChild(app);

      // Render initial view and fetch live servers
      this.render();
      this.fetchLiveServers();

      // Show welcome toast matching screenshot 212028.png
      setTimeout(() => {
        showToast('Setup completed', 'Your account is now ready to use.');
      }, 500);
    }
  };

  // Bootstrap on ExtJS Ready or DOM Ready
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
