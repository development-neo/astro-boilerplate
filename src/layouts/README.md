# Layouts

Folder ini berisi template layout untuk membungkus halaman, seperti header, footer, dan sidebar.

## Kegunaan

- Konsistensi struktur halaman (SEO-friendly).
- Shared UI elements di seluruh site.

## Contoh File

- `Layout.astro`: Layout utama dengan global CSS.

```astro
---
// src/layouts/Layout.astro
import '../styles/global.css';
const { title } = Astro.props;
---
<html lang="en">
  <head><title>{title}</title></head>
  <body><slot /></body>
</html>
```

Penggunaan di pages: `import Layout from '../layouts/Layout.astro';`
