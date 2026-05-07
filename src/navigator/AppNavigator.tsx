import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainTabs } from './MainTabs';
import { ContactsScreen } from '../screens/ContactsScreen';
import { RootDrawerParamList } from './types';
import { ROUTES } from '../constants/routes.ts';
import { AboutUsScreen } from '../screens/AboutUsScreen.tsx';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

// Natigation entry point
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName={ROUTES.MainTabs}>
        <Drawer.Screen
          name={ROUTES.MainTabs}
          component={MainTabs}
          options={{
            title: 'Main pages',
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name={ROUTES.AboutUsScreen}
          component={AboutUsScreen}
          options={{
            title: 'About us',
          }}
        />
        <Drawer.Screen
          name={ROUTES.ContactsScreen}
          component={ContactsScreen}
          options={{
            title: 'Contacts',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
