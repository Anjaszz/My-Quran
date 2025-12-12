# 🕌 My Al-Quran - Progressive Web App (PWA)

Project Al-Quran digital ini telah dikonfigurasi sebagai Progressive Web App (PWA) yang dapat diinstall dan digunakan secara offline.

## ✨ Fitur PWA

### 1. **Installable**
   - Aplikasi dapat diinstall di perangkat (desktop, mobile, tablet)
   - Muncul seperti aplikasi native di home screen
   - Dapat dibuka tanpa browser bar

### 2. **Offline Support**
   - Konten yang sudah pernah dibuka akan tersimpan di cache
   - API Al-Quran di-cache untuk akses offline
   - Strategi caching:
     - **NetworkFirst** untuk API Al-Quran (7 hari cache)
     - **CacheFirst** untuk Google Fonts (1 tahun cache)

### 3. **Auto Update**
   - Service worker otomatis update ketika ada versi baru
   - Notifikasi muncul ketika update tersedia
   - User dapat memilih update sekarang atau nanti

### 4. **Install Prompt**
   - Banner install muncul secara otomatis untuk user baru
   - Dapat di-dismiss dan akan muncul lagi setelah 7 hari
   - Animasi smooth untuk UX yang lebih baik

## 📦 Apa yang Sudah Dikonfigurasi

### File & Komponen PWA:
- ✅ `vite.config.js` - Konfigurasi PWA plugin
- ✅ `public/manifest.json` - Web App Manifest
- ✅ `index.html` - PWA meta tags
- ✅ `src/components/PWAInstall.jsx` - Install prompt component
- ✅ `src/components/PWAUpdateNotification.jsx` - Update notification
- ✅ `src/index.css` - PWA animations
- ✅ `generate-icons.html` - Tool untuk generate PWA icons

### Dependencies:
- `vite-plugin-pwa` - Plugin Vite untuk PWA
- `workbox-window` - Service Worker management

## 🎨 Generate PWA Icons

Untuk membuat PWA berfungsi optimal, Anda perlu membuat icon dalam berbagai ukuran:

### Metode 1: Menggunakan Tool Bawaan (Recommended)

1. Jalankan development server:
   ```bash
   npm run dev
   ```

2. Buka browser dan akses:
   ```
   http://localhost:5173/generate-icons.html
   ```

3. Klik tombol **"Generate All Icons"**

4. Klik tombol **"Download All Icons"**

5. Pindahkan semua file PNG yang didownload ke folder `public/icons/`

### Metode 2: Menggunakan Online Tool

1. **PWA Asset Generator**: https://www.pwabuilder.com/imageGenerator
2. **RealFaviconGenerator**: https://realfavicongenerator.net/
3. **Favicon.io**: https://favicon.io/favicon-converter/

Upload file `src/assets/Logo.svg` dan download semua ukuran yang dibutuhkan.

### Ukuran Icon yang Dibutuhkan:
- icon-72x72.png
- icon-96x96.png
- icon-128x128.png
- icon-144x144.png
- icon-152x152.png
- icon-192x192.png
- icon-384x384.png
- icon-512x512.png

## 🚀 Cara Build & Deploy

### Development
```bash
npm run dev
```
PWA akan aktif di development mode untuk testing.

### Production Build
```bash
npm run build
```

Vite akan generate:
- Service worker di `dist/sw.js`
- Workbox files
- Optimized assets dengan cache headers

### Deploy
Upload semua file dari folder `dist/` ke hosting Anda (Vercel, Netlify, dll).

**PENTING**: Pastikan hosting Anda support HTTPS karena Service Worker hanya bekerja di HTTPS!

## 🔧 Testing PWA

### Di Chrome DevTools:
1. Buka DevTools (F12)
2. Tab **Application**
3. Cek:
   - **Manifest**: Pastikan manifest ter-load
   - **Service Workers**: Pastikan SW aktif
   - **Cache Storage**: Cek cache tersimpan

### Lighthouse Audit:
1. Buka DevTools (F12)
2. Tab **Lighthouse**
3. Pilih kategori **Progressive Web App**
4. Klik **Analyze page load**

Target score PWA: **90+**

## 📱 Cara Install PWA

### Android (Chrome):
1. Buka website di Chrome
2. Klik menu (3 titik vertikal)
3. Pilih "Install app" atau "Add to Home screen"

### iOS (Safari):
1. Buka website di Safari
2. Tap tombol Share (kotak dengan panah ke atas)
3. Scroll dan pilih "Add to Home Screen"

### Desktop (Chrome/Edge):
1. Buka website
2. Lihat icon install di address bar (kanan)
3. Klik icon dan pilih "Install"

Atau banner install akan muncul otomatis!

## 🛠 Kustomisasi

### Mengubah Theme Color:
Edit di `vite.config.js` dan `index.html`:
```javascript
theme_color: '#10b981' // Ubah ke warna yang diinginkan
```

### Mengubah Nama App:
Edit di `vite.config.js`:
```javascript
name: 'My Al-Quran - Al-Quran Digital Online',
short_name: 'My Al-Quran',
```

### Mengubah Cache Strategy:
Edit di `vite.config.js` bagian `workbox.runtimeCaching`:
- **NetworkFirst**: Try network dulu, fallback ke cache
- **CacheFirst**: Try cache dulu, fallback ke network
- **StaleWhileRevalidate**: Return cache, update di background

## 📊 Cache Strategy yang Digunakan

### API Al-Quran (`NetworkFirst`):
- Selalu coba ambil data terbaru dari network
- Jika offline, gunakan cache
- Cache valid selama 7 hari
- Max 500 entries

### Google Fonts (`CacheFirst`):
- Gunakan cache jika tersedia
- Jarang berubah, jadi aman di-cache lama
- Cache valid selama 1 tahun
- Max 10 entries

## 🐛 Troubleshooting

### PWA tidak muncul install prompt?
- Pastikan HTTPS aktif (atau localhost untuk testing)
- Cek manifest valid di DevTools > Application > Manifest
- Cek Service Worker registered di DevTools > Application > Service Workers
- Clear cache dan hard reload (Ctrl + Shift + R)

### Service Worker tidak update?
- Di DevTools > Application > Service Workers
- Klik "Skip waiting" untuk force update
- Atau centang "Update on reload"

### Icons tidak muncul?
- Pastikan semua icon PNG sudah ada di `public/icons/`
- Cek ukuran file tidak terlalu besar (< 512KB per icon)
- Clear cache dan rebuild

### Cache terlalu besar?
- Kurangi `maxEntries` di `vite.config.js`
- Kurangi `maxAgeSeconds` untuk expire cache lebih cepat

## 📚 Resources

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
- [Workbox Guide](https://developers.google.com/web/tools/workbox)
- [Web App Manifest](https://web.dev/add-manifest/)

## ✅ Checklist Deploy PWA

Sebelum deploy ke production, pastikan:

- [ ] Semua PWA icons sudah dibuat dan tersimpan di `public/icons/`
- [ ] Manifest.json valid (test di DevTools)
- [ ] Service Worker registered dan aktif
- [ ] HTTPS enabled di hosting
- [ ] Lighthouse PWA score 90+
- [ ] Test install di berbagai device (Android, iOS, Desktop)
- [ ] Test offline functionality
- [ ] Test update notification

## 🎉 Selesai!

Project My Al-Quran Anda sekarang sudah menjadi PWA yang dapat:
- ✅ Diinstall seperti aplikasi native
- ✅ Bekerja offline
- ✅ Auto update
- ✅ Fast loading dengan caching
- ✅ Responsive di semua device

Selamat! 🚀
