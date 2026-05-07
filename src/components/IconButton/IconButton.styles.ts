import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/mainStyles';

export const styles = StyleSheet.create({
  button: {
    padding: 7,
    borderRadius: 50,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 14,
    height: 14,
  },
});
