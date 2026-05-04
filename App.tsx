import React, { useState } from 'react';
import { StatusBar, useColorScheme, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { CustomButton, ProductCard } from './scr/components';
import { ProfileCard } from './scr/components/ProfileCard/ProfileCard';
import { SearchBar } from './scr/components/SearchBar/SearchBar';

import { PRODUCTS_DATA } from './scr/store/products';
import { styles } from './App.styles';

function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const [search, setSearch] = useState('');

  const filteredData = PRODUCTS_DATA.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <SafeAreaView style={styles.safeArea}>
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.container}
          ListHeaderComponent={
            <>
              <ProfileCard name="Mark Adam" email="Mark.Adam@gmail.com" />

              <SearchBar value={search} onChangeText={setSearch} />

              <CustomButton
                title="Buy Now"
                onPress={() => console.log('Button Buy pressed!')}
              />
            </>
          }
          renderItem={({ item }) => <ProductCard {...item} />}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
