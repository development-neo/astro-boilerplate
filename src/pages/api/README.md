# Rute Proxy API

Folder ini berisi rute proxy untuk menangani permintaan API dalam aplikasi Astro. Rute-rute ini bertindak sebagai proxy untuk meneruskan permintaan dari frontend ke server API backend yang sebenarnya, memungkinkan panggilan API dilakukan melalui server lokal (misalnya, `/api/...`) daripada langsung ke URL API eksternal.

## Pengaturan

- Proxy menggunakan variabel lingkungan `PUBLIC_API_URL` untuk menentukan URL dasar API backend target.
- Semua panggilan API dari frontend (melalui `src/lib/api.ts`) sekarang dirutekan melalui endpoint `/api`.

## Rute

- **`[[...path]].ts`**: Rute catch-all yang menangani semua path API (misalnya, `/api/users`, `/api/posts/123`).
  - Mendukung semua metode HTTP: GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD.
  - Meneruskan body permintaan, header (kecuali yang spesifik proxy seperti Host), parameter query, dan metode ke API target.
  - Mengembalikan respons dari backend, termasuk status, header, dan body.
  - Menangani header CORS jika ada dalam respons backend.

## Penggunaan

Dalam kode frontend Anda, gunakan helper API di `src/lib/api.ts` seperti biasa. `baseURL` diatur ke `/api`, sehingga panggilan seperti `getData('/users')` akan mengenai `/api/users` dan diproxy ke `${PUBLIC_API_URL}/users`.

## Variabel Lingkungan

- `PUBLIC_API_URL`: URL dasar API backend Anda (misalnya, `https://api.example.com`).

## Catatan

- Pastikan server Astro berjalan dalam mode pengembangan untuk hot reloading.
- Dalam produksi, deploy aplikasi Astro dan pastikan rute proxy disajikan dengan benar.
- Untuk upload FormData (POST/PUT), proxy mendukung multipart/form-data secara otomatis.
