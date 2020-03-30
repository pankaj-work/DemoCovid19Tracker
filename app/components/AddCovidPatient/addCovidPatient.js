import React, {Component} from 'react';
import {TextInput, View, Switch, Text, Alert, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addNewRecord} from '../../redux/actions';
import styles from './addCovidPatient.style';
import {Button} from '../common';
import {consoleLog} from '../../lib';

class AddCovidPatient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Age: '',
      Country: '',
      Status: false,
    };
  }

  updateState = (stateHolder, val) => {
    const updatedVal = stateHolder === 'Age' ? val.replace(/\D+/g, '') : val;
    this.setState({[stateHolder]: updatedVal});
  };

  addNewRecord = () => {
    const {Name, Age, Country, Status} = this.state;
    const {addNewPatientRecord, navigation} = this.props;
    if (Name.length && Age.length && Country.length) {
      const newRecord = {
        Name,
        Age,
        Country,
        TestResult: Status,
        id: '' + Date.now(),
      };
      addNewPatientRecord(newRecord);
      Alert.alert(
        'Success',
        'New Record Added Successfully',
        [
          {
            text: 'OK',
            onPress: () => {
              consoleLog('Record Added');
              navigation.goBack();
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      consoleLog('All data not filled');
      Alert.alert('Alert!', 'Please fill all the information');
    }
  };

  render() {
    const {Name, Age, Country} = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputData}
          placeholder="Enter The Patient Name"
          onSubmitEditing={(val) => this.Age.focus()}
          onChangeText={(val) => this.updateState('Name', val)}
          returnKeyType={'next'}
          value={Name}
        />

        <TextInput
          style={styles.inputData}
          placeholder="Enter The Patient Age"
          onSubmitEditing={(val) => this.Country.focus()}
          onChangeText={(val) => this.updateState('Age', val)}
          ref={(ref) => {
            this.Age = ref;
          }}
          returnKeyType={'next'}
          keyboardType={'phone-pad'}
          value={Age}
          maxLength={3}
        />

        <TextInput
          style={styles.inputData}
          placeholder="Enter The Country Name"
          onChangeText={(val) => this.updateState('Country', val)}
          ref={(ref) => {
            this.Country = ref;
          }}
          returnKeyType={'done'}
          value={Country}
        />

        <View style={styles.resultContainer}>
          <Text style={styles.text}>Covid19 Test Staus </Text>
          <Switch
            value={this.state.Status}
            onValueChange={(status) => this.setState({Status: status})}
          />
        </View>

        <Button
          pressHandler={() => {
            Keyboard.dismiss();
            this.addNewRecord();
          }}
          label="Add Patient"
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addNewPatientRecord: bindActionCreators(addNewRecord, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCovidPatient);
