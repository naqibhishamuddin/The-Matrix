import React from 'react';
import {Text} from 'react-native';
import {Screen, Button, GridModal} from 'components';
import {styles} from './styles';

export const Home = props => {
  const {
    onPressGetStarted,
    onChangeRow,
    onChangeColumn,
    onPressConfirm,
    onCloseModal,
    isModalVisible,
    row,
    column,
  } = props;

  return (
    <Screen style={styles.container}>
      <GridModal
        onCloseModal={onCloseModal}
        isModalVisible={isModalVisible}
        row={row}
        column={column}
        onPressContinue={onPressConfirm}
        onChangeRow={onChangeRow}
        onChangeColumn={onChangeColumn}
      />
      <Text style={styles.header}>Hello there,</Text>
      <Text style={styles.description}>
        Matrix is a rectangular array or table of numbers, symbols, or
        expressions, arranged in rows and columns, which is used to represent a
        mathematical object or a property of such an object. This application
        will allow you to calculate the largest region of the matrix by few
        clicks away.
      </Text>
      <Button
        style={styles.button}
        onPress={onPressGetStarted}
        name="Get Started"
      />
    </Screen>
  );
};
