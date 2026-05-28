# remotion-video

Project video editing berbasis kode menggunakan [Remotion](https://www.remotion.dev/).
Video didefinisikan sebagai komponen React, lalu dirender menjadi file `.mp4`.

## Prasyarat

- Node.js 18+ (disarankan 20 / 22)
- Untuk rendering: Chromium headless akan diunduh otomatis oleh Remotion saat pertama kali render.

## Instalasi

```bash
npm install
```

## Mengembangkan video (Remotion Studio)

Buka editor visual untuk melihat & menyunting komposisi secara real-time:

```bash
npm run dev
```

Studio terbuka di http://localhost:3000. Edit file di `src/compositions/` dan
perubahan langsung tampil.

## Render lokal

```bash
# Render komposisi "HelloWorld" ke out/video.mp4
npx remotion render HelloWorld out/video.mp4
```

## Render via GitHub Actions

Repo ini menyertakan workflow `.github/workflows/render.yml`.
Jalankan manual dari tab **Actions → Render video → Run workflow**, lalu
unduh hasilnya dari bagian **Artifacts**. Workflow ini sudah meng-install
Chromium headless dan tidak butuh konfigurasi tambahan.

## Struktur

```
src/
  index.ts                 # registerRoot — entry point Remotion
  Root.tsx                 # daftar semua <Composition>
  compositions/
    HelloWorld.tsx         # contoh komposisi animasi
remotion.config.ts         # konfigurasi render
.github/workflows/render.yml
```

## Menambah video baru

1. Buat file komponen baru di `src/compositions/`.
2. Daftarkan sebagai `<Composition>` baru di `src/Root.tsx` (beri `id`,
   `durationInFrames`, `fps`, `width`, `height`).
3. Cek di Studio (`npm run dev`), lalu render.

## Lisensi Remotion

Remotion gratis untuk individu dan organisasi kecil, namun beberapa
perusahaan memerlukan lisensi berbayar. Lihat
https://www.remotion.dev/docs/license sebelum digunakan untuk produksi.
