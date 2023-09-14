import { configureStore } from '@reduxjs/toolkit';
import { apiSLice } from './api/apiSlice';
import bookReducer from './features/books/bookSlice';
import userReducer from './features/user/userSlice';

const store = configureStore({
  reducer: {
    [apiSLice.reducerPath]: apiSLice.reducer,
    book: bookReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSLice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
