import { IconButtonProps } from './IconButton.types';
import { TouchableOpacity } from 'react-native';
import { styles } from './IconButton.styles';

export const IconButton = ({
  Icon,
  onPress,
  style,
  size = 20,
  color = '#000',
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      activeOpacity={0.7}
      accessibilityRole="button"
    >
      <Icon width={size} height={size} fill={color} />
    </TouchableOpacity>
  );
};
