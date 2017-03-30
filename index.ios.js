import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class Albums extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Header />
        <AlbumList />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#b9c0cc'
  }
};

AppRegistry.registerComponent('Albums', () => Albums);
