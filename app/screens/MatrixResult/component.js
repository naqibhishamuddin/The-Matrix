import React from 'react';
import {Text} from 'react-native';
import {Screen, Button} from 'components';
import {styles} from './styles';

export const MatrixResult = props => {
  const {onPressTryAgain, answer} = props;
  return (
    <Screen style={styles.container}>
      <Text style={styles.description}>
        The length of the largest region area based on your input is
      </Text>
      <Text style={styles.answer}>12</Text>

      <Button
        onPress={onPressTryAgain}
        name="Let's Try Again"
        style={styles.button}
      />
    </Screen>
  );
};
