import { Text, TouchableOpacity } from 'react-native';
import { CustomButtonProps } from './CustomButton.types';
import { styles } from './CustomButton.styles';

export const CustomButton = ({ title, onPress, style }: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      activeOpacity={0.7}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
