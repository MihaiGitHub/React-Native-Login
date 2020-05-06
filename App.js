import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppContainer from './routes'

const App = () => {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
};

export default App;
