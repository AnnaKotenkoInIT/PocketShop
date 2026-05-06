import { ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

export interface IconButtonProps {
  Icon: React.FC<SvgProps>;
  onPress: () => void;
  style?: ViewStyle;
  size?: number;
  color?: string;
}
