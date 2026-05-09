import { View, Text } from 'react-native';
import { styles } from './OrderArchive.styles';
import { Props } from './OrderArchive.types';

export const OrderArchive = ({ item }: Props) => {
  const totalQuantity = item.products.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text>Order #{item.id}</Text>
        <Text>Total: ${item.total}</Text>
        <Text>Total quantity: {totalQuantity}</Text>
      </View>
    </View>
  );
};
