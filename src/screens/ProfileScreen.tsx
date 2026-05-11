import { View, StyleSheet, Text, Switch } from 'react-native';
import { ProfileCard } from '../components';
import { useTheme } from '../context/themeContext/useTheme';

export const ProfileScreen = () => {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === 'dark';

  const containerStyle = isDark ? styles.darkContainer : styles.lightContainer;

  return (
    <View style={[styles.container, containerStyle]}>
      <ProfileCard name="Mark Adam" email="Mark.Adam@gmail.com" />

      <View style={styles.themeRow}>
        <Text style={styles.text}>Dark mode</Text>

        <Switch value={isDark} onValueChange={toggleTheme} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },

  themeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },

  text: {
    fontSize: 16,
    lineHeight: 22,
    color: '#000',
  },

  darkContainer: { backgroundColor: 'black' },
  lightContainer: { backgroundColor: 'white' },
});
