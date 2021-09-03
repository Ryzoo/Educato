import { configureStore } from '@reduxjs/toolkit';
import { userDefaultValueProvider } from './features/user/user';
import userSlice from '../store/features/user/user';

const prepareServerDataToStore = (serverData) => {
  console.log(serverData);
  return {
    user: userDefaultValueProvider(serverData),
  };
};

export default function buildStore(serverData) {
  return configureStore({
    reducer: {
      user: userSlice,
    },
    preloadedState: prepareServerDataToStore(serverData),
  });
}
