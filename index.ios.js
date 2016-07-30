/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  View,
  Dimensions,
  Alert, 
  Navigator,
  Platform,
} from 'react-native';
import LoginView from './src/LoginView';
import LoginSuccessView from './src/LoginSuccessView';

class LoginProject extends Component {

  constructor(){
    super();
    this.state = {
      username : "",
      password: "",
    }

  }

  _renderScene(route, navigator) {
    if (route.id === 0) {
      return <LoginView navigator={navigator} />
    } else if (route.id === 1) {
      return <LoginSuccessView navigator={navigator} username={route.username} hobby={route.hobby}/>
    }
  }

  _renderLeftButton(route, navigator, index, navState) {

      if(route.id === 0)
        return null;
      else
        return <TouchableHighlight onPress={() => {navigator.pop()}}><Text style={styles.navBarButtonText}>Back</Text></TouchableHighlight>

  }

  _renderRightButton(route, navigator, index, navState) {
     return null;
    //  return <TouchableHighlight onPress={() => {navigator.pop()}}><Text style={styles.navBarButtonText}>Back</Text></TouchableHighlight>
 
  }

  _renderTitle(route, navigator, index, navState) {
     if(route.id === 0)
        return <Text style={styles.navBarTitle}>Login</Text>;
     else
        return <Text style={styles.navBarTitle}>Login Success</Text>;
  }
   
  render() {

    return (
      <Navigator
        initialRoute={{id: 0, title: 'Login Page' }}
        renderScene={this._renderScene}
        configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
        sceneStyle={styles.sceneStyle}
        navigationBar={
                      <Navigator.NavigationBar
                            routeMapper={{
                              LeftButton: this._renderLeftButton,
                              RightButton: this._renderRightButton,
                              Title: this._renderTitle,
                            }}
                            style={styles.navBar}
                          />
                    }
        
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems : 'center',
    backgroundColor : '#FFFFFF'
  },
  sceneStyle:{
    marginTop:(Platform.OS === 'ios')?60:40,
  },
  navBar:{
    backgroundColor: '#08088A',
    height: (Platform.OS === 'ios')?60:40,
  },
  navBarButtonText:{
    margin:10,
    color: '#FA58F4',
    width: 40,
    textAlign: 'center'
  },
  navBarTitle:{
    marginTop:(Platform.OS === 'ios')?10:24,
    color: '#FFFFFF',
    fontWeight: 'bold',
    width: Dimensions.get('window').width - 160,
    textAlign: 'center',
    textAlignVertical: 'bottom'
  }
});

AppRegistry.registerComponent('LoginProject', () => LoginProject);
