/**
 * Zesium Proxmox Theme - Enhanced UI Controller
 * Replaces default ExtJS login with Convoy/Advin split-screen aesthetic
 * Suppresses subscription nag and provides modern UI enhancements
 */

(function () {
  'use strict';

  console.log('%c Zesium Theme %c Initializing Convoy / Advin UI for Proxmox VE ',
    'background: #ffffff; color: #000000; font-weight: bold; border-radius: 4px; padding: 2px 6px;',
    'background: #18181c; color: #ffffff; border-radius: 4px; padding: 2px 6px;'
  );

  window.Zesium = {
    version: '1.0.0',

    // Toast notification matching Convoy (Screenshot 212051.png)
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

    // Suppress "No valid subscription" nag dialog
    patchSubscriptionNag: function () {
      if (window.Proxmox && Proxmox.Utils) {
        Proxmox.Utils.checked_command = function (orig_cmd) {
          if (typeof orig_cmd === 'function') {
            orig_cmd();
          }
        };
      }
    },

    // Inject Split Screen Login matching screenshot 211834.png
    setupLoginScreen: function () {
      if (window.Proxmox && Proxmox.Utils && Proxmox.Utils.authOK()) {
        return; // Already authenticated
      }

      const existingOverlay = document.getElementById('zesium-login-overlay');
      if (existingOverlay) return;

      const overlay = document.createElement('div');
      overlay.id = 'zesium-login-overlay';
      overlay.className = 'zes-login-wrapper';

      overlay.innerHTML = `
        <!-- Left Side: Login Form -->
        <div class="zes-login-left">
          <div class="zes-login-brand">
            <div class="zes-login-brand-left">
              <img src="/pve2/images/zesium/logo.svg" alt="Logo" class="zes-login-brand-logo" />
              <span class="zes-login-brand-title">Zesium Cloud</span>
            </div>
            <div class="zes-login-theme-pills">
              <span class="zes-login-pill active">💻</span>
              <span class="zes-login-pill">☀️</span>
              <span class="zes-login-pill">🌙</span>
            </div>
          </div>

          <div class="zes-login-center">
            <!-- Warning Banner -->
            <div class="zes-alert-warning">
              <span>⚠</span>
              <span>Default root login uses <strong>Linux PAM standard authentication</strong> realm.</span>
            </div>

            <h1 class="zes-login-heading">Welcome back</h1>
            <p class="zes-login-subheading">Sign in with your Proxmox credentials to access your servers.</p>

            <form id="zesium-custom-login-form">
              <div class="zes-login-form-group">
                <label class="zes-login-label">User name</label>
                <input type="text" id="zes-username" class="zes-login-input" placeholder="root" required autocomplete="username" />
              </div>

              <div class="zes-login-form-group">
                <label class="zes-login-label">Password</label>
                <input type="password" id="zes-password" class="zes-login-input" placeholder="••••••••" required autocomplete="current-password" />
              </div>

              <div class="zes-login-form-group">
                <label class="zes-login-label">Realm</label>
                <select id="zes-realm" class="zes-login-select">
                  <option value="pam" selected>Linux PAM standard authentication</option>
                  <option value="pve">Proxmox VE authentication server</option>
                </select>
              </div>

              <div class="zes-login-form-group">
                <label class="zes-login-label">Language</label>
                <select id="zes-lang" class="zes-login-select">
                  <option value="en" selected>English</option>
                  <option value="cs">Czech (Čeština)</option>
                  <option value="de">German (Deutsch)</option>
                  <option value="fr">French (Français)</option>
                </select>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; margin: 14px 0 20px 0;">
                <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; color: #a1a1aa; cursor: pointer;">
                  <input type="checkbox" id="zes-save-username" checked style="accent-color: #ffffff; cursor: pointer;" />
                  Remember username
                </label>
                <span style="font-size: 13px; color: #71717a; cursor: default;">Homelab Edition</span>
              </div>

              <button type="submit" id="zes-submit-btn" class="zes-login-btn-submit">Sign in</button>
              <div id="zes-login-error" style="color: #ef4444; font-size: 13px; margin-top: 12px; display: none;"></div>
            </form>
          </div>

          <div class="zes-login-footer">
            <a href="https://proxmox.com" target="_blank">Proxmox VE</a>
            <span>•</span>
            <a href="#">Privacy Policy</a>
            <span>•</span>
            <a href="#">Terms of Service</a>
            <span>•</span>
            <span>Theme by Zesium</span>
          </div>
        </div>

        <!-- Right Side: Enterprise Server Room Graphic -->
        <div class="zes-login-right">
          <div class="zes-login-hero-text">
            <h2 class="zes-login-hero-title">Affordable Cloud.</h2>
            <p class="zes-login-hero-desc">
              High-performance private cloud virtualization powered by Proxmox VE.
              Robust, secure, and modern server infrastructure for production and homelab workloads.
            </p>
          </div>
        </div>
      `;

      document.body.appendChild(overlay);

      // Populate saved username if available
      try {
        const savedUser = localStorage.getItem('zesium_saved_username') || 'root';
        if (savedUser) {
          document.getElementById('zes-username').value = savedUser;
          document.getElementById('zes-password').focus();
        }
      } catch (e) {}

      // Fetch realms from Proxmox API
      fetch('/api2/json/access/domains')
        .then(res => res.json())
        .then(res => {
          if (res && res.data && res.data.length > 0) {
            const realmSelect = document.getElementById('zes-realm');
            realmSelect.innerHTML = '';
            res.data.forEach(domain => {
              const opt = document.createElement('option');
              opt.value = domain.realm;
              opt.textContent = domain.comment ? `${domain.comment} (${domain.realm})` : domain.realm;
              if (domain.realm === 'pam') opt.selected = true;
              realmSelect.appendChild(opt);
            });
          }
        })
        .catch(err => console.log('Could not load realms:', err));

      // Handle custom login form submission
      const loginForm = document.getElementById('zesium-custom-login-form');
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('zes-username').value.trim();
        const password = document.getElementById('zes-password').value;
        const realm = document.getElementById('zes-realm').value;
        const saveUser = document.getElementById('zes-save-username').checked;
        const submitBtn = document.getElementById('zes-submit-btn');
        const errDiv = document.getElementById('zes-login-error');

        submitBtn.disabled = true;
        submitBtn.textContent = 'Signing in...';
        errDiv.style.display = 'none';

        if (saveUser) {
          localStorage.setItem('zesium_saved_username', username);
        } else {
          localStorage.removeItem('zesium_saved_username');
        }

        // Post login request to Proxmox API
        const fullUsername = username.includes('@') ? username : `${username}@${realm}`;
        const formData = new URLSearchParams();
        formData.append('username', fullUsername);
        formData.append('password', password);

        fetch('/api2/json/access/ticket', {
          method: 'POST',
          body: formData
        })
          .then(res => res.json())
          .then(res => {
            if (res && res.data && res.data.ticket) {
              // Set PVE Auth Cookie
              document.cookie = `PVEAuthCookie=${res.data.ticket}; path=/; secure; samesite=strict`;

              // Pass auth data into Proxmox ExtJS runtime
              if (window.Proxmox && Proxmox.Utils) {
                Proxmox.Utils.setAuthData(res.data);
                if (window.PVE && PVE.Workspace) {
                  const ws = Ext.ComponentQuery.query('pveStdWorkspace')[0];
                  if (ws && ws.updateLoginData) {
                    ws.updateLoginData(res.data);
                  }
                }
              }

              // Fade out and remove custom login overlay
              overlay.style.transition = 'opacity 0.4s ease';
              overlay.style.opacity = '0';
              setTimeout(() => {
                overlay.remove();
                // Close any hidden ExtJS login modal
                const extLogin = Ext.ComponentQuery.query('pveLoginWindow')[0];
                if (extLogin) extLogin.close();
                // Show welcome toast
                Zesium.showToast('Setup completed', `Logged in as ${fullUsername}`);
              }, 400);
            } else {
              throw new Error(res.errors ? JSON.stringify(res.errors) : 'Invalid credentials');
            }
          })
          .catch(err => {
            console.error('Login error:', err);
            submitBtn.disabled = false;
            submitBtn.textContent = 'Sign in';
            errDiv.textContent = 'Login failed. Please verify your username and password.';
            errDiv.style.display = 'block';
          });
      });
    }
  };

  // Wait for DOM & ExtJS ready
  function init() {
    Zesium.patchSubscriptionNag();

    // Hook login display
    if (typeof Ext !== 'undefined') {
      Ext.onReady(function () {
        Zesium.patchSubscriptionNag();
        if (!window.Proxmox || !Proxmox.Utils || !Proxmox.Utils.authOK()) {
          Zesium.setupLoginScreen();
        }
      });
    } else {
      document.addEventListener('DOMContentLoaded', function () {
        Zesium.setupLoginScreen();
      });
    }
  }

  init();
})();
