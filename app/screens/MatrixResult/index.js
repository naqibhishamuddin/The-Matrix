import React from 'react';
import {Text} from 'react-native';
import {Screen} from 'components';
import {MatrixResult} from './component';

export const MatrixResultScreen = ({navigation}) => {
  const onPressTryAgain = () => {
    navigation.navigate('Home');
  };
  const props = {
    onPressTryAgain,
  };
  return <MatrixResult {...props} />;
};
