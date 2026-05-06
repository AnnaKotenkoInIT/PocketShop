import { ViewStyle } from 'react-native';

export interface ProfileCardProps {
  name: string;
  email: string;
  avatarUrl?: string;
  style?: ViewStyle;
}
