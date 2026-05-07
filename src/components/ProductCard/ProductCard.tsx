import { Image, Text, View } from 'react-native';
import { ProductCardProps } from './ProductCard.types';
import { styles } from './ProductCard.styles';
import { FavouriteButton } from '../FavouriteButton';
import { IconButton } from '../IconButton';
import { Plus } from 'lucide-react-native';
import { COLORS } from '../../constants/mainStyles';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants/routes';
import { TouchableOpacity } from 'react-native';
import { ProductsStackParamList } from '../../navigator/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const ProductCard = ({
  id,
  title,
  price,
  imageUrl,
  style,
}: ProductCardProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<ProductsStackParamList>>();

  const handlePress = () => {
    navigation.navigate(ROUTES.ProductDetailsScreen, {
      productId: id,
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.container, style]}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageUrl }} style={styles.cardImage} />
        <FavouriteButton />
      </View>
      <View style={styles.infoAndBtn}>
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
        </View>
        <IconButton Icon={Plus} color={COLORS.secondary} />
      </View>
    </TouchableOpacity>
  );
};
