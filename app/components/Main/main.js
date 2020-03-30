import React, {Component} from 'react';
import {Text, View, Keyboard, Image, TextInput, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setInitialData, updateTestResult} from '../../redux/actions';
import styles from './main.styles';
import IMAGES from '../../images';
import THEME from '../../config/theme';
import {PatientDetails, Button} from '../common';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterData: [],
      initData: [],
      filterProcessStatus: false,
    };
  }

  goToAddPatient = () => {
    this.props.navigation.navigate('AddCovidPatient');
  };

  statusChange = (data) => {
    this.props.updateTestResult(data.id);
  };

  filterData = (text) => {
    const {initData} = this.state;
    let filteredCountry = initData.filter((item) => {
      return item.Country.toLowerCase().match(text.toLowerCase());
    });
    if (text.length === 0) {
      this.setState({filterProcessStatus: false, filterData: initData});
    } else {
      this.setState({filterData: filteredCountry, filterProcessStatus: true});
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (
      nextProps.covidPatientsData !== prevState.initData &&
      !prevState.filterProcessStatus
    ) {
      return {
        initData: nextProps.covidPatientsData,
        filterData: nextProps.covidPatientsData,
      };
    } else {
      return null;
    }
  }

  componentDidMount() {
    this.props.setInitialData();
  }

  render() {
    const {filterData} = this.state;
    return (
      <View style={styles.container}>
        {/* Add Button */}
        <Button
          pressHandler={() => {
            Keyboard.dismiss();
            this.goToAddPatient();
          }}
          label="Add Citizen"
        />

        {/* Search Input */}
        <View style={styles.searchSection}>
          <Image
            style={styles.searchIcon}
            source={IMAGES.searchIcon}
            tintColor={THEME.$moderateBlue}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search By Country"
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.filterData(text)}
          />
        </View>

        {/* List */}
        <Text style={styles.listTitle}>Citizens</Text>
        <FlatList
          data={filterData}
          renderItem={({item}) => (
            <PatientDetails
              id={item.id}
              Name={item.Name}
              Age={item.Age}
              Country={item.Country}
              TestResult={item.TestResult}
              pressHandler={() => this.statusChange(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state,
    covidPatientsData: state.main.covidData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setInitialData: bindActionCreators(setInitialData, dispatch),
    updateTestResult: bindActionCreators(updateTestResult, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
