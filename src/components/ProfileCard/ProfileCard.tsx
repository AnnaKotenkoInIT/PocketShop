import React from 'react';
import { Image, Text, View } from 'react-native';
import { ProfileCardProps } from './ProfileCard.types';
import { styles } from './ProfileCard.styles';

export const ProfileCard = ({
  name,
  email,
  avatarUrl,
  style,
}: ProfileCardProps) => {
  const initial = name?.trim()?.charAt(0)?.toUpperCase() ?? '?';

  return (
    <View style={[styles.container, style]}>
      {avatarUrl ? (
        <Image source={{ uri: avatarUrl }} style={styles.avatar} />
      ) : (
        <View style={styles.avatarFallback}>
          <Text style={styles.avatarText}>{initial}</Text>
        </View>
      )}

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};
