import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/mainStyles';

export const ContactsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Support</Text>
      <Text style={styles.text}>
        Our support team is always ready to help you with your orders and
        questions.
      </Text>

      <Text style={styles.title}>Email</Text>
      <Text style={styles.text}>support@pocketshop.com</Text>

      <Text style={styles.title}>Phone</Text>
      <Text style={styles.text}>+1 (234) 567-89-00</Text>

      <Text style={styles.title}>Office</Text>
      <Text style={styles.text}>25 Market Street, New York, NY</Text>

      <Text style={styles.title}>Working Hours</Text>
      <Text style={styles.text}>
        Monday - Friday{'\n'}
        09:00 AM - 06:00 PM
      </Text>
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
