import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/mainStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.backgroundGrey,
    borderRadius: 18,
    padding: 12,
    marginBottom: 14,
    alignItems: 'center',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 14,
    marginRight: 14,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  brand: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primary,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  counterButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.textPrimary,
  },
});
