import { Image, Text, View } from 'react-native';
import { ProductCardProps } from './ProductCard.types';
import { styles } from './ProductCard.styles';
import { FavouriteButton } from '../FavouriteButton';

export const ProductCard = ({
  title,
  price,
  imageUrl,
  style,
}: ProductCardProps) => {
  return (
    <View style={[styles.container, style]}>
      {' '}
      <View style={styles.imageWrapper}>
        {' '}
        <Image source={{ uri: imageUrl }} style={styles.cardImage} />{' '}
        <FavouriteButton />{' '}
      </View>{' '}
      <View style={styles.info}>
        {' '}
        <Text style={styles.title}>{title}</Text>{' '}
        <Text style={styles.price}>${price.toFixed(2)}</Text>{' '}
      </View>{' '}
    </View>
  );
};
