import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/mainStyles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backgroundGrey,
    borderRadius: 18,
    padding: 18,
    marginTop: 10,
  },
  title: {
    fontSize: 24,
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
    fontSize: 18,
    color: COLORS.textSecondary,
  },
  value: {
    fontSize: 18,
    color: COLORS.textPrimary,
  },
  divider: {
    height: 1,
    backgroundColor: '#DADADA',
    marginVertical: 14,
  },
  totalLabel: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
  totalValue: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.textPrimary,
  },
});
