import { View, Text, StyleSheet } from 'react-native';
import { Banner } from '../components/Banner/Banner';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Banner />
      <Text style={styles.title}>
        We will add interaction with Favourite section soon.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});
