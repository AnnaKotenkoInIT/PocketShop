import { View, Text, StyleSheet } from 'react-native';

export const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Find your thing on the market </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
