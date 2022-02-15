import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { performTimeConsumingTask } from '../../utils/perform-time-consuming-task.util';

const actionPrefix = 'UI';
const setLoading = createAction<boolean>(`${actionPrefix} Set Page Loading`);
const initializeApp = createAsyncThunk(
  `${actionPrefix} Initialize App Success`,
  async () => {
    await performTimeConsumingTask();
  }
);

export const UIActions = {
  setLoading,
  initializeApp,
};
