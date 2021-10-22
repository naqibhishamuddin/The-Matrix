import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './styles';

export const Button = props => {
  const {name, onPress, style, textStyle} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.98}
      style={[styles.button, style]}>
      <Text style={[styles.buttonText, textStyle]}>{name}</Text>
    </TouchableOpacity>
  );
};
