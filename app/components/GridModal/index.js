import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import InputSpinner from 'react-native-input-spinner';
import {Button} from 'components';
import {color} from 'misc';
import {styles} from './styles';

export const GridModal = props => {
  const {
    onCloseModal,
    isModalVisible,
    row,
    column,
    onPressContinue,
    onChangeRow,
    onChangeColumn,
  } = props;

  return (
    <Modal
      isVisible={isModalVisible}
      hardwareAccelerated
      useNativeDriver
      useNativeDriverForBackdrop
      backdropOpacity={0.8}
      onBackdropPress={onCloseModal}
      animationInTiming={600}
      animationOutTiming={800}
      onSwipeCancel={onCloseModal}
      style={styles.modalContainer}>
      <View style={styles.modalContent}>
        {/** TODO: CLOSE BUTTON */}
        <Text style={styles.title}>Measurement Details</Text>
        <Text style={styles.description}>
          Please enter the number of rows and column before proceed. Be advise
          that the maximum number for both are 10
        </Text>

        {/** ROW INPUT */}
        <InputSpinner
          max={10}
          min={1}
          step={1}
          editable={false}
          color={color.primary}
          value={row}
          onChange={onChangeRow}
          style={styles.inputSpinner}
          append={<Text style={styles.placeholder}>Rows</Text>}
        />

        {/** COLUMN INPUT */}
        <InputSpinner
          max={10}
          editable={false}
          min={1}
          step={1}
          color={color.primary}
          value={column}
          onChange={onChangeColumn}
          append={<Text style={styles.placeholder}>Columns</Text>}
        />

        {/** CONTINUE BUTTON */}
        <Button
          style={styles.button}
          name="Continue"
          onPress={onPressContinue}
        />
      </View>
    </Modal>
  );
};
