import NavigationBar from 'react-native-navbar';
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
  Picker,
} from 'react-native'
import QRScanner from './qr';

export default class FoodList extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.rows = ['row 1', 'row 2'];
    this.searching = [];
    this.state = {
      dataSource: ds.cloneWithRows(this.rows),
    };
  }
  
  addFoodItem(item) {
    this.rows.push(item);
    this.setState({dataSource: this.state.dataSource.cloneWithRows(this.rows)});
  }
  
  render() {
    const rightButtonConfig = {
      title: 'Scanner',
      handler: () => {
        this.props.navigator.push({
          component: QRScanner
        });
      }
    };
    
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar
          title={{ title: 'Pantry', tintColor: 'black', }}
          rightButton={rightButtonConfig} />
        <ScrollView 
          horizontal={false}>
          <TextInput
            style={{
              height: 30, 
              width:  Dimensions.get('window').width ,
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.3)",
            }}
            placeholder={'Type food item here'}
            placeholderTextColor={"rgba(198,198,204,1)"}
            onChangeText={(text) => {
              this.setState({text})
            }}
            onSubmitEditing={() => {
              this.addFoodItem(this.state.text);
              this.setState({text: ''});
            }}
            value={(this.state && this.state.text) || ''}
          />
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => {
              return (
                <Text style={styles.fooditem}>{rowData}</Text>
              )
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fooditem: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderColor: "rgba(0,0,0,.03)",
    borderWidth: 1
  }
});