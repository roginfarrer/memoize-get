# `memoize-get`

Memoize functions with the "get" function signature.

## Installation

```bash
yarn add memoize-get

npm install memoize-get
```

## Usage

```typescript
import {memoizeGet, Get} from 'memoize-get';

const get: Get = (
  obj: object,
  path: string | number,
  fallback?: any,
) {
  const key = typeof path === 'string' ? path.split('.') : [path];

  for (index = 0; index < key.length; index += 1 ) {
    if (!obj) break;
    obj = obj[key[index]];
  }

  return obj === undefined ? fallback : obj;
}

const memoizedGet = memoizeGet(get);
```
