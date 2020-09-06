import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import nepremicnineReducer from '../features/nepremicnine/nepremicnineSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    nepremicnine: nepremicnineReducer,
  },
});
