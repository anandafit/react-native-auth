
import React from 'react';
import { Text, View } from 'react-native';


// create the component
const Header = (props) => {
  const { textStyle, viewStyle} = styles;
  return (
  <View style={viewStyle}>
    <Text style={textStyle}> {props.headerText}</Text>
  </View>
  );
};


const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height : 60,
    paddingTop : 30,
    backgroundColor : 'green'
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  }
};

export {Header};
