export class MemoryCacheHelper<T extends object | string> {
  private cache: Map<string, T> = new Map();
  get(key: string): T | undefined {
    return this.cache.get(key);
  }
  set(key: string, data: T) {
    if (key) {
      this.cache.set(key, data);
    }
  }
  getAllValue(): Array<T> {
    return Array.from(this.cache.values());
  }
  getAllKey(): Array<string> {
    return Array.from(this.cache.keys());
  }
  clear() {
    this.cache.clear();
  }
}
