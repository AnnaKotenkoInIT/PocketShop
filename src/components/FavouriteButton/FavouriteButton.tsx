import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Heart } from 'lucide-react-native';
import { useDispatch } from 'react-redux';
import { toggleFavourite } from '../../store/favourites/favouritesSlice';
import { FavouriteButtonProps } from './FavouriteButton.types';
import { styles } from './FavouriteButton.styles';

export const FavouriteButton = ({
  product,
  isActive,
}: FavouriteButtonProps) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    dispatch(toggleFavourite(product));
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.container}
      activeOpacity={0.7}
    >
      <Heart
        size={24}
        color={isActive ? 'red' : '#fff'}
        fill={isActive ? 'red' : 'transparent'}
      />
    </TouchableOpacity>
  );
};
