# FlagshipLens PWA 📱

A Progressive Web App ready for mobile installation via Capacitor.

## Features ✨

- ✅ Works offline with Service Worker
- ✅ Installable on iOS and Android
- ✅ App-like experience
- ✅ Fast loading times
- ✅ Responsive design
- ✅ Ready for Capacitor

## Installation Steps 🚀

### For Web Access:

1. Clone the repository:
   ```bash
   git clone https://github.com/saqib03032954-design/flagshiplens-pwa.git
   cd flagshiplens-pwa
   ```

2. Start a local server:
   ```bash
   npm install
   npm start
   # or
   python -m http.server 8000
   ```

3. Open in browser: `http://localhost:8000`

### For Mobile (PWA Install):

**Android:**
1. Open the app in Chrome/Firefox
2. Tap the menu (⋮) → "Install app"
3. Confirm installation

**iOS:**
1. Open the app in Safari
2. Tap Share (↗️) → "Add to Home Screen"
3. Tap "Add"

### For Native Mobile (Capacitor):

1. Install dependencies:
   ```bash
   npm install
   npm install -g @capacitor/cli
   ```

2. Initialize Capacitor:
   ```bash
   npx cap init
   ```

3. Build web assets:
   ```bash
   npm run build
   ```

4. Add platforms:
   ```bash
   npx cap add android
   npx cap add ios
   ```

5. Build Android/iOS:
   ```bash
   npx cap build
   ```

6. Open in Android Studio or Xcode:
   ```bash
   npx cap open android
   npx cap open ios
   ```

## Project Structure 📁

```
flagshiplens-pwa/
├── index.html          # Main HTML file
├── app.js             # Main app logic
├── styles.css         # Styling
├── sw.js              # Service Worker
├── manifest.json      # PWA manifest
├── capacitor.config.json  # Capacitor config
├── package.json       # Dependencies
└── README.md          # This file
```

## Files Explained 📄

- **index.html**: Main entry point
- **app.js**: PWA install logic and service worker registration
- **sw.js**: Service Worker for offline functionality
- **manifest.json**: PWA metadata and icon configuration
- **capacitor.config.json**: Capacitor configuration for mobile builds
- **styles.css**: Responsive styling

## Browser Compatibility 🌐

- ✅ Chrome/Chromium (Android, Desktop)
- ✅ Firefox (Android, Desktop)
- ✅ Safari (iOS, macOS)
- ✅ Edge (Desktop)

## Technologies Used 🛠️

- HTML5
- CSS3
- JavaScript (ES6+)
- Service Workers
- Web App Manifest
- Capacitor

## License 📜

MIT License - See LICENSE file for details

## Author 👨‍💻

Created by saqib03032954-design

## Support 💬

For issues and questions, open an issue on GitHub.

---

**Happy coding! 🚀**
