import { View, Text } from 'react-native';
import { styles } from './OrderSummary.styles';
import { OrderSummaryProps } from './OrderSummary.types';

export const OrderSummary = ({
  items,
  subtotal,
  discount,
  total,
}: OrderSummaryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Items</Text>
        <Text style={styles.value}>{items}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Subtotal</Text>
        <Text style={styles.value}>${subtotal.toFixed(2)}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Discount</Text>
        <Text style={styles.value}>${discount}</Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.row}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
      </View>
    </View>
  );
};
