import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ProductsStack } from './ProductsStack';
import { MainTabParamList } from './types';
import { ROUTES } from '../constants/routes.ts';
import { Pressable } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { CartStack } from './CartStack.tsx';
import { COLORS } from '../constants/mainStyles.ts';
import {
  Menu,
  Home,
  ShoppingBag,
  User,
  ShoppingCart,
} from 'lucide-react-native';

const Tab = createBottomTabNavigator<MainTabParamList>();

export const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerTitleAlign: 'center',
        headerLeft: () => (
          <Pressable
            onPress={() =>
              navigation.getParent()?.dispatch(DrawerActions.openDrawer())
            }
            style={{ paddingHorizontal: 12 }}
            hitSlop={10}
          >
            <Menu size={24} color="#111827" />
          </Pressable>
        ),

        tabBarIcon: ({ color, size }) => {
          if (route.name === ROUTES.HomeScreen) {
            return <Home size={size} color={color} />;
          }

          if (route.name === ROUTES.ProductsStack) {
            return <ShoppingBag size={size} color={color} />;
          }

          if (route.name === ROUTES.CartStack) {
            return <ShoppingCart size={size} color={color} />;
          }

          if (route.name === ROUTES.ProfileScreen) {
            return <User size={size} color={color} />;
          }

          return null;
        },

        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.iconsColor,
      })}
    >
      <Tab.Screen
        name={ROUTES.HomeScreen}
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name={ROUTES.ProductsStack}
        component={ProductsStack}
        options={{
          title: 'Products',
        }}
      />
      <Tab.Screen
        name={ROUTES.CartStack}
        component={CartStack}
        options={{
          title: 'Cart',
        }}
      />
      <Tab.Screen
        name={ROUTES.ProfileScreen}
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
};
