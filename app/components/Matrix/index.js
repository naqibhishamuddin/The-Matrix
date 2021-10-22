import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './styles';

export const Matrix = props => {
  const {
    onChangeText,
    placeholder,
    value,
    maxLength,
    customKey,
    isError,
    errorMessage,
  } = props;
  const [isFocus, setIsFocus] = useState(false);

  const onTextInputFocus = () => {
    setIsFocus(true);
  };

  const onTextInputBlur = () => {
    setIsFocus(false);
  };

  return (
    <View
      style={
        isFocus ? [styles.activeContainer, styles.container] : styles.container
      }>
      {/** TODO: VALIDATION ERROR */}
      {/** TODO: REGEX ONLY ACCEPT 0 AND 1 ONLY */}

      <FontAwesome5
        name="numeric"
        color={isFocus ? 'blue' : 'gray'}
        size={20}
        style={styles.icon}
      />
      <View style={styles.inputContainer}>
        <Text style={styles.placeholder}>{placeholder}</Text>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={text => {
            onChangeText({customKey, value: text});
          }}
          maxLength={maxLength}
          keyboardType="numeric"
          onFocus={onTextInputFocus}
          onBlur={onTextInputBlur}
        />
      </View>
    </View>
  );
};
