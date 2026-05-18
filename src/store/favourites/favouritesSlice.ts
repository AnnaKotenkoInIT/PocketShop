import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface FavouritesState {
  items: Product[];
}

const initialState: FavouritesState = {
  items: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    toggleFavourite(state, action: PayloadAction<Product>) {
      const exists = state.items.find(item => item.id === action.payload.id);

      if (exists) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
      } else {
        state.items.push(action.payload);
      }
    },

    clearFavourites(state) {
      state.items = [];
    },
  },
});

export const { toggleFavourite, clearFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;
