import React from 'react';
import {MatrixResult} from './component';

export const MatrixResultScreen = ({navigation, route}) => {
  const {result} = route?.params;
  console.log('Matrix Result is : ', result);

  const onPressTryAgain = () => {
    navigation.navigate('Home');
  };
  const props = {
    onPressTryAgain,
    result,
  };
  return <MatrixResult {...props} />;
};
