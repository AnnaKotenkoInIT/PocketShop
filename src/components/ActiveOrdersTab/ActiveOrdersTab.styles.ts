import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/mainStyles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
    color: COLORS.primary,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    color: COLORS.textPrimary,
    marginBottom: 20,
  },
});
