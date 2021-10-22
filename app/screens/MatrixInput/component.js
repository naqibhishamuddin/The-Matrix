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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          scelerisque vehicula dolor, ut ultrices arcu feugiat ac. Aliquam
          tempor,
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
