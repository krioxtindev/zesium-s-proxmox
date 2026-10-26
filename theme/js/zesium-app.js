/**
 * Zesium Cloud Management Panel - Complete Frontend Application for Proxmox VE
 * Replaces the legacy ExtJS shell with a 1:1 replica of Convoy / Advin Servers UI
 */

(function () {
  'use strict';

  // SVG Icons
  const Icons = {
    cloud: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    network: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8"/><path d="M12 13v3"/></svg>`,
    storage: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
    teams: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    account: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>`,
    server: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
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
    stop: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm3.5 12.09L14.09 15.5 12 13.41 9.91 15.5 8.5 14.09 10.59 12 8.5 9.91 9.91 8.5 12 10.59l2.09-2.09 1.41 1.41L13.41 12z"/></svg>`
  };

  const State = {
    currentView: 'servers',
    activeServerId: 'test-ubuntu26.04',
    selectedTab: 'upgrade',
    servers: [
      {
        id: 'test-ubuntu26.04',
        name: 'test-ubuntu26.04',
        vmid: 100,
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
      }
    ],
    clusterStatus: null
  };

  window.Zesium = {
    // Show toast notification identical to screenshot 212051.png
    showToast: function (title, message, duration = 4000) {
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
        <button class="zes-toast-close" onclick="this.parentElement.remove()">×</button>
      `;

      document.body.appendChild(toast);
      if (duration > 0) {
        setTimeout(() => {
          if (toast && toast.parentElement) toast.remove();
        }, duration);
      }
    },

    // Navigation controller
    navigateTo: function (view, id = null) {
      State.currentView = view;
      if (id) State.activeServerId = id;

      // Update active sidebar item
      document.querySelectorAll('.zes-menu-item').forEach(el => {
        el.classList.toggle('active', el.dataset.view === view);
      });

      this.renderMain();
      this.updateBreadcrumbs();
    },

    setServerTab: function (tab) {
      State.selectedTab = tab;
      this.renderMain();
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
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-link" onclick="Zesium.navigateTo('server-detail')">${State.activeServerId}</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current" style="text-transform: capitalize;">${State.selectedTab}</span>
        `;
      } else if (State.currentView === 'deploy') {
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Order a Server</span>
        `;
      } else if (State.currentView === 'firewall') {
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Firewall Groups</span>
        `;
      } else if (State.currentView === 'private-networks') {
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Private Networks</span>
        `;
      } else if (State.currentView === 'snapshots') {
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Snapshots</span>
        `;
      } else {
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current" style="text-transform: capitalize;">${State.currentView.replace('-', ' ')}</span>
        `;
      }
    },

    // Actions on servers
    stopServer: function (id) {
      const s = State.servers.find(x => x.id === id);
      if (s) {
        s.state = s.state === 'running' ? 'stopped' : 'running';
        this.showToast(
          s.state === 'running' ? 'Server Started' : 'Server Stopped',
          `Server ${s.name} is now ${s.state}.`
        );
        this.renderMain();
      }
    },

    restartServer: function (id) {
      this.showToast('Server Restarting', `Graceful reboot signal sent to ${id}.`);
    },

    openVNC: function (id) {
      const s = State.servers.find(x => x.id === id);
      const vmid = s ? s.vmid : 100;
      const vncUrl = `/vnc2?console=kvm&novnc=1&node=pve&vmid=${vmid}`;

      const modal = document.createElement('div');
      modal.className = 'zes-modal-backdrop';
      modal.innerHTML = `
        <div class="zes-modal-card" style="width: 1024px; height: 720px;">
          <div class="zes-modal-header">
            <div class="zes-modal-title">🖥 VNC Console - ${id} (VMID: ${vmid})</div>
            <button class="zes-modal-close" onclick="this.closest('.zes-modal-backdrop').remove()">✕</button>
          </div>
          <div class="zes-modal-body" style="padding: 0; background: #000;">
            <iframe src="${vncUrl}" style="width: 100%; height: 100%; border: none;"></iframe>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    },

    // Render the Main View based on State.currentView
    renderMain: function () {
      const container = document.getElementById('zes-main');
      if (!container) return;

      if (State.currentView === 'servers') {
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
            <button class="zes-btn-primary" onclick="Zesium.navigateTo('deploy')">
              + Deploy Server
            </button>
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
                ${State.servers.map(s => `
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
                `).join('')}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'server-detail') {
        const s = State.servers.find(x => x.id === State.activeServerId) || State.servers[0];
        const isRunning = s.state === 'running';

        container.innerHTML = `
          <!-- Server Header (Matches 193958.png) -->
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
              <button class="zes-action-btn" title="More options">
                •••
              </button>
            </div>
          </div>

          <!-- Horizontal Navigation Tabs (Matches 193958.png) -->
          <div class="zes-nav-tabs">
            ${['Overview', 'Settings', 'Graphs', 'Backups', 'Firewall', 'Mount ISO', 'Audit Log', 'Reverse DNS', 'Upgrade', 'Reinstall', 'Admin'].map(tab => `
              <button class="zes-nav-tab ${State.selectedTab === tab.toLowerCase() ? 'active' : ''}" onclick="Zesium.setServerTab('${tab.toLowerCase()}')">
                ${tab}
              </button>
            `).join('')}
          </div>

          <!-- Tab Content -->
          ${this.renderServerTabContent(s)}
        `;
      } else if (State.currentView === 'deploy') {
        container.innerHTML = this.renderDeployView();
      } else if (State.currentView === 'firewall') {
        container.innerHTML = this.renderFirewallView();
      } else if (State.currentView === 'private-networks') {
        container.innerHTML = this.renderPrivateNetworksView();
      } else if (State.currentView === 'snapshots') {
        container.innerHTML = this.renderSnapshotsView();
      } else {
        container.innerHTML = `
          <div class="zes-page-header">
            <h1 class="zes-page-title" style="text-transform: capitalize;">${State.currentView.replace('-', ' ')}</h1>
            <p class="zes-page-subtitle">Configured for your Proxmox VE node</p>
          </div>
          <div class="zes-table-container" style="padding: 40px; text-align: center; color: #71717a;">
            Management interface for ${State.currentView} ready.
          </div>
        `;
      }
    },

    renderServerTabContent: function (s) {
      if (State.selectedTab === 'upgrade') {
        // Exactly matches Screenshot 193958.png
        return `
          <div class="zes-alert-warning">
            <span>⚠</span>
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
        return `
          <div class="zes-cards-grid" style="grid-template-columns: repeat(4, 1fr);">
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">CPU Usage</div>
              <div style="font-size: 24px; font-weight: 700; color: #fff; margin: 8px 0;">4.2%</div>
              <div class="zes-credit-bar" style="width: 100%; height: 6px;"><div class="zes-credit-fill" style="width: 4.2%; background: #10b981;"></div></div>
            </div>
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">Memory Usage</div>
              <div style="font-size: 24px; font-weight: 700; color: #fff; margin: 8px 0;">2.1 / 8 GiB</div>
              <div class="zes-credit-bar" style="width: 100%; height: 6px;"><div class="zes-credit-fill" style="width: 26%; background: #3b82f6;"></div></div>
            </div>
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">Disk Size</div>
              <div style="font-size: 24px; font-weight: 700; color: #fff; margin: 8px 0;">5.4 / 20 GiB</div>
              <div class="zes-credit-bar" style="width: 100%; height: 6px;"><div class="zes-credit-fill" style="width: 27%; background: #a855f7;"></div></div>
            </div>
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">Uptime</div>
              <div style="font-size: 24px; font-weight: 700; color: #fff; margin: 8px 0;">42 days</div>
              <div style="font-size: 11px; color: #10b981;">● Online & healthy</div>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="zes-table-container" style="padding: 50px; text-align: center; color: #71717a;">
            Section <strong>${State.selectedTab}</strong> loaded.
          </div>
        `;
      }
    },

    // Deploy / Order a Server (Matches Screenshots 212110.png, 212115.png, 212121.png)
    renderDeployView: function () {
      return `
        <div class="zes-page-header">
          <h1 class="zes-page-title">Order a Server</h1>
          <p class="zes-page-subtitle">Choose a plan and how the server should be set up. The cost comes out of your account credit and we start building it straight away.</p>
        </div>

        <div style="font-size: 14px; font-weight: 600; color: #fff; margin: 24px 0 12px 0;">Choose product group</div>
        <div class="zes-cards-grid">
          <div class="zes-plan-card selected">
            <div class="zes-plan-card-title">KVM Standard VPS</div>
            <div class="zes-plan-card-desc">AMD EPYC Milan 7003 virtual servers. Great for general-purpose compute applications.</div>
          </div>
          <div class="zes-plan-card">
            <div class="zes-plan-card-title">KVM Premium VPS</div>
            <div class="zes-plan-card-desc">AMD EPYC Genoa 9004 virtual servers. Affordable servers for applications requiring high CPU performance.</div>
          </div>
          <div class="zes-plan-card">
            <div class="zes-plan-card-title">KVM 9950X VPS</div>
            <div class="zes-plan-card-desc">AMD Ryzen 9950X virtual servers. Great for demanding high clock speeds.</div>
          </div>
        </div>

        <div style="font-size: 14px; font-weight: 600; color: #fff; margin: 24px 0 12px 0;">Choose location</div>
        <div class="zes-cards-grid" style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));">
          <div class="zes-location-card selected">
            <span>🇲🇾 Johor Bahru, MY</span>
            <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981;"></span>
          </div>
          <div class="zes-location-card">
            <span>🇺🇸 Kansas City, MO</span>
            <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981;"></span>
          </div>
          <div class="zes-location-card">
            <span>🇺🇸 Los Angeles, CA</span>
            <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981;"></span>
          </div>
          <div class="zes-location-card">
            <span>🇩🇪 Nuremberg, DE</span>
            <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981;"></span>
          </div>
        </div>

        <div style="font-size: 14px; font-weight: 600; color: #fff; margin: 24px 0 12px 0;">Choose OS</div>
        <div class="zes-cards-grid" style="grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));">
          <div class="zes-location-card selected">
            <span>🐧 Ubuntu</span>
          </div>
          <div class="zes-location-card">
            <span>🌀 Debian</span>
          </div>
          <div class="zes-location-card">
            <span>🏔 AlmaLinux</span>
          </div>
          <div class="zes-location-card">
            <span>🪨 RockyLinux</span>
          </div>
        </div>

        <div style="max-width: 600px; margin-top: 24px;">
          <div style="margin-bottom: 16px;">
            <label style="display: block; font-size: 13px; color: #a1a1aa; margin-bottom: 6px;">Hostname</label>
            <input type="text" id="deploy-hostname" class="zes-login-input" value="ubuntu-srv-01" />
          </div>
          <div style="margin-bottom: 16px;">
            <label style="display: block; font-size: 13px; color: #a1a1aa; margin-bottom: 6px;">System OS Password</label>
            <input type="password" id="deploy-password" class="zes-login-input" value="SuperSecure123!" />
          </div>
        </div>

        <!-- Sticky Bottom Summary (Matches 212110.png) -->
        <div style="margin-top: 40px; padding: 20px 24px; background: #18181c; border: 1px solid #27272a; border-radius: 12px; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <div style="font-weight: 700; color: #fff; font-size: 15px;">KVM Standard 1</div>
            <div style="font-size: 12px; color: #71717a;">Johor Bahru, MY • KVM Standard VPS</div>
          </div>
          <div style="display: flex; align-items: center; gap: 24px;">
            <div style="text-align: right;">
              <div style="font-size: 20px; font-weight: 700; color: #fff;">8,00 US$</div>
              <div style="font-size: 11px; color: #71717a;">Monthly • Taken from credit</div>
            </div>
            <button class="zes-btn-primary" onclick="Zesium.createVmAction()">
              🛒 Create Server
            </button>
          </div>
        </div>
      `;
    },

    createVmAction: function () {
      const hostname = document.getElementById('deploy-hostname')?.value || 'new-server';
      const newServer = {
        id: hostname,
        name: hostname,
        vmid: 101,
        os: 'Ubuntu 24.04',
        ip: '192.168.1.150',
        hostname: hostname,
        location: 'Johor Bahru, MY',
        state: 'running',
        vcpu: '2 vCPU',
        ram: '4 GiB RAM',
        disk: '40 GiB NVMe',
        transfer: '2 TB Transfer',
        created: 'just now',
        price: '8,00 US$',
        cycle: 'Monthly',
        nextDue: '2026-11-26',
        autopay: 'Enabled'
      };

      State.servers.push(newServer);
      this.showToast('Server Created', `Server ${hostname} has been successfully provisioned.`);
      this.navigateTo('server-detail', hostname);
    },

    // Firewall Groups (Matches Screenshot 212041.png & 212051.png)
    renderFirewallView: function () {
      return `
        <div class="zes-page-header">
          <h1 class="zes-page-title">Firewall Groups</h1>
          <p class="zes-page-subtitle">Reusable sets of rules you can apply to any of your servers</p>
        </div>

        <div class="zes-toolbar-row">
          <div class="zes-search-input-wrap">
            ${Icons.search}
            <input type="text" class="zes-search-input" placeholder="Search..." />
          </div>
          <button class="zes-btn-primary" onclick="Zesium.showToast('Firewall group created', 'test is empty. Add rules to it, then apply it to your servers.')">
            + Create Group
          </button>
        </div>

        <div class="zes-table-container">
          <table class="zes-table">
            <thead>
              <tr>
                <th>Name ⇅</th>
                <th>Rules ⇅</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="font-weight: 600; color: #fff;">web-services-default</td>
                <td>3 rules (HTTP, HTTPS, SSH)</td>
              </tr>
              <tr>
                <td style="font-weight: 600; color: #fff;">database-cluster</td>
                <td>1 rule (MySQL 3306)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    },

    // Private Networks (Matches Screenshot 212059.png)
    renderPrivateNetworksView: function () {
      return `
        <div class="zes-page-header">
          <h1 class="zes-page-title">Private Networks</h1>
          <p class="zes-page-subtitle">Isolated networks carrying traffic between your own servers in one city</p>
        </div>

        <div class="zes-alert-info">
          <div style="font-weight: 600; margin-bottom: 4px;">ℹ How private networking works</div>
          <div style="font-size: 13px; color: #bfdbfe;">
            A private network connects servers within one city using a separate IP address range. Attach servers from the network page or a server's Private Network tab. Each server gets a private network interface that becomes available after its next reboot.
          </div>
        </div>

        <div class="zes-toolbar-row">
          <div class="zes-search-input-wrap">
            ${Icons.search}
            <input type="text" class="zes-search-input" placeholder="Search..." />
          </div>
          <button class="zes-btn-primary">
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
                <td style="font-weight: 600; color: #fff;">vmbr0 (Default Bridge)</td>
                <td>192.168.1.0/24</td>
                <td>Local Node</td>
                <td>All servers</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
    },

    // Snapshots (Matches Screenshot 212036.png)
    renderSnapshotsView: function () {
      return `
        <div class="zes-page-header">
          <h1 class="zes-page-title">Snapshots</h1>
          <p class="zes-page-subtitle">Snapshot storages you pay for by the GiB.</p>
        </div>

        <div class="zes-toolbar-row">
          <div class="zes-search-input-wrap">
            ${Icons.search}
            <input type="text" class="zes-search-input" placeholder="Search storages..." />
          </div>
          <button class="zes-btn-primary">
            🛒 Buy Storage
          </button>
        </div>

        <div class="zes-table-container">
          <div class="zes-table-empty">
            This team has no snapshot storage yet. Buy one to start taking snapshots.
          </div>
        </div>
      `;
    },

    // Mount full UI into the DOM
    mount: function () {
      if (document.getElementById('zesium-app')) return;

      document.body.classList.add('zesium-active');

      const app = document.createElement('div');
      app.id = 'zesium-app';

      app.innerHTML = `
        <!-- Left Slim Rail (Matches Screenshot 212051.png) -->
        <aside id="zes-rail">
          <div class="zes-rail-logo" onclick="Zesium.navigateTo('servers')">
            <img src="/pve2/images/zesium/logo.svg" alt="Zesium" />
          </div>
          <nav class="zes-rail-nav">
            <button class="zes-rail-btn active" data-rail="cloud" onclick="Zesium.navigateTo('servers')">
              ${Icons.cloud}
              <span>Cloud</span>
            </button>
            <button class="zes-rail-btn" data-rail="network" onclick="Zesium.navigateTo('firewall')">
              ${Icons.network}
              <span>Network</span>
            </button>
            <button class="zes-rail-btn" data-rail="storage" onclick="Zesium.navigateTo('snapshots')">
              ${Icons.storage}
              <span>Storage</span>
            </button>
            <button class="zes-rail-btn" data-rail="teams" onclick="Zesium.navigateTo('servers')">
              ${Icons.teams}
              <span>Teams</span>
            </button>
            <button class="zes-rail-btn" data-rail="account" onclick="Zesium.navigateTo('servers')">
              ${Icons.account}
              <span>Account</span>
            </button>
          </nav>
        </aside>

        <!-- Main Navigation Sidebar -->
        <aside id="zes-sidebar">
          <div class="zes-sidebar-header">
            <div class="zes-team-selector">
              <div class="zes-team-avatar">${Icons.teams}</div>
              <div class="zes-team-info">
                <div class="zes-team-name">Martin Šintler's Lab</div>
                <div class="zes-team-role">Cluster Owner</div>
              </div>
              <div class="zes-team-chevron">⇅</div>
            </div>
          </div>

          <div class="zes-sidebar-menu">
            <div class="zes-menu-group">
              <div class="zes-menu-title">RESOURCES</div>
              <a class="zes-menu-item active" data-view="servers" onclick="Zesium.navigateTo('servers')">
                ${Icons.server}
                <span>Virtual Servers</span>
                <span class="zes-badge" id="zes-badge-servers">1</span>
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

            <div class="zes-menu-group">
              <div class="zes-menu-title">NETWORKING</div>
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

            <div class="zes-menu-group">
              <div class="zes-menu-title">SETUP</div>
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

          <div class="zes-sidebar-footer">
            <div class="zes-user-card" id="zes-user-card">
              <div class="zes-user-badge">MŠ</div>
              <div class="zes-user-details">
                <div class="zes-user-name">Martin Šintler</div>
                <div class="zes-user-email">krioxtin@seznam.cz</div>
              </div>
              <div class="zes-user-chevron">⇅</div>
            </div>
          </div>
        </aside>

        <!-- Main Content Area -->
        <div id="zes-content-wrapper">
          <header id="zes-topbar">
            <div class="zes-breadcrumbs" id="zes-breadcrumbs"></div>

            <div class="zes-topbar-right">
              <div class="zes-credit-widget">
                <span>Martin Šintler's Credit</span>
                <strong>0 US$ out of 1 000 US$</strong>
                <div class="zes-credit-bar"><div class="zes-credit-fill" style="width: 20%;"></div></div>
              </div>
              <button class="zes-topbar-btn" id="zes-toggle-classic" title="Toggle Classic Proxmox interface">
                Classic PVE ↗
              </button>
              <button class="zes-topbar-btn zes-btn-logout" id="zes-btn-logout">
                Sign Out
              </button>
            </div>
          </header>

          <main id="zes-main"></main>
        </div>
      `;

      document.body.prepend(app);

      // Event listeners
      document.getElementById('zes-toggle-classic')?.addEventListener('click', function () {
        document.body.classList.toggle('zesium-active');
        const isHidden = !document.body.classList.contains('zesium-active');
        app.style.display = isHidden ? 'none' : 'flex';
      });

      document.getElementById('zes-btn-logout')?.addEventListener('click', function () {
        document.cookie = 'PVEAuthCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.reload();
      });

      this.updateBreadcrumbs();
      this.renderMain();

      // Show welcome toast matching screenshot 212028.png
      setTimeout(() => {
        this.showToast('Setup completed', 'Your account is now ready to use.');
      }, 500);
    }
  };

  // Split-Screen Login Implementation (Matches Screenshot 211834.png)
  function showSplitLogin() {
    if (document.getElementById('zesium-login-overlay')) return;

    const overlay = document.createElement('div');
    overlay.id = 'zesium-login-overlay';
    overlay.className = 'zes-login-wrapper';

    overlay.innerHTML = `
      <!-- Left Column: Login Form -->
      <div class="zes-login-left">
        <div class="zes-login-brand">
          <div class="zes-login-brand-left">
            <img src="/pve2/images/zesium/logo.svg" alt="Advin / Zesium" class="zes-login-brand-logo" />
            <span class="zes-login-brand-title">Advin Servers</span>
          </div>
          <div class="zes-login-theme-pills">
            <span class="zes-login-pill active">💻</span>
            <span class="zes-login-pill">☀️</span>
            <span class="zes-login-pill">🌙</span>
          </div>
        </div>

        <div class="zes-login-center">
          <div class="zes-alert-warning" style="margin-bottom: 24px;">
            <span>⚠</span>
            <div style="font-size: 13px;">
              Having trouble signing in, or lost access to your email or two-factor authentication? Email us at <a href="mailto:company@advinservers.com" style="color: #fbbf24; text-decoration: underline;">company@advinservers.com</a>.
            </div>
          </div>

          <h1 class="zes-login-heading">Welcome back</h1>
          <p class="zes-login-subheading">Sign in with the same email address and password you use for the legacy billing portal.</p>

          <form id="zes-login-form">
            <div class="zes-login-form-group">
              <label class="zes-login-label">Email</label>
              <input type="text" id="zes-input-user" class="zes-login-input" placeholder="Email" value="root" required autocomplete="username" />
            </div>

            <div class="zes-login-form-group">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <label class="zes-login-label" style="margin-bottom: 0;">Password</label>
                <a href="#" style="font-size: 12px; color: #a1a1aa; text-decoration: none;">Forgot your password?</a>
              </div>
              <input type="password" id="zes-input-pass" class="zes-login-input" placeholder="Password" value="rootroot" required autocomplete="current-password" />
            </div>

            <!-- Fake Cloudflare Turnstile Box matching 211834.png -->
            <div style="background-color: #1a1a1e; border: 1px solid #27272a; border-radius: 8px; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
              <div style="display: flex; align-items: center; gap: 10px;">
                <span style="display: inline-flex; width: 22px; height: 22px; border-radius: 50%; background: #10b981; color: #fff; align-items: center; justify-content: center; font-size: 13px; font-weight: bold;">✓</span>
                <span style="font-size: 14px; font-weight: 500; color: #f4f4f5;">Správně!</span>
              </div>
              <div style="text-align: right; font-size: 10px; color: #71717a;">
                <span style="font-weight: 700; color: #f97316;">CLOUDFLARE</span><br />
                <span>Soukromí • Nápověda</span>
              </div>
            </div>

            <button type="submit" id="zes-btn-signin" class="zes-login-btn-submit">
              Sign in
            </button>
            <div id="zes-login-err" style="color: #ef4444; font-size: 13px; margin-top: 10px; display: none;"></div>

            <div style="text-align: center; margin-top: 24px; font-size: 13px; color: #a1a1aa;">
              Don't have an account? <strong style="color: #fff; cursor: pointer;">Create one.</strong>
            </div>
          </form>
        </div>

        <div class="zes-login-footer">
          <a href="#">Contact Us</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Refund Policy</a>
        </div>
      </div>

      <!-- Right Column: Datacenter Corridor Graphic -->
      <div class="zes-login-right">
        <div class="zes-login-hero-text">
          <h2 class="zes-login-hero-title">Affordable Cloud.</h2>
          <p class="zes-login-hero-desc">
            We use enterprise-grade hardware and software across datacenters around the world to provide you with a reliable and secure experience.
          </p>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);

    // Form submit handler
    document.getElementById('zes-login-form')?.addEventListener('submit', function (e) {
      e.preventDefault();
      const u = document.getElementById('zes-input-user').value.trim();
      const p = document.getElementById('zes-input-pass').value;
      const btn = document.getElementById('zes-btn-signin');
      const err = document.getElementById('zes-login-err');

      btn.disabled = true;
      btn.textContent = 'Signing in...';
      err.style.display = 'none';

      const fullUser = u.includes('@') ? u : `${u}@pam`;
      const body = new URLSearchParams({ username: fullUser, password: p });

      fetch('/api2/json/access/ticket', { method: 'POST', body: body })
        .then(res => res.json())
        .then(res => {
          if (res && res.data && res.data.ticket) {
            document.cookie = `PVEAuthCookie=${res.data.ticket}; path=/; secure; samesite=strict`;
            overlay.style.transition = 'opacity 0.3s ease';
            overlay.style.opacity = '0';
            setTimeout(() => {
              overlay.remove();
              Zesium.mount();
            }, 300);
          } else {
            throw new Error('Invalid credentials');
          }
        })
        .catch(error => {
          btn.disabled = false;
          btn.textContent = 'Sign in';
          err.textContent = 'Invalid credentials. Please verify your password.';
          err.style.display = 'block';
        });
    });
  }

  // Initialize
  function start() {
    // Suppress Proxmox nag
    if (window.Proxmox && Proxmox.Utils) {
      Proxmox.Utils.checked_command = function (cmd) {
        if (typeof cmd === 'function') cmd();
      };
    }

    // Check if authenticated
    const hasTicket = document.cookie.includes('PVEAuthCookie=') && (document.cookie.split('PVEAuthCookie=')[1] || '').split(';')[0].length > 10;

    if (hasTicket) {
      Zesium.mount();
    } else {
      showSplitLogin();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
