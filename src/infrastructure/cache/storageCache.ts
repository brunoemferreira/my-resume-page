interface CacheItem<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

export class StorageCache {
  private static PREFIX = 'bf_cache_';

  public static set<T>(key: string, data: T, ttlMs = 3600000): void {
    try {
      const item: CacheItem<T> = {
        data,
        timestamp: Date.now(),
        ttl: ttlMs
      };
      localStorage.setItem(this.PREFIX + key, JSON.stringify(item));
    } catch {
      // Graceful degradation when localStorage is unavailable
    }
  }

  public static get<T>(key: string): T | null {
    try {
      const raw = localStorage.getItem(this.PREFIX + key);
      if (!raw) return null;

      const item: CacheItem<T> = JSON.parse(raw);
      const isExpired = Date.now() - item.timestamp > item.ttl;

      if (isExpired) {
        localStorage.removeItem(this.PREFIX + key);
        return null;
      }

      return item.data;
    } catch {
      return null;
    }
  }
}
