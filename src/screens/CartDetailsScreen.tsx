import { View, Text, StyleSheet } from 'react-native';

export const CartDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CartDetailesScreen</Text>
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
