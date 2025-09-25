# Boilerplate Astro

Boilerplate ini adalah template awal untuk membangun aplikasi web berbasis Astro yang terintegrasi dengan backend API. Dirancang untuk mempercepat pengembangan aplikasi modern dengan fitur seperti routing API proxy, helper Axios untuk HTTP requests, dukungan FormData, Tailwind CSS untuk styling, dan TypeScript untuk type safety.

## Kegunaan Boilerplate

- **Pengembangan Cepat**: Mulai dengan struktur siap pakai untuk aplikasi statis atau SSR (Server-Side Rendering) menggunakan Astro.
- **Integrasi API**: Termasuk proxy API di `/api` untuk menghindari CORS issues saat development, dan helper di `src/lib/api.ts` untuk GET, POST, PUT, DELETE, serta dukungan FormData.
- **Styling Modern**: Tailwind CSS untuk desain responsif dan cepat.
- **TypeScript Support**: Memastikan kode yang aman dan mudah di-maintain.
- **Fleksibilitas**: Mudah dikustomisasi untuk proyek AI, seperti integrasi dengan model ML, chatbots, atau dashboard data.
- **Best Practices**: Struktur folder yang rapi, interceptor untuk auth token, dan handling error dasar.

## Persyaratan

- Node.js versi 18 atau lebih tinggi.
- pnpm (disarankan) atau npm/yarn untuk package manager.

## Instalasi

1. Clone atau download repository ini.
2. Masuk ke direktori proyek:
   ```
   cd astro-boilerplate
   ```
3. Install dependencies:
   ```
   pnpm install
   ```
   Atau gunakan npm:
   ```
   npm install
   ```

4. Salin file environment dari contoh:
   ```
   cp .env.example .env
   ```
   Edit `.env` untuk menambahkan `PUBLIC_API_URL` (URL backend API Anda, misalnya `https://api.example.com`).

## Menjalankan Proyek

### Development Mode
Jalankan server development dengan hot reload:
```
pnpm dev
```
Atau:
```
npm run dev
```
Akses aplikasi di `http://localhost:4321`.

### Build untuk Produksi
Build aplikasi untuk deployment:
```
pnpm build
```
Atau:
```
npm run build
```
Output build ada di folder `dist/`. Jalankan dengan:
```
pnpm preview
```

## Struktur Proyek

- **src/**: Kode sumber utama.
  - **components/**: Komponen reusable (Astro, React, Vue, dll.).
  - **layouts/**: Layout utama aplikasi (misalnya `Layout.astro`).
  - **lib/**: Utilitas, termasuk `api.ts` untuk HTTP clients dengan Axios.
  - **pages/**: Halaman dan rute.
    - **api/**: Proxy rute untuk API (lihat README di folder tersebut).
  - **styles/**: File CSS global dengan Tailwind.
  - **types/**: Definisi TypeScript.
- **public/**: Aset statis seperti favicon.

## Fitur Utama

- **API Helper (`src/lib/api.ts`)**:
  - Fungsi: `getData`, `postData`, `putData`, `deleteData`, `postFormData`, `putFormData`.
  - Base URL: `/api` (diproxy ke backend via `PUBLIC_API_URL`).
  - Auth: Otomatis tambah Bearer token dari localStorage.

- **API Proxy (`src/pages/api/[[...path]].ts`)**:
  - Proxy semua request ke backend untuk menghindari CORS.
  - Dukung semua metode HTTP dan FormData.

- **Environment Variables**:
  - `PUBLIC_API_URL`: URL base backend API (wajib untuk proxy).

## Pengembangan Lebih Lanjut

- Tambahkan komponen baru di `src/components/`.
- Untuk auth lanjutan, modifikasi interceptor di `api.ts`.
- Deploy ke Vercel, Netlify, atau server custom (Astro mendukung adapter).

## Troubleshooting

- **CORS Error**: Pastikan `PUBLIC_API_URL` benar dan proxy berfungsi.
- **Build Error**: Periksa TypeScript config di `tsconfig.json`.
- **Styling Issue**: Jalankan `pnpm dev` untuk Tailwind JIT.
