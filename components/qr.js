import NavigationBar from 'react-native-navbar';
import BarcodeScanner from 'react-native-barcodescanner';
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

export default class QRScanner extends Component {
  constructor() {
    super();
    this.state = {
      torchMode: 'off',
      cameraType: 'back',
    };
  }
  
  barcodeReceived(e) {
    console.log('Barcode: ' + e.data);
    console.log('Type: ' + e.type);
  }
  
  render() {
    const leftButtonConfig = {
      title: 'Back',
      handler: () => this.props.navigator.pop(),
    };

    return (
      <View style={{ flex: 1 }}>
        <NavigationBar
          title={{ title: 'QR Scanner', }}
          leftButton={leftButtonConfig} />
        <BarcodeScanner
          onBarCodeRead={this.props.onBarCodeRead}
          viewFinderBorderWidth={Dimensions.get('window').width}
          viewFinderBorderLength={Dimensions.get('window').height}
          viewFinderBorderColor={"rgba(0, 0, 0, .5)"}
          style={{flex: 1}}
        />
      </View>
    );
  }
}