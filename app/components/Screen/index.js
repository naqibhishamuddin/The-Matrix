import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

export const Screen = props => {
  const {children, style} = props;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
