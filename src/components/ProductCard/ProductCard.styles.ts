import { StyleSheet } from 'react-native';
import { SIZES } from '../../constants/constants';
import { COLORS } from '../../constants/mainStyles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 12,
    gap: 12,
  },
  imageWrapper: {
    position: 'relative',
    width: 100,
    height: 100,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
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
