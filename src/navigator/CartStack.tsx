import { createStackNavigator } from '@react-navigation/stack';
import { CartStackParamList } from './types';
import { ROUTES } from '../constants/routes';
import { CartScreen } from '../screens/CartScreen';
import { CartDetailsScreen } from '../screens/CartDetailsScreen';

const Stack = createStackNavigator<CartStackParamList>();

export const CartStack = () => {
  return (
    <Stack.Navigator initialRouteName={ROUTES.CartScreen}>
      <Stack.Screen name={ROUTES.CartScreen} component={CartScreen} />

      <Stack.Screen
        name={ROUTES.CartDetailsScreen}
        component={CartDetailsScreen}
      />
    </Stack.Navigator>
  );
};
