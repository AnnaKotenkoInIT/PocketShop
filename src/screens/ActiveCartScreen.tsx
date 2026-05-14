import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MoveDown } from 'lucide-react-native';

import { RootState } from '../store/store';
import { CartItem } from '../components/CartItem/CartItem';
import { OrderSummary } from '../components/OrderSummary/OrderSummary';

import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from '../store/cart/cartSlice';
import { CustomButton } from '../components';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const animateLayout = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
};

export const ActiveCartScreen = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const [isCheckingOut, setIsCheckingOut] = React.useState(false);

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
            onIncrease={() => {
              animateLayout();
              dispatch(increaseQty(item.id));
            }}
            onDecrease={() => {
              animateLayout();
              dispatch(decreaseQty(item.id));
            }}
            onDelete={() => {
              animateLayout();
              dispatch(removeFromCart(item.id));
            }}
          />
        ))}
      </ScrollView>

      <OrderSummary
        items={items.length}
        subtotal={subtotal}
        discount={discount}
        total={total}
      />

      <View
        style={[
          styles.buttonWrapper,
          isCheckingOut && styles.buttonWrapperActive,
        ]}
      >
        <CustomButton
          title={isCheckingOut ? 'Processing...' : 'Check Out'}
          onPress={() => {
            animateLayout();

            setIsCheckingOut(true);

            setTimeout(() => {
              dispatch(clearCart());
              setIsCheckingOut(false);
            }, 300);
          }}
          style={styles.checkoutButton}
        />
      </View>
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
  checkoutButton: {
    marginTop: 16,
    marginBottom: 24,
  },

  buttonWrapper: {
    paddingVertical: 0,
    opacity: 1,
  },
  buttonWrapperActive: {
    paddingVertical: 12,
    opacity: 0.6,
  },
});
