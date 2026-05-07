import { ViewStyle } from 'react-native';

export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  style?: ViewStyle;
}
