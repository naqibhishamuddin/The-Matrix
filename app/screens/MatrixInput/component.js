import React from 'react';
import {Text, ScrollView} from 'react-native';
import {Screen, Matrix, Button} from 'components';
import {styles} from './styles';

export const MatrixInput = props => {
  const {onPressCalculate, onChangeText, row, column, rowInput} = props;

  let i;
  const steps = [];

  for (i = 0; i < row; i++) {
    steps.push(
      <Matrix
        onChangeText={onChangeText}
        placeholder={`Row ${i + 1}`}
        value={rowInput[i]}
        maxLength={column}
        key={i}
        customKey={i}
      />,
    );
  }

  return (
    <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
      <Screen style={styles.container}>
        <Text style={styles.title}>Matrix Input</Text>
        <Text style={styles.description}>
          Please enter the number for your matrix row. Be advised that the
          number must be between 1 and 0. To prevent any errors and inaccurate
          result, the number entered must be match with the number of columns.
          E.g number of column is 4 (1010)
        </Text>
        {steps}
        <Button
          onPress={onPressCalculate}
          style={styles.button}
          name="Let's Calculate"
        />
      </Screen>
    </ScrollView>
  );
};
