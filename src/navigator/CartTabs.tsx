import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/mainStyles';
import { MoveDown } from 'lucide-react-native';
import { OrderArchiveScreen } from '../screens/OrderArchiveScreen';
import { ActiveOrdersTabScreen } from '../screens/ActiveOrdersTabScreen';

const Tab = createMaterialTopTabNavigator();

function CartTab() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Find your item in the market</Text>
        <MoveDown size={20} color="green" />
      </View>
    </View>
  );
}

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
      <Tab.Screen name="Cart" component={CartTab} />
      <Tab.Screen name="Active" component={ActiveOrdersTabScreen} />
      <Tab.Screen name="Archive" component={OrderArchiveScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    color: COLORS.textPrimary,
  },
});
