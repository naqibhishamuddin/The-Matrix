import React from 'react';
import {MatrixResult} from './component';

export const MatrixResultScreen = ({navigation, route}) => {
  const {result} = route?.params;

  const onPressTryAgain = () => {
    navigation.navigate('Home');
  };
  const props = {
    onPressTryAgain,
    result,
  };
  return <MatrixResult {...props} />;
};
