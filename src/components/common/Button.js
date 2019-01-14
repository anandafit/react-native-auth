import React from 'React';
import { Text, TouchableOpacity } from 'react-native';


const CardButton = (props) => {
  return (
  <TouchableOpacity style = { style.buttonStyle } onPress = { props.   }>
    <Text style = { style.buttonTextStyle }>{ props.children }</Text>
  </TouchableOpacity>
  );

};

const style = {
  buttonStyle : {
    flex : 1,
    alignSelf : 'stretch',
    backgroundColor : '#fff',
    borderRadius : 5,
    borderWidth : 1,
    borderColor : '#007aff',
    marginLeft : 5,
    marginRight : 5,
  },
  buttonTextStyle : {
    alignSelf : 'center',
    color : '#007aff',
  }
};

export {CardButton};

