import NavigationBar from 'react-native-navbar'
import React, { Component } from 'react';
import {
  AppRegistry,
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  ScrollView,
  Navigator,
  Picker,
} from 'react-native'
import FoodList from './components/list';

function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} />;
}

class Pantry extends Component {
  render() {
    const initialRoute = {
      component: FoodList
    };
    
    return (
      <View style={{ flex: 1 }}>
        <Navigator
          initialRoute={initialRoute}
          renderScene={renderScene}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('Pantry', () => Pantry);
