import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MoveDown } from 'lucide-react-native';

import { RootState } from '../store/store';
import { CartItem } from '../components/CartItem/CartItem';
import { OrderSummary } from '../components/OrderSummary/OrderSummary';

import {
  increaseQty,
  decreaseQty,
  removeFromCart,
} from '../store/cart/cartSlice';

export const ActiveCartScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const discount = 0;
  const total = subtotal - discount;

  if (items.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.text}>Your cart is empty</Text>
          <MoveDown size={20} color="green" />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        {items.map(item => (
          <CartItem
            key={item.id}
            {...item}
            onIncrease={() => dispatch(increaseQty(item.id))}
            onDecrease={() => dispatch(decreaseQty(item.id))}
            onDelete={() => dispatch(removeFromCart(item.id))}
          />
        ))}
      </ScrollView>

      <OrderSummary
        items={items.length}
        subtotal={subtotal}
        discount={discount}
        total={total}
      />
    </View>
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
  },
});
