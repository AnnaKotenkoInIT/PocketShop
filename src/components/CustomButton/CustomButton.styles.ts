import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/mainStyles';

export const styles = StyleSheet.create({
  container: {
    minWidth: 240,
    minHeight: 48,
    paddingHorizontal: 88,
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.secondary,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
});
