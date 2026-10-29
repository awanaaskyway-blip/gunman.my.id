# gunman.my.id

Halaman profil sederhana Fake, dibuat dengan React, Vite, dan Tailwind CSS.
Game utamanya: Dragon City.

## Jalankan di komputer sendiri

```bash
npm install
npm run dev
```

## Build untuk produksi

```bash
npm run build
```

Hasil build ada di folder `dist/`.

## Deploy ke GitHub Pages

Repository ini memakai GitHub Actions (`.github/workflows/deploy.yml`).
Setiap push ke branch `main` akan menjalankan build dan deploy ke GitHub Pages.

Di pengaturan repository, ubah sumber GitHub Pages menjadi **GitHub Actions**
(Settings > Pages > Build and deployment > Source: GitHub Actions).
Domain kustom `gunman.my.id` diatur di halaman Pages yang sama; DNS-nya
masih perlu diatur di registrar agar cek DNS GitHub berhasil dan HTTPS bisa aktif.
