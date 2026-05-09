import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ProductsStack } from './ProductsStack';
import { CartStack } from './CartStack';

import { MainTabParamList } from './types';
import { ROUTES } from '../constants/routes';
import { COLORS } from '../constants/mainStyles';

import { HeaderMenuButton } from '../components/HeaderMenuButton/HeaderMenuButton';

import { Home, ShoppingBag, User, ShoppingCart } from 'lucide-react-native';

const Tab = createBottomTabNavigator<MainTabParamList>();

// header button
const renderHeaderLeft = (navigation: any) => () =>
  <HeaderMenuButton navigation={navigation} />;

// tab icons
const renderTabIcon = (routeName: string, color: string, size: number) => {
  if (routeName === ROUTES.HomeScreen) {
    return <Home size={size} color={color} />;
  }

  if (routeName === ROUTES.ProductsStack) {
    return <ShoppingBag size={size} color={color} />;
  }

  if (routeName === ROUTES.CartStack) {
    return <ShoppingCart size={size} color={color} />;
  }

  if (routeName === ROUTES.ProfileScreen) {
    return <User size={size} color={color} />;
  }

  return null;
};

const getScreenOptions = ({ route, navigation }: any) => ({
  headerTitleAlign: 'center' as const,
  headerLeft: renderHeaderLeft(navigation),

  tabBarIcon: ({ color, size }: any) => renderTabIcon(route.name, color, size),

  tabBarActiveTintColor: COLORS.primary,
  tabBarInactiveTintColor: COLORS.iconsColor,
});

export const MainTabs = () => {
  return (
    <Tab.Navigator screenOptions={getScreenOptions}>
      <Tab.Screen
        name={ROUTES.HomeScreen}
        component={HomeScreen}
        options={{ title: 'Home' }}
      />

      <Tab.Screen
        name={ROUTES.ProductsStack}
        component={ProductsStack}
        options={{ title: 'Products' }}
      />

      <Tab.Screen
        name={ROUTES.CartStack}
        component={CartStack}
        options={{ title: 'Cart' }}
      />

      <Tab.Screen
        name={ROUTES.ProfileScreen}
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
};
