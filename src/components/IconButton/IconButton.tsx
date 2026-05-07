import { IconButtonProps } from './IconButton.types';
import { TouchableOpacity } from 'react-native';
import { styles } from './IconButton.styles';

export const IconButton = ({
  Icon,
  onPress,
  style,
  size = 20,
  color,
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      activeOpacity={0.7}
      accessibilityRole="button"
    >
      <Icon size={size} color={color} />
    </TouchableOpacity>
  );
};
