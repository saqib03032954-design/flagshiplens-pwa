// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => {
        console.log('✅ Service Worker registered:', reg);
        updateStatus('App is ready to use offline!');
      })
      .catch(err => {
        console.error('❌ Service Worker registration failed:', err);
        updateStatus('Service Worker registration failed');
      });
  });
}

// PWA Install Prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('installBtn').style.display = 'block';
  updateStatus('Click "Install App" to add to your home screen!');
});

window.addEventListener('appinstalled', () => {
  console.log('✅ App installed successfully!');
  deferredPrompt = null;
  document.getElementById('installBtn').style.display = 'none';
  updateStatus('App successfully installed! 🎉');
});

function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('✅ User accepted install prompt');
      } else {
        console.log('❌ User dismissed install prompt');
      }
      deferredPrompt = null;
    });
  }
}

function updateStatus(message) {
  const statusEl = document.getElementById('status');
  if (statusEl) {
    statusEl.textContent = message;
  }
}

// Check if app is already installed
if (window.matchMedia('(display-mode: standalone)').matches) {
  updateStatus('You are using the app in standalone mode!');
  document.getElementById('installBtn').style.display = 'none';
}

console.log('🚀 FlagshipLens App Loaded');
