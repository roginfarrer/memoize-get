export interface Get {
  (obj?: object, path?: string | number, fallback?: any): any;
}

export const memoizeGet = (fn: Get) => {
  let cache = new WeakMap();

  const memoizedFn: Get = (obj, path, fallback) => {
    if (typeof obj === 'undefined') {
      return fn(obj, path, fallback);
    }

    if (!cache.has(obj)) {
      cache.set(obj, new Map());
    }

    const map = cache.get(obj);

    if (map.has(path)) {
      return map.get(path);
    }

    const value = fn(obj, path, fallback);

    map.set(path, value);

    return value;
  };

  return memoizedFn;
};
