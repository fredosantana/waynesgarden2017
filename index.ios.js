/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class waynesGarden extends Component {
  constructor() {
    super()
    this.state = {
      myTextA: 'Wayne\'s Garden',
      myTextB: 'This is going to be the official app',
      myTextC: 'Coming soon to iOS and Android',
      myTextD: 'It\'s going to be beautiful!',
      myTextE: 'If you click on this, something will happen..'
    }
  }
  deleteText = () => {
    this.setState({myTextE:''})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.myTextA}
        </Text>
        <Text style={styles.instructions}>
          {this.state.myTextB}
        </Text>
        <Text style={styles.instructions}>
          {this.state.myTextC}{"\n"}
          {this.state.myTextD}
        </Text>
        <Text onPress = {this.deleteText} style={styles.welcome}>
          {this.state.myTextE}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('waynesGarden', () => waynesGarden);
