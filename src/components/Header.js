import React from 'react';
import { View, Text, StatusBar } from 'react-native';

const Header = () => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <StatusBar barStyle="light-content" />
      <Text style={textStyle}>Albums</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#495568',
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20,
    color: '#fff'
  }
};

export default Header;
