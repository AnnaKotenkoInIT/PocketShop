import { ViewStyle } from 'react-native';

export interface ProductCardProps {
  imageUrl: string;
  title: string;
  price: number;
  onAdd?: () => void;
  style?: ViewStyle;
}
