import { RootState } from '../store';

export const selectFavourites = (state: RootState) => state.favourites.items;

export const selectIsFavourite = (state: RootState, productId: number) =>
  state.favourites.items.some(item => item.id === productId);
