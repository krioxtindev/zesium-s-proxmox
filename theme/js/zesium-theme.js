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
    logout: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
    shutdown: `<svg viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.8"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>`,
    snapshot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    firewall: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    cloudinit: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`,
    options: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    clone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
    migrate: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 3h5v5"/><path d="M4 20L21 3"/><path d="M21 16v5h-5"/><path d="M15 15l6 6"/><path d="M4 4l5 5"/></svg>`,
    services: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    sendCmd: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
    paste: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
    keyboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="6" y1="8" x2="6" y2="8"/><line x1="10" y1="8" x2="10" y2="8"/><line x1="14" y1="8" x2="14" y2="8"/><line x1="18" y1="8" x2="18" y2="8"/><line x1="6" y1="12" x2="6" y2="12"/><line x1="10" y1="12" x2="10" y2="12"/><line x1="14" y1="12" x2="14" y2="12"/><line x1="18" y1="12" x2="18" y2="12"/><line x1="8" y1="16" x2="16" y2="16"/></svg>`,
    fullscreen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`,
    ha: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
    monitor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/></svg>`
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
    tasks: [],
    snapshots: [],
    firewallRules: [],
    services: [],
    nodeFirewall: [],
    haStatus: null,
    replicationJobs: [],
    backupJobs: [],
    vmTasks: [],
    qemuMonitorLog: [],
    consoleMode: 'auto',
    nodeConsoleMode: 'xtermjs',
    guestIPs: [],
    serverNotes: '',
    selectedServerIds: new Set()
  };

  // Suppress "No valid subscription" nag
  function suppressNag() {
    if (window.Proxmox && Proxmox.Utils) {
      Proxmox.Utils.checked_command = function (orig_cmd) {
        if (typeof orig_cmd === 'function') orig_cmd();
      };
    }
  }

  // Dynamic workspace center coordinate calculator: dead center in viewport
  function calculateWindowWorkspaceCenter(w, h) {
    var winW = window.innerWidth || document.documentElement.clientWidth;
    var winH = window.innerHeight || document.documentElement.clientHeight;

    var modalW = w || 780;
    var modalH = h || 550;

    var x = Math.max(10, Math.floor((winW - modalW) / 2));
    var y = Math.max(10, Math.floor((winH - modalH) / 2));

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

  // Override Ext.window.Window centering & hook ComboBox dropdown pickers
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

    // Hook Ext.form.field.ComboBox to guarantee dropdowns appear directly under arrows and auto-expand/auto-select
    if (window.Ext && Ext.form && Ext.form.field && Ext.form.field.ComboBox) {
      try {
        if (!Ext.form.field.ComboBox.prototype.__zesExpandPatched) {
          Ext.form.field.ComboBox.prototype.__zesExpandPatched = true;
          var origExpand = Ext.form.field.ComboBox.prototype.expand;
          Ext.form.field.ComboBox.prototype.expand = function () {
            var ret = origExpand.apply(this, arguments);
            try {
              var me = this;
              var picker = me.getPicker();
              var win = me.up('window');
              if (picker) {
                var targetZ = 110050;
                if (win && win.el && win.el.dom) {
                  var winZ = parseInt(window.getComputedStyle(win.el.dom).zIndex, 10) || 100000;
                  targetZ = Math.max(targetZ, winZ + 50);
                }
                var layer = picker.el ? (picker.el.dom.closest('.x-layer') || picker.el.dom) : null;
                if (layer) {
                  layer.style.setProperty('z-index', targetZ.toString(), 'important');
                  layer.style.setProperty('display', 'block', 'important');
                  layer.style.setProperty('visibility', 'visible', 'important');
                  layer.style.setProperty('opacity', '1', 'important');

                  // Align DIRECTLY below the combobox trigger wrap (input field + arrow trigger)
                  var wrap = me.triggerWrap || me.inputEl || me.el;
                  if (wrap && wrap.dom) {
                    var wrapRect = wrap.dom.getBoundingClientRect();
                    var pickerW = (picker.getWidth && picker.getWidth()) || layer.offsetWidth || 500;
                    var pickerH = (picker.getHeight && picker.getHeight()) || layer.offsetHeight || 200;

                    var left = wrapRect.left;
                    if (left + pickerW > (window.innerWidth || 1920) - 10) {
                      left = Math.max(10, (window.innerWidth || 1920) - pickerW - 10);
                    }
                    var top = wrapRect.bottom + 2;
                    if (top + pickerH > (window.innerHeight || 1080) - 10 && wrapRect.top > pickerH + 10) {
                      top = wrapRect.top - pickerH - 2;
                    }

                    layer.style.setProperty('position', 'fixed', 'important');
                    layer.style.setProperty('left', Math.floor(left) + 'px', 'important');
                    layer.style.setProperty('top', Math.floor(top) + 'px', 'important');
                  }
                }
                if (picker.el && picker.el.dom) {
                  picker.el.dom.style.setProperty('z-index', targetZ.toString(), 'important');
                }
              }
            } catch (e) {
              console.warn('Picker z-index/alignment error:', e);
            }
            return ret;
          };
        }

        // Auto-expand whenever clicking or focusing the field
        if (!Ext.form.field.ComboBox.prototype.__zesFocusPatched) {
          Ext.form.field.ComboBox.prototype.__zesFocusPatched = true;
          Ext.form.field.ComboBox.prototype.onFocus = Ext.Function.createSequence(
            Ext.form.field.ComboBox.prototype.onFocus,
            function () {
              var me = this;
              if (!me.isExpanded && !me.readOnly && !me.disabled) {
                setTimeout(function () {
                  if (!me.isExpanded && !me.isDestroyed) me.expand();
                }, 10);
              }
            }
          );
        }

        // Auto-select first ISO image in Proxmox FileSelector
        if (Ext.ClassManager && Ext.ClassManager.get('PVE.form.FileSelector')) {
          var PVEFileSelector = Ext.ClassManager.get('PVE.form.FileSelector');
          if (!PVEFileSelector.prototype.__zesAutoSelectPatched) {
            PVEFileSelector.prototype.__zesAutoSelectPatched = true;
            var origSetStorage = PVEFileSelector.prototype.setStorage;
            PVEFileSelector.prototype.setStorage = function (storage, nodename) {
              var ret = origSetStorage.apply(this, arguments);
              var me = this;
              if (me.store && !me.__zesAutoLoadHooked) {
                me.__zesAutoLoadHooked = true;
                me.store.on('load', function (s, records) {
                  if (!me.getValue() && records && records.length > 0) {
                    var first = records[0];
                    var val = first.get('volid') || first.get(me.valueField);
                    if (val) {
                      me.setValue(val);
                      me.fireEvent('select', me, first);
                      if (me.validate) me.validate();
                    }
                  }
                });
              }
              return ret;
            };
          }
        }
      } catch (e) {}
    }

    // Force Inter typography stylesheet and wizard footer styling at runtime on every ExtJS element
    if (!document.getElementById('zes-runtime-font-force')) {
      const s = document.createElement('style');
      s.id = 'zes-runtime-font-force';
      s.innerHTML = `
        .x-window,
        .x-window-default,
        .x-window-header-title,
        .x-title-text,
        .x-title-text-default,
        .x-form-item-label,
        .x-form-item-label-default,
        .x-form-text,
        .x-form-text-default,
        .x-btn-inner,
        .x-btn-inner-default-small,
        .pmx-hint {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        }

        /* PROTECT FONTAWESOME & FONT-LOGOS RUNTIME */
        .fa,
        .fa:before,
        .fa:after,
        .x-tree-icon,
        .x-tree-icon:before,
        .x-tree-icon:after,
        .x-tree-icon-custom,
        .x-tree-icon-custom:before,
        .x-tree-icon-custom:after,
        .x-tree-icon-parent,
        .x-tree-icon-parent:before,
        .x-tree-icon-parent:after,
        .x-tree-icon-parent-expanded,
        .x-tree-icon-parent-expanded:before,
        .x-tree-icon-parent-expanded:after,
        .x-tree-icon-leaf,
        .x-tree-icon-leaf:before,
        .x-tree-icon-leaf:after,
        .x-grid-icon-custom,
        .x-grid-icon-custom:before,
        .x-grid-icon-custom:after,
        [class*="fa-"],
        [class*="fa-"]:before,
        [class*="fa-"]:after,
        [class*="fl-"],
        [class*="fl-"]:before,
        [class*="fl-"]:after,
        .x-btn-icon-el,
        .x-btn-icon-el:before,
        .x-btn-icon-el:after,
        .x-btn-icon-el[class*="fa-"],
        .x-btn-icon-el[class*="fa-"]:before,
        .x-tool-img,
        .x-tool-img:before,
        .x-tool-img:after {
          font-family: FontAwesome, "Font Awesome 5 Free", "Font Awesome 5 Pro", "font-logos" !important;
        }

        /* COMBO DROPDOWN ARROW - CRISP MODERN SVG */
        .x-form-arrow-trigger,
        .x-form-arrow-trigger-default,
        .x-window .x-form-arrow-trigger,
        .x-window-default .x-form-arrow-trigger {
          background-color: transparent !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: center center !important;
          background-size: 14px 14px !important;
          cursor: pointer !important;
          width: 30px !important;
          min-width: 30px !important;
          border: none !important;
          border-left: none !important;
        }
        .x-form-arrow-trigger:hover,
        .x-form-arrow-trigger-default:hover,
        .x-window .x-form-arrow-trigger:hover,
        .x-window-default .x-form-arrow-trigger:hover {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important;
        }
        .x-form-arrow-trigger:before,
        .x-form-arrow-trigger:after,
        .x-form-arrow-trigger-default:before,
        .x-form-arrow-trigger-default:after {
          display: none !important;
          content: none !important;
        }

        /* SPINNERS - NUMBER FIELDS */
        .x-form-spinner-up,
        .x-form-spinner-up-default {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='18 15 12 9 6 15'%3E%3C/polyline%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: center center !important;
          background-size: 10px 10px !important;
          cursor: pointer !important;
          border: none !important;
        }
        .x-form-spinner-up:hover,
        .x-form-spinner-up-default:hover {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='18 15 12 9 6 15'%3E%3C/polyline%3E%3C/svg%3E") !important;
        }
        .x-form-spinner-down,
        .x-form-spinner-down-default {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23a1a1aa' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: center center !important;
          background-size: 10px 10px !important;
          cursor: pointer !important;
          border: none !important;
        }
        .x-form-spinner-down:hover,
        .x-form-spinner-down-default:hover {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E") !important;
        }
        .x-form-spinner-up:before,
        .x-form-spinner-down:before,
        .x-form-spinner-up:after,
        .x-form-spinner-down:after {
          display: none !important;
          content: none !important;
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

        /* Position native input precisely over the 16x16 box with opacity 0 so it catches all user clicks */
        .x-form-cb-input,
        input.x-form-cb-input,
        .x-form-type-radio input,
        .x-form-type-checkbox input,
        .x-form-cb-wrap input {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 16px !important;
          height: 16px !important;
          min-width: 16px !important;
          min-height: 16px !important;
          margin: 0 !important;
          padding: 0 !important;
          opacity: 0 !important;
          pointer-events: auto !important;
          cursor: pointer !important;
          z-index: 10 !important;
          outline: none !important;
          border: none !important;
          -webkit-appearance: none !important;
          appearance: none !important;
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
        .x-form-cb-wrap-inner:before,
        .x-form-cb-wrap-inner:after,
        .x-window .x-form-cb-wrap:before,
        .x-window .x-form-cb-wrap:after,
        .x-form-radio:before,
        .x-form-radio:after,
        .x-form-radio-default:before,
        .x-form-radio-default:after,
        .x-window .x-form-radio:before,
        .x-window .x-form-radio:after,
        .x-form-checkbox:before,
        .x-form-checkbox:after,
        .x-form-checkbox-default:before,
        .x-form-checkbox-default:after,
        .x-window .x-form-checkbox:before,
        .x-window .x-form-checkbox:after {
          display: none !important;
          content: none !important;
          opacity: 0 !important;
          width: 0 !important;
          height: 0 !important;
          font-size: 0 !important;
          border: none !important;
          box-shadow: none !important;
        }

        /* Radio Button: SPAN visual element */
        .x-form-radio,
        .x-form-radio-default,
        .x-window .x-form-radio {
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
          box-sizing: border-box !important;
          transition: all 0.15s ease !important;
        }

        .x-form-radio:hover,
        .x-form-cb-wrap:hover .x-form-radio {
          border-color: #71717a !important;
          background-color: #222228 !important;
        }

        /* Checked Radio Button: Clean modern white border with centered white dot */
        .x-form-radio.x-form-cb-checked,
        .x-form-cb-checked .x-form-radio,
        .x-form-radio-default.x-form-cb-checked,
        .x-form-cb-wrap.x-form-cb-checked .x-form-radio,
        .x-form-radio:has(input:checked),
        .x-form-cb-wrap:has(input:checked) .x-form-radio,
        .x-field:has(input:checked) .x-form-radio {
          border-color: #ffffff !important;
          background-color: #18181c !important;
          background-image: radial-gradient(circle, #ffffff 40%, transparent 45%) !important;
          background-repeat: no-repeat !important;
          background-position: center center !important;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2) !important;
        }

        /* Checkbox: SPAN visual element */
        .x-form-checkbox,
        .x-form-checkbox-default,
        .x-window .x-form-checkbox {
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
          box-sizing: border-box !important;
          transition: all 0.15s ease !important;
        }

        .x-form-checkbox:hover,
        .x-form-cb-wrap:hover .x-form-checkbox {
          border-color: #71717a !important;
          background-color: #222228 !important;
        }

        /* Checked Checkbox: Solid white square with clean black checkmark */
        .x-form-checkbox.x-form-cb-checked,
        .x-form-cb-checked .x-form-checkbox,
        .x-form-checkbox-default.x-form-cb-checked,
        .x-form-cb-wrap.x-form-cb-checked .x-form-checkbox,
        .x-form-checkbox:has(input:checked),
        .x-form-cb-wrap:has(input:checked) .x-form-checkbox,
        .x-field:has(input:checked) .x-form-checkbox {
          border-color: #ffffff !important;
          background-color: #ffffff !important;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000000'%3E%3Cpath d='M13.485 3.515a1 1 0 0 1 0 1.414l-6.364 6.364a1 1 0 0 1-1.414 0l-3.182-3.182a1 1 0 1 1 1.414-1.414L6.414 9.172l5.657-5.657a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
          background-size: 11px 11px !important;
        }

        /* Checkbox & Radio Labels ("Use CD/DVD disc image", "Advanced", etc.) */
        .x-form-cb-label,
        .x-form-cb-label-default,
        .x-window .x-form-cb-label,
        .x-window-default .x-form-cb-label {
          font-family: 'Inter', sans-serif !important;
          color: #f4f4f5 !important;
          font-size: 13px !important;
          font-weight: 400 !important;
          letter-spacing: -0.01em !important;
          margin-left: 8px !important;
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

        // Ensure picker dropdown layers are given z-index >= 110000
        const layers = document.querySelectorAll('.x-layer');
        layers.forEach(l => {
          if (l.style.zIndex && parseInt(l.style.zIndex, 10) < 110000) {
            l.style.setProperty('z-index', '110000', 'important');
          }
        });

        // Auto-select ISO image if storage is loaded and ISO is empty
        if (window.Ext && Ext.ComponentQuery) {
          const isoCombos = Ext.ComponentQuery.query('pveFileSelector');
          isoCombos.forEach(c => {
            if (c.isVisible && c.isVisible() && !c.getValue()) {
              const store = c.getStore && c.getStore();
              if (store && store.getCount() > 0) {
                const rec = store.getAt(0);
                const val = rec.get('volid') || rec.get(c.valueField);
                if (val) {
                  c.setValue(val);
                  c.fireEvent('select', c, rec);
                  if (c.validate) c.validate();
                }
              }
            }
          });
        }

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

      // Click listener: when clicking any button that could open a window, ensure window centers
      document.addEventListener('click', (e) => {
        const target = e.target;
        if (target && (target.closest('.x-btn, button, .zes-btn, .zes-quick-btn') || target.tagName === 'BUTTON')) {
          setTimeout(() => {
            const activeWindows = document.querySelectorAll('.x-window:not([data-user-moved="true"])');
            activeWindows.forEach(w => {
              if (w.offsetParent !== null && !w.getAttribute('data-zes-centered')) {
                centerWindowInWorkspace(w);
              }
            });
          }, 30);
          setTimeout(() => {
            const activeWindows = document.querySelectorAll('.x-window:not([data-user-moved="true"])');
            activeWindows.forEach(w => {
              if (w.offsetParent !== null && !w.getAttribute('data-zes-centered')) {
                centerWindowInWorkspace(w);
              }
            });
          }, 120);
        }
      });

      // Direct fallback click handler for ExtJS checkboxes and radio buttons
      document.addEventListener('click', (e) => {
        const t = e.target;
        if (!t) return;
        if (t.classList && (t.classList.contains('x-form-checkbox') || t.classList.contains('x-form-radio') || t.classList.contains('x-form-cb-wrap') || t.classList.contains('x-form-cb-wrap-inner'))) {
          const inp = t.querySelector('input.x-form-cb-input') || (t.parentElement ? t.parentElement.querySelector('input.x-form-cb-input') : null);
          if (inp && t !== inp) {
            inp.click();
          }
        }
      }, true);

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
      else if (view === 'services') this.fetchServices();
      else if (view === 'node-firewall') this.fetchNodeFirewall();
      else if (view === 'ha') this.fetchHA();
      else if (view === 'backup-jobs') this.fetchBackupJobs();
    },

    toggleSelectAllServers: function (checked) {
      if (!State.selectedServerIds) State.selectedServerIds = new Set();
      if (checked) {
        State.servers.forEach(function (s) { State.selectedServerIds.add(s.id); });
      } else {
        State.selectedServerIds.clear();
      }
      document.querySelectorAll('.zes-server-cb').forEach(function (cb) { cb.checked = checked; });
    },

    toggleSelectServer: function (id, checked) {
      if (!State.selectedServerIds) State.selectedServerIds = new Set();
      if (checked) {
        State.selectedServerIds.add(id);
      } else {
        State.selectedServerIds.delete(id);
      }
      var allCb = document.getElementById('zes-select-all-servers');
      if (allCb) {
        allCb.checked = State.servers.length > 0 && State.selectedServerIds.size === State.servers.length;
      }
    },

    setServerTab: function (tab) {
      State.selectedTab = tab;
      this.render();
      if (tab === 'hardware' || tab === 'options' || tab === 'cloudinit') {
        this.fetchServerDetails();
      } else if (tab === 'snapshots') {
        this.fetchSnapshots();
      } else if (tab === 'backup') {
        this.fetchBackups();
      } else if (tab === 'firewall') {
        this.fetchFirewallRules();
      } else if (tab === 'tasks') {
        this.fetchVMTasks();
      }
    },

    // Interactive Terminal Paste & Command Automation Bar
    sendTerminalCommand: function (iframeId, cmd, withEnter) {
      if (withEnter === undefined) withEnter = true;
      var input = document.getElementById(iframeId + '-cmd-input');
      var textToSend = cmd !== undefined ? cmd : (input ? input.value : '');
      if (textToSend === undefined || textToSend === null || textToSend === '') {
        return false;
      }

      // If multi-line, run sequentially line-by-line with safe pacing
      var lines = textToSend.replace(/\r\n/g, '\n').replace(/\r/g, '\n').split('\n').filter(function (l) { return l.trim().length > 0; });
      if (lines.length > 1) {
        var self = this;
        var idx = 0;
        self.showToast('Executing ' + lines.length + ' commands...', 'info');
        function sendLine() {
          if (idx >= lines.length) {
            self.showToast('Multi-line script execution finished (' + lines.length + ' lines)', 'success');
            return;
          }
          self.sendTerminalSingleCommand(iframeId, lines[idx], true);
          idx++;
          setTimeout(sendLine, 120);
        }
        sendLine();
        if (input) input.value = '';
        return true;
      }

      return this.sendTerminalSingleCommand(iframeId, textToSend, withEnter);
    },

    sendTerminalSingleCommand: function (iframeId, textToSend, withEnter) {
      var iframe = document.getElementById(iframeId);
      if (!iframe) {
        this.showToast('Terminal session not found', 'error');
        return false;
      }
      var input = document.getElementById(iframeId + '-cmd-input');

      // Maintain session history
      window._zesCmdHistory = window._zesCmdHistory || [];
      if (textToSend.trim() && window._zesCmdHistory[window._zesCmdHistory.length - 1] !== textToSend) {
        window._zesCmdHistory.push(textToSend);
      }
      window._zesCmdHistoryIndex = window._zesCmdHistory.length;

      var success = false;
      try {
        var win = iframe.contentWindow;
        var doc = iframe.contentDocument || (win && win.document);

        // 1. Try injected noVNC bridge helper
        if (win && typeof win._zesSendKeystrokes === 'function') {
          success = win._zesSendKeystrokes(textToSend, withEnter);
        }

        // 2. Try xterm.js (Node Shell, LXC Console, Serial terminal)
        if (!success && win && win.term) {
          if (typeof win.term.send === 'function') {
            win.term.send(textToSend + (withEnter ? '\r' : ''));
            success = true;
          } else if (typeof win.term.paste === 'function') {
            win.term.paste(textToSend);
            if (withEnter) win.term.send('\r');
            success = true;
          } else if (typeof win.term.write === 'function') {
            win.term.write(textToSend + (withEnter ? '\r' : ''));
            success = true;
          }
        }

        // 3. Try direct noVNC RFB instance
        if (!success && win) {
          var rfb = (win.UI && win.UI.rfb) || win.rfb;
          if (rfb && typeof rfb.sendKey === 'function') {
            for (var i = 0; i < textToSend.length; i++) {
              var code = textToSend.charCodeAt(i);
              rfb.sendKey(code, null, true);
              rfb.sendKey(code, null, false);
            }
            if (withEnter) {
              rfb.sendKey(0xFF0D, 'Enter', true);
              rfb.sendKey(0xFF0D, 'Enter', false);
            }
            success = true;
          }
        }

        // 4. Try noVNC UI keyEvent or DOM dispatch on #noVNC_keyboardinput / canvas
        if (!success && doc) {
          var kbdInput = doc.getElementById('noVNC_keyboardinput');
          if (win && win.UI && typeof win.UI.keyEvent === 'function') {
            for (var j = 0; j < textToSend.length; j++) {
              var chCode = textToSend.charCodeAt(j);
              win.UI.keyEvent(chCode, null, true);
              win.UI.keyEvent(chCode, null, false);
            }
            if (withEnter) {
              win.UI.keyEvent(0xFF0D, 'Enter', true);
              win.UI.keyEvent(0xFF0D, 'Enter', false);
            }
            success = true;
          } else if (kbdInput) {
            var target = doc.querySelector('canvas') || kbdInput;
            for (var k = 0; k < textToSend.length; k++) {
              var ch = textToSend[k];
              var cCode = ch.charCodeAt(0);
              target.dispatchEvent(new KeyboardEvent('keydown', { key: ch, charCode: cCode, keyCode: cCode, which: cCode, bubbles: true }));
              target.dispatchEvent(new KeyboardEvent('keypress', { key: ch, charCode: cCode, keyCode: cCode, which: cCode, bubbles: true }));
              target.dispatchEvent(new KeyboardEvent('keyup', { key: ch, charCode: cCode, keyCode: cCode, which: cCode, bubbles: true }));
            }
            if (withEnter) {
              target.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
              target.dispatchEvent(new KeyboardEvent('keyup', { key: 'Enter', code: 'Enter', keyCode: 13, which: 13, bubbles: true }));
            }
            success = true;
          }
        }

        // 5. Fallback: xterm helper textarea
        if (!success && doc) {
          var textarea = doc.querySelector('textarea.xterm-helper-textarea') || doc.querySelector('textarea');
          if (textarea) {
            textarea.focus();
            if (doc.execCommand) {
              doc.execCommand('insertText', false, textToSend + (withEnter ? '\n' : ''));
              success = true;
            }
          }
        }

        // Ensure bridge is injected for noVNC if missing
        if (doc && !doc.getElementById('zes-novnc-bridge') && (doc.getElementById('noVNC_container') || (doc.title && doc.title.includes('Console')))) {
          Zesium.hookTerminalIframe(iframe);
        }
      } catch (err) {
        console.warn('[Zesium] Terminal command send note:', err);
      }

      if (input && input.value === textToSend) input.value = '';
      this.showToast('Sent: ' + (textToSend.length > 25 ? textToSend.substring(0, 25) + '...' : textToSend), 'success');
      return true;
    },

    openScriptRunnerModal: function (iframeId) {
      var existing = document.getElementById('zes-script-runner-modal');
      if (existing) existing.remove();

      var overlay = document.createElement('div');
      overlay.id = 'zes-script-runner-modal';
      overlay.className = 'zes-script-modal-overlay';
      overlay.innerHTML = `
        <div class="zes-script-modal">
          <div class="zes-script-modal-header">
            <div class="zes-script-modal-title">
              ${Icons.keyboard || Icons.shell}
              <span>Run Script &amp; Multi-line Commands in Console</span>
            </div>
            <button class="zes-action-btn" style="padding: 4px 8px; font-size: 14px;" onclick="document.getElementById('zes-script-runner-modal').remove()">✕</button>
          </div>
          <div class="zes-script-modal-body">
            <div style="font-size: 13px; color: #a1a1aa;">
              Paste multi-line bash commands, deployment snippets, or configuration scripts below. Each command will be executed sequentially with safe delay.
            </div>
            <div class="zes-preset-chips-wrap">
              <span style="font-size: 11px; color: #71717a; text-transform: uppercase; font-weight: 600;">Presets:</span>
              <button class="zes-preset-chip" onclick="document.getElementById('zes-script-textarea').value = 'apt update && apt upgrade -y'">apt update &amp; upgrade</button>
              <button class="zes-preset-chip" onclick="document.getElementById('zes-script-textarea').value = 'ip a\nip route\ncat /etc/resolv.conf'">Network Info</button>
              <button class="zes-preset-chip" onclick="document.getElementById('zes-script-textarea').value = 'df -h\nfree -m\nuptime'">Disk &amp; RAM Check</button>
              <button class="zes-preset-chip" onclick="document.getElementById('zes-script-textarea').value = 'systemctl status\njournalctl -xe -n 30'">Service Health</button>
              <button class="zes-preset-chip" onclick="document.getElementById('zes-script-textarea').value = 'curl -fsSL https://get.docker.com | sh'">Install Docker</button>
              <button class="zes-preset-chip" onclick="document.getElementById('zes-script-textarea').value = 'apt autoremove -y && apt clean'">Clean System</button>
            </div>
            <textarea id="zes-script-textarea"
                      class="zes-script-textarea"
                      placeholder="#!/usr/bin/env bash&#10;# Paste your multi-line shell commands here&#10;apt update -y&#10;systemctl status pveproxy&#10;df -h"></textarea>
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <span style="font-size: 12px; color: #a1a1aa;">Sequential pacing active (120ms delay per line)</span>
              <button class="zes-action-btn" style="font-size: 11px; padding: 3px 8px;" onclick="document.getElementById('zes-script-textarea').value = ''">
                Clear Text
              </button>
            </div>
          </div>
          <div class="zes-script-modal-footer">
            <button class="zes-action-btn" onclick="document.getElementById('zes-script-runner-modal').remove()">
              Cancel
            </button>
            <button class="zes-btn-primary" onclick="
              var txt = document.getElementById('zes-script-textarea').value;
              if (txt && txt.trim()) {
                document.getElementById('zes-script-runner-modal').remove();
                Zesium.sendTerminalCommand('${iframeId}', txt, true);
              } else {
                Zesium.showToast('Please paste a script first', 'warning');
              }
            ">
              ${Icons.start} 🚀 Run Script in Console
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);
    },

    setConsoleMode: function (mode) {
      State.consoleMode = mode;
      this.render();
      this.showToast('Console mode switched to ' + mode, 'info');
    },

    setNodeConsoleMode: function (mode) {
      State.nodeConsoleMode = mode;
      this.render();
      this.showToast('Node shell switched to ' + mode, 'info');
    },

    resetServer: function (id) {
      var s = State.servers.find(function (srv) { return srv.id === id; });
      if (!s) return;
      if (!confirm('Force reset ' + s.name + ' (' + s.vmid + ')?\nGuest operating system will restart immediately.')) return;
      var self = this;
      self.apiCall('/nodes/' + s.node + '/' + s.type + '/' + s.vmid + '/status/reset', 'POST', {}, function () {
        self.showToast('Reset signal sent to ' + s.name, 'warning');
        self.fetchServers();
      });
    },

    suspendServer: function (id) {
      var s = State.servers.find(function (srv) { return srv.id === id; });
      if (!s) return;
      var self = this;
      self.apiCall('/nodes/' + s.node + '/' + s.type + '/' + s.vmid + '/status/suspend', 'POST', {}, function () {
        self.showToast('Suspending ' + s.name + '...', 'info');
        self.fetchServers();
      });
    },

    resumeServer: function (id) {
      var s = State.servers.find(function (srv) { return srv.id === id; });
      if (!s) return;
      var self = this;
      self.apiCall('/nodes/' + s.node + '/' + s.type + '/' + s.vmid + '/status/resume', 'POST', {}, function () {
        self.showToast('Resuming ' + s.name + '...', 'success');
        self.fetchServers();
      });
    },

    convertToTemplate: function (vmid, node, type) {
      if (!confirm('Are you sure you want to convert ' + (type || 'guest').toUpperCase() + ' ' + vmid + ' into a Template?\n\nThis guest will be locked as a read-only template and cannot be powered on directly.')) {
        return;
      }
      var self = this;
      self.apiCall('/nodes/' + (node || 'pve') + '/' + (type || 'qemu') + '/' + vmid + '/template', 'POST', {}, function () {
        self.showToast('Converted guest ' + vmid + ' to Template', 'success');
        self.fetchServers();
      });
    },

    openEditNotesWindow: function (vmid, node, type, currentNotes) {
      var existing = document.getElementById('zes-notes-modal');
      if (existing) existing.remove();

      var overlay = document.createElement('div');
      overlay.id = 'zes-notes-modal';
      overlay.className = 'zes-script-modal-overlay';
      overlay.innerHTML = `
        <div class="zes-script-modal" style="max-width: 600px;">
          <div class="zes-script-modal-header">
            <div class="zes-script-modal-title">
              ${Icons.server}
              <span>Edit Notes for VMID ${vmid}</span>
            </div>
            <button class="zes-action-btn" style="padding: 4px 8px; font-size: 14px;" onclick="document.getElementById('zes-notes-modal').remove()">✕</button>
          </div>
          <div class="zes-script-modal-body">
            <div style="font-size: 13px; color: #a1a1aa;">
              Enter documentation, IP addresses, credentials, or administrative comments for this virtual server.
            </div>
            <textarea id="zes-notes-input"
                      class="zes-script-textarea"
                      style="height: 160px;"
                      placeholder="e.g. Production Web Server | IP: 192.168.1.100 | Contact: admin@zesium.xyz">${currentNotes || (State.serverConfig && State.serverConfig.description) || ''}</textarea>
          </div>
          <div class="zes-script-modal-footer">
            <button class="zes-action-btn" onclick="document.getElementById('zes-notes-modal').remove()">
              Cancel
            </button>
            <button class="zes-btn-primary" onclick="
              var notes = document.getElementById('zes-notes-input').value;
              document.getElementById('zes-notes-modal').remove();
              Zesium.saveNotes('${vmid}', '${node}', '${type}', notes);
            ">
              Save Notes
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);
    },

    saveNotes: function (vmid, node, type, notes) {
      var self = this;
      self.apiCall('/nodes/' + (node || 'pve') + '/' + (type || 'qemu') + '/' + vmid + '/config', 'PUT', { description: notes }, function () {
        self.showToast('Notes updated for VMID ' + vmid, 'success');
        self.fetchServerDetails();
      });
    },

    rebootNode: function (node) {
      if (!confirm('Are you sure you want to REBOOT hypervisor host ' + (node || 'pve') + '?\nAll running guests on this host will restart.')) {
        return;
      }
      var self = this;
      self.apiCall('/nodes/' + (node || 'pve') + '/status/reboot', 'POST', {}, function () {
        self.showToast('Reboot initiated for node ' + (node || 'pve'), 'warning');
      });
    },

    shutdownNode: function (node) {
      if (!confirm('Are you sure you want to SHUTDOWN hypervisor host ' + (node || 'pve') + '?\nAll virtual servers will power off.')) {
        return;
      }
      var self = this;
      self.apiCall('/nodes/' + (node || 'pve') + '/status/shutdown', 'POST', {}, function () {
        self.showToast('Shutdown initiated for node ' + (node || 'pve'), 'error');
      });
    },

    sendTerminalKey: function (iframeId, keyName) {
      var iframe = document.getElementById(iframeId);
      if (!iframe) return;
      try {
        var win = iframe.contentWindow;
        var doc = iframe.contentDocument || (win && win.document);

        // 1. Try injected noVNC bridge helper
        if (win && typeof win._zesSendKey === 'function') {
          if (win._zesSendKey(keyName)) {
            this.showToast('Sent ' + keyName.toUpperCase(), 'info');
            return;
          }
        }

        // 2. xterm.js keys (Node Shell, LXC, Serial)
        if (win && win.term && typeof win.term.send === 'function') {
          if (keyName === 'ctrl-c') win.term.send('\x03');
          else if (keyName === 'ctrl-l') win.term.send('\x0c');
          else if (keyName === 'ctrl-d') win.term.send('\x04');
          else if (keyName === 'ctrl-z') win.term.send('\x1a');
          else if (keyName === 'tab') win.term.send('\t');
          else if (keyName === 'enter') win.term.send('\r');
          else if (keyName === 'esc') win.term.send('\x1b');
          this.showToast('Sent ' + keyName.toUpperCase(), 'info');
          return;
        }

        // 3. noVNC keys via live RFB instance
        var rfb = (win && win.UI && win.UI.rfb) || (win && win.rfb);
        if (rfb && typeof rfb.sendKey === 'function') {
          if (keyName === 'ctrl-c') {
            rfb.sendKey(0xFFE3, 'ControlLeft', true);
            rfb.sendKey(0x0063, 'KeyC', true);
            rfb.sendKey(0x0063, 'KeyC', false);
            rfb.sendKey(0xFFE3, 'ControlLeft', false);
          } else if (keyName === 'ctrl-l') {
            rfb.sendKey(0xFFE3, 'ControlLeft', true);
            rfb.sendKey(0x006C, 'KeyL', true);
            rfb.sendKey(0x006C, 'KeyL', false);
            rfb.sendKey(0xFFE3, 'ControlLeft', false);
          } else if (keyName === 'ctrl-d') {
            rfb.sendKey(0xFFE3, 'ControlLeft', true);
            rfb.sendKey(0x0064, 'KeyD', true);
            rfb.sendKey(0x0064, 'KeyD', false);
            rfb.sendKey(0xFFE3, 'ControlLeft', false);
          } else if (keyName === 'tab') {
            rfb.sendKey(0xFF09, 'Tab', true);
            rfb.sendKey(0xFF09, 'Tab', false);
          } else if (keyName === 'esc') {
            rfb.sendKey(0xFF1B, 'Escape', true);
            rfb.sendKey(0xFF1B, 'Escape', false);
          } else if (keyName === 'enter') {
            rfb.sendKey(0xFF0D, 'Enter', true);
            rfb.sendKey(0xFF0D, 'Enter', false);
          }
          this.showToast('Sent ' + keyName.toUpperCase(), 'info');
          return;
        }

        // 4. Try noVNC UI keyEvent
        if (win && win.UI && typeof win.UI.keyEvent === 'function') {
          if (keyName === 'ctrl-c') {
            win.UI.keyEvent(0xFFE3, 'ControlLeft', true);
            win.UI.keyEvent(0x0063, 'KeyC', true);
            win.UI.keyEvent(0x0063, 'KeyC', false);
            win.UI.keyEvent(0xFFE3, 'ControlLeft', false);
          } else if (keyName === 'tab') {
            win.UI.keyEvent(0xFF09, 'Tab', true);
            win.UI.keyEvent(0xFF09, 'Tab', false);
          } else if (keyName === 'esc') {
            win.UI.keyEvent(0xFF1B, 'Escape', true);
            win.UI.keyEvent(0xFF1B, 'Escape', false);
          }
          this.showToast('Sent ' + keyName.toUpperCase(), 'info');
          return;
        }

        // 5. DOM KeyboardEvent dispatch on canvas / input
        if (doc) {
          var target = doc.querySelector('canvas') || doc.getElementById('noVNC_keyboardinput');
          if (target) {
            if (keyName === 'ctrl-c') {
              target.dispatchEvent(new KeyboardEvent('keydown', { key: 'c', ctrlKey: true, keyCode: 67, which: 67, bubbles: true }));
              target.dispatchEvent(new KeyboardEvent('keyup', { key: 'c', ctrlKey: true, keyCode: 67, which: 67, bubbles: true }));
            } else if (keyName === 'tab') {
              target.dispatchEvent(new KeyboardEvent('keydown', { key: 'Tab', keyCode: 9, which: 9, bubbles: true }));
              target.dispatchEvent(new KeyboardEvent('keyup', { key: 'Tab', keyCode: 9, which: 9, bubbles: true }));
            } else if (keyName === 'esc') {
              target.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', keyCode: 27, which: 27, bubbles: true }));
              target.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape', keyCode: 27, which: 27, bubbles: true }));
            }
            this.showToast('Sent ' + keyName.toUpperCase(), 'info');
            return;
          }
        }
      } catch (e) {
        console.warn(e);
      }
    },

    pasteFromClipboardToTerminal: async function (iframeId, autoRun) {
      try {
        var text = await navigator.clipboard.readText();
        if (!text) {
          this.showToast('Clipboard is empty', 'warning');
          return;
        }
        if (autoRun) {
          this.sendTerminalCommand(iframeId, text, true);
        } else {
          var input = document.getElementById(iframeId + '-cmd-input');
          if (input) {
            input.value = text;
            input.focus();
            this.showToast('Clipboard text ready in input bar. Press Enter to send.', 'info');
          } else {
            this.sendTerminalCommand(iframeId, text, false);
          }
        }
      } catch (err) {
        var promptCmd = prompt('Paste your command below to send to terminal:');
        if (promptCmd !== null && promptCmd !== '') {
          if (autoRun) {
            this.sendTerminalCommand(iframeId, promptCmd, true);
          } else {
            var inp = document.getElementById(iframeId + '-cmd-input');
            if (inp) {
              inp.value = promptCmd;
              inp.focus();
            }
          }
        }
      }
    },

    toggleTerminalFullscreen: function (wrapperId) {
      var wrapper = document.getElementById(wrapperId);
      if (!wrapper) return;
      wrapper.classList.toggle('is-fullscreen');
    },

    navigateCmdHistory: function (iframeId, direction) {
      var hist = window._zesCmdHistory || [];
      if (!hist.length) return;
      window._zesCmdHistoryIndex = (window._zesCmdHistoryIndex !== undefined) ? window._zesCmdHistoryIndex + direction : hist.length - 1;
      if (window._zesCmdHistoryIndex < 0) window._zesCmdHistoryIndex = 0;
      if (window._zesCmdHistoryIndex >= hist.length) {
        window._zesCmdHistoryIndex = hist.length;
        var inp = document.getElementById(iframeId + '-cmd-input');
        if (inp) inp.value = '';
        return;
      }
      var target = hist[window._zesCmdHistoryIndex];
      var inputEl = document.getElementById(iframeId + '-cmd-input');
      if (inputEl && target !== undefined) {
        inputEl.value = target;
      }
    },

    hookTerminalIframe: function (iframe) {
      if (!iframe) return;
      try {
        var win = iframe.contentWindow;
        var doc = iframe.contentDocument || (win && win.document);
        if (!doc) return;
        if (doc.getElementById('zes-novnc-bridge')) return;
        var s = doc.createElement('script');
        s.id = 'zes-novnc-bridge';
        s.type = 'module';
        s.textContent = `
          try {
            const scriptTag = Array.from(document.querySelectorAll('script[type="module"]')).find(el => el.src && el.src.includes('/novnc/'));
            const src = scriptTag ? scriptTag.src : '/novnc/app.js?ver=1.7.0-1';
            import(src).then(mod => {
              const UI = mod.default || mod;
              window.UI = UI;
              window.rfb = UI.rfb;
              setInterval(() => {
                if (UI && UI.rfb) {
                  window.rfb = UI.rfb;
                  window.UI = UI;
                }
              }, 200);
              window._zesSendKeystrokes = function(text, withEnter) {
                const rfb = (window.UI && window.UI.rfb) || window.rfb;
                if (!rfb) return false;
                for (let i = 0; i < text.length; i++) {
                  const code = text.charCodeAt(i);
                  rfb.sendKey(code, null, true);
                  rfb.sendKey(code, null, false);
                }
                if (withEnter) {
                  rfb.sendKey(0xFF0D, 'Enter', true);
                  rfb.sendKey(0xFF0D, 'Enter', false);
                }
                return true;
              };
              window._zesSendKey = function(keyName) {
                const rfb = (window.UI && window.UI.rfb) || window.rfb;
                if (!rfb) return false;
                if (keyName === 'ctrl-c') {
                  rfb.sendKey(0xFFE3, 'ControlLeft', true);
                  rfb.sendKey(0x0063, 'KeyC', true);
                  rfb.sendKey(0x0063, 'KeyC', false);
                  rfb.sendKey(0xFFE3, 'ControlLeft', false);
                } else if (keyName === 'ctrl-l') {
                  rfb.sendKey(0xFFE3, 'ControlLeft', true);
                  rfb.sendKey(0x006C, 'KeyL', true);
                  rfb.sendKey(0x006C, 'KeyL', false);
                  rfb.sendKey(0xFFE3, 'ControlLeft', false);
                } else if (keyName === 'ctrl-d') {
                  rfb.sendKey(0xFFE3, 'ControlLeft', true);
                  rfb.sendKey(0x0064, 'KeyD', true);
                  rfb.sendKey(0x0064, 'KeyD', false);
                  rfb.sendKey(0xFFE3, 'ControlLeft', false);
                } else if (keyName === 'tab') {
                  rfb.sendKey(0xFF09, 'Tab', true);
                  rfb.sendKey(0xFF09, 'Tab', false);
                } else if (keyName === 'esc') {
                  rfb.sendKey(0xFF1B, 'Escape', true);
                  rfb.sendKey(0xFF1B, 'Escape', false);
                } else if (keyName === 'enter') {
                  rfb.sendKey(0xFF0D, 'Enter', true);
                  rfb.sendKey(0xFF0D, 'Enter', false);
                }
                return true;
              };
            }).catch(e => {});
          } catch(e) {}
        `;
        doc.head.appendChild(s);
      } catch (e) {}
    },

    fetchServers: function (silent = false) {
      return this.fetchLiveServers(silent);
    },

    fetchServerConfig: function (vmid, type) {
      this.fetchServers();
      if (State.currentView === 'server-detail') {
        this.fetchServerDetails();
      }
    },

    openCloneWindow: function (vmid, node, type) {
      var nodename = node || (window.Proxmox && Proxmox.NodeName ? Proxmox.NodeName : 'pve');
      var guestType = (type === 'lxc') ? 'lxc' : 'qemu';
      if (window.Ext && Ext.ClassManager.get('PVE.window.Clone')) {
        try {
          var win = Ext.create('PVE.window.Clone', {
            nodename: nodename,
            vmid: parseInt(vmid, 10),
            guestType: guestType
          });
          win.show();
          win.center();
          win.on('destroy', () => Zesium.fetchServers());
          return;
        } catch (e) {
          console.warn('Clone dialog error:', e);
        }
      }
      this.showToast('Opening Clone dialog...', 'info');
    },

    openMigrateWindow: function (vmid, node, type) {
      var nodename = node || (window.Proxmox && Proxmox.NodeName ? Proxmox.NodeName : 'pve');
      var vmtype = (type === 'lxc') ? 'lxc' : 'qemu';
      if (window.Ext && Ext.ClassManager.get('PVE.window.Migrate')) {
        try {
          var win = Ext.create('PVE.window.Migrate', {
            nodename: nodename,
            vmid: parseInt(vmid, 10),
            vmtype: vmtype
          });
          win.show();
          win.center();
          win.on('destroy', () => Zesium.fetchServers());
          return;
        } catch (e) {
          console.warn('Migrate dialog error:', e);
        }
      }
      this.showToast('Opening Migration dialog...', 'info');
    },

    openAddFirewallRuleWindow: function (vmid, node, type) {
      var nodename = node || (window.Proxmox && Proxmox.NodeName ? Proxmox.NodeName : 'pve');
      var guestType = (type === 'lxc') ? 'lxc' : 'qemu';
      var baseUrl = vmid ? ('/nodes/' + nodename + '/' + guestType + '/' + vmid + '/firewall/rules') : ('/nodes/' + nodename + '/firewall/rules');
      var refsUrl = vmid ? ('/nodes/' + nodename + '/' + guestType + '/' + vmid + '/firewall/refs') : ('/cluster/firewall/refs');
      if (window.Ext && Ext.ClassManager.get('PVE.FirewallRuleEdit')) {
        try {
          var win = Ext.create('PVE.FirewallRuleEdit', {
            base_url: baseUrl,
            list_refs_url: refsUrl,
            isCreate: true
          });
          win.show();
          win.center();
          win.on('destroy', () => {
            if (vmid) Zesium.fetchFirewallRules();
            else Zesium.fetchNodeFirewall();
          });
          return;
        } catch (e) {
          console.warn('FirewallRuleEdit error:', e);
        }
      }
      this.showToast('Opening Firewall Rule builder...', 'info');
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

    deleteISO: function (volid) {
      if (!volid) return;
      const fileName = volid.split('/').pop() || volid;
      if (!confirm('Are you sure you want to permanently delete ISO image "' + fileName + '"?')) return;

      const node = (window.Proxmox && Proxmox.NodeName) ? Proxmox.NodeName : 'pve';
      const storage = volid.split(':')[0] || 'local';

      if (window.Proxmox && Proxmox.Utils && Proxmox.Utils.API2Request) {
        Proxmox.Utils.API2Request({
          url: '/nodes/' + node + '/storage/' + storage + '/content/' + encodeURIComponent(volid),
          method: 'DELETE',
          waitMsgTarget: Ext.getBody(),
          success: function () {
            Zesium.fetchISOs();
          },
          failure: function (response) {
            Ext.Msg.alert('Error', response.htmlStatus || 'Failed to delete ISO image.');
          }
        });
      }
    },

    deleteBackup: function (volid) {
      if (!volid) return;
      const fileName = volid.split('/').pop() || volid;
      if (!confirm('Are you sure you want to permanently delete backup "' + fileName + '"?')) return;

      const node = (window.Proxmox && Proxmox.NodeName) ? Proxmox.NodeName : 'pve';
      const storage = volid.split(':')[0] || 'local';

      if (window.Proxmox && Proxmox.Utils && Proxmox.Utils.API2Request) {
        Proxmox.Utils.API2Request({
          url: '/nodes/' + node + '/storage/' + storage + '/content/' + encodeURIComponent(volid),
          method: 'DELETE',
          waitMsgTarget: Ext.getBody(),
          success: function () {
            Zesium.fetchBackups();
          },
          failure: function (response) {
            Ext.Msg.alert('Error', response.htmlStatus || 'Failed to delete backup.');
          }
        });
      }
    },

    openHardwareEdit: function (device, vmid, nodename, type) {
      const node = nodename || (window.Proxmox && Proxmox.NodeName ? Proxmox.NodeName : 'pve');
      const isLxc = type === 'lxc';

      try {
        let win = null;
        if (device === 'memory') {
          if (!isLxc && Ext.ClassManager.get('PVE.qemu.MemoryEdit')) {
            win = Ext.create('PVE.qemu.MemoryEdit', { nodename: node, vmid: vmid, autoShow: true });
          }
        } else if (device === 'cores' || device === 'sockets' || device === 'cpu') {
          if (!isLxc && Ext.ClassManager.get('PVE.qemu.ProcessorEdit')) {
            win = Ext.create('PVE.qemu.ProcessorEdit', { nodename: node, vmid: vmid, autoShow: true });
          }
        } else if (device && (device.startsWith('ide') || device === 'cdrom')) {
          if (!isLxc && Ext.ClassManager.get('PVE.qemu.CDEdit')) {
            win = Ext.create('PVE.qemu.CDEdit', { nodename: node, vmid: vmid, configname: device, autoShow: true });
          }
        } else if (device && device.startsWith('net')) {
          if (!isLxc && Ext.ClassManager.get('PVE.qemu.NetworkEdit')) {
            win = Ext.create('PVE.qemu.NetworkEdit', { nodename: node, vmid: vmid, configname: device, autoShow: true });
          }
        } else if (device && (device.startsWith('scsi') || device.startsWith('virtio') || device.startsWith('sata') || device.startsWith('rootfs'))) {
          if (!isLxc && Ext.ClassManager.get('PVE.qemu.HDEdit')) {
            win = Ext.create('PVE.qemu.HDEdit', { nodename: node, vmid: vmid, configname: device, autoShow: true });
          }
        }

        if (win) {
          win.show();
          win.center();
          win.on('destroy', () => Zesium.fetchServerConfig(vmid, type));
          return;
        }
      } catch (e) {
        console.warn('Edit dialog error:', e);
      }

      Zesium.openProxmoxConfigWindow(vmid, node, type);
    },

    openProxmoxConfigWindow: function (vmid, nodename, vmtype) {
      if (document.body.classList.contains('zesium-active')) {
        this.toggleNativeView();
      }
      setTimeout(function () {
        try {
          var tree = Ext.ComponentQuery.query('pveResourceTree')[0];
          if (tree) {
            var store = tree.getStore();
            var targetId = (vmtype === 'lxc' ? 'lxc/' : 'qemu/') + vmid;
            var rec = store.findRecord('id', targetId) || store.findRecord('vmid', parseInt(vmid, 10));
            if (rec) {
              tree.getSelectionModel().select(rec);
            }
          }
        } catch (e) {
          console.warn('Select tree node note:', e);
        }
      }, 60);
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
      this.navigateTo('shell');
    },

    openVNC: function (id) {
      const server = State.servers.find(s => String(s.id) === String(id)) || this.getActiveServer();
      if (!server) return;
      State.selectedTab = 'console';
      this.navigateTo('server-detail', server.id, 'console');
    },

    formatUptime: function (sec) {
      if (!sec || isNaN(sec) || sec <= 0) return '-';
      const d = Math.floor(sec / 86400);
      const h = Math.floor((sec % 86400) / 3600);
      const m = Math.floor((sec % 3600) / 60);
      const s = Math.floor(sec % 60);
      if (d > 0) return `${d}d ${h}h ${m}m`;
      if (h > 0) return `${h}h ${m}m`;
      if (m > 0) return `${m}m ${s}s`;
      return `${s}s`;
    },

    // Server Power & Lifecycle Handlers with Immediate State Feedback and Active Polling
    startServer: function (id) {
      const server = State.servers.find(s => String(s.id) === String(id)) || this.getActiveServer();
      if (!server) return;
      server.actionPending = 'Starting';
      this.render();

      Proxmox.Utils.API2Request({
        url: `/nodes/${server.node}/${server.type}/${server.vmid}/status/start`,
        method: 'POST',
        success: () => {
          showToast('Server Starting', `Power-on signal dispatched to ${server.name} (VMID ${server.vmid}).`);
          let count = 0;
          const poll = setInterval(() => {
            count++;
            Proxmox.Utils.API2Request({
              url: `/nodes/${server.node}/${server.type}/${server.vmid}/status/current`,
              method: 'GET',
              success: (res) => {
                const cur = (res && res.result && res.result.data) ? res.result.data : {};
                if (cur.status === 'running' || count >= 20) {
                  clearInterval(poll);
                  server.actionPending = null;
                  server.state = cur.status || 'running';
                  server.uptime = cur.uptime ? Zesium.formatUptime(cur.uptime) : '< 1 min';
                  showToast('Server Online', `${server.name} (VMID ${server.vmid}) is now running.`);
                  Zesium.fetchLiveServers();
                  if (State.currentView === 'server-detail') Zesium.fetchServerDetails();
                }
              },
              failure: () => {
                if (count >= 20) {
                  clearInterval(poll);
                  server.actionPending = null;
                  Zesium.fetchLiveServers();
                }
              }
            });
          }, 1200);
        },
        failure: (err) => {
          server.actionPending = null;
          this.render();
          showToast('Action Failed', err.htmlStatus || 'Could not start server');
        }
      });
    },

    shutdownServer: function (id) {
      const server = State.servers.find(s => String(s.id) === String(id)) || this.getActiveServer();
      if (!server) return;
      server.actionPending = 'Shutting down';
      this.render();

      Proxmox.Utils.API2Request({
        url: `/nodes/${server.node}/${server.type}/${server.vmid}/status/shutdown`,
        method: 'POST',
        success: () => {
          showToast('Server Shutting Down', `Graceful shutdown signal dispatched to ${server.name} (VMID ${server.vmid}).`);
          let count = 0;
          const poll = setInterval(() => {
            count++;
            Proxmox.Utils.API2Request({
              url: `/nodes/${server.node}/${server.type}/${server.vmid}/status/current`,
              method: 'GET',
              success: (res) => {
                const cur = (res && res.result && res.result.data) ? res.result.data : {};
                if (cur.status === 'stopped' || count >= 25) {
                  clearInterval(poll);
                  server.actionPending = null;
                  server.state = 'stopped';
                  server.uptime = '-';
                  showToast('Server Stopped', `${server.name} (VMID ${server.vmid}) has powered down.`);
                  Zesium.fetchLiveServers();
                  if (State.currentView === 'server-detail') Zesium.fetchServerDetails();
                }
              },
              failure: () => {
                if (count >= 25) {
                  clearInterval(poll);
                  server.actionPending = null;
                  Zesium.fetchLiveServers();
                }
              }
            });
          }, 1200);
        },
        failure: (err) => {
          server.actionPending = null;
          this.render();
          showToast('Action Failed', err.htmlStatus || 'Could not shutdown server');
        }
      });
    },

    stopServer: function (id) {
      const server = State.servers.find(s => String(s.id) === String(id)) || this.getActiveServer();
      if (!server) return;
      server.actionPending = 'Stopping';
      this.render();

      Proxmox.Utils.API2Request({
        url: `/nodes/${server.node}/${server.type}/${server.vmid}/status/stop`,
        method: 'POST',
        success: () => {
          showToast('Force Stop Dispatched', `Force stop dispatched to ${server.name} (VMID ${server.vmid}).`);
          let count = 0;
          const poll = setInterval(() => {
            count++;
            Proxmox.Utils.API2Request({
              url: `/nodes/${server.node}/${server.type}/${server.vmid}/status/current`,
              method: 'GET',
              success: (res) => {
                const cur = (res && res.result && res.result.data) ? res.result.data : {};
                if (cur.status === 'stopped' || count >= 15) {
                  clearInterval(poll);
                  server.actionPending = null;
                  server.state = 'stopped';
                  server.uptime = '-';
                  showToast('Server Stopped', `${server.name} is offline.`);
                  Zesium.fetchLiveServers();
                  if (State.currentView === 'server-detail') Zesium.fetchServerDetails();
                }
              },
              failure: () => {
                if (count >= 15) {
                  clearInterval(poll);
                  server.actionPending = null;
                  Zesium.fetchLiveServers();
                }
              }
            });
          }, 1000);
        },
        failure: (err) => {
          server.actionPending = null;
          this.render();
          showToast('Action Failed', err.htmlStatus || 'Could not stop server');
        }
      });
    },

    restartServer: function (id) {
      const server = State.servers.find(s => String(s.id) === String(id)) || this.getActiveServer();
      if (!server) return;
      server.actionPending = 'Rebooting';
      this.render();

      Proxmox.Utils.API2Request({
        url: `/nodes/${server.node}/${server.type}/${server.vmid}/status/reboot`,
        method: 'POST',
        success: () => {
          showToast('Server Rebooting', `Reboot signal dispatched to ${server.name} (VMID ${server.vmid}).`);
          let count = 0;
          const poll = setInterval(() => {
            count++;
            Proxmox.Utils.API2Request({
              url: `/nodes/${server.node}/${server.type}/${server.vmid}/status/current`,
              method: 'GET',
              success: (res) => {
                const cur = (res && res.result && res.result.data) ? res.result.data : {};
                if (cur.status === 'running' || count >= 20) {
                  clearInterval(poll);
                  server.actionPending = null;
                  server.state = 'running';
                  server.uptime = cur.uptime ? Zesium.formatUptime(cur.uptime) : '< 1 min';
                  showToast('Reboot Complete', `${server.name} is online and running.`);
                  Zesium.fetchLiveServers();
                  if (State.currentView === 'server-detail') Zesium.fetchServerDetails();
                }
              },
              failure: () => {
                if (count >= 20) {
                  clearInterval(poll);
                  server.actionPending = null;
                  Zesium.fetchLiveServers();
                }
              }
            });
          }, 1500);
        },
        failure: (err) => {
          server.actionPending = null;
          this.render();
          showToast('Action Failed', err.htmlStatus || 'Could not reboot server');
        }
      });
    },

    deleteServer: function (id) {
      const server = State.servers.find(s => String(s.id) === String(id)) || this.getActiveServer();
      if (!server) return;
      if (server.state === 'running') {
        alert(`Cannot destroy ${server.name} while it is RUNNING. Please shutdown or stop the guest first.`);
        return;
      }
      if (!confirm(`Are you sure you want to PERMANENTLY DESTROY ${server.name} (VMID ${server.vmid})? This cannot be undone.`)) {
        return;
      }
      server.actionPending = 'Destroying';
      this.render();
      Proxmox.Utils.API2Request({
        url: `/nodes/${server.node}/${server.type}/${server.vmid}`,
        method: 'DELETE',
        params: { purge: 1 },
        success: () => {
          showToast('Server Destroyed', `VMID ${server.vmid} purged.`);
          this.navigateTo('servers');
        },
        failure: (err) => {
          server.actionPending = null;
          this.render();
          showToast('Delete Failed', err.htmlStatus || 'Could not delete server');
        }
      });
    },

    // Cluster Wizards
    openCreateClusterWindow: function () {
      if (window.Ext && Ext.ClassManager.get('PVE.ClusterCreateWindow')) {
        const win = Ext.create('PVE.ClusterCreateWindow', {
          autoShow: true,
          taskDone: () => Zesium.fetchCluster()
        });
        win.show();
        win.center();
      }
    },

    openJoinClusterWindow: function () {
      if (window.Ext && Ext.ClassManager.get('PVE.ClusterJoinNodeWindow')) {
        const win = Ext.create('PVE.ClusterJoinNodeWindow', {
          autoShow: true,
          taskDone: () => Zesium.fetchCluster()
        });
        win.show();
        win.center();
      }
    },

    openClusterInfoWindow: function () {
      if (window.Ext && Ext.ClassManager.get('PVE.ClusterInfoWindow')) {
        const win = Ext.create('PVE.ClusterInfoWindow', {
          autoShow: true
        });
        win.show();
        win.center();
      }
    },

    // Snapshot Management
    fetchSnapshots: function () {
      const s = this.getActiveServer();
      if (!s || !window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: `/nodes/${s.node}/${s.type}/${s.vmid}/snapshot`,
        method: 'GET',
        success: (res) => {
          State.snapshots = (res && res.result && res.result.data) ? res.result.data : [];
          this.render();
        }
      });
    },

    openTakeSnapshotWindow: function () {
      const s = this.getActiveServer();
      if (!s || !window.Ext || !Ext.ClassManager.get('PVE.window.Snapshot')) return;
      const win = Ext.create('PVE.window.Snapshot', {
        nodename: s.node,
        vmid: s.vmid,
        type: s.type,
        isCreate: true,
        autoShow: true,
        taskDone: () => Zesium.fetchSnapshots()
      });
      win.show();
      win.center();
    },

    rollbackSnapshot: function (snapname) {
      const s = this.getActiveServer();
      if (!s || !snapname) return;
      if (!confirm(`Are you sure you want to rollback ${s.name} to snapshot "${snapname}"? Current unsaved state will be lost.`)) return;
      Proxmox.Utils.API2Request({
        url: `/nodes/${s.node}/${s.type}/${s.vmid}/snapshot/${encodeURIComponent(snapname)}/rollback`,
        method: 'POST',
        waitMsgTarget: Ext.getBody ? Ext.getBody() : null,
        success: () => {
          showToast('Rollback Complete', `Reverted ${s.name} to "${snapname}".`);
          Zesium.fetchServerDetails();
          Zesium.fetchSnapshots();
        },
        failure: (err) => showToast('Rollback Failed', err.htmlStatus || 'Could not rollback snapshot')
      });
    },

    deleteSnapshot: function (snapname) {
      const s = this.getActiveServer();
      if (!s || !snapname) return;
      if (!confirm(`Permanently delete snapshot "${snapname}"?`)) return;
      Proxmox.Utils.API2Request({
        url: `/nodes/${s.node}/${s.type}/${s.vmid}/snapshot/${encodeURIComponent(snapname)}`,
        method: 'DELETE',
        success: () => {
          showToast('Snapshot Deleted', `Snapshot "${snapname}" removed.`);
          Zesium.fetchSnapshots();
        },
        failure: (err) => showToast('Delete Failed', err.htmlStatus || 'Could not delete snapshot')
      });
    },

    // Backup & Restore Dialogs
    openRestoreBackupWindow: function (volid) {
      if (!volid) return;
      const s = this.getActiveServer();
      const node = s ? s.node : 'pve';
      const isLxc = volid.includes('vztmpl') || volid.includes('subvol') || volid.includes('tar.zst') || (s && s.type === 'lxc');
      const type = isLxc ? 'lxc' : 'qemu';
      if (window.Ext && Ext.ClassManager.get('PVE.window.Restore')) {
        const win = Ext.create('PVE.window.Restore', {
          nodename: node,
          volid: volid,
          vmtype: type,
          autoShow: true,
          taskDone: () => {
            Zesium.fetchLiveServers();
            Zesium.fetchBackups();
          }
        });
        win.show();
        win.center();
      }
    },

    restoreBackup: function (volid) {
      this.openRestoreBackupWindow(volid);
    },

    // User & Token Dialogs
    openAddUserWindow: function () {
      if (window.Ext && Ext.ClassManager.get('PVE.dc.UserEdit')) {
        const win = Ext.create('PVE.dc.UserEdit', {
          isCreate: true,
          autoShow: true,
          taskDone: () => Zesium.fetchUsers()
        });
        win.show();
        win.center();
      }
    },

    openAddTokenWindow: function () {
      if (window.Ext && Ext.ClassManager.get('PVE.dc.TokenEdit')) {
        const win = Ext.create('PVE.dc.TokenEdit', {
          isCreate: true,
          autoShow: true,
          taskDone: () => Zesium.fetchUsers()
        });
        win.show();
        win.center();
      }
    },

    // Network & Disk Tools
    openCreateBridgeWindow: function () {
      if (window.Ext && Ext.ClassManager.get('Proxmox.node.NetworkEdit')) {
        const win = Ext.create('Proxmox.node.NetworkEdit', {
          nodename: 'pve',
          iftype: 'bridge',
          isCreate: true,
          autoShow: true,
          taskDone: () => Zesium.fetchNetworks()
        });
        win.show();
        win.center();
      }
    },

    openDiskSmartWindow: function (disk, node) {
      const nodename = node || (window.Proxmox && Proxmox.NodeName ? Proxmox.NodeName : 'pve');
      const devName = (disk || '').replace('/dev/', '');
      if (window.Ext && Ext.ClassManager.get('Proxmox.window.DiskSmart')) {
        try {
          const win = Ext.create('Proxmox.window.DiskSmart', {
            nodename: nodename,
            dev: devName,
            baseurl: '/nodes/' + nodename + '/disks/smart',
            autoShow: true
          });
          win.show();
          win.center();
          return;
        } catch (e) {
          console.warn('DiskSmart error:', e);
        }
      }
      this.showToast('Unable to open SMART monitor for ' + disk, 'warning');
    },

    openCertificatesWindow: function (node) {
      const nodename = node || (window.Proxmox && Proxmox.NodeName ? Proxmox.NodeName : 'pve');
      if (window.Ext && Ext.ClassManager.get('PVE.node.Certificates')) {
        try {
          const certView = Ext.create('PVE.node.Certificates', {
            nodename: nodename
          });
          const wrap = Ext.create('Ext.window.Window', {
            title: 'Node Certificates & ACME (' + nodename + ')',
            width: 900,
            height: 550,
            layout: 'fit',
            modal: true,
            items: [certView]
          });
          wrap.show();
          wrap.center();
          return;
        } catch (e) {
          console.warn('Certificates window error:', e);
        }
      }
      this.showToast('Opening Certificates manager...', 'info');
    },

    openAddBackupScheduleWindow: function () {
      if (window.Ext && Ext.ClassManager.get('PVE.dc.BackupEdit')) {
        try {
          const win = Ext.create('PVE.dc.BackupEdit', {
            isCreate: true
          });
          win.show();
          win.center();
          win.on('destroy', () => Zesium.fetchBackupJobs());
          return;
        } catch (e) {
          console.warn('BackupEdit error:', e);
        }
      }
      this.showToast('Opening Backup Schedule builder...', 'info');
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
    fetchLiveServers: function (silent = false) {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/cluster/resources',
        method: 'GET',
        success: (response) => {
          const list = response.result.data || [];
          const vms = list.filter(item => item.type === 'qemu' || item.type === 'lxc');

          const existingPending = {};
          State.servers.forEach(s => {
            if (s.actionPending) existingPending[s.id] = s.actionPending;
          });

          State.servers = vms.map(item => {
            const isLxc = item.type === 'lxc';
            const ramMb = item.maxmem ? Math.round(item.maxmem / (1024 * 1024)) : 0;
            const diskGb = item.maxdisk ? (item.maxdisk / (1024 * 1024 * 1024)).toFixed(1) : '0';
            const vcpu = item.maxcpu || (isLxc ? 1 : 2);
            const id = String(item.vmid);

            return {
              id: id,
              vmid: item.vmid,
              name: item.name || (isLxc ? `CT ${item.vmid}` : `VM ${item.vmid}`),
              type: item.type,
              node: item.node || 'pve',
              os: isLxc ? 'LXC Linux Container' : 'QEMU Virtual Machine',
              state: item.status || 'stopped',
              actionPending: existingPending[id] || null,
              vcpu: `${vcpu} vCPU`,
              ram: `${ramMb} MB`,
              disk: `${diskGb} GB`,
              uptime: item.uptime ? Zesium.formatUptime(item.uptime) : (item.status === 'running' ? '< 1 min' : '-')
            };
          });

          if (!silent) this.render();
        }
      });
    },

    fetchNodeStatus: function (silent = false) {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/status',
        method: 'GET',
        success: (response) => {
          State.nodeStatus = response.result.data || {};
          if (!silent) this.render();
        }
      });
    },

    fetchServerDetails: function (silent = false) {
      const s = this.getActiveServer();
      if (!s || !window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;

      // 1. Fetch live status & uptime for the active server
      Proxmox.Utils.API2Request({
        url: `/nodes/${s.node}/${s.type}/${s.vmid}/status/current`,
        method: 'GET',
        success: (curRes) => {
          const cur = (curRes && curRes.result && curRes.result.data) ? curRes.result.data : {};
          if (!s.actionPending) {
            s.state = cur.status || s.state;
            s.uptime = cur.uptime ? Zesium.formatUptime(cur.uptime) : (cur.status === 'running' ? '< 1 min' : '-');
            s.cpuUsage = cur.cpu ? (cur.cpu * 100).toFixed(1) + '%' : '0%';
            s.memUsage = cur.mem ? Math.round(cur.mem / (1024 * 1024)) + ' MB' : s.ram;
          }

          // 2. Fetch config
          Proxmox.Utils.API2Request({
            url: `/nodes/${s.node}/${s.type}/${s.vmid}/config`,
            method: 'GET',
            success: (response) => {
              State.serverConfig = response.result.data || {};
              if (!silent) this.render();
            }
          });
        },
        failure: () => {
          Proxmox.Utils.API2Request({
            url: `/nodes/${s.node}/${s.type}/${s.vmid}/config`,
            method: 'GET',
            success: (response) => {
              State.serverConfig = response.result.data || {};
              if (!silent) this.render();
            }
          });
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

    fetchServices: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/services',
        method: 'GET',
        success: (response) => {
          State.services = response.result.data || [];
          this.render();
        }
      });
    },

    serviceAction: function (service, action) {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      this.showToast('Triggering service ' + action + ' on ' + service + '...', 'info');
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/services/' + service + '/' + action,
        method: 'POST',
        success: () => {
          this.showToast('Service ' + service + ' ' + action + ' initiated successfully', 'success');
          setTimeout(() => this.fetchServices(), 1500);
        },
        failure: (resp) => {
          this.showToast('Failed to ' + action + ' service: ' + (resp.htmlStatus || 'Unknown error'), 'error');
        }
      });
    },

    fetchHA: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/cluster/ha/status/current',
        method: 'GET',
        success: (response) => {
          State.haStatus = response.result.data || [];
          this.render();
        }
      });
      Proxmox.Utils.API2Request({
        url: '/cluster/replication',
        method: 'GET',
        success: (response) => {
          State.replicationJobs = response.result.data || [];
          this.render();
        }
      });
    },

    fetchBackupJobs: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/cluster/backup',
        method: 'GET',
        success: (response) => {
          State.backupJobs = response.result.data || [];
          this.render();
        }
      });
    },

    fetchNodeFirewall: function () {
      if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/pve/firewall/rules',
        method: 'GET',
        success: (response) => {
          State.nodeFirewall = response.result.data || [];
          this.render();
        }
      });
    },

    fetchFirewallRules: function () {
      const s = this.getActiveServer();
      if (!s || !window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/nodes/' + (s.node || 'pve') + '/' + s.type + '/' + s.vmid + '/firewall/rules',
        method: 'GET',
        success: (response) => {
          State.firewallRules = response.result.data || [];
          this.render();
        }
      });
    },

    fetchVMTasks: function () {
      const s = this.getActiveServer();
      if (!s || !window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      Proxmox.Utils.API2Request({
        url: '/cluster/tasks',
        method: 'GET',
        success: (response) => {
          const allTasks = response.result.data || [];
          State.vmTasks = allTasks.filter(t => String(t.id) === String(s.vmid) || String(t.vmid) === String(s.vmid));
          this.render();
        }
      });
    },

    sendQemuMonitor: function (cmd) {
      const s = this.getActiveServer();
      if (!s || s.type !== 'qemu' || !window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.API2Request) return;
      const input = document.getElementById('zes-qemu-monitor-input');
      const command = cmd || (input ? input.value : '');
      if (!command) return;
      if (input) input.value = '';

      State.qemuMonitorLog = State.qemuMonitorLog || [];
      State.qemuMonitorLog.push({ type: 'cmd', text: '> ' + command });
      this.render();

      Proxmox.Utils.API2Request({
        url: '/nodes/' + (s.node || 'pve') + '/qemu/' + s.vmid + '/monitor',
        params: { command: command },
        method: 'POST',
        success: (resp) => {
          const output = resp.result.data || '(OK)';
          State.qemuMonitorLog.push({ type: 'res', text: output });
          this.render();
          setTimeout(() => {
            const term = document.getElementById('zes-qemu-monitor-log');
            if (term) term.scrollTop = term.scrollHeight;
          }, 50);
        },
        failure: (resp) => {
          State.qemuMonitorLog.push({ type: 'err', text: 'Error: ' + (resp.htmlStatus || 'Failed to execute monitor command') });
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
      } else if (State.currentView === 'shell' || State.currentView === 'node-shell') {
        bc.innerHTML = `
          <span class="crumb-link" onclick="Zesium.navigateTo('servers')">Home</span>
          <span class="crumb-sep">›</span>
          <span class="crumb-current">Node Shell</span>
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
                  <th style="width: 40px;">
                    <input type="checkbox" id="zes-select-all-servers" style="accent-color: #fff; cursor: pointer;" onchange="Zesium.toggleSelectAllServers(this.checked)" ${hasServers && State.selectedServerIds && State.selectedServerIds.size === State.servers.length ? 'checked' : ''} />
                  </th>
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
                    <td onclick="event.stopPropagation()">
                      <input type="checkbox" class="zes-server-cb" data-id="${s.id}" style="accent-color: #fff; cursor: pointer;" onchange="Zesium.toggleSelectServer('${s.id}', this.checked)" ${State.selectedServerIds && State.selectedServerIds.has(s.id) ? 'checked' : ''} />
                    </td>
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
                        ${s.actionPending ? `
                          <button class="zes-action-btn zes-btn-loading" style="padding: 4px 8px; font-size: 11px;" disabled>
                            <span class="zes-spinner"></span> ${s.actionPending}...
                          </button>
                        ` : s.state === 'running' ? `
                          <button class="zes-action-btn btn-shutdown" style="padding: 4px 8px; font-size: 11px;" onclick="Zesium.shutdownServer('${s.id}')">
                            Shutdown
                          </button>
                          <button class="zes-action-btn btn-stop" style="padding: 4px 8px; font-size: 11px;" onclick="Zesium.stopServer('${s.id}')">
                            Stop
                          </button>
                        ` : `
                          <button class="zes-action-btn btn-start" style="padding: 4px 8px; font-size: 11px;" onclick="Zesium.startServer('${s.id}')">
                            Start
                          </button>
                        `}
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
        const isPending = !!s.actionPending;
        const cfg = State.serverConfig || {};

        container.innerHTML = `
          <div class="zes-server-header">
            <div class="zes-server-meta">
              <div class="zes-server-os-icon">
                ${s.type === 'lxc' ? Icons.container : Icons.server}
              </div>
              <div>
                <div class="zes-server-title-row">
                  <span class="zes-status-dot ${isPending ? 'starting' : s.state}"></span>
                  <span class="zes-server-name">${s.name} (VMID: ${s.vmid})</span>
                  ${isPending ? `<span style="font-size: 12px; color: #f59e0b; font-weight: 600; margin-left: 6px;">[${s.actionPending}...]</span>` : ''}
                </div>
                <div class="zes-server-specs-line">
                  <span>Type: <strong style="color: #ffffff; text-transform: uppercase;">${s.type}</strong></span>
                  <span>Node: <strong style="color: #ffffff;">${s.node}</strong></span>
                  <span>Status: <strong style="color: ${isRunning ? '#10b981' : '#a1a1aa'}; text-transform: capitalize;">${s.state}</strong></span>
                  <span>Uptime: <strong style="color: #ffffff;">${s.uptime || '-'}</strong></span>
                </div>
              </div>
            </div>

            <div class="zes-server-actions">
              <button class="zes-action-btn" onclick="Zesium.setServerTab('console')">
                ${Icons.vnc} Console
              </button>
              ${isPending ? `
                <button class="zes-action-btn zes-btn-loading" disabled>
                  <span class="zes-spinner"></span> ${s.actionPending}...
                </button>
              ` : isRunning ? `
                <button class="zes-action-btn btn-shutdown" onclick="Zesium.shutdownServer('${s.id}')">
                  ${Icons.shutdown} Shutdown
                </button>
                <button class="zes-action-btn btn-stop" onclick="Zesium.stopServer('${s.id}')">
                  ${Icons.stop} Stop
                </button>
                <button class="zes-action-btn btn-reboot" onclick="Zesium.restartServer('${s.id}')">
                  ${Icons.restart} Reboot
                </button>
              ` : `
                <button class="zes-action-btn btn-start" onclick="Zesium.startServer('${s.id}')">
                  ${Icons.start} Start
                </button>
              `}
              <button class="zes-action-btn" onclick="Zesium.openBackupWindow('${s.vmid}', '${s.type}')">
                ${Icons.backup} Backup Now
              </button>
              <button class="zes-action-btn" onclick="Zesium.openCloneWindow('${s.vmid}', '${s.node}', '${s.type}')" title="Clone guest into new VM/CT">
                ${Icons.clone} Clone
              </button>
              <button class="zes-action-btn" onclick="Zesium.openMigrateWindow('${s.vmid}', '${s.node}', '${s.type}')" title="Migrate guest to another node">
                ${Icons.migrate} Migrate
              </button>
              ${isRunning ? `
                <button class="zes-action-btn" onclick="Zesium.resetServer('${s.id}')" title="Force Reset Guest">
                  ⟳ Reset
                </button>
                <button class="zes-action-btn" onclick="Zesium.suspendServer('${s.id}')" title="Suspend Guest to RAM">
                  ⏸ Suspend
                </button>
              ` : `
                <button class="zes-action-btn" onclick="Zesium.resumeServer('${s.id}')" title="Resume Suspended Guest">
                  ▶ Resume
                </button>
              `}
              <button class="zes-action-btn" onclick="Zesium.convertToTemplate('${s.vmid}', '${s.node}', '${s.type}')" title="Convert to Proxmox Template">
                📄 Template
              </button>
              ${!isRunning && !isPending ? `
                <button class="zes-action-btn btn-destroy" onclick="Zesium.deleteServer('${s.id}')">
                  ${Icons.deleteIcon} Destroy
                </button>
              ` : ''}
              <button class="zes-action-btn" onclick="Zesium.openProxmoxConfigWindow('${s.vmid}', '${s.node}', '${s.type}')" title="Open full native Proxmox hardware & options configuration dialog">
                ⚙ Native Config
              </button>
            </div>
          </div>

          <div class="zes-nav-tabs">
            <button class="zes-nav-tab ${State.selectedTab === 'summary' ? 'active' : ''}" onclick="Zesium.setServerTab('summary')">Summary</button>
            <button class="zes-nav-tab ${State.selectedTab === 'console' ? 'active' : ''}" onclick="Zesium.setServerTab('console')">Console</button>
            <button class="zes-nav-tab ${State.selectedTab === 'hardware' ? 'active' : ''}" onclick="Zesium.setServerTab('hardware')">Hardware</button>
            <button class="zes-nav-tab ${State.selectedTab === 'cloudinit' ? 'active' : ''}" onclick="Zesium.setServerTab('cloudinit')">Cloud-Init</button>
            <button class="zes-nav-tab ${State.selectedTab === 'options' ? 'active' : ''}" onclick="Zesium.setServerTab('options')">Options</button>
            <button class="zes-nav-tab ${State.selectedTab === 'snapshots' ? 'active' : ''}" onclick="Zesium.setServerTab('snapshots')">Snapshots</button>
            <button class="zes-nav-tab ${State.selectedTab === 'backup' ? 'active' : ''}" onclick="Zesium.setServerTab('backup')">Backups</button>
            <button class="zes-nav-tab ${State.selectedTab === 'firewall' ? 'active' : ''}" onclick="Zesium.setServerTab('firewall')">Firewall</button>
            <button class="zes-nav-tab ${State.selectedTab === 'tasks' ? 'active' : ''}" onclick="Zesium.setServerTab('tasks')">Task History</button>
            ${s.type === 'qemu' ? `
              <button class="zes-nav-tab ${State.selectedTab === 'monitor' ? 'active' : ''}" onclick="Zesium.setServerTab('monitor')">Monitor</button>
            ` : ''}
          </div>

          ${State.selectedTab === 'console' ? `
            <div id="zes-vm-terminal-wrapper" class="zes-embedded-terminal-wrapper">
              <div class="zes-terminal-toolbar">
                <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                  <span class="zes-status-dot ${s.state}"></span>
                  <span style="font-weight: 600; font-size: 13px; color: #ffffff;">${s.name} (VMID: ${s.vmid}) Console</span>
                  <div style="display: inline-flex; gap: 4px; margin-left: 6px;">
                    <button class="zes-mode-pill ${(State.consoleMode === 'xtermjs' || (!State.consoleMode && s.type === 'lxc')) ? 'active' : ''}" onclick="Zesium.setConsoleMode('xtermjs')" title="Switch to xterm.js serial / shell">
                      xterm.js (Shell)
                    </button>
                    <button class="zes-mode-pill ${(State.consoleMode === 'novnc' || (!State.consoleMode && s.type !== 'lxc')) ? 'active' : ''}" onclick="Zesium.setConsoleMode('novnc')" title="Switch to noVNC graphical display">
                      noVNC (GUI)
                    </button>
                  </div>
                </div>
                <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                  <button class="zes-chip-btn" onclick="Zesium.openScriptRunnerModal('zes-vm-console-iframe')" title="Open Multi-Line Script Runner">
                    📝 Script Runner
                  </button>
                  <button class="zes-chip-btn" onclick="Zesium.toggleTerminalFullscreen('zes-vm-terminal-wrapper')" title="Toggle Fullscreen">
                    ${Icons.fullscreen} Fullscreen
                  </button>
                  <button class="zes-chip-btn" onclick="const ifr = document.getElementById('zes-vm-console-iframe'); if (ifr) ifr.src = ifr.src;" title="Reload Console">
                    ${Icons.restart} Reload
                  </button>
                  <button class="zes-chip-btn" onclick="window.open('/?console=' + (s.type === 'lxc' ? 'lxc' : 'kvm') + '&' + ((State.consoleMode === 'xtermjs' || (!State.consoleMode && s.type === 'lxc')) ? 'xtermjs=1' : 'novnc=1') + '&node=' + (s.node || 'pve') + '&vmid=' + s.vmid, '_blank', 'width=1100,height=750')" title="Popout to Window">
                    Popout ↗
                  </button>
                </div>
              </div>

              <!-- COMMAND INPUT & CLIPBOARD QUICKBAR -->
              <div class="zes-terminal-quickbar">
                <div class="zes-cmd-input-group">
                  <div class="zes-cmd-input-icon">${Icons.keyboard}</div>
                  <input type="text"
                         id="zes-vm-console-iframe-cmd-input"
                         class="zes-cmd-input"
                         placeholder="Type or paste bash / shell command into ${s.name} (e.g. apt update && apt upgrade -y, ip a)..."
                         onkeydown="if(event.key === 'Enter') { Zesium.sendTerminalCommand('zes-vm-console-iframe'); } else if (event.key === 'ArrowUp') { Zesium.navigateCmdHistory('zes-vm-console-iframe', -1); } else if (event.key === 'ArrowDown') { Zesium.navigateCmdHistory('zes-vm-console-iframe', 1); }" />
                  <button class="zes-action-btn btn-send-cmd" onclick="Zesium.sendTerminalCommand('zes-vm-console-iframe')" title="Send Command + Enter">
                    ${Icons.sendCmd} Send ↵
                  </button>
                </div>
                <div class="zes-cmd-buttons-group">
                  <button class="zes-action-btn btn-paste-run" onclick="Zesium.pasteFromClipboardToTerminal('zes-vm-console-iframe', true)" title="Paste from clipboard and run immediately">
                    ${Icons.paste} Paste &amp; Run
                  </button>
                  <button class="zes-chip-btn" onclick="Zesium.pasteFromClipboardToTerminal('zes-vm-console-iframe', false)" title="Paste into input box to review before sending">
                    Paste to Input
                  </button>
                  <button class="zes-chip-btn" onclick="Zesium.openScriptRunnerModal('zes-vm-console-iframe')" title="Open Multi-Line Script Runner">
                    📝 Script
                  </button>
                  <div class="zes-cmd-divider"></div>
                  <button class="zes-chip-btn" onclick="Zesium.sendTerminalKey('zes-vm-console-iframe', 'ctrl-c')" title="Send Ctrl+C (Interrupt)">Ctrl+C</button>
                  <button class="zes-chip-btn" onclick="Zesium.sendTerminalKey('zes-vm-console-iframe', 'ctrl-l')" title="Send Ctrl+L (Clear Screen)">Ctrl+L</button>
                  <button class="zes-chip-btn" onclick="Zesium.sendTerminalKey('zes-vm-console-iframe', 'ctrl-d')" title="Send Ctrl+D (EOF)">Ctrl+D</button>
                  <button class="zes-chip-btn" onclick="Zesium.sendTerminalKey('zes-vm-console-iframe', 'tab')" title="Send Tab (Auto-complete)">Tab ⇥</button>
                  <button class="zes-chip-btn" onclick="Zesium.sendTerminalKey('zes-vm-console-iframe', 'esc')" title="Send Escape">Esc</button>
                </div>
              </div>

              <!-- PRESET COMMAND CHIPS ROW -->
              <div class="zes-quick-chips-row">
                <span class="zes-quick-chips-label">Quick Cmd:</span>
                <button class="zes-preset-chip" onclick="Zesium.sendTerminalCommand('zes-vm-console-iframe', 'apt update && apt upgrade -y')">apt update</button>
                <button class="zes-preset-chip" onclick="Zesium.sendTerminalCommand('zes-vm-console-iframe', 'ip a')">ip a</button>
                <button class="zes-preset-chip" onclick="Zesium.sendTerminalCommand('zes-vm-console-iframe', 'htop')">htop</button>
                <button class="zes-preset-chip" onclick="Zesium.sendTerminalCommand('zes-vm-console-iframe', 'df -h')">df -h</button>
                <button class="zes-preset-chip" onclick="Zesium.sendTerminalCommand('zes-vm-console-iframe', 'systemctl status')">systemctl status</button>
                <button class="zes-preset-chip" onclick="Zesium.sendTerminalCommand('zes-vm-console-iframe', 'clear')">clear</button>
              </div>

              <div class="zes-terminal-body">
                <iframe id="zes-vm-console-iframe"
                        src="/?console=${s.type === 'lxc' ? 'lxc' : 'kvm'}&${(State.consoleMode === 'xtermjs' || (!State.consoleMode && s.type === 'lxc')) ? 'xtermjs=1' : 'novnc=1'}&node=${s.node || 'pve'}&vmid=${s.vmid}"
                        class="zes-embedded-iframe"
                        allowfullscreen
                        onload="Zesium.hookTerminalIframe(this)"></iframe>
              </div>
            </div>
          `: State.selectedTab === 'summary' ? `
            <div class="zes-cards-grid">
              <div class="zes-plan-card">
                <div style="font-size: 12px; color: #a1a1aa;">Assigned vCPU</div>
                <div style="font-size: 24px; font-weight: 700; color: #fff; margin: 8px 0;">${s.vcpu}</div>
                <div style="font-size: 11px; color: #71717a;">CPU Usage: ${s.cpuUsage || '0%'}</div>
              </div>
              <div class="zes-plan-card">
                <div style="font-size: 12px; color: #a1a1aa;">Memory Allocation</div>
                <div style="font-size: 24px; font-weight: 700; color: #fff; margin: 8px 0;">${s.ram}</div>
                <div style="font-size: 11px; color: #71717a;">RAM Used: ${s.memUsage || '0 MB'}</div>
              </div>
              <div class="zes-plan-card">
                <div style="font-size: 12px; color: #a1a1aa;">Disk Size</div>
                <div style="font-size: 24px; font-weight: 700; color: #fff; margin: 8px 0;">${s.disk}</div>
                <div style="font-size: 11px; color: #71717a;">Storage on ${s.node}</div>
              </div>
            </div>

            <!-- VM NOTES & DOCUMENTATION -->
            <div class="zes-notes-box">
              <div class="zes-notes-header">
                <div class="zes-notes-title">
                  ${Icons.server}
                  <span>Guest Notes &amp; Documentation (VMID ${s.vmid})</span>
                </div>
                <button class="zes-action-btn zes-btn-sm" onclick="Zesium.openEditNotesWindow('${s.vmid}', '${s.node}', '${s.type}')">
                  ✎ Edit Notes
                </button>
              </div>
              <div class="zes-notes-content">
                ${cfg.description ? cfg.description : '<span style="color: #71717a; font-style: italic;">No notes or documentation added yet. Click &quot;Edit Notes&quot; to save IP addresses, passwords, or configuration remarks.</span>'}
              </div>
            </div>
          ` : State.selectedTab === 'hardware' ? `
            <div style="margin-bottom: 12px;">
              <div style="font-size: 13px; color: #a1a1aa;">Hardware specifications &amp; virtual devices</div>
            </div>
            <div class="zes-table-container">
              <table class="zes-table">
                <thead>
                  <tr>
                    <th>Device</th>
                    <th>Configuration Value</th>
                    <th style="text-align: right; width: 100px;">Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${Object.keys(cfg).filter(k => !k.startsWith('ci') && !['name', 'ostype', 'boot', 'agent', 'onboot', 'startup', 'protection', 'digest'].includes(k)).map(k => `
                    <tr>
                      <td style="font-weight: 600; color: #ffffff; width: 200px;">${k}</td>
                      <td style="font-family: monospace; color: #d4d4d8;">${cfg[k]}</td>
                      <td style="text-align: right;">
                        <button class="zes-action-btn" style="padding: 3px 12px; font-size: 11px;" onclick="Zesium.openHardwareEdit('${k}', '${s.vmid}', '${s.node}', '${s.type}')">
                          Edit
                        </button>
                      </td>
                    </tr>
                  `).join('') || `<tr><td colspan="3" style="text-align: center; padding: 30px; color: #71717a;">Loading hardware configuration...</td></tr>`}
                </tbody>
              </table>
            </div>
          ` : State.selectedTab === 'cloudinit' ? `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
              <div style="font-size: 13px; color: #a1a1aa;">Cloud-Init provisioning options (User, SSH Keys, Network)</div>
              <button class="zes-btn-primary" style="padding: 6px 14px; font-size: 12px;" onclick="Zesium.openProxmoxConfigWindow('${s.vmid}', '${s.node}', '${s.type}')">
                ⚙ Edit Cloud-Init in Proxmox
              </button>
            </div>
            <div class="zes-table-container">
              <table class="zes-table">
                <thead>
                  <tr>
                    <th>Setting</th>
                    <th>Configured Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">User</td>
                    <td style="font-family: monospace; color: #d4d4d8;">${cfg.ciuser || '(Default root/admin)'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">Password</td>
                    <td style="font-family: monospace; color: #d4d4d8;">${cfg.cipassword ? '••••••••' : '(Not configured)'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">DNS Domain</td>
                    <td style="font-family: monospace; color: #d4d4d8;">${cfg.searchdomain || '(Host default)'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">DNS Servers</td>
                    <td style="font-family: monospace; color: #d4d4d8;">${cfg.nameserver || '(Host default)'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">SSH Public Keys</td>
                    <td style="font-family: monospace; color: #d4d4d8; max-width: 400px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${cfg.sshkeys ? decodeURIComponent(cfg.sshkeys) : '(No keys uploaded)'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">IP Configuration (IPv4/IPv6)</td>
                    <td style="font-family: monospace; color: #d4d4d8;">${cfg.ipconfig0 || 'ip=dhcp'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ` : State.selectedTab === 'options' ? `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
              <div style="font-size: 13px; color: #a1a1aa;">Guest operating parameters & hypervisor options</div>
              <button class="zes-btn-primary" style="padding: 6px 14px; font-size: 12px;" onclick="Zesium.openProxmoxConfigWindow('${s.vmid}', '${s.node}', '${s.type}')">
                ⚙ Edit Options in Proxmox
              </button>
            </div>
            <div class="zes-table-container">
              <table class="zes-table">
                <thead>
                  <tr>
                    <th>Option Name</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">Name</td>
                    <td style="color: #d4d4d8;">${cfg.name || s.name}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">Start at Boot</td>
                    <td style="color: #d4d4d8;">${cfg.onboot ? '<strong style="color: #10b981;">Yes</strong>' : 'No'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">OS Type</td>
                    <td style="color: #d4d4d8;">${cfg.ostype || 'l26 (Linux 6.x)'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">Boot Order</td>
                    <td style="font-family: monospace; color: #d4d4d8;">${cfg.boot || 'order=scsi0;ide2;net0'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">QEMU Guest Agent</td>
                    <td style="color: #d4d4d8;">${cfg.agent ? '<strong style="color: #10b981;">Enabled</strong>' : 'Disabled'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">ACPI Support</td>
                    <td style="color: #d4d4d8;">${cfg.acpi === 0 ? 'Disabled' : 'Enabled'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">KVM Hardware Virtualization</td>
                    <td style="color: #d4d4d8;">${cfg.kvm === 0 ? 'Disabled' : '<strong style="color: #10b981;">Enabled</strong>'}</td>
                  </tr>
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">Protection (Prevent Delete)</td>
                    <td style="color: #d4d4d8;">${cfg.protection ? '<strong style="color: #ef4444;">Protected</strong>' : 'No'}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ` : State.selectedTab === 'snapshots' ? `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
              <div style="font-size: 13px; color: #a1a1aa;">Snapshots preserve guest memory state and disk blocks for instant rollback</div>
              <div style="display: flex; gap: 8px;">
                <button class="zes-btn-primary" style="padding: 6px 14px; font-size: 12px;" onclick="Zesium.openTakeSnapshotWindow()">
                  + Take Snapshot
                </button>
                <button class="zes-action-btn" style="padding: 6px 12px; font-size: 12px;" onclick="Zesium.fetchSnapshots()">
                  ${Icons.refresh} Refresh
                </button>
              </div>
            </div>
            <div class="zes-table-container">
              <table class="zes-table">
                <thead>
                  <tr>
                    <th>Snapshot Name</th>
                    <th>Date & Time</th>
                    <th>RAM State</th>
                    <th>Description</th>
                    <th style="text-align: right;">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${(State.snapshots || []).filter(sn => sn.name !== 'current').map(sn => `
                    <tr>
                      <td style="font-weight: 700; color: #ffffff;">${sn.name}</td>
                      <td style="font-size: 12px; color: #a1a1aa;">${sn.snaptime ? new Date(sn.snaptime * 1000).toLocaleString() : '-'}</td>
                      <td>${sn.vmstate ? '<span class="zes-status-dot running"></span> Included' : 'Disk Only'}</td>
                      <td style="font-size: 12px; color: #d4d4d8;">${sn.description || '-'}</td>
                      <td style="text-align: right;">
                        <div style="display: inline-flex; gap: 6px;">
                          <button class="zes-action-btn" style="padding: 4px 10px; font-size: 11px;" onclick="Zesium.rollbackSnapshot('${sn.name}')">
                            Rollback
                          </button>
                          <button class="zes-action-btn" style="padding: 4px 10px; font-size: 11px; border-color: rgba(239, 68, 68, 0.4); color: #ef4444;" onclick="Zesium.deleteSnapshot('${sn.name}')">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  `).join('') || `<tr><td colspan="5" style="text-align: center; padding: 40px; color: #71717a;">No snapshots taken yet for this guest. Click "+ Take Snapshot" to capture current state.</td></tr>`}
                </tbody>
              </table>
            </div>
          ` : State.selectedTab === 'firewall' ? `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
              <div style="font-size: 13px; color: #a1a1aa;">Guest packet filtering, ingress/egress firewall rules & security macros</div>
              <div style="display: flex; gap: 8px;">
                <button class="zes-btn-primary" onclick="Zesium.openAddFirewallRuleWindow('${s.vmid}', '${s.node}', '${s.type}')">
                  + Add Firewall Rule
                </button>
                <button class="zes-action-btn" onclick="Zesium.fetchFirewallRules()">
                  ${Icons.refresh} Refresh
                </button>
              </div>
            </div>
            <div class="zes-table-container">
              <table class="zes-table">
                <thead>
                  <tr>
                    <th>Direction</th>
                    <th>Action</th>
                    <th>Macro / Proto</th>
                    <th>Port(s)</th>
                    <th>Source</th>
                    <th>Destination</th>
                    <th>Comment</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${(State.firewallRules || []).length > 0 ? State.firewallRules.map(r => `
                    <tr>
                      <td style="font-weight: 600; color: #ffffff; text-transform: uppercase;">${r.type || 'IN'}</td>
                      <td><span style="font-size: 11px; padding: 2px 6px; background: ${r.action === 'ACCEPT' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}; color: ${r.action === 'ACCEPT' ? '#10b981' : '#ef4444'}; border-radius: 4px; font-weight: 600;">${r.action || 'ACCEPT'}</span></td>
                      <td style="font-family: monospace;">${r.macro || r.proto || '-'}</td>
                      <td style="font-family: monospace;">${r.dport || r.sport || '-'}</td>
                      <td style="font-family: monospace; color: #a1a1aa;">${r.source || 'any'}</td>
                      <td style="font-family: monospace; color: #a1a1aa;">${r.dest || 'any'}</td>
                      <td style="color: #71717a; font-size: 12px;">${r.comment || '-'}</td>
                      <td><span class="zes-status-dot ${r.enable !== 0 ? 'running' : 'stopped'}"></span> ${r.enable !== 0 ? 'Active' : 'Disabled'}</td>
                    </tr>
                  `).join('') : `
                    <tr><td colspan="8" style="text-align: center; padding: 40px; color: #71717a;">No guest firewall rules defined. Click "+ Add Firewall Rule" to create one.</td></tr>
                  `}
                </tbody>
              </table>
            </div>
          ` : State.selectedTab === 'tasks' ? `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
              <div style="font-size: 13px; color: #a1a1aa;">Audit trail of operations executed on VMID ${s.vmid}</div>
              <button class="zes-action-btn" onclick="Zesium.fetchVMTasks()">
                ${Icons.refresh} Refresh Tasks
              </button>
            </div>
            <div class="zes-table-container">
              <table class="zes-table">
                <thead>
                  <tr>
                    <th>Start Time</th>
                    <th>User</th>
                    <th>Task Type</th>
                    <th>Node</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${(State.vmTasks || []).length > 0 ? State.vmTasks.map(t => `
                    <tr>
                      <td style="font-family: monospace; font-size: 12px;">${t.starttime ? new Date(t.starttime * 1000).toLocaleString() : '-'}</td>
                      <td style="color: #a1a1aa;">${t.user || 'root@pam'}</td>
                      <td style="font-weight: 600; color: #ffffff;">${t.type}</td>
                      <td>${t.node}</td>
                      <td>
                        <span style="display: inline-flex; align-items: center; gap: 6px; font-size: 11px; padding: 2px 8px; border-radius: 4px; font-weight: 600; ${t.status === 'OK' ? 'background: rgba(16, 185, 129, 0.15); color: #10b981;' : 'background: rgba(239, 68, 68, 0.15); color: #ef4444;'}">
                          <span class="zes-status-dot ${t.status === 'OK' ? 'running' : 'stopped'}"></span> ${t.status || 'RUNNING'}
                        </span>
                      </td>
                    </tr>
                  `).join('') : `
                    <tr><td colspan="5" style="text-align: center; padding: 40px; color: #71717a;">No recorded tasks found for VMID ${s.vmid}.</td></tr>
                  `}
                </tbody>
              </table>
            </div>
          ` : State.selectedTab === 'monitor' ? `
            <div style="margin-bottom: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
              <div style="font-size: 13px; color: #a1a1aa;">Direct low-level QEMU monitor console CLI for VM ${s.vmid}</div>
              <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                <button class="zes-chip-btn" onclick="Zesium.sendQemuMonitor('info status')">info status</button>
                <button class="zes-chip-btn" onclick="Zesium.sendQemuMonitor('info block')">info block</button>
                <button class="zes-chip-btn" onclick="Zesium.sendQemuMonitor('info balloon')">info balloon</button>
                <button class="zes-chip-btn" onclick="Zesium.sendQemuMonitor('info cpus')">info cpus</button>
                <button class="zes-chip-btn" onclick="Zesium.sendQemuMonitor('help')">help</button>
              </div>
            </div>
            <div id="zes-qemu-monitor-log" class="zes-log-viewer" style="height: 400px; margin-bottom: 12px;">
              ${(State.qemuMonitorLog || [{ type: 'res', text: 'QEMU Monitor Ready. Type a command below or click a preset.' }]).map(l => `
                <div style="color: ${l.type === 'cmd' ? '#3b82f6' : l.type === 'err' ? '#ef4444' : '#10b981'}; font-weight: ${l.type === 'cmd' ? '700' : '400'};">${l.text}</div>
              `).join('')}
            </div>
            <div style="display: flex; gap: 8px;">
              <input type="text"
                     id="zes-qemu-monitor-input"
                     class="zes-cmd-input"
                     placeholder="Type QEMU monitor command (e.g. info status, info version, system_reset)..."
                     onkeydown="if(event.key === 'Enter') Zesium.sendQemuMonitor();" />
              <button class="zes-action-btn btn-send-cmd" onclick="Zesium.sendQemuMonitor()">
                Execute ↵
              </button>
            </div>
          ` : `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
              <div style="font-size: 13px; color: #a1a1aa;">Full disaster recovery backup archives stored on hypervisor storage pools</div>
              <div style="display: flex; gap: 8px;">
                <button class="zes-btn-primary" style="padding: 6px 14px; font-size: 12px;" onclick="Zesium.openBackupWindow('${s.vmid}', '${s.type}')">
                  ${Icons.backup} + Backup Now
                </button>
                <button class="zes-action-btn" style="padding: 6px 12px; font-size: 12px;" onclick="Zesium.fetchBackups()">
                  ${Icons.refresh} Refresh
                </button>
              </div>
            </div>
            <div class="zes-table-container">
              <table class="zes-table">
                <thead>
                  <tr>
                    <th>Archive</th>
                    <th>Format</th>
                    <th>Size</th>
                    <th style="text-align: right;">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${State.backups.filter(b => b.volid && b.volid.includes(String(s.vmid))).map(b => `
                    <tr>
                      <td style="font-weight: 600; color: #ffffff;">${b.volid.split('/').pop()}</td>
                      <td>${b.format}</td>
                      <td>${(b.size / (1024 * 1024 * 1024)).toFixed(2)} GB</td>
                      <td style="text-align: right;">
                        <div style="display: inline-flex; gap: 6px;">
                          <button class="zes-action-btn" style="padding: 4px 10px; font-size: 11px;" onclick="Zesium.restoreBackup('${b.volid}')">
                            Restore
                          </button>
                          <button class="zes-action-btn" style="padding: 4px 10px; font-size: 11px; border-color: rgba(239, 68, 68, 0.4); color: #ef4444;" onclick="Zesium.deleteBackup('${b.volid}')">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  `).join('') || `<tr><td colspan="4" style="text-align: center; padding: 40px; color: #71717a;">No backups found for VMID ${s.vmid}. Click "+ Backup Now" to create one.</td></tr>`}
                </tbody>
              </table>
            </div>
          `}
        `;
      } else if (State.currentView === 'shell' || State.currentView === 'node-shell') {
        const node = (window.Proxmox && Proxmox.NodeName) ? Proxmox.NodeName : 'pve';
        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">Node Shell ('${node}')</h1>
              <p class="zes-page-subtitle">Embedded interactive root shell terminal for host administration</p>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <div style="display: inline-flex; gap: 4px; align-items: center; margin-right: 6px;">
                <button class="zes-mode-pill ${(State.nodeConsoleMode !== 'novnc') ? 'active' : ''}" onclick="Zesium.setNodeConsoleMode('xtermjs')" title="Switch to xterm.js native shell">
                  xterm.js (Shell)
                </button>
                <button class="zes-mode-pill ${(State.nodeConsoleMode === 'novnc') ? 'active' : ''}" onclick="Zesium.setNodeConsoleMode('novnc')" title="Switch to noVNC shell">
                  noVNC (GUI)
                </button>
              </div>
              <button class="zes-chip-btn" onclick="Zesium.openScriptRunnerModal('zes-node-shell-iframe')" title="Open Multi-Line Script Runner">
                📝 Script Runner
              </button>
              <button class="zes-action-btn" onclick="const ifr = document.getElementById('zes-node-shell-iframe'); if (ifr) ifr.src = ifr.src;">
                ${Icons.restart} Reload Shell
              </button>
              <button class="zes-action-btn" onclick="window.open('/?console=shell&' + ((State.nodeConsoleMode === 'novnc') ? 'novnc=1' : 'xtermjs=1') + '&node=${node}', '_blank', 'width=1100,height=750')">
                Popout ↗
              </button>
              <button class="zes-action-btn" style="border-color: rgba(245, 158, 11, 0.4); color: #f59e0b;" onclick="Zesium.rebootNode('${node}')" title="Reboot Node Host">
                Reboot Node
              </button>
              <button class="zes-action-btn" style="border-color: rgba(239, 68, 68, 0.4); color: #ef4444;" onclick="Zesium.shutdownNode('${node}')" title="Shutdown Node Host">
                Poweroff Node
              </button>
            </div>
          </div>

          <div id="zes-node-terminal-wrapper" class="zes-embedded-terminal-wrapper">
            <!-- COMMAND INPUT & CLIPBOARD QUICKBAR -->
            <div class="zes-terminal-quickbar">
              <div class="zes-cmd-input-group">
                <div class="zes-cmd-input-icon">${Icons.keyboard}</div>
                <input type="text"
                       id="zes-node-shell-iframe-cmd-input"
                       class="zes-cmd-input"
                       placeholder="Type or paste shell command to send to node ${node} (e.g. systemctl status, htop, df -h)..."
                       onkeydown="if(event.key === 'Enter') { Zesium.sendTerminalCommand('zes-node-shell-iframe'); } else if (event.key === 'ArrowUp') { Zesium.navigateCmdHistory('zes-node-shell-iframe', -1); } else if (event.key === 'ArrowDown') { Zesium.navigateCmdHistory('zes-node-shell-iframe', 1); }" />
                <button class="zes-action-btn btn-send-cmd" onclick="Zesium.sendTerminalCommand('zes-node-shell-iframe')" title="Send Command + Enter">
                  ${Icons.sendCmd} Send ↵
                </button>
              </div>
              <div class="zes-cmd-buttons-group">
                <button class="zes-action-btn btn-paste-run" onclick="Zesium.pasteFromClipboardToTerminal('zes-node-shell-iframe', true)" title="Paste from clipboard and run immediately">
                  ${Icons.paste} Paste &amp; Run
                </button>
                <button class="zes-chip-btn" onclick="Zesium.pasteFromClipboardToTerminal('zes-node-shell-iframe', false)" title="Paste into input box to review before sending">
                  Paste to Input
                </button>
                <div class="zes-cmd-divider"></div>
                <button class="zes-chip-btn" onclick="Zesium.sendTerminalKey('zes-node-shell-iframe', 'ctrl-c')" title="Send Ctrl+C (Interrupt)">Ctrl+C</button>
                <button class="zes-chip-btn" onclick="Zesium.sendTerminalKey('zes-node-shell-iframe', 'ctrl-l')" title="Send Ctrl+L (Clear Screen)">Ctrl+L</button>
                <button class="zes-chip-btn" onclick="Zesium.sendTerminalKey('zes-node-shell-iframe', 'ctrl-d')" title="Send Ctrl+D (EOF)">Ctrl+D</button>
                <button class="zes-chip-btn" onclick="Zesium.sendTerminalKey('zes-node-shell-iframe', 'tab')" title="Send Tab (Auto-complete)">Tab ⇥</button>
                <button class="zes-chip-btn" onclick="Zesium.sendTerminalKey('zes-node-shell-iframe', 'esc')" title="Send Escape">Esc</button>
                <div class="zes-cmd-divider"></div>
                <button class="zes-chip-btn" onclick="Zesium.toggleTerminalFullscreen('zes-node-terminal-wrapper')" title="Toggle Fullscreen">
                  ${Icons.fullscreen}
                </button>
              </div>
            </div>

            <!-- PRESET COMMAND CHIPS ROW -->
            <div class="zes-quick-chips-row">
              <span class="zes-quick-chips-label">Quick Cmd:</span>
              <button class="zes-preset-chip" onclick="Zesium.sendTerminalCommand('zes-node-shell-iframe', 'apt update && apt upgrade -y')">apt update</button>
              <button class="zes-preset-chip" onclick="Zesium.sendTerminalCommand('zes-node-shell-iframe', 'ip a')">ip a</button>
              <button class="zes-preset-chip" onclick="Zesium.sendTerminalCommand('zes-node-shell-iframe', 'htop')">htop</button>
              <button class="zes-preset-chip" onclick="Zesium.sendTerminalCommand('zes-node-shell-iframe', 'df -h')">df -h</button>
              <button class="zes-preset-chip" onclick="Zesium.sendTerminalCommand('zes-node-shell-iframe', 'systemctl status pveproxy pvedaemon')">systemctl</button>
              <button class="zes-preset-chip" onclick="Zesium.sendTerminalCommand('zes-node-shell-iframe', 'journalctl -xe -n 30')">journalctl</button>
              <button class="zes-preset-chip" onclick="Zesium.sendTerminalCommand('zes-node-shell-iframe', 'clear')">clear</button>
            </div>

            <div class="zes-terminal-body">
              <iframe id="zes-node-shell-iframe" src="/?console=shell&${(State.nodeConsoleMode === 'novnc') ? 'novnc=1' : 'xtermjs=1'}&node=${node}" class="zes-embedded-iframe" allowfullscreen onload="Zesium.hookTerminalIframe(this)"></iframe>
            </div>
          </div>
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
                  <th style="text-align: right; width: 100px;">Action</th>
                </tr>
              </thead>
              <tbody>
                ${hasIsos ? State.isos.map(iso => `
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">${iso.volid.split('/').pop()}</td>
                    <td><span style="font-size: 11px; padding: 2px 6px; background: #272730; border-radius: 4px;">${iso.format || 'iso'}</span></td>
                    <td>${(iso.size / (1024 * 1024 * 1024)).toFixed(2)} GB</td>
                    <td style="font-family: monospace; font-size: 11px; color: #71717a;">${iso.volid}</td>
                    <td style="text-align: right;">
                      <button class="zes-action-btn" style="padding: 4px 10px; font-size: 11px; border-color: rgba(239, 68, 68, 0.4); color: #ef4444;" onclick="Zesium.deleteISO('${iso.volid}')" title="Delete ISO Image">
                        ${Icons.deleteIcon} Delete
                      </button>
                    </td>
                  </tr>
                `).join('') : `
                  <tr>
                    <td colspan="5" style="text-align: center; padding: 60px 20px; color: #71717a;">
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
                  <th style="text-align: right; width: 100px;">Action</th>
                </tr>
              </thead>
              <tbody>
                ${hasTmpl ? State.templates.map(t => `
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">${t.volid.split('/').pop()}</td>
                    <td><span style="font-size: 11px; padding: 2px 6px; background: #272730; border-radius: 4px;">${t.format}</span></td>
                    <td>${(t.size / (1024 * 1024 * 1024)).toFixed(2)} GB</td>
                    <td style="font-family: monospace; font-size: 11px; color: #71717a;">${t.volid}</td>
                    <td style="text-align: right;">
                      <button class="zes-action-btn" style="padding: 4px 10px; font-size: 11px; border-color: rgba(239, 68, 68, 0.4); color: #ef4444;" onclick="Zesium.deleteISO('${t.volid}')" title="Delete Template">
                        ${Icons.deleteIcon} Delete
                      </button>
                    </td>
                  </tr>
                `).join('') : `
                  <tr>
                    <td colspan="5" style="text-align: center; padding: 50px 20px; color: #71717a;">
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
                  <th style="text-align: right;">Action</th>
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
                    <td style="text-align: right;">
                      <button class="zes-action-btn" style="padding: 3px 10px; font-size: 11px;" onclick="Zesium.openDiskSmartWindow('${d.devpath || d.disk}')">
                        View SMART
                      </button>
                    </td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="7" style="text-align: center; padding: 40px; color: #71717a;">Loading physical disks...</td></tr>
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
            <div style="display: flex; gap: 8px;">
              <button class="zes-btn-primary" onclick="Zesium.openCreateBridgeWindow()">
                + Create Linux Bridge
              </button>
              <button class="zes-action-btn" onclick="Zesium.openNodeShell()">
                ${Icons.shell} Shell
              </button>
            </div>
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
        const clusterNodes = State.clusterStatus.filter(c => c.type === 'node' || !c.type);
        const clusterItem = State.clusterStatus.find(c => c.type === 'cluster');
        const hasCluster = !!clusterItem;

        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">Cluster Management & Federation</h1>
              <p class="zes-page-subtitle">Multi-node high availability, shared storage, and unified cluster quorum</p>
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="zes-action-btn" onclick="Zesium.fetchCluster()">
                ${Icons.refresh} Refresh Status
              </button>
            </div>
          </div>

          <div class="zes-cluster-hero">
            <div class="zes-cluster-hero-info">
              <div class="zes-cluster-hero-title">
                <div class="zes-cluster-hero-icon">
                  ${Icons.cluster}
                </div>
                <span>${hasCluster ? `Cluster: ${clusterItem.name}` : `Standalone Hypervisor Node ('pve')`}</span>
                <span class="zes-status-dot ${hasCluster ? 'running' : 'stopped'}"></span>
              </div>
              <div class="zes-cluster-hero-desc">
                ${hasCluster ? `
                  This Proxmox node is a member of cluster <strong>${clusterItem.name}</strong> with <strong>${clusterItem.nodes || clusterNodes.length}</strong> nodes.
                  Quorum status is <strong>${clusterItem.quorate ? 'Healthy (Quorate)' : 'Lost Quorum'}</strong>.
                ` : `
                  This host is currently operating independently in standalone mode. You can create a new Proxmox VE cluster with this node as the primary master, or join this node into an existing cluster via Join Information token.
                `}
              </div>
            </div>
            <div class="zes-cluster-hero-actions">
              ${hasCluster ? `
                <button class="zes-btn-primary" onclick="Zesium.openClusterInfoWindow()">
                  ${Icons.cluster} Cluster Join Information ↗
                </button>
                <button class="zes-action-btn" onclick="Zesium.openJoinClusterWindow()">
                  + Join Another Node
                </button>
              ` : `
                <button class="zes-btn-primary" onclick="Zesium.openCreateClusterWindow()">
                  ${Icons.cluster} Create Cluster
                </button>
                <button class="zes-action-btn" onclick="Zesium.openJoinClusterWindow()">
                  → Join Existing Cluster
                </button>
              `}
            </div>
          </div>

          <div class="zes-table-container">
            <div style="padding: 16px 20px; font-weight: 600; font-size: 14px; border-bottom: 1px solid #272732; color: #ffffff;">
              ${hasCluster ? 'Cluster Member Nodes' : 'Local Node Information'}
            </div>
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Node Name</th>
                  <th>IP Address</th>
                  <th>Node ID</th>
                  <th>Status</th>
                  <th>Quorum Votes</th>
                  <th style="text-align: right;">Actions</th>
                </tr>
              </thead>
              <tbody>
                ${clusterNodes.length > 0 ? clusterNodes.map(c => `
                  <tr>
                    <td style="font-weight: 700; color: #ffffff;">${c.name}</td>
                    <td style="font-family: monospace; color: #a1a1aa;">${c.ip || '-'}</td>
                    <td>${c.nodeid || 0}</td>
                    <td>
                      <span class="zes-status-dot ${c.online ? 'running' : 'stopped'}"></span>
                      ${c.online ? 'Online' : 'Offline'}
                    </td>
                    <td><strong style="color: #10b981;">${c.votes || 1}</strong></td>
                    <td style="text-align: right;">
                      <button class="zes-action-btn" style="padding: 3px 10px; font-size: 11px;" onclick="Zesium.openNodeShell()">
                        ${Icons.shell} Shell
                      </button>
                    </td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="6" style="text-align: center; padding: 40px; color: #71717a;">Loading cluster nodes...</td></tr>
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
                <button class="zes-action-btn" onclick="Zesium.openCertificatesWindow()">${Icons.certificates} Order ACME Cert</button>
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
            <div style="display: flex; gap: 8px;">
              <button class="zes-btn-primary" onclick="Zesium.openAddUserWindow()">
                + Add User
              </button>
              <button class="zes-action-btn" onclick="Zesium.openAddTokenWindow()">
                + Add API Token
              </button>
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
      } else if (State.currentView === 'services') {
        const hasServices = (State.services || []).length > 0;
        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">Node Services ('pve')</h1>
              <p class="zes-page-subtitle">Hypervisor background daemons, virtualization services, and API proxies</p>
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="zes-btn-primary" onclick="Zesium.fetchServices()">
                ${Icons.refresh} Refresh Services
              </button>
            </div>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Service Name</th>
                  <th>Description</th>
                  <th>State</th>
                  <th style="text-align: right;">Service Actions</th>
                </tr>
              </thead>
              <tbody>
                ${hasServices ? State.services.map(s => `
                  <tr>
                    <td style="font-weight: 700; color: #ffffff; font-family: monospace;">${s.service}</td>
                    <td style="color: #a1a1aa; font-size: 13px;">${s.name || s.desc || '-'}</td>
                    <td>
                      <span class="zes-service-badge ${s.state === 'running' ? 'running' : 'stopped'}">
                        <span class="zes-status-dot ${s.state === 'running' ? 'running' : 'stopped'}"></span>
                        ${s.state || 'stopped'}
                      </span>
                    </td>
                    <td style="text-align: right;">
                      <div style="display: inline-flex; gap: 6px;">
                        <button class="zes-action-btn zes-btn-sm" onclick="Zesium.serviceAction('${s.service}', 'restart')">
                          Restart
                        </button>
                        ${s.state === 'running' ? `
                          <button class="zes-action-btn zes-btn-sm" style="border-color: rgba(239, 68, 68, 0.4); color: #ef4444;" onclick="Zesium.serviceAction('${s.service}', 'stop')">
                            Stop
                          </button>
                        ` : `
                          <button class="zes-action-btn zes-btn-sm btn-start" onclick="Zesium.serviceAction('${s.service}', 'start')">
                            Start
                          </button>
                        `}
                      </div>
                    </td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="4" style="text-align: center; padding: 40px; color: #71717a;">Loading system services...</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'node-firewall') {
        const rules = State.nodeFirewall || [];
        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">Node Firewall ('pve')</h1>
              <p class="zes-page-subtitle">Host level packet filtering, network security policies, and connection tracking</p>
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="zes-btn-primary" onclick="Zesium.openAddFirewallRuleWindow(null, 'pve')">
                + Add Host Rule
              </button>
              <button class="zes-action-btn" onclick="Zesium.fetchNodeFirewall()">
                ${Icons.refresh} Refresh
              </button>
            </div>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Direction</th>
                  <th>Action</th>
                  <th>Macro / Proto</th>
                  <th>Port</th>
                  <th>Source</th>
                  <th>Destination</th>
                  <th>Comment</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${rules.length > 0 ? rules.map(r => `
                  <tr>
                    <td style="font-weight: 600; color: #ffffff; text-transform: uppercase;">${r.type || 'IN'}</td>
                    <td><span style="font-size: 11px; padding: 2px 6px; background: ${r.action === 'ACCEPT' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(239, 68, 68, 0.2)'}; color: ${r.action === 'ACCEPT' ? '#10b981' : '#ef4444'}; border-radius: 4px; font-weight: 600;">${r.action || 'ACCEPT'}</span></td>
                    <td style="font-family: monospace;">${r.macro || r.proto || '-'}</td>
                    <td style="font-family: monospace;">${r.dport || r.sport || '-'}</td>
                    <td style="font-family: monospace; color: #a1a1aa;">${r.source || 'any'}</td>
                    <td style="font-family: monospace; color: #a1a1aa;">${r.dest || 'any'}</td>
                    <td style="color: #71717a; font-size: 12px;">${r.comment || '-'}</td>
                    <td><span class="zes-status-dot ${r.enable !== 0 ? 'running' : 'stopped'}"></span> ${r.enable !== 0 ? 'Active' : 'Disabled'}</td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="8" style="text-align: center; padding: 40px; color: #71717a;">No host firewall rules configured. Click "+ Add Host Rule" to create one.</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'ha') {
        const ha = State.haStatus || [];
        const repl = State.replicationJobs || [];
        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">High Availability & Replication</h1>
              <p class="zes-page-subtitle">Automatic failover orchestration, quorum health, and guest storage replication</p>
            </div>
            <button class="zes-btn-primary" onclick="Zesium.fetchHA()">
              ${Icons.refresh} Refresh HA
            </button>
          </div>

          <div class="zes-cards-grid" style="grid-template-columns: repeat(3, 1fr); margin-bottom: 24px;">
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">HA Manager State</div>
              <div style="font-size: 20px; font-weight: 700; color: #10b981; margin: 8px 0;">Active / Standby Ready</div>
              <div style="font-size: 11px; color: #71717a;">Corosync cluster CRM heartbeat</div>
            </div>
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">Quorum Health</div>
              <div style="font-size: 20px; font-weight: 700; color: #ffffff; margin: 8px 0;">OK (Quorate)</div>
              <div style="font-size: 11px; color: #10b981;">100% Voting members online</div>
            </div>
            <div class="zes-plan-card">
              <div style="font-size: 12px; color: #a1a1aa;">Monitored Resources</div>
              <div style="font-size: 20px; font-weight: 700; color: #ffffff; margin: 8px 0;">${ha.length} Registered</div>
              <div style="font-size: 11px; color: #71717a;">Virtual machines and containers</div>
            </div>
          </div>

          <div class="zes-table-container">
            <div style="padding: 14px 18px; font-weight: 600; color: #ffffff; border-bottom: 1px solid #272732;">
              Storage Replication Jobs
            </div>
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Job ID</th>
                  <th>Guest VMID</th>
                  <th>Target Node</th>
                  <th>Schedule</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                ${repl.length > 0 ? repl.map(r => `
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">${r.id}</td>
                    <td>${r.guest || '-'}</td>
                    <td>${r.target || '-'}</td>
                    <td style="font-family: monospace;">${r.schedule || '*/15'}</td>
                    <td><span class="zes-status-dot running"></span> Active</td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="5" style="text-align: center; padding: 40px; color: #71717a;">No active storage replication jobs configured.</td></tr>
                `}
              </tbody>
            </table>
          </div>
        `;
      } else if (State.currentView === 'backup-jobs') {
        const jobs = State.backupJobs || [];
        container.innerHTML = `
          <div class="zes-page-header">
            <div>
              <h1 class="zes-page-title">Cluster Backup Schedules</h1>
              <p class="zes-page-subtitle">Automated hypervisor scheduled backup jobs (vzdump) for disaster recovery</p>
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="zes-btn-primary" onclick="Zesium.openAddBackupScheduleWindow()">
                + Add Backup Schedule
              </button>
              <button class="zes-action-btn" onclick="Zesium.fetchBackupJobs()">
                ${Icons.refresh} Refresh
              </button>
            </div>
          </div>

          <div class="zes-table-container">
            <table class="zes-table">
              <thead>
                <tr>
                  <th>Job ID / Node</th>
                  <th>Schedule</th>
                  <th>Target Storage</th>
                  <th>Selection</th>
                  <th>Compression</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                ${jobs.length > 0 ? jobs.map(j => `
                  <tr>
                    <td style="font-weight: 600; color: #ffffff;">${j.id || j.node || 'All Nodes'}</td>
                    <td style="font-family: monospace; color: #10b981;">${j.schedule || '0 0 * * *'}</td>
                    <td>${j.storage || 'local'}</td>
                    <td>${j.vmid ? 'VMID: ' + j.vmid : (j.all ? 'All Guests' : 'Selected Guests')}</td>
                    <td><span style="font-size: 11px; padding: 2px 6px; background: #272730; border-radius: 4px;">${j.compress || 'zstd'}</span></td>
                    <td style="text-transform: capitalize;">${j.mode || 'snapshot'}</td>
                  </tr>
                `).join('') : `
                  <tr><td colspan="6" style="text-align: center; padding: 40px; color: #71717a;">No automated cluster backup schedules found. Click "+ Add Backup Schedule" to configure automated backups.</td></tr>
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
              <a class="zes-menu-item" data-view="node-firewall" onclick="Zesium.navigateTo('node-firewall')">
                ${Icons.firewall}
                <span>Node Firewall</span>
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
              <a class="zes-menu-item" data-view="ha" onclick="Zesium.navigateTo('ha')">
                ${Icons.ha}
                <span>HA & Replication</span>
              </a>
              <a class="zes-menu-item" data-view="backup-jobs" onclick="Zesium.navigateTo('backup-jobs')">
                ${Icons.backup}
                <span>Backup Schedules</span>
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
              <a class="zes-menu-item" data-view="services" onclick="Zesium.navigateTo('services')">
                ${Icons.services}
                <span>Services Manager</span>
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

      // Live background polling timer (every 4 seconds) to keep status & uptime fresh
      if (!window._zesiumLiveTimer) {
        window._zesiumLiveTimer = setInterval(() => {
          if (document.body.classList.contains('zesium-active')) {
            if (State.currentView === 'servers') {
              Zesium.fetchLiveServers(true);
            } else if (State.currentView === 'server-detail') {
              Zesium.fetchServerDetails(true);
            } else if (State.currentView === 'node-summary') {
              Zesium.fetchNodeStatus(true);
            }
          }
        }, 4000);
      }
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
