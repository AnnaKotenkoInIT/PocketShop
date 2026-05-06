import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/mainStyles';
import { SIZES } from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
  avatarFallback: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: COLORS.backgroundGrey,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: COLORS.primary,
    fontSize: 40,
    fontWeight: '600',
  },
  name: {
    fontSize: SIZES.l,
    fontWeight: '600',
    color: COLORS.textPrimary,
    marginBottom: 6,
  },
  email: {
    fontSize: SIZES.s,
    color: COLORS.textRest,
  },
});
