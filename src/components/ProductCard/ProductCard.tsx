import { Image, Text, View } from 'react-native';
import { ProductCardProps } from './ProductCard.types';
import { styles } from './ProductCard.styles';
import { FavouriteButton } from '../FavouriteButton';
import { IconButton } from '../IconButton';
import { Plus } from 'lucide-react-native';
import { COLORS } from '../../constants/mainStyles';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants/routes';
import { TouchableOpacity } from 'react-native';
import { ProductsStackParamList } from '../../navigator/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectIsFavourite } from '../../store/favourites/favouritesSelectors';
import { addToCart } from '../../store/cart/cartSlice';

import { RootState } from '../../store/store';

export const ProductCard = ({
  id,
  title,
  price,
  images,
  style,
}: ProductCardProps) => {
  const dispatch = useDispatch();

  const navigation =
    useNavigation<NativeStackNavigationProp<ProductsStackParamList>>();

  const handlePress = () => {
    navigation.navigate(ROUTES.ProductDetailsScreen, {
      productId: id,
    });
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: String(id),
        title,
        price,
        image: images?.[0] ?? '',
        brand: 'Unknown brand',
      }),
    );
  };

  const isFavourite = useSelector((state: RootState) =>
    selectIsFavourite(state, id),
  );

  const firstImage = images?.[0];

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.container, style]}>
      <View style={styles.imageWrapper}>
        {firstImage ? (
          <Image source={{ uri: firstImage }} style={styles.cardImage} />
        ) : (
          <View style={[styles.cardImage, styles.placeholder]} />
        )}

        <FavouriteButton
          product={{ id, title, price, image: images?.[0] ?? '' }}
          isActive={isFavourite}
        />
      </View>

      <View style={styles.infoAndBtn}>
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${Number(price).toFixed(2)}</Text>
        </View>

        <IconButton
          Icon={Plus}
          color={COLORS.secondary}
          onPress={handleAddToCart}
        />
      </View>
    </TouchableOpacity>
  );
};
