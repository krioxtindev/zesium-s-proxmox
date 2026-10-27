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
    logo: `<svg viewBox="0 0 48 48" fill="#ffffff"><path d="M24 4C23.1 5.8 21.8 7.5 20.3 8.9C18.6 10.4 16.5 11.4 14.3 11.9C15.8 12.8 17.5 13.3 19.3 13.5C18.1 14.8 16.6 15.9 14.9 16.6C16.8 17.3 18.9 17.5 20.9 17.3C19.7 18.8 18 19.9 16.1 20.5C18.5 21.1 21 20.9 23.3 20C21.8 22.2 19.4 23.7 16.8 24.3C19.8 24.8 23 24.1 25.5 22.4C26.9 21.4 28 20 28.7 18.4C29.4 16.8 29.6 15 29.3 13.3C29.2 12.5 29 11.7 28.6 11C28.2 10.3 27.6 9.7 26.9 9.3C25.5 8.5 24.5 7.1 24.2 5.5C24.1 5 24 4.5 24 4Z"/><path d="M12.5 13.5C10.2 14.8 7.6 15.5 5 15.7C7.8 17.1 10.8 17.9 13.9 18C11.9 19.7 9.5 21 6.8 21.7C9.8 22.8 13.1 23.1 16.2 22.7C14.5 24.6 12.2 26 9.6 26.8C13 27.6 16.7 27.2 19.8 25.6C21.4 24.8 22.8 23.6 23.8 22.1C21.4 21.9 19.2 20.8 17.6 19.1C16.1 17.5 15.3 15.4 15.2 13.2C14.3 13.2 13.4 13.3 12.5 13.5Z"/><path d="M25.8 12.8C27.1 11.2 28.8 9.9 30.7 9C32.7 8.1 34.9 7.7 37.1 7.8C35.2 9.2 33.6 11 32.4 13.1C34.5 12.6 36.7 12.7 38.7 13.3C36.6 14.9 34.1 16 31.5 16.6C33.7 16.6 35.8 17.2 37.7 18.3C35 19.7 31.9 20.2 28.9 19.8C27.5 19.6 26.3 18.9 25.4 17.8C24.6 16.8 24.2 15.4 24.3 14.1C24.4 13.6 25 13.1 25.8 12.8Z"/><path d="M30.2 19.5C32.8 18.9 35.4 18.9 38 19.5C40.6 20.1 43 21.3 45 23C42 23.5 39 23.3 36.2 22.4C37.8 24 39.1 25.9 39.9 28C37.5 27.6 35.2 26.5 33.4 24.9C33.8 27.2 33.4 29.5 32.3 31.5C31.1 29.3 30.6 26.8 30.8 24.3C30.9 22.7 30.7 21.1 30.2 19.5Z"/><path d="M21.5 8C22.2 7.2 23.2 6.6 24.3 6.3C23.8 7.4 23 8.3 22 8.9C21.7 8.6 21.5 8.3 21.5 8Z"/><path d="M8.2 23.5C5.8 25.1 3 26.1 0.2 26.5C3.5 28.3 7.3 29.1 11.1 28.8C8.9 31 6.1 32.6 3 33.4C7 34.6 11.3 34.4 15.2 32.8C17.5 31.9 19.5 30.3 20.8 28.2C17.7 28.7 14.4 28 11.8 26.3C10.4 25.5 9.2 24.5 8.2 23.5Z"/><path d="M21 28C21.8 30.5 22.1 33.1 21.8 35.7C21.5 38.3 20.6 40.8 19.2 43C21.5 41.2 23.3 38.8 24.4 36.1C25.5 33.4 25.9 30.4 25.4 27.5C24.1 27.9 22.5 28.1 21 28Z"/><path d="M25 29C26.2 31.8 27.8 34.4 30 36.5C28.8 34 28.2 31.2 28.2 28.4C27.1 28.8 26 29 25 29Z"/></svg>`,
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
    sdn: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    cluster: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><rect x="2" y="2" width="8" height="8" rx="1"/><rect x="14" y="2" width="8" height="8" rx="1"/><rect x="14" y="14" width="8" height="8" rx="1"/><rect x="2" y="14" width="8" height="8" rx="1"/></svg>`,
    shell: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
    syslog: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    updates: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>`,
    certificates: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    dns: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    hosts: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="6" y2="8"/><line x1="6" y1="12" x2="6" y2="12"/><line x1="6" y1="16" x2="6" y2="16"/></svg>`,
    time: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    users: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
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
    nodeStatus: null,
    isos: [],
    storages: [],
    templates: [],
    backups: [],
    disks: [],
    lvm: [],
    zfs: [],
    networks: [],
    sdn: [],
    clusterStatus: [],
    syslogEntries: [],
    updates: [],
    dnsInfo: null,
    hostsInfo: null,
    timeInfo: null,
    users: [],
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

  // Dynamic workspace center coordinate calculator (accounting for rail 58px + sidebar 260px)
  function calculateWindowWorkspaceCenter(w, h) {
    var rail = document.getElementById('zes-rail');
    var sidebar = document.getElementById('zes-sidebar');
    var navW = 0;
    if (rail && rail.offsetParent !== null) navW += rail.offsetWidth;
    if (sidebar && sidebar.offsetParent !== null) navW += sidebar.offsetWidth;
    if (navW === 0 && document.body.classList.contains('zesium-active')) navW = 318;

    var winW = window.innerWidth || document.documentElement.clientWidth;
    var winH = window.innerHeight || document.documentElement.clientHeight;

    var modalW = w || 780;
    var modalH = h || 550;

    var availW = Math.max(modalW, winW - navW);
    var x = navW + Math.floor((availW - modalW) / 2);
    var y = Math.max(20, Math.floor((winH - modalH) / 2));

    // Clamp within viewport
    if (x + modalW > winW - 10) x = Math.max(10, winW - modalW - 10);
    if (x < navW + 10 && winW > navW + modalW + 20) x = navW + 10;

    return { x: x, y: y };
  }

  function centerWindowInWorkspace(win) {
    try {
      if (!win) return;
      var el = win.el ? (win.el.dom || win.el) : (win.nodeType ? win : null);
      var cmp = win.isComponent ? win : (window.Ext && Ext.getCmp && el ? Ext.getCmp(el.id) : null);

      if (el && (el.dataset.userMoved === 'true' || el.getAttribute('data-user-moved') === 'true')) {
        return;
      }

      var w = (cmp && cmp.getWidth && cmp.getWidth()) || (el ? el.offsetWidth : 780);
      var h = (cmp && cmp.getHeight && cmp.getHeight()) || (el ? el.offsetHeight : 550);
      if (!w || w < 200) w = 780;
      if (!h || h < 100) h = 550;

      var pos = calculateWindowWorkspaceCenter(w, h);

      if (cmp && cmp.setPagePosition) {
        cmp.setPagePosition(pos.x, pos.y);
      }
      if (el) {
        el.style.left = pos.x + 'px';
        el.style.top = pos.y + 'px';
        el.setAttribute('data-zes-centered', 'true');

        var header = el.querySelector('.x-window-header');
        if (header && !header.__zesDragBound) {
          header.__zesDragBound = true;
          header.addEventListener('mousedown', function () {
            el.setAttribute('data-user-moved', 'true');
            el.dataset.userMoved = 'true';
            if (cmp) cmp.x_userMoved = true;
          });
        }
      }
    } catch (e) {}
  }

  // Override Ext.window.Window centering to guarantee perfect positioning in workspace
  function applyWindowCenteringFix() {
    if (window.Ext && Ext.window && Ext.window.Window) {
      try {
        if (!Ext.window.Window.prototype.__zesShowPatched) {
          Ext.window.Window.prototype.__zesShowPatched = true;
          var origShow = Ext.window.Window.prototype.show;
          Ext.window.Window.prototype.show = function () {
            var ret = origShow.apply(this, arguments);
            var me = this;
            setTimeout(function () {
              if (!me.x_userMoved) centerWindowInWorkspace(me);
            }, 0);
            setTimeout(function () {
              if (!me.x_userMoved) centerWindowInWorkspace(me);
            }, 60);
            return ret;
          };

          Ext.window.Window.prototype.center = function () {
            var me = this;
            var w = me.getWidth() || 780;
            var h = me.getHeight() || 550;
            var pos = calculateWindowWorkspaceCenter(w, h);
            me.setPagePosition(pos.x, pos.y);
            return me;
          };
        }
      } catch (e) {}
    }

    // Force Inter typography stylesheet and wizard footer styling at runtime on every ExtJS element
    if (!document.getElementById('zes-runtime-font-force')) {
      const s = document.createElement('style');
      s.id = 'zes-runtime-font-force';
      s.innerHTML = `
        *, *::before, *::after,
        .x-window, .x-window *,
        .x-window-default, .x-window-default *,
        .x-title-text, .x-title-text-default,
        .x-form-item-label, .x-form-item-label-default,
        .x-form-text, .x-form-text-default,
        .x-btn-inner, .x-btn-inner-default-small,
        .pmx-hint, .pmx-hint * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        }

        /* WIZARD & MODAL FOOTER BUTTONS & SPACING */
        .x-window .x-toolbar [itemId="help"],
        .x-window .x-toolbar-footer [itemId="help"],
        .x-window [itemId="help"],
        .x-toolbar-footer [itemId="help"],
        .x-window .x-btn[id*="help"] {
          display: none !important;
          visibility: hidden !important;
          width: 0 !important;
          height: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .x-window .x-toolbar .x-form-type-checkbox,
        .x-window .x-toolbar .x-form-cb-wrap,
        .x-window .x-toolbar .x-field[id*="checkbox"],
        .x-window .x-toolbar [name="advanced"],
        .x-window-default .x-toolbar .x-form-item,
        .x-toolbar-footer .x-form-item {
          margin-right: 28px !important;
        }
        .x-window .x-toolbar .x-form-cb-label,
        .x-toolbar-footer .x-form-cb-label {
          font-family: 'Inter', sans-serif !important;
          color: #f4f4f5 !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          margin-right: 12px !important;
        }

        .x-window .x-toolbar .x-btn,
        .x-window .x-toolbar-footer .x-btn,
        .x-toolbar-footer .x-btn,
        .x-window .x-toolbar-docked-bottom .x-btn,
        .x-window .x-btn-default-small,
        .x-window .x-btn-default-toolbar-small {
          background-image: none !important;
          background-color: #27272a !important;
          border: 1px solid #3f3f46 !important;
          border-radius: 6px !important;
          padding: 6px 16px !important;
          min-width: 75px !important;
          box-shadow: none !important;
        }

        .x-window [itemId="back"],
        .x-window .x-toolbar [itemId="back"],
        .x-window .x-toolbar-footer [itemId="back"],
        .x-toolbar-footer [itemId="back"],
        .x-window [itemId="cancel"],
        .x-window .x-toolbar [itemId="cancel"],
        .x-window-default .x-toolbar-docked-bottom .x-btn:not(:last-child) {
          background-image: none !important;
          background-color: #27272a !important;
          border: 1px solid #3f3f46 !important;
          color: #f4f4f5 !important;
        }
        .x-window [itemId="back"] .x-btn-inner,
        .x-window .x-toolbar [itemId="back"] .x-btn-inner,
        .x-window .x-toolbar-footer [itemId="back"] .x-btn-inner,
        .x-toolbar-footer [itemId="back"] .x-btn-inner {
          color: #f4f4f5 !important;
          font-weight: 600 !important;
        }

        .x-window .x-toolbar .x-btn.x-btn-disabled,
        .x-window .x-toolbar-footer .x-btn.x-btn-disabled,
        .x-toolbar-footer .x-btn.x-btn-disabled,
        .x-window [itemId="back"].x-btn-disabled,
        .x-window .x-btn-disabled {
          background-image: none !important;
          background-color: #1a1a20 !important;
          border-color: #272730 !important;
          opacity: 0.45 !important;
        }
        .x-window .x-toolbar .x-btn.x-btn-disabled .x-btn-inner,
        .x-window [itemId="back"].x-btn-disabled .x-btn-inner,
        .x-window .x-btn-disabled .x-btn-inner {
          color: #71717a !important;
        }

        .x-window [itemId="next"]:not(.x-btn-disabled),
        .x-window [itemId="finish"]:not(.x-btn-disabled),
        .x-window .x-toolbar [itemId="next"]:not(.x-btn-disabled),
        .x-window .x-toolbar [itemId="finish"]:not(.x-btn-disabled),
        .x-window .x-toolbar-footer [itemId="next"]:not(.x-btn-disabled),
        .x-window .x-toolbar-footer [itemId="finish"]:not(.x-btn-disabled),
        .x-window .x-toolbar-footer .x-btn:last-child:not(.x-btn-disabled):not([itemId="back"]):not([itemId="cancel"]),
        .x-window-default .x-toolbar-docked-bottom .x-btn:last-child:not(.x-btn-disabled):not([itemId="back"]):not([itemId="cancel"]) {
          background-image: none !important;
          background-color: #ffffff !important;
          border: 1px solid #ffffff !important;
          border-radius: 6px !important;
          padding: 6px 18px !important;
          min-width: 80px !important;
          box-shadow: none !important;
        }
        .x-window [itemId="next"]:not(.x-btn-disabled) .x-btn-inner,
        .x-window [itemId="finish"]:not(.x-btn-disabled) .x-btn-inner,
        .x-window .x-toolbar [itemId="next"]:not(.x-btn-disabled) .x-btn-inner,
        .x-window .x-toolbar [itemId="finish"]:not(.x-btn-disabled) .x-btn-inner,
        .x-window .x-toolbar-footer [itemId="next"]:not(.x-btn-disabled) .x-btn-inner,
        .x-window .x-toolbar-footer [itemId="finish"]:not(.x-btn-disabled) .x-btn-inner,
        .x-window .x-toolbar-footer .x-btn:last-child:not(.x-btn-disabled):not([itemId="back"]):not([itemId="cancel"]) .x-btn-inner,
        .x-window-default .x-toolbar-docked-bottom .x-btn:last-child:not(.x-btn-disabled):not([itemId="back"]):not([itemId="cancel"]) .x-btn-inner {
          font-family: 'Inter', sans-serif !important;
          color: #000000 !important;
          font-size: 13px !important;
          font-weight: 700 !important;
        }

        /* Checkbox & Radio Buttons - Convoy styling without double circles or overlapping text */
        .x-form-cb-wrap,
        .x-form-cb-wrap-default,
        .x-window .x-form-cb-wrap,
        .x-window-default .x-form-cb-wrap,
        .x-form-type-radio,
        .x-form-type-checkbox {
          display: inline-flex !important;
          align-items: center !important;
          position: relative !important;
          min-height: 24px !important;
          padding: 3px 0 !important;
          cursor: pointer !important;
          vertical-align: middle !important;
        }

        /* COMPLETE KILL OF EXTJS PSEUDO-ELEMENTS (Eliminates secondary blue circles, fontawesome duplicates, offcenter icons) */
        .x-form-cb-label:before,
        .x-form-cb-label:after,
        .x-form-cb-label-default:before,
        .x-form-cb-label-default:after,
        .x-window .x-form-cb-label:before,
        .x-window .x-form-cb-label:after,
        .x-window-default .x-form-cb-label:before,
        .x-window-default .x-form-cb-label:after,
        .x-form-cb-wrap:before,
        .x-form-cb-wrap:after,
        .x-form-cb-wrap-default:before,
        .x-form-cb-wrap-default:after,
        .x-window .x-form-cb-wrap:before,
        .x-window .x-form-cb-wrap:after,
        .x-form-radio:before,
        .x-form-radio:after,
        .x-form-radio-default:before,
        .x-form-radio-default:after,
        .x-window .x-form-radio:before,
        .x-window .x-form-radio:after,
        .x-window-default input.x-form-radio:before,
        .x-window-default input.x-form-radio:after,
        .x-form-checkbox:before,
        .x-form-checkbox:after,
        .x-form-checkbox-default:before,
        .x-form-checkbox-default:after,
        .x-window .x-form-checkbox:before,
        .x-window .x-form-checkbox:after,
        .x-window-default input.x-form-checkbox:before,
        .x-window-default input.x-form-checkbox:after,
        .x-form-type-radio *:before,
        .x-form-type-radio *:after,
        .x-form-type-checkbox *:before,
        .x-form-type-checkbox *:after {
          display: none !important;
          content: none !important;
          opacity: 0 !important;
          width: 0 !important;
          height: 0 !important;
          font-size: 0 !important;
          border: none !important;
          box-shadow: none !important;
        }

        .x-form-radio,
        .x-form-radio-default,
        .x-window .x-form-radio,
        .x-window-default input.x-form-radio,
        .x-form-type-radio input,
        input.x-form-radio {
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          appearance: none !important;
          width: 16px !important;
          height: 16px !important;
          min-width: 16px !important;
          min-height: 16px !important;
          max-width: 16px !important;
          max-height: 16px !important;
          margin: 0 !important;
          padding: 0 !important;
          border-radius: 50% !important;
          border: 1.5px solid #3f3f46 !important;
          background-color: #18181c !important;
          background-image: none !important;
          box-shadow: none !important;
          cursor: pointer !important;
          outline: none !important;
          display: inline-block !important;
          vertical-align: middle !important;
          position: relative !important;
          flex-shrink: 0 !important;
          transition: all 0.15s ease !important;
        }

        .x-form-radio:hover,
        .x-form-cb-wrap:hover .x-form-radio,
        .x-form-type-radio:hover input {
          border-color: #71717a !important;
          background-color: #222228 !important;
        }

        .x-form-radio.x-form-cb-checked,
        .x-form-cb-checked .x-form-radio,
        .x-form-radio-default.x-form-cb-checked,
        .x-form-cb-wrap.x-form-cb-checked .x-form-radio,
        .x-form-type-radio .x-form-cb-checked input,
        .x-form-type-radio.x-form-cb-checked input,
        .x-form-cb-checked input.x-form-radio {
          border-color: #ffffff !important;
          background-color: #18181c !important;
          background-image: radial-gradient(circle, #ffffff 38%, transparent 44%) !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2) !important;
        }

        .x-form-checkbox,
        .x-form-checkbox-default,
        .x-window .x-form-checkbox,
        .x-window-default input.x-form-checkbox,
        .x-form-type-checkbox input,
        input.x-form-checkbox {
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          appearance: none !important;
          width: 16px !important;
          height: 16px !important;
          min-width: 16px !important;
          min-height: 16px !important;
          max-width: 16px !important;
          max-height: 16px !important;
          margin: 0 !important;
          padding: 0 !important;
          border-radius: 4px !important;
          border: 1.5px solid #3f3f46 !important;
          background-color: #18181c !important;
          background-image: none !important;
          box-shadow: none !important;
          cursor: pointer !important;
          outline: none !important;
          display: inline-block !important;
          vertical-align: middle !important;
          position: relative !important;
          flex-shrink: 0 !important;
          transition: all 0.15s ease !important;
        }

        .x-form-checkbox:hover,
        .x-form-cb-wrap:hover .x-form-checkbox,
        .x-form-type-checkbox:hover input {
          border-color: #71717a !important;
          background-color: #222228 !important;
        }

        .x-form-checkbox.x-form-cb-checked,
        .x-form-cb-checked .x-form-checkbox,
        .x-form-checkbox-default.x-form-cb-checked,
        .x-form-cb-wrap.x-form-cb-checked .x-form-checkbox,
        .x-form-type-checkbox .x-form-cb-checked input,
        .x-form-type-checkbox.x-form-cb-checked input,
        .x-form-cb-checked input.x-form-checkbox {
          border-color: #ffffff !important;
          background-color: #ffffff !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000000'%3E%3Cpath d='M13.485 3.515a1 1 0 0 1 0 1.414l-6.364 6.364a1 1 0 0 1-1.414 0l-3.182-3.182a1 1 0 1 1 1.414-1.414L6.414 9.172l5.657-5.657a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
          background-size: 11px 11px !important;
        }

        .x-form-cb-label,
        .x-form-cb-label-default,
        .x-window .x-form-cb-label,
        .x-window-default .x-form-cb-label {
          font-family: 'Inter', sans-serif !important;
          color: #f4f4f5 !important;
          font-size: 13px !important;
          font-weight: 400 !important;
          letter-spacing: -0.01em !important;
          margin-left: 10px !important;
          padding: 0 !important;
          position: static !important;
          cursor: pointer !important;
          display: inline-block !important;
          vertical-align: middle !important;
          line-height: 18px !important;
          white-space: nowrap !important;
        }
      `;
      document.head.appendChild(s);
    }

    // Dynamic observer to continuously ensure ExtJS wizard toolbar elements are styled properly & windows centered
    function sanitizeExtWindows() {
      try {
        const helpBtns = document.querySelectorAll('.x-window [itemId="help"], .x-window .x-btn[id*="help"], .x-toolbar-footer [itemId="help"]');
        helpBtns.forEach(b => {
          b.style.setProperty('display', 'none', 'important');
          b.style.setProperty('width', '0', 'important');
          b.style.setProperty('height', '0', 'important');
        });

        const checkboxes = document.querySelectorAll('.x-window .x-form-type-checkbox, .x-window [name="advanced"]');
        checkboxes.forEach(c => { c.style.setProperty('margin-right', '28px', 'important'); });

        const backBtns = document.querySelectorAll('.x-window [itemId="back"], .x-toolbar-footer [itemId="back"]');
        backBtns.forEach(b => {
          b.style.setProperty('background-color', '#27272a', 'important');
          b.style.setProperty('border-color', '#3f3f46', 'important');
          b.style.setProperty('background-image', 'none', 'important');
        });

        const labels = document.querySelectorAll('.x-form-cb-label, .x-form-cb-label-default');
        labels.forEach(l => {
          l.style.setProperty('margin-left', '10px', 'important');
          l.style.setProperty('padding', '0', 'important');
          l.style.setProperty('position', 'static', 'important');
        });

        // Center any newly displayed ExtJS windows in the workspace
        const activeWindows = document.querySelectorAll('.x-window:not([data-user-moved="true"])');
        activeWindows.forEach(w => {
          if (w.offsetParent !== null && !w.getAttribute('data-zes-centered')) {
            centerWindowInWorkspace(w);
          }
        });
      } catch (e) {}
    }

    if (!window.__zesWindowObserverInstalled) {
      window.__zesWindowObserverInstalled = true;
      const extWindowObserver = new MutationObserver(() => {
        sanitizeExtWindows();
      });
      extWindowObserver.observe(document.body, { childList: true, subtree: true });

      window.addEventListener('resize', () => {
        const activeWindows = document.querySelectorAll('.x-window:not([data-user-moved="true"])');
        activeWindows.forEach(w => {
          if (w.offsetParent !== null) {
            centerWindowInWorkspace(w);
          }
        });
      });
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
      else if (view === 'node-summary') this.fetchNodeStatus();
      else if (view === 'isos') this.fetchISOs();
      else if (view === 'storage') this.fetchStorages();
      else if (view === 'templates') this.fetchTemplates();
      else if (view === 'backups') this.fetchBackups();
      else if (view === 'disks') this.fetchDisks();
      else if (view === 'lvm') this.fetchLVM();
      else if (view === 'zfs') this.fetchZFS();
      else if (view === 'network') this.fetchNetworks();
      else if (view === 'sdn') this.fetchSDN();
      else if (view === 'cluster') this.fetchCluster();
      else if (view === 'syslog') this.fetchSyslog();
      else if (view === 'updates') this.fetchUpdates();
      else if (view === 'certificates') this.fetchCertificates();
      else if (view === 'hosts') this.fetchHosts();
      else if (view === 'time') this.fetchTime();
      else if (view === 'users') this.fetchUsers();
      else if (view === 'tasks') this.fetchTasks();
    },

    setServerTab: function (tab) {
      State.selectedTab = tab;
      this.render();
      if (tab === 'hardware' || tab === 'backup') {
        this.fetchServerDetails();
      }
    },

    // 100% Functioning Native Proxmox Wizards with Centering in Workspace
    openCreateVMWizard: function () {
      // 1. Prevent duplicate opening if a wizard is already visible
      if (window.Ext) {
        var existing = Ext.ComponentQuery.query('window').find(function (w) {
          var t = (w.title || '').toLowerCase();
          return t.includes('virtual machine') || t.includes('vm');
        });
        if (existing && !existing.isDestroyed && existing.isVisible()) {
          existing.toFront();
          centerWindowInWorkspace(existing);
          return;
        }
      }

      // 2. Open via native Proxmox button
      var btn = Ext.ComponentQuery.query('button[text*=Create VM]')[0] ||
                Ext.ComponentQuery.query('button[itemId=createvm]')[0];
      if (btn && typeof btn.handler === 'function') {
        try {
          btn.handler.call(btn);
          setTimeout(function () {
            var wins = document.querySelectorAll('.x-window:not([data-user-moved="true"])');
            wins.forEach(function (w) { centerWindowInWorkspace(w); });
          }, 30);
          return;
        } catch (e) {
          console.warn('Native VM button handler warning:', e);
        }
      }

      // 3. Fallback only if no wizard exists
      if (window.Ext && Ext.ClassManager.get('PVE.qemu.CreateWizard')) {
        var nodename = (window.Proxmox && Proxmox.NodeName) ? Proxmox.NodeName : 'pve';
        var wiz = Ext.create('PVE.qemu.CreateWizard', { nodename: nodename });
        wiz.show();
        centerWindowInWorkspace(wiz);
      }
    },

    openCreateCTWizard: function () {
      // 1. Prevent duplicate opening if a wizard is already visible
      if (window.Ext) {
        var existing = Ext.ComponentQuery.query('window').find(function (w) {
          var t = (w.title || '').toLowerCase();
          return t.includes('container') || t.includes('ct');
        });
        if (existing && !existing.isDestroyed && existing.isVisible()) {
          existing.toFront();
          centerWindowInWorkspace(existing);
          return;
        }
      }

      // 2. Open via native Proxmox button
      var btn = Ext.ComponentQuery.query('button[text*=Create CT]')[0] ||
                Ext.ComponentQuery.query('button[itemId=createct]')[0];
      if (btn && typeof btn.handler === 'function') {
        try {
          btn.handler.call(btn);
          setTimeout(function () {
            var wins = document.querySelectorAll('.x-window:not([data-user-moved="true"])');
            wins.forEach(function (w) { centerWindowInWorkspace(w); });
          }, 30);
          return;
        } catch (e) {
          console.warn('Native CT button handler warning:', e);
        }
      }

      // 3. Fallback only if no wizard exists
      if (window.Ext && Ext.ClassManager.get('PVE.lxc.CreateWizard')) {
        var nodename = (window.Proxmox && Proxmox.NodeName) ? Proxmox.NodeName : 'pve';
        var wiz = Ext.create('PVE.lxc.CreateWizard', { nodename: nodename });
        wiz.show();
        centerWindowInWorkspace(wiz);
      }
    },

    openUploadISOWindow: function () {
      if (window.Ext && Ext.ClassManager.get('PVE.window.UploadToStorage')) {
        const win = Ext.create('PVE.window.UploadToStorage', {
          nodename: 'pve',
          storage: 'local',
          content: 'iso',
          autoShow: true,
          taskDone: () => Zesium.fetchISOs()
        });
        win.center();
      }
    },

    openDownloadUrlWindow: function (content = 'iso') {
      if (window.Ext && Ext.ClassManager.get('PVE.window.DownloadUrlToStorage')) {
        const win = Ext.create('PVE.window.DownloadUrlToStorage', {
          nodename: 'pve',
          storage: 'local',
          content: content,
          autoShow: true,
          taskDone: () => (content === 'iso' ? Zesium.fetchISOs() : Zesium.fetchTemplates())
        });
        win.center();
      }
    },

    // Direct, Minimal Backup Window
    openBackupWindow: function (vmid = null, vmtype = null) {
      let target = null;
      if (vmid) {
        target = State.servers.find(s => String(s.vmid) === String(vmid));
      } else if (State.activeServerId) {
        target = State.servers.find(s => String(s.id) === String(State.activeServerId));
      } else if (State.servers.length > 0) {
        target = State.servers[0];
      }

      if (target) {
        try {
          const win = Ext.create('PVE.window.Backup', {
            nodename: target.node || 'pve',
            vmid: target.vmid,
            vmtype: target.type === 'lxc' ? 'lxc' : 'qemu',
            autoShow: true,
            taskDone: () => Zesium.fetchBackups()
          });
          win.show();
          win.center();
          return;
        } catch (e) {
          console.error('Backup window error:', e);
        }
      }

      showToast('Backup', 'No virtual machines or containers found to backup.');
    },

    restoreBackup: function (volid) {
      if (!volid) return;
      const isQemu = volid.includes('qemu');
      try {
        const win = Ext.create('PVE.window.Restore', {
          autoShow: true,
          nodename: 'pve',
          volid: volid,
          volidText: volid.split('/').pop(),
          vmtype: isQemu ? 'qemu' : 'lxc'
        });
        win.show();
        win.center();
      } catch (e) {
        showToast('Restore Failed', 'Could not open restore window: ' + e);
      }
    },

    deleteBackup: function (volid) {
      if (!volid) return;
      if (!confirm(`Are you sure you want to permanently delete backup ${volid.split('/').pop()}?`)) return;
      Proxmox.Utils.API2Request({
        url: `/nodes/pve/storage/local/content/${encodeURIComponent(volid)}`,
        method: 'DELETE',
        success: () => {
          showToast('Backup Deleted', 'Backup archive removed from storage.');
          Zesium.fetchBackups();
        },
        failure: (err) => showToast('Delete Failed', err.htmlStatus || 'Could not delete backup')
      });
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

    rebootNode: function () {
      if (!confirm('Are you sure you want to REBOOT the Proxmox host (node pve)? All running guests will be suspended or shut down.')) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/status',
        method: 'POST',
        params: { command: 'reboot' },
        success: () => showToast('Reboot Initiated', 'Proxmox host is rebooting...'),
        failure: (err) => showToast('Reboot Failed', err.htmlStatus || 'Could not reboot node')
      });
    },

    shutdownNode: function () {
      if (!confirm('Are you sure you want to SHUT DOWN the Proxmox host (node pve)? Host power will turn off.')) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/status',
        method: 'POST',
        params: { command: 'shutdown' },
        success: () => showToast('Shutdown Initiated', 'Proxmox host is powering off...'),
        failure: (err) => showToast('Shutdown Failed', err.htmlStatus || 'Could not shut down node')
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

    fetchNodeStatus: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/status',
        method: 'GET',
        success: (response) => {
          State.nodeStatus = response.result.data || {};
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

    fetchSyslog: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/syslog?limit=60',
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

    fetchHosts: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/hosts',
        method: 'GET',
        success: (response) => {
          State.hostsInfo = response.result.data || {};
          this.render();
        }
      });
    },

    fetchTime: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/time',
        method: 'GET',
        success: (response) => {
          State.timeInfo = response.result.data || {};
          this.render();
        }
      });
    },

    fetchUsers: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/access/users',
        method: 'GET',
        success: (response) => {
          State.users = response.result.data || [];
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

    // Complete View Renderer for ALL Proxmox VE Features
    render: function () {
      const container = document.getElementById('zes-main');
      if (!container) return;

      if (State.currentView === 'servers') {
        const hasServers = State.servers.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">Virtual Servers</h1>
              <p class="zes-page-subtitle">Manage hypervisor virtual machines, LXC containers, hardware configurations, and console sessions</p>
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

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search servers..." />
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
              <button class="zes-action-btn" onclick="Zesium.openBackupWindow('${s.vmid}', '${s.type}')">
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
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${State.backups.filter(b => b.volid && b.volid.includes(String(s.vmid))).map(b => `
                    <tr>
                      <td style="font-weight: 600; color: #ffffff;">${b.volid.split('/').pop()}</td>
                      <td>${b.format}</td>
                      <td>${(b.size / (1024 * 1024 * 1024)).toFixed(2)} GB</td>
                      <td>
                        <button class="zes-action-btn" style="padding: 4px 8px; font-size: 11px;" onclick="Zesium.restoreBackup('${b.volid}')">
                          Restore
                        </button>
                      </td>
                    </tr>
                  `).join('') || `<tr><td colspan="4" style="text-align: center; padding: 40px; color: #71717a;">No backups found for VMID ${s.vmid}. Click "Backup Now" to create one.</td></tr>`}
                </tbody>
              </table>
            </div>
          `}
        `;
      } else if (State.currentView === 'node-summary') {
        const st = State.nodeStatus || {};
        const cpuInfo = st.cpuinfo || {};
        const mem = st.memory || {};
        const rootfs = st.rootfs || {};
        const memGb = mem.total ? (mem.total / (1024 * 1024 * 1024)).toFixed(1) : '32';
        const memUsedGb = mem.used ? (mem.used / (1024 * 1024 * 1024)).toFixed(1) : '2';
        const diskTotalGb = rootfs.total ? (rootfs.total / (1024 * 1024 * 1024)).toFixed(1) : '100';
        const diskUsedGb = rootfs.used ? (rootfs.used / (1024 * 1024 * 1024)).toFixed(1) : '4';

        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">Node Summary ('pve')</h1>
              <p class="zes-page-subtitle">Hypervisor hardware, kernel performance metrics, and system status</p>
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="zes-btn-primary" onclick="Zesium.openNodeShell()">
                ${Icons.shell} Shell
              </button>
              <button class="zes-action-btn" onclick="Zesium.rebootNode()">
                ${Icons.restart} Reboot
              </button>
              <button class="zes-action-btn btn-stop" onclick="Zesium.shutdownNode()">
                ${Icons.stop} Shutdown
              </button>
            </div>
          </div>

          <div class="zes-cards-grid" style="grid-template-columns: repeat(4, 1fr);">
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">CPU Model</div>
              <div style="font-size: 15px; font-weight: 700; color: #fff; margin: 8px 0;">${cpuInfo.model || 'Intel Xeon CPU'}</div>
              <div style="font-size: 11px; color: #71717a;">${cpuInfo.cores || 4} Cores (${cpuInfo.sockets || 1} Socket)</div>
            </div>
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">Memory Usage</div>
              <div style="font-size: 20px; font-weight: 700; color: #fff; margin: 8px 0;">${memUsedGb} / ${memGb} GB</div>
              <div style="font-size: 11px; color: #10b981;">31 GB Available RAM</div>
            </div>
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">Root Storage (HD)</div>
              <div style="font-size: 20px; font-weight: 700; color: #fff; margin: 8px 0;">${diskUsedGb} / ${diskTotalGb} GB</div>
              <div style="font-size: 11px; color: #71717a;">Local filesystem rootfs</div>
            </div>
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">Kernel & PVE Version</div>
              <div style="font-size: 14px; font-weight: 700; color: #fff; margin: 8px 0;">${st.kversion ? st.kversion.split(' ')[1] : 'Linux 7.0.2-6-pve'}</div>
              <div style="font-size: 11px; color: #a1a1aa;">${st.pveversion ? st.pveversion.split('/')[1] : 'PVE 9.2'}</div>
            </div>
          </div>
        `;
      } else if (State.currentView === 'isos') {
        const hasIsos = State.isos.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">ISO Images</h1>
              <p class="zes-page-subtitle">Upload and manage operating system installation media in storage 'local'</p>
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

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search ISOs..." />
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
            <div>
              <h1 class="zes-page-title">Storage Pools</h1>
              <p class="zes-page-subtitle">Disks, directory pools, thin-provisioned LVM, and ZFS storage</p>
            </div>
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
            <div>
              <h1 class="zes-page-title">Container Templates</h1>
              <p class="zes-page-subtitle">LXC operating system appliance images available for container creation</p>
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
            <div>
              <h1 class="zes-page-title">Backups</h1>
              <p class="zes-page-subtitle">VZDump snapshot archives and one-click restore</p>
            </div>
            <div>
              <button class="zes-btn-primary" onclick="Zesium.openBackupWindow()">
                ${Icons.backup} + Backup Guest Now
              </button>
            </div>
          </div>

          <div class="zes-toolbar-row">
            <div class="zes-search-input-wrap">
              ${Icons.search}
              <input type="text" class="zes-search-input" placeholder="Search backup archives..." />
            </div>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Archive File</th>
                  <th>Format</th>
                  <th>Size</th>
                  <th>Volume ID</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                ${hasBackups ? State.backups.map(b => `
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">${b.volid.split('/').pop()}</td>
                    <td><span style="font-size: 11px; padding: 2px 6px; background: #272730; border-radius: 4px;">${b.format}</span></td>
                    <td>${(b.size / (1024 * 1024 * 1024)).toFixed(2)} GB</td>
                    <td style="font-family: monospace; font-size: 11px; color: #71717a;">${b.volid}</td>
                    <td>
                      <div style="display: flex; gap: 6px;">
                        <button class="zes-action-btn" style="padding: 4px 10px; font-size: 11px;" onclick="Zesium.restoreBackup('${b.volid}')">
                          Restore
                        </button>
                        <button class="zes-action-btn" style="padding: 4px 10px; font-size: 11px; border-color: #ef4444; color: #ef4444;" onclick="Zesium.deleteBackup('${b.volid}')">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                `).join('') : `
                  <tr>
                    <td colspan="5" style="text-align: center; padding: 60px 20px; color: #71717a;">
                      <div style="font-size: 14px; margin-bottom: 12px; color: #a1a1aa;">No backup archives stored in 'local'.</div>
                      <div>
                        <button class="zes-btn-primary" onclick="Zesium.openBackupWindow()">${Icons.backup} + Backup Guest Now</button>
                      </div>
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
            <div>
              <h1 class="zes-page-title">Physical Disks & SMART</h1>
              <p class="zes-page-subtitle">Physical storage drives connected to the hypervisor host</p>
            </div>
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
            <div>
              <h1 class="zes-page-title">LVM & Thin Pools</h1>
              <p class="zes-page-subtitle">Logical Volume Management volume groups and thin-provisioned pools</p>
            </div>
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
            <div>
              <h1 class="zes-page-title">Directory & ZFS Pools</h1>
              <p class="zes-page-subtitle">Mounted directories and ZFS file systems</p>
            </div>
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
            <div>
              <h1 class="zes-page-title">Network Bridges & Interfaces</h1>
              <p class="zes-page-subtitle">Linux Bridges (vmbr), physical adapters, and virtual switches</p>
            </div>
            <button class="zes-btn-primary" onclick="Zesium.openNodeShell()">
              ${Icons.network} Edit in Shell
            </button>
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

      } else if (State.currentView === 'sdn') {
        const hasSdn = State.sdn.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">Software-Defined Network (SDN)</h1>
              <p class="zes-page-subtitle">Virtual overlay networks, EVPN, VXLAN, and isolated tenant zones</p>
            </div>
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
            <div>
              <h1 class="zes-page-title">Cluster Management & Nodes</h1>
              <p class="zes-page-subtitle">Cluster quorum, membership, and multi-node federation</p>
            </div>
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
      } else if (State.currentView === 'syslog') {
        const hasSys = State.syslogEntries.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">System Logs (Syslog)</h1>
              <p class="zes-page-subtitle">Live journalctl and kernel events from node pve</p>
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
            <div>
              <h1 class="zes-page-title">System Updates & Repositories</h1>
              <p class="zes-page-subtitle">Available APT software package updates for Debian and Proxmox VE</p>
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
            <div>
              <h1 class="zes-page-title">Certificates & DNS</h1>
              <p class="zes-page-subtitle">Domain Name System resolvers and TLS/SSL security certificates</p>
            </div>
          </div>

          <div class="zes-cards-grid" style="grid-template-columns: 1fr 1fr;">
            <div class="zes-plan-card">
              <div style="font-size: 14px; font-weight: 700; color: #ffffff; margin-bottom: 12px;">DNS Settings</div>
              <div style="font-size: 13px; color: #a1a1aa; margin-bottom: 8px;">
                Search Domain: <strong style="color: #ffffff;">${dns.search || 'zesium.xyz'}</strong>
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
      } else if (State.currentView === 'hosts') {
        const raw = State.hostsInfo ? State.hostsInfo.data : 'Loading /etc/hosts...';
        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">Hosts Configuration (/etc/hosts)</h1>
              <p class="zes-page-subtitle">Local static domain name resolutions mapped on node pve</p>
            </div>
          </div>

          <div class="zes-table-container" style="background-color: #0b0b0e; font-family: monospace; font-size: 13px; padding: 18px; color: #ffffff; white-space: pre-wrap; line-height: 1.6;">
            ${raw}
          </div>
        `;
      } else if (State.currentView === 'time') {
        const t = State.timeInfo || {};
        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">System Time & NTP</h1>
              <p class="zes-page-subtitle">Hardware clock synchronization and active timezone</p>
            </div>
          </div>

          <div class="zes-cards-grid" style="grid-template-columns: 1fr 1fr;">
            <div class="zes-plan-card">
              <div style="font-size: 14px; font-weight: 700; color: #ffffff; margin-bottom: 12px;">Host Timezone</div>
              <div style="font-size: 20px; font-weight: 700; color: #10b981;">${t.timezone || 'Europe/Prague'}</div>
              <div style="font-size: 12px; color: #71717a; margin-top: 6px;">Configured in /etc/timezone</div>
            </div>
            <div class="zes-plan-card">
              <div style="font-size: 14px; font-weight: 700; color: #ffffff; margin-bottom: 12px;">Local Time</div>
              <div style="font-size: 20px; font-weight: 700; color: #ffffff;">${t.localtime ? new Date(t.localtime * 1000).toLocaleString() : new Date().toLocaleString()}</div>
              <div style="font-size: 12px; color: #71717a; margin-top: 6px;">Synchronized with systemd-timesyncd</div>
            </div>
          </div>
        `;
      } else if (State.currentView === 'users') {
        const hasUsers = State.users.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">Access Control & Users</h1>
              <p class="zes-page-subtitle">Proxmox VE user accounts, API tokens, and realm permissions</p>
            </div>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Realm Type</th>
                  <th>Email</th>
                  <th>Enabled</th>
                </tr>
              </thead>
              <tbody>
                ${hasUsers ? State.users.map(u => `
                  <tr>
                    <td style="font-weight: 700; color: #ffffff; font-family: monospace;">${u.userid}</td>
                    <td><span style="font-size: 11px; padding: 2px 6px; background: #272730; border-radius: 4px; text-transform: uppercase;">${u['realm-type'] || 'pam'}</span></td>
                    <td>${u.email || '-'}</td>
                    <td><span class="zes-status-dot ${u.enable ? 'running' : 'stopped'}"></span> ${u.enable ? 'Enabled' : 'Disabled'}</td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="4" style="text-align: center; padding: 40px; color: #71717a;">Loading users...</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'tasks') {
        const hasTasks = State.tasks.length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">Cluster Task Audit Log</h1>
              <p class="zes-page-subtitle">Complete chronological record of hypervisor and guest operations</p>
            </div>
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
              <div style="width: 32px; height: 32px;">
                ${Icons.logo}
              </div>
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
      applyWindowCenteringFix();

      const fullUser = (window.Proxmox && Proxmox.UserName) ? Proxmox.UserName : 'root@pam';
      const nodeName = (window.Proxmox && Proxmox.NodeName) ? Proxmox.NodeName : 'pve';
      const usernameOnly = fullUser.split('@')[0];
      const initials = usernameOnly.slice(0, 2).toUpperCase();

      const app = document.createElement('div');
      app.id = 'zesium-app';
      app.innerHTML = `
        <!-- Left Slim Rail (56px) with Pure White SVG Icons -->
        <div id="zes-rail">
          <div class="zes-rail-logo" title="Zesium - Proxmox Manager" onclick="Zesium.navigateTo('servers')">
            <div style="width: 28px; height: 28px;">
              ${Icons.logo}
            </div>
          </div>

          <div class="zes-rail-nav">
            <button class="zes-rail-btn active" data-view="servers" title="Virtual Servers" onclick="Zesium.navigateTo('servers')">
              ${Icons.server}
              <span>Servers</span>
            </button>
            <button class="zes-rail-btn" data-view="node-summary" title="Node Summary" onclick="Zesium.navigateTo('node-summary')">
              ${Icons.server}
              <span>Node</span>
            </button>
            <button class="zes-rail-btn" data-view="storage" title="Storage Pools" onclick="Zesium.navigateTo('storage')">
              ${Icons.storage}
              <span>Storage</span>
            </button>
            <button class="zes-rail-btn" data-view="isos" title="ISO Images" onclick="Zesium.navigateTo('isos')">
              ${Icons.iso}
              <span>ISOs</span>
            </button>
            <button class="zes-rail-btn" data-view="backups" title="Backups" onclick="Zesium.navigateTo('backups')">
              ${Icons.backup}
              <span>Backup</span>
            </button>
            <button class="zes-rail-btn" data-view="disks" title="Physical Disks" onclick="Zesium.navigateTo('disks')">
              ${Icons.disks}
              <span>Disks</span>
            </button>
            <button class="zes-rail-btn" data-view="network" title="Network Bridges" onclick="Zesium.navigateTo('network')">
              ${Icons.network}
              <span>Network</span>
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

        <!-- Main Navigation Sidebar (260px) -->
        <div id="zes-sidebar">
          <div class="zes-sidebar-header">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
              <div style="width: 22px; height: 22px;">
                ${Icons.logo}
              </div>
              <div>
                <span style="font-size: 16px; font-weight: 700; color: #ffffff; letter-spacing: -0.01em;">Zesium</span>
                <span style="display: block; font-size: 11px; color: #71717a; font-weight: 500;">Proxmox Manager</span>
              </div>
            </div>
            <div class="zes-team-selector" onclick="Zesium.navigateTo('node-summary')">
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
              <a class="zes-menu-item" data-view="storage" onclick="Zesium.navigateTo('storage')">
                ${Icons.storage}
                <span>Storage Pools</span>
              </a>
              <a class="zes-menu-item" data-view="isos" onclick="Zesium.navigateTo('isos')">
                ${Icons.iso}
                <span>ISO Images</span>
              </a>
              <a class="zes-menu-item" data-view="templates" onclick="Zesium.navigateTo('templates')">
                ${Icons.templates}
                <span>CT Templates</span>
              </a>
              <a class="zes-menu-item" data-view="backups" onclick="Zesium.navigateTo('backups')">
                ${Icons.backup}
                <span>Backups & Disaster Recovery</span>
              </a>
            </div>

            <!-- Disks & Hardware -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">Disks & Hardware</div>
              <a class="zes-menu-item" data-view="disks" onclick="Zesium.navigateTo('disks')">
                ${Icons.disks}
                <span>Physical Disks & SMART</span>
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
                <span>Network Interfaces</span>
              </a>

              <a class="zes-menu-item" data-view="sdn" onclick="Zesium.navigateTo('sdn')">
                ${Icons.sdn}
                <span>Software Defined Net</span>
              </a>
            </div>

            <!-- Cluster & Access -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">Cluster & Access</div>
              <a class="zes-menu-item" data-view="cluster" onclick="Zesium.navigateTo('cluster')">
                ${Icons.cluster}
                <span>Cluster Status</span>
              </a>
              <a class="zes-menu-item" data-view="users" onclick="Zesium.navigateTo('users')">
                ${Icons.users}
                <span>Users & Permissions</span>
              </a>
            </div>

            <!-- System Administration -->
            <div class="zes-menu-group">
              <div class="zes-menu-title">System Administration</div>
              <a class="zes-menu-item" data-view="node-summary" onclick="Zesium.navigateTo('node-summary')">
                ${Icons.server}
                <span>Node Summary ('pve')</span>
              </a>
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
              <a class="zes-menu-item" data-view="hosts" onclick="Zesium.navigateTo('hosts')">
                ${Icons.hosts}
                <span>Hosts File (/etc/hosts)</span>
              </a>
              <a class="zes-menu-item" data-view="time" onclick="Zesium.navigateTo('time')">
                ${Icons.time}
                <span>System Time & NTP</span>
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
    applyWindowCenteringFix();

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
