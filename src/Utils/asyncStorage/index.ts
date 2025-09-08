import AsyncStorage from "@react-native-async-storage/async-storage";

class StorageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StorageError";
  }
}

class Storage {
  async set(key: string, item: object | string) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(item));
    } catch(err) {
      console.error(err)
      throw new StorageError(`Failed to save item with key "${key}"`)
    }
  }

  // TODO: Parse object
  async get(key: string) {
    try {
      const item = await AsyncStorage.getItem(key);
      return item;
    } catch(err) {
      console.error(err)
      throw new StorageError(`Failed to get item with key "${key}"`)
    }
  }
}

export default new Storage();
