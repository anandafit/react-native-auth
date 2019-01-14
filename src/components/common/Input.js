import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  return (
    <View style = { style.containerStyle }>
      <Text style = { style.labelStyle}> { label }</Text>
      <TextInput
        value={ value }
        onChangeText={ onChangeText }
        style={ style.inputStyle }
        autoCorrect={ false }
        placeholder= { placeholder }
        secureTextEntry = { secureTextEntry }
      />
    </View>
  );

};

const style = {
  inputStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    color: '#000',
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex:1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };