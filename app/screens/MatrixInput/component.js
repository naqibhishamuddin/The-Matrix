import React from 'react';
import {Text, ScrollView, ActivityIndicator} from 'react-native';
import {Screen, Matrix, Button} from 'components';
import {styles} from './styles';

export const MatrixInput = props => {
  const {
    onPressCalculate,
    onChangeText,
    loading,
    row,
    column,
    rowInput,
    onChange,
  } = props;

  let i;
  const steps = [];
  let cast;

  for (i = 0; i <= row; i++) {
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

  if (loading) {
    return (
      <Screen>
        <ActivityIndicator size="large" color="green" />
      </Screen>
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
