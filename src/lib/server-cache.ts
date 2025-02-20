// Cache class to store and retrieve data with a time-based expiration
export class ServerCache<T> {
  // Map to store cache data with a timestamp
  private cacheData: Map<string, { data: T; timestamp: number }> = new Map();
  // Duration for which the cache is valid (in milliseconds)
  private cacheDuration: number;

  // Constructor to initialize cache duration (default is 60 seconds)
  constructor(cacheDuration = 60 * 1000) {
    this.cacheDuration = cacheDuration;
  }

  // Method to get data from the cache
  get(key: string): T | null {
    const cached = this.cacheData.get(key);
    // Check if the cached data is still valid based on the timestamp
    if (cached && Date.now() - cached.timestamp < this.cacheDuration) {
      return cached.data;
    }
    return null;
  }

  // Method to set data in the cache with the current timestamp
  set(key: string, data: T) {
    this.cacheData.set(key, { data, timestamp: Date.now() });
  }
}
