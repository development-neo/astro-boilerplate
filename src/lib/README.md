# Lib

Folder ini berisi utilities, helpers API, dan logic bisnis non-UI.

## Kegunaan

- API clients, data fetching, validation.
- Reusable functions untuk seluruh app.

## Contoh File

- `api.ts`: Axios client dengan interceptors.

```ts
// src/lib/api.ts
import axios from "axios";
export const getData = async (url: string) => {
  /* ... */
};
```
