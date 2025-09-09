import AsyncStorage, { AsyncStorageStatic } from "@react-native-async-storage/async-storage";
import { default as MockAsyncStorage }  from "@react-native-async-storage/async-storage/jest/async-storage-mock";

class StoreError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StorageError";
  }
}

class Storage {
  private storage: AsyncStorageStatic

  constructor(storage: AsyncStorageStatic) {
    this.storage = storage
  }

  async set(key: string, item: object | string) {
    try {
      await this.storage.setItem(key, JSON.stringify(item));
    } catch(err) {
      console.error(err)
      throw new StoreError(`Failed to save item with key "${key}"`)
    }
  }

  // TODO: Parse object
  async get(key: string) {
    try {
      const item = await this.storage.getItem(key);
      return item;
    } catch(err) {
      console.error(err)
      throw new StoreError(`Failed to get item with key "${key}"`)
    }
  }
}

export const Store = new Storage(AsyncStorage)
export const MockStore = new Storage(MockAsyncStorage)
