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
import { CustomButton } from '../components';

import {
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
} from '../store/cart/cartSlice';

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

  const subtotal = React.useMemo(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const discount = 0;

  const total = React.useMemo(() => subtotal - discount, [subtotal]);

  const handleIncrease = React.useCallback(
    (id: string) => {
      animateLayout();
      dispatch(increaseQty(id));
    },
    [dispatch],
  );

  const handleDecrease = React.useCallback(
    (id: string) => {
      animateLayout();
      dispatch(decreaseQty(id));
    },
    [dispatch],
  );

  const handleDelete = React.useCallback(
    (id: string) => {
      animateLayout();
      dispatch(removeFromCart(id));
    },
    [dispatch],
  );

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
            onIncrease={() => handleIncrease(item.id)}
            onDecrease={() => handleDecrease(item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        ))}
      </ScrollView>

      <OrderSummary
        items={items.length}
        subtotal={subtotal}
        discount={discount}
        total={total}
      />

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
});
