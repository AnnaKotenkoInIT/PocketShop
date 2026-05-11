import React from 'react';
import { Image, Text, View } from 'react-native';
import { ProfileCardProps } from './ProfileCard.types';
import { styles } from './ProfileCard.styles';
import { useTheme } from '../../context/themeContext/useTheme';

export const ProfileCard = ({
  name,
  email,
  avatarUrl,
  style,
}: ProfileCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const initial = name?.trim()?.charAt(0)?.toUpperCase() ?? '?';

  const containerStyle = [styles.container, style];

  const nameStyle = [styles.name, isDark && styles.nameDark];

  const emailStyle = [styles.email, isDark && styles.emailDark];

  const fallbackStyle = [
    styles.avatarFallback,
    isDark && styles.avatarFallbackDark,
  ];

  const isValidAvatar = Boolean(avatarUrl && avatarUrl.trim().length > 0);

  return (
    <View style={containerStyle}>
      {isValidAvatar ? (
        <Image
          source={{ uri: avatarUrl }}
          style={styles.avatar}
          resizeMode="cover"
        />
      ) : (
        <View style={fallbackStyle}>
          <Text style={styles.avatarText}>{initial}</Text>
        </View>
      )}

      <Text style={nameStyle}>{name ?? 'Unknown user'}</Text>
      <Text style={emailStyle}>{email ?? 'No email'}</Text>
    </View>
  );
};
