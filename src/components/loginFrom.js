import React, { Component } from 'react';
import { View, TextInput, Text } from 'react-native';
import { CardSection, CardButton, Card, Input, Spinner} from './common';
import firebase from 'firebase';

class LoginForm extends Component {
  state = { email : '', password: '', error: '', loading: false };

  onButtonPress(){

    const {email, password } = this.state;
    this.setState({loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(this.onLoginSuccess.bind(this))
    .catch(
      () => firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this)));
  }

  onLoginFail(){
    this.setState({
      error : 'Authentication fail',
      loading: false
    });
  }

  onLoginSuccess(){
    this.setState({ email : '', password: '', error: '', loading: false });
  }

  renderButton(){
    if(this.state.loading){
      return <Spinner size = 'small'/>;
    }

    return (
      <CardButton onPress = { this.onButtonPress.bind(this)}>
        Log in
      </CardButton>
    );
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Input
            value={ this.state.email }
            onChangeText={ email => this.setState({email :email})}
            label = 'Email'
            placeholder = 'user@gmail.com'
          />
        </CardSection>
        <CardSection>
          <Input
            value={ this.state.password }
            onChangeText={ password => this.setState({ password: password })}
            label = 'Password'
            placeholder = '********'
            secureTextEntry = {true}
          />
        </CardSection>
        <CardSection>
          { this.renderButton() }
        </CardSection>
        <Text style = { style.errorTextStyle }>
          { this.state.error }
        </Text>
      </Card>
    )
  }

}

const style = {
  errorTextStyle : {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;