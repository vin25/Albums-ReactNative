import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';

export default class Albums extends Component {
  render() {
    return (
      <View>
        <Header />
      </View>
    );
  }
}

AppRegistry.registerComponent('Albums', () => Albums);
