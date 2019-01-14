  import React from 'React';
  import { View } from 'react-native';



const Card = (props) => {
  return (
    <View style = {style.containerStyle}>
      {props.children}
    </View>
  );
};

const style = {
  containerStyle : {
    borderWidth : 1,
    borderRadius : 2,
    borderColor : '#ddd',
    marginLeft : 5,
    marginRight : 5,
    marginTop : 10
  }
};

export {Card};