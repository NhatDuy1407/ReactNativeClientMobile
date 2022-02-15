import { StorageKey } from '../../../definition/models/app.models';
import { loginApi } from '../../../services/api/auth.api';
import {
  removeData,
  retrieveData,
  storeData,
} from '../../../services/storage/storage.service';
import { performTimeConsumingTask } from '../../../utils/perform-time-consuming-task.util';
import { LogInRequest, User } from '../models/auth.models';

export const login = async (loginRequest: LogInRequest): Promise<User> => {
  await performTimeConsumingTask();

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
