import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants/constants';
import { COLORS } from '../../constants/mainStyles';

export const styles = StyleSheet.create({
  container: {
    width: '48%',
    alignItems: 'center',
    padding: 10,
    gap: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    shadowColor: '#6055D8',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    height: 120,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  infoAndBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  title: {
    fontSize: SIZES.m,
    fontWeight: '600',
  },
  price: {
    fontSize: SIZES.s,
    fontWeight: '600',
    color: COLORS.primary,
  },
});
