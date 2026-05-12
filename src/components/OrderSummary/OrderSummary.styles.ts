import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/mainStyles';
import { SIZES } from '../../constants/constants';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f6e6ff',
    borderRadius: 18,
    padding: 18,
    marginTop: 10,
  },
  title: {
    fontSize: SIZES.xl,
    fontWeight: '700',
    color: COLORS.textPrimary,
    marginBottom: 18,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontSize: SIZES.m,
    color: COLORS.textSecondary,
  },
  value: {
    fontSize: SIZES.m,
    color: COLORS.textPrimary,
  },
  divider: {
    height: 1,
    backgroundColor: '#DADADA',
    marginVertical: 14,
  },
  totalLabel: {
    fontSize: SIZES.xl,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  totalValue: {
    fontSize: SIZES.xl,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
});
