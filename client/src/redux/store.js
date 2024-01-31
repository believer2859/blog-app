import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
// import contactsSlice from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    // contacts: contactsSlice,
  },
});

