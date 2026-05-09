import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/mainStyles';

export const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who we are?</Text>
      <Text style={styles.text}>
        We are a modern marketplace app that helps you find and manage your
        orders easily.
      </Text>
      <Text style={styles.title}>Our Goal</Text>
      <Text style={styles.text}>
        Our goal is to make shopping simple, fast, and enjoyable — all in one
        place.
      </Text>
      <Text style={styles.title}>What we work for?</Text>
      <Text style={styles.text}>
        You can browse products, track your carts, and check your order history
        anytime.
      </Text>
      <Text style={styles.title}>Techologia</Text>
      <Text style={styles.text}>Built with love using React Native 🚀</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    color: COLORS.textPrimary,
    marginBottom: 20,
  },
});
