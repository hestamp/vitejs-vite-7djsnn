import { configureStore } from '@reduxjs/toolkit';
import tempSlice from './tempSlice';

export default configureStore({
  reducer: {
    temporary: tempSlice,
  },
});
