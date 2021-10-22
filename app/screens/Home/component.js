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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        scelerisque vehicula dolor, ut ultrices arcu feugiat ac. Aliquam tempor,
        ipsum at euismod facilisis, turpis magna viverra metus, ut facilisis leo
        ex sit amet nunc. Donec nec diam id dui scelerisque sagittis.
        Suspendisse lobortis, leo nec scelerisque tristique, arcu libero
        pulvinar augue, ut venenatis velit orci sit amet orci. Aenean tristique
        vehicula est ac rhoncus. Sed vitae velit nulla. Nam a lorem ac nisl
      </Text>
      <Button
        style={styles.button}
        onPress={onPressGetStarted}
        name="Get Started"
      />
    </Screen>
  );
};
