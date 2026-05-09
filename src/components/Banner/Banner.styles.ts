import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/mainStyles';

export const styles = StyleSheet.create({
  banner: {
    height: '25%',
    width: '100%',
    backgroundColor: COLORS.primary,

    justifyContent: 'center',
    alignItems: 'center',

    paddingHorizontal: 20,
    borderRadius: 20,

    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
    lineHeight: 22,
  },
});
