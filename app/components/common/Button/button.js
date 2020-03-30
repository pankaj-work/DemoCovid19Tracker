import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './button.style';

const Button = (params) => {
  return (
    <TouchableOpacity
      onPress={params.pressHandler}
      style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{params.label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
