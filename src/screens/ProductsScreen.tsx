import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ProductCard, SearchBar } from '../components';
import { useState } from 'react';
import { PRODUCTS_DATA } from '../store/products';

export const ProductsScreen = () => {
  const [search, setSearch] = useState('');

  const filteredData = PRODUCTS_DATA.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProductsScreen</Text>
      <SearchBar value={search} onChangeText={setSearch} />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.container}
        ListHeaderComponent={<></>}
        renderItem={({ item }) => <ProductCard {...item} />}
      />
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
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});
