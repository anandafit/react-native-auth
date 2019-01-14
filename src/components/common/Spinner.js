/**
 * Created by ananda on 12/28/18.
 */

import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner = ({size}) => {
  return (
    <View style={style.spinnerStyle}>
      <ActivityIndicator size = {size || 'large'}/>
    </View>
  );
};

const style = {
  spinnerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export { Spinner };

