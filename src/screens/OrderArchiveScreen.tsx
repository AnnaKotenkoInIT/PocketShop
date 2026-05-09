import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useCarts } from '../hooks/useCarts';

export const OrderArchiveScreen = () => {
  const { carts, loading, error } = useCarts();

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={carts}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>Order #{item.id}</Text>
            <Text>Total: ${item.total}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 12,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontWeight: '600',
    marginBottom: 4,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
