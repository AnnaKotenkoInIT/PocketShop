import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

import { Banner } from '../components/Banner/Banner';
import { ProductCard } from '../components/ProductCard/ProductCard';

export const HomeScreen = () => {
  const favourites = useSelector((state: RootState) => state.favourites.items);

  return (
    <View style={styles.container}>
      <Banner />

      <Text style={styles.title}>Favourites</Text>

      {favourites.length === 0 ? (
        <Text style={styles.empty}>No favorite products yet 💔</Text>
      ) : (
        <FlatList
          data={favourites}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ProductCard
              id={item.id}
              title={item.title}
              price={item.price}
              images={[item.image]}
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 12,
  },

  empty: {
    fontSize: 16,
    color: 'gray',
    marginTop: 10,
    textAlign: 'center',
  },

  list: {
    paddingBottom: 20,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: 14,
  },
});
