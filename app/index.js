import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store/configureStore';
import ROUTES from './config/routes';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.flexCenterContent}>
          <ROUTES />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  flexCenterContent: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default App;
