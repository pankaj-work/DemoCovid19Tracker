import React from 'react';
import {Main, AddCovidPatient} from '../components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function ROUTES() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Covid19 Tracker',
          }}
        />
        <Stack.Screen
          name="AddCovidPatient"
          component={AddCovidPatient}
          options={{
            title: 'Add Covid19 Patient',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ROUTES;
