import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKey } from '../../definition/models/app.models';

export const storeData = async (key: StorageKey, data: string) => {
  await AsyncStorage.setItem(key, data);
};

export const retrieveData = async (key: StorageKey) => {
  return AsyncStorage.getItem(key);
};

export const removeData = async (key: StorageKey) => {
  return AsyncStorage.removeItem(key);
};
