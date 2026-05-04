import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Heart } from 'lucide-react-native';
import { FavouriteButtonProps } from './FavouriteButton.types';
import { styles } from './FavouriteButton.styles';

export const FavouriteButton = ({
  initial = false,
  onToggle,
}: FavouriteButtonProps) => {
  const [isFavourite, setIsFavourite] = useState(initial);

  const handlePress = () => {
    const newValue = !isFavourite;
    setIsFavourite(newValue);
    onToggle?.(newValue);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.container}
      activeOpacity={0.7}
    >
      <Heart
        size={24}
        color={isFavourite ? 'red' : '#fff'}
        fill={isFavourite ? 'red' : 'transparent'}
      />
    </TouchableOpacity>
  );
};
