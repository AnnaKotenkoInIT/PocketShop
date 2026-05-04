import React from 'react';
import { TextInput, View, TouchableOpacity } from 'react-native';
import { SearchBarProps } from './SearchBar.types';
import { styles } from './SearchBar.styles';
import { Search, CircleX } from 'lucide-react-native';

export const SearchBar = ({
  value,
  onChangeText,
  placeholder = 'Search...',
}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <Search size={20} color="#999" />

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
      />

      {value.length > 0 && (
        <TouchableOpacity onPress={() => onChangeText('')}>
          <CircleX size={18} color="#999" />
        </TouchableOpacity>
      )}
    </View>
  );
};
