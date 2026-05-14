import React from 'react';
import { View, Text, Image } from 'react-native';
import { CartItemProps } from './CartItem.types';
import { Minus, Plus, Trash2 } from 'lucide-react-native';

import { styles } from './CartItem.styles';
import { COLORS } from '../../constants/mainStyles';

import { IconButton } from '../IconButton/IconButton';

const CartItemComponent = ({
  title,
  brand,
  price,
  quantity,
  image,
  onIncrease,
  onDecrease,
  onDelete,
}: CartItemProps) => {
  console.log('🔁 render CartItem:', title);

  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.infoContainer}>
        <View style={styles.topRow}>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.brand}>{brand}</Text>
          </View>

          <IconButton
            Icon={Trash2}
            onPress={onDelete}
            size={22}
            color="#FF7A7A"
            style={styles.deleteButton}
          />
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.price}>${price}</Text>

          <View style={styles.counterContainer}>
            <IconButton
              Icon={Minus}
              onPress={onDecrease}
              size={16}
              color={COLORS.secondary}
              style={styles.counterButton}
            />

            <Text style={styles.quantity}>
              {quantity.toString().padStart(2, '0')}
            </Text>

            <IconButton
              Icon={Plus}
              onPress={onIncrease}
              size={16}
              color={COLORS.secondary}
              style={styles.counterButton}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

CartItemComponent.whyDidYouRender = true;

export const CartItem = React.memo(CartItemComponent);
