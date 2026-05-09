import { View, Text } from 'react-native';
import { styles } from './Banner.styles';

export const Banner = () => {
  return (
    <View style={styles.banner}>
      <Text style={styles.title}>Big Summer Sale 🔥</Text>

      <Text style={styles.subtitle}>
        Find the best products with amazing discounts today.
      </Text>
    </View>
  );
};
