import { LogInRequest, User } from '../../features/auth/models/auth.models';

export const loginApi = async (loginRequest: LogInRequest) =>
  new Promise<User>((resolve, reject) => {
    if (loginRequest.username !== 'admin') {
      reject(new Error('Users not found'));
    }

    resolve({
      username: loginRequest.username,
    } as User);
  });
