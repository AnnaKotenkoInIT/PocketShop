import { View, Text } from 'react-native';
import { styles } from './ActiveOrdersTab.styles';

export const ActiveOrdersTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Find the best products with amazing discounts today.
      </Text>
    </View>
  );
};
