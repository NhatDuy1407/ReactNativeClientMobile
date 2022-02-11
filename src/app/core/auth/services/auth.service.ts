import { StorageKey } from '../../models/app.models';
import {
  removeData,
  retrieveData,
  storeData,
} from '../../storage/storage.service';
import { loginApi } from '../api/auth.api';
import { LogInRequest, User } from '../models/auth.models';

export const login = async (loginRequest: LogInRequest): Promise<User> => {
  const user = await getLoggedUserFromStorage();
  if (user) {
    return user;
  }

  const newUser = await loginApi(loginRequest);
  await storeData(StorageKey.AUTH, JSON.stringify(newUser));

  return newUser;
};

export const logout = async () => {
  return removeData(StorageKey.AUTH);
};

export const getLoggedUserFromStorage = async (): Promise<User | null> => {
  const userJson = await retrieveData(StorageKey.AUTH);
  let user: User | null = null;

  if (userJson) {
    user = JSON.parse(userJson) as User;
  }

  return user;
};
