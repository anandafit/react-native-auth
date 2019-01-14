import React, { Component } from 'react';
import { View, Text} from 'react-native';
import firebase from 'firebase';
import { Header, CardButton, Spinner, CardSection } from './components/common'
import LoginFrom from './components/loginFrom';

class App extends Component {
  state = {
    loggedIn: null
  };
  componentWillMount(){
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyA6IVfyuIld3HhPrBJN6LWqsCCz2cq6gr4',
        authDomain: 'auth-anandafit.firebaseapp.com',
        databaseURL: 'https://auth-anandafit.firebaseio.com',
        projectId: 'auth-anandafit',
        storageBucket: 'auth-anandafit.appspot.com',
        messagingSenderId: '1079242756678'
      }
    );

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({
          loggedIn: true
        });
      } else {
        this.setState({
          loggedIn: false
        })
      }
    })
  }

  renderContent(){
    switch (this.state.loggedIn) {
      case true:
        console.log('=======> logout');
        return (
          <CardSection>
            <CardButton onPress = {() => firebase.auth().signOut()}>
              Log Out
            </CardButton>
          </CardSection>
        );
        break;
      case false:
        console.log('=======> login');
        return <LoginFrom/>;
        break;
      default:
        console.log('=======> deafult');
        return <Spinner size = 'large'/>;
    }
  }


  render (){
    return (
      <View>
        <Header headerText = "This is the Auth APP"/>
        {this.renderContent()}
      </View>
    );
  };
}

export default App;