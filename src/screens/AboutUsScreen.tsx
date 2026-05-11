import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/mainStyles';
import { useTheme } from '../context/themeContext/useTheme';

export const AboutUsScreen = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const containerStyle = [styles.container, isDark && styles.containerDark];

  const titleStyle = [styles.title, isDark && styles.titleDark];

  const textStyle = [styles.text, isDark && styles.textDark];

  return (
    <View style={containerStyle}>
      <Text style={titleStyle}>Who we are?</Text>
      <Text style={textStyle}>
        We are a modern marketplace app that helps you find and manage your
        orders easily.
      </Text>

      <Text style={titleStyle}>Our Goal</Text>
      <Text style={textStyle}>
        Our goal is to make shopping simple, fast, and enjoyable — all in one
        place.
      </Text>

      <Text style={titleStyle}>What we work for?</Text>
      <Text style={textStyle}>
        You can browse products, track your carts, and check your order history
        anytime.
      </Text>

      <Text style={titleStyle}>Technology</Text>
      <Text style={textStyle}>Built with love using React Native 🚀</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  containerDark: {
    backgroundColor: '#121212',
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 12,
    color: COLORS.primary,
    marginTop: 10,
  },

  titleDark: {
    color: '#c277ee',
  },

  text: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    color: COLORS.textPrimary,
    marginBottom: 20,
  },

  textDark: {
    color: COLORS.secondary,
  },
});
