import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './patientDetails.styles';
import IMAGES from '../../../images';

const PatientDetails = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.detailText}>Name: {props.Name}</Text>
        <Text style={styles.detailText}>Age: {props.Age}</Text>
        <Text style={styles.detailText}>Country: {props.Country}</Text>
        <Text style={styles.detailText}>
          CovidPositive: {props.TestResult ? 'Yes' : 'No'}
        </Text>
      </View>
      <TouchableOpacity style={styles.status} onPress={props.pressHandler}>
        <Image
          style={styles.icon}
          source={props.TestResult ? IMAGES.tick : IMAGES.cross}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PatientDetails;
