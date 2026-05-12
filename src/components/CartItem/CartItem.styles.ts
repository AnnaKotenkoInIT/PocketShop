import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/mainStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 10,
    marginBottom: 12,
    alignItems: 'center',
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
  },

  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.textPrimary,
    maxWidth: 180,
  },

  brand: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
  },

  price: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.primary,
  },
  deleteButton: {
    backgroundColor: 'transparent',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },

  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  counterButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  quantity: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.textPrimary,
    minWidth: 24,
    textAlign: 'center',
  },
});
