import React, {useState} from 'react';
import {Home} from './component';

export const HomeScreen = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [row, setRow] = useState(1);
  const [column, setColumn] = useState(1);

  const onPressGetStarted = () => {
    setIsModalVisible(true);
  };

  const onChangeRow = enteredRow => {
    setRow(enteredRow);
  };

  const onChangeColumn = enteredColumn => {
    setColumn(enteredColumn);
  };

  const onPressConfirm = () => {
    /** TODO: CHECK FIRST IF THE NUMBER IS NOT 0  */
    setIsModalVisible(false);
    navigation.navigate('MatrixInput', {row, column});
  };

  const onCloseModal = () => {
    setIsModalVisible(false);
  };

  const props = {
    onPressGetStarted,
    onChangeRow,
    onChangeColumn,
    onPressConfirm,
    onCloseModal,
    isModalVisible,
    row,
    column,
  };

  return <Home {...props} />;
};
