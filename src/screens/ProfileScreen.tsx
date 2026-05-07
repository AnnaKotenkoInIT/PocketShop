import { View, StyleSheet } from 'react-native';
import { ProfileCard } from '../components';

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileCard name="Mark Adam" email="Mark.Adam@gmail.com" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
});
