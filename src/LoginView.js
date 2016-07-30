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
  ListView
} from 'react-native';
import Toast from 'react-native-toast';
import DeviceInfo from 'react-native-device-info';

class LoginView extends Component {

  constructor(props){
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  
    this.state = {
      username : "",
      password: "",
      hobby: "",
      dataSource: ds.cloneWithRows([
        {"name":"Device Unique ID", "item":DeviceInfo.getUniqueID()},
        {"name":"Device Manufacturer", "item":DeviceInfo.getManufacturer()},
        {"name":"Device Model", "item":DeviceInfo.getModel()},
        {"name":"Device ID", "item":DeviceInfo.getDeviceId()},
        {"name":"Device Name", "item":DeviceInfo.getSystemName()},
        {"name":"Bundle Id", "item":DeviceInfo.getBundleId()},
        {"name":"Build Number", "item":DeviceInfo.getBuildNumber()},
        {"name":"User Agent", "item":DeviceInfo.getUserAgent()},
        {"name":"Device Locale", "item":DeviceInfo.getDeviceLocale()},
        {"name":"Device Country", "item":DeviceInfo.getDeviceCountry()}
       ])
    }

  }
    
  _validation(_username, _password){
    if(_username.toLowerCase() == "admin" && _password.toLowerCase() == "password"){
      return true;
    }
    return false;
  }

  _onPressButton(){
    if(this._validation(this.state.username, this.state.password)){

        //push to next page
        this.props.navigator.push({id: 1, username: this.state.username, hobby: this.state.hobby});
        
        Alert.alert(
          'Login',
          'Success',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]
        );
    }else{
        Alert.alert(
          'Login',
          'Fail',
          [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]
        );
    }
    
  }

  _renderRow(rowData){
    return <View><Text>{rowData.name} : {rowData.item}</Text></View>
  }
  
  render() {

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../img/seekasia.png')} />
        <TextInput 
          style={styles.textinput}
          placeholder="User Name : (hints: admin)"
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
          autoCapitalize="none"
        />
        
        <TextInput 
          style={styles.textinput}
          placeholder="Password :  (hints: password)"
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          autoCapitalize="none"
          secureTextEntry={true}
        />

        <TextInput 
          style={styles.textinput}
          placeholder="Hobby : (e.g. basketball)"
          onChangeText={(hobby) => this.setState({hobby})}
          value={this.state.hobby}
          autoCapitalize="none"
        />

        <TouchableHighlight onPress={() => {this._onPressButton()}}>
          <Text style={styles.buttonText}>
            Login
          </Text>
        </TouchableHighlight>

         <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this._renderRow(rowData)}
        />
      </View>
    );
  }
}
LoginView.propTypes = { navigator: React.PropTypes.any.isRequired };
LoginView.defaultProps = { navigator: undefined };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems : 'center',
    backgroundColor : '#FFFFFF'
  },
  logo:{
    width: 300,
    resizeMode: 'contain',
    
  },
  textinput:{
    width: Dimensions.get('window').width - 20,
    margin: 10,
    height: 26,
    borderWidth: 1,
    borderColor: '#0f0f0f',
    fontSize: 13,
    padding: 4,
    
  },
  buttonText:{

    width: Dimensions.get('window').width - 20,
    height: 40,
    color: '#FA58F4',
    backgroundColor: '#08088A',
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    paddingTop: 10,
  }
});

export default LoginView;
