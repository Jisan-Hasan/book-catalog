import { createSlice } from '@reduxjs/toolkit';

interface IFilters {
  searchTerm: string;
  genre: string;
  year: string;
}

const initialState: IFilters = {
  searchTerm: '',
  genre: '',
  year: '',
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setGenre: (state, action) => {
      state.genre = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
  },
});

export const { setGenre, setSearchTerm, setYear } = bookSlice.actions;

export default bookSlice.reducer;
