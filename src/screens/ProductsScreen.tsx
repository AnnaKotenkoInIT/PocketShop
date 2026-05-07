import { View, StyleSheet, FlatList } from 'react-native';
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
      <SearchBar value={search} onChangeText={setSearch} />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => <ProductCard {...item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  contentContainer: {
    paddingBottom: 24,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
