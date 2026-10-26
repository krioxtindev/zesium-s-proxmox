/**
 * Zesium - Proxmox Manager
 * JavaScript UI Controller for Proxmox VE
 * Modernizes native ExtJS components without breaking modals or wizards
 */

(function () {
  'use strict';

  console.log('%c Zesium - Proxmox Manager %c Loaded ',
    'background: #ffffff; color: #000000; font-weight: bold; padding: 2px 8px; border-radius: 4px;',
    'background: #18181c; color: #10b981; padding: 2px 8px; border-radius: 4px;'
  );

  // Suppress "No valid subscription" nag modal
  function suppressNag() {
    if (window.Proxmox && Proxmox.Utils) {
      Proxmox.Utils.checked_command = function (orig_cmd) {
        if (typeof orig_cmd === 'function') {
          orig_cmd();
        }
      };
    }
  }

  // Update branding in the real Proxmox top header
  function updateHeaderBranding() {
    const vinfo = document.querySelector('div[id^="versioninfo-"]');
    if (vinfo) {
      vinfo.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 700; color: #ffffff; font-size: 15px;">Zesium</span>
          <span style="color: #71717a; font-size: 13px;">Proxmox Manager</span>
        </div>
      `;
    }

    // Replace header logo with Eagle SVG
    const logos = document.querySelectorAll('img[id^="proxmoxlogo-"], img[id^="proxmoxLogoSvg-"]');
    logos.forEach(img => {
      img.src = '/pve2/images/zesium/logo.svg';
    });

    // Style Create VM & Create CT buttons
    const btns = document.querySelectorAll('div[id^="pveHeader-"] .x-btn');
    btns.forEach(btn => {
      const text = btn.innerText || '';
      if (text.includes('Create VM')) {
        btn.classList.add('zes-btn-create-vm');
      } else if (text.includes('Create CT')) {
        btn.classList.add('zes-btn-create-ct');
      }
    });
  }

  // Handle Login Screen
  function handleLoginState() {
    const isAuth = window.Proxmox && Proxmox.Utils && Proxmox.Utils.authOK();
    if (!isAuth) {
      document.body.classList.add('zes-login-page');
    } else {
      document.body.classList.remove('zes-login-page');
      updateHeaderBranding();
    }
  }

  // Hook into ExtJS ready
  if (typeof Ext !== 'undefined') {
    Ext.onReady(function () {
      suppressNag();
      handleLoginState();

      // Override LoginWindow title and branding
      if (Ext.ClassManager.get('PVE.window.LoginWindow')) {
        Ext.define('Zesium.LoginWindowOverride', {
          override: 'PVE.window.LoginWindow',
          initComponent: function () {
            this.title = 'Zesium - Proxmox Manager';
            this.icon = '/pve2/images/zesium/logo.svg';
            this.callParent();
          }
        });
      }

      // Periodically update branding if DOM updates
      setInterval(() => {
        handleLoginState();
      }, 1000);
    });
  } else {
    document.addEventListener('DOMContentLoaded', function () {
      suppressNag();
      handleLoginState();
    });
  }
})();
