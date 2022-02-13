import { createReducer } from '@reduxjs/toolkit';
import { initialUIState } from './ui.state';

const uiReducer = createReducer(initialUIState, () => {});
export default uiReducer;
