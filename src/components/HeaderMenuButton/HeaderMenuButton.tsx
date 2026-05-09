import React from 'react';
import { Pressable } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import { Menu } from 'lucide-react-native';
import { styles } from './HeaderMenuButton.styles';

export const HeaderMenuButton = ({ navigation }: any) => {
  return (
    <Pressable
      onPress={() =>
        navigation.getParent()?.dispatch(DrawerActions.openDrawer())
      }
      style={styles.btnContainer}
      hitSlop={10}
    >
      <Menu size={24} color="#111827" />
    </Pressable>
  );
};
