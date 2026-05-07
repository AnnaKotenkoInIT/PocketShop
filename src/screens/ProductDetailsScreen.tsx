import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { ProductsStackParamList } from '../navigator/types';
import { ArrowLeft } from 'lucide-react-native';

type ProductDetailsRouteProp = RouteProp<
  ProductsStackParamList,
  'ProductDetailsScreen'
>;

export const ProductDetailsScreen = () => {
  const route = useRoute<ProductDetailsRouteProp>();
  const navigation = useNavigation();

  const productId = route.params.productId;

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backBtn}
        >
          <ArrowLeft size={22} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Products</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>ProductDetailsScreen</Text>
        <Text style={styles.text}>Product ID: {productId}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  backBtn: {
    padding: 6,
    marginRight: 12,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },

  text: {
    fontSize: 16,
    color: '#555',
  },
});
