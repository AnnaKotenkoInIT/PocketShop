import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS } from '../constants/mainStyles';

import { OrderArchiveScreen } from '../screens/OrderArchiveScreen';
import { ActiveOrdersTabScreen } from '../screens/ActiveOrdersTabScreen';
import { ActiveCartScreen } from '../screens/ActiveCartScreen';

const Tab = createMaterialTopTabNavigator();

export const CartTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: 'gray',
        tabBarIndicatorStyle: {
          backgroundColor: COLORS.primary,
          height: 3,
        },
        tabBarStyle: {
          backgroundColor: '#fff',
        },
      }}
    >
      <Tab.Screen name="Cart" component={ActiveCartScreen} />
      <Tab.Screen name="Active" component={ActiveOrdersTabScreen} />
      <Tab.Screen name="Archive" component={OrderArchiveScreen} />
    </Tab.Navigator>
  );
};
