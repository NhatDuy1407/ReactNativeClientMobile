import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

const actionPrefix = 'UI';
const setLoading = createAction<boolean>(`${actionPrefix} Set Page Loading`);
const initializeApp = createAsyncThunk(
  `${actionPrefix} Initialize App Success`,
  async () => {
    await performTimeConsumingTask();
  }
);

const performTimeConsumingTask = async () => {
  return new Promise<boolean>(resolve =>
    setTimeout(() => {
      resolve(true);
    }, 2000)
  );
};

export const UIActions = {
  setLoading,
  initializeApp,
};
