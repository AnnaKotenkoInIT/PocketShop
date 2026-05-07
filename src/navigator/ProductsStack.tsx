import { createStackNavigator } from '@react-navigation/stack';
import { ProductsStackParamList } from './types';
import { ROUTES } from '../constants/routes';
import { ProductsScreen } from '../screens/ProductsScreen';
import { ProductDetailsScreen } from '../screens/ProductDetailsScreen';

const Stack = createStackNavigator<ProductsStackParamList>();

export const ProductsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.ProductsScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ROUTES.ProductsScreen} component={ProductsScreen} />

      <Stack.Screen
        name={ROUTES.ProductDetailsScreen}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};
