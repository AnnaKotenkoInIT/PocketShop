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
    overflow: 'hidden',
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
  avatarFallbackDark: {
    backgroundColor: '#d7c8e6',
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
  nameDark: { color: COLORS.secondary },
  email: {
    fontSize: SIZES.s,
    color: COLORS.textRest,
  },
  emailDark: { color: COLORS.secondary },
});
