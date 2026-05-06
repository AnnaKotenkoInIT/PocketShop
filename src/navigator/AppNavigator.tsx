import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainTabs } from './MainTabs';
import { ContactsScreen } from '../screens/ContactsScreen';
import { RootDrawerParamList } from './types';
import { ROUTES } from '../constants/routes.ts';
import { AboutUsScreen } from '../screens/AboutUsScreen.tsx';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={ROUTES.MainTabs}>
        <Drawer.Screen
          name={ROUTES.MainTabs}
          component={MainTabs}
          options={{
            title: 'Головна',
            headerShown: false,
          }}
        />
        <Drawer.Screen name={ROUTES.AboutUsScreen} component={AboutUsScreen} />
        <Drawer.Screen
          name={ROUTES.ContactsScreen}
          component={ContactsScreen}
          options={{
            title: 'Контакти',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
