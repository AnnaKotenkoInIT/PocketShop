import { createStackNavigator } from '@react-navigation/stack';
import { CartStackParamList } from './types';
import { ROUTES } from '../constants/routes';
import { CartTabs } from '../navigator/CartTabs';
import { CartDetailsScreen } from '../screens/CartDetailsScreen';

const Stack = createStackNavigator<CartStackParamList>();

export const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.CartScreen}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={ROUTES.CartScreen} component={CartTabs} />

      <Stack.Screen
        name={ROUTES.CartDetailsScreen}
        component={CartDetailsScreen}
      />
    </Stack.Navigator>
  );
};
