import { ViewStyle } from 'react-native';
import { LucideIcon } from 'lucide-react-native';

export interface IconButtonProps {
  Icon: LucideIcon;
  onPress?: () => void;
  style?: ViewStyle;
  size?: number;
  color?: string;
}
