# Pages

Folder ini berisi file .astro untuk halaman situs (rute otomatis berdasarkan nama file).

## Kegunaan

- Routing statis/dinamis.
- SSG/SSR untuk konten.

## Contoh File

- `index.astro`: Halaman home.

```astro
---
// src/pages/index.astro
import Layout from '../layouts/Layout.astro';
---
<Layout title="Home">
  <h1>Hello Astro!</h1>
</Layout>
```

Akses: `http://localhost:4321/`
