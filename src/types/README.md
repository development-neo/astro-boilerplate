# Types

Folder ini berisi TypeScript type definitions dan interfaces.

## Kegunaan

- Type safety untuk API responses, props.
- Shared types antar file.

## Contoh File

- `api.ts`: Types untuk API.

```ts
// src/types/api.ts
export interface Post {
  id: number;
  title: string;
}
```
