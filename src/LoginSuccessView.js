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
  Alert
} from 'react-native';

class LoginSuccessView extends Component {

  constructor(props){
    super(props);
  }
  
  render() {

    return (
      <View style={styles.container}>
        <Text>{this.props.username} likes {this.props.hobby}</Text>
      </View>
    );
  }
}
LoginSuccessView.propTypes = { 
  navigator: React.PropTypes.any.isRequired, 
  username: React.PropTypes.string.isRequired, 
  hobby: React.PropTypes.string.isRequired
};
LoginSuccessView.defaultProps = { navigator: undefined };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems : 'center',
    backgroundColor : '#FFFFFF'
  }
});

export default LoginSuccessView;
