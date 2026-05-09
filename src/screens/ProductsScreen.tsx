import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import { ProductCard, SearchBar } from '../components';
import { useCallback, useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { COLORS } from '../constants/mainStyles';
import { SIZES } from '../constants/constants';
import { Product } from '../api/apiProductsTypes';

export const ProductsScreen = () => {
  const [search, setSearch] = useState('');

  const { products, loading, error, refetch } = useProducts();

  const renderProductList = useCallback(
    ({ item }: { item: Product }) => (
      <ProductCard
        id={item.id}
        title={item.title}
        price={item.price}
        images={item.images ?? []}
      />
    ),
    [],
  );

  if (loading) {
    return (
      <ActivityIndicator
        size="large"
        color={COLORS.primary}
        style={styles.loader}
      />
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>
          An error occurred while loading products.
        </Text>
      </View>
    );
  }

  const filteredData = products.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <SearchBar value={search} onChangeText={setSearch} />
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderProductList}
        showsVerticalScrollIndicator={false}
        onRefresh={refetch}
        refreshing={loading}
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
  error: {
    color: 'red',
    fontSize: SIZES.xl,
    textAlign: 'center',
    justifyContent: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
