import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Axios from 'axios';
import {StackActions} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import font from '../Fonts';
import styless from './Style';

const url = 'http://3.85.4.188:3333/api/admin/login';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      warning: false,
      loading: false,
    };
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({
      loading: true,
    });
    // console.log(this.state.username);
    // console.log(this.state.password);
    Axios.post(url, {
      email: this.state.username,
      password: this.state.password,
    }).then(resolve => {
      if (resolve.data.token) {
        AsyncStorage.setItem('token', resolve.data.token);
        this.props.navigation.dispatch(StackActions.replace('main'));
      } else {
        this.setState({loading: false, warning: resolve.data.warning});
      }
    });
  }

  setUsername(value) {
    this.setState({
      username: value,
    });
  }

  setPassword(value) {
    this.setState({
      password: value,
    });
  }

  render() {
    return (
      <ScrollView style={{backgroundColor: '#CBDBEC'}}>
        <StatusBar backgroundColor="#060709" translucent={true} />
        <KeyboardAvoidingView behavior="padding" style={styless.container}>
          <View style={styless.loginScreenContainer}>
            <View style={styless.loginFormView}>
              <View style={styless.logoCon}>
                <Text style={[font.Aquawax, {fontSize: 65, color: '#060709'}]}>
                  ayo<Text style={{color: '#0FB63F'}}>test</Text>.
                </Text>
                <Text style={[font.Questriasl, {color: '#060709'}]}>
                  Login for student.
                </Text>
              </View>
              <TextInput
                style={styless.inputText}
                placeholder="Username"
                placeholderTextColor="rgba(0,0,0,.5)"
                onChange={e => this.setState({username: e.nativeEvent.text})}
              />
              <TextInput
                style={styless.inputText}
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="rgba(0,0,0,.5)"
                onChange={e => this.setState({password: e.nativeEvent.text})}
              />

              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.dispatch(
                    StackActions.replace('navigator-student'),
                  )
                }>
                <View style={[styless.loginButton]}>
                  <Text
                    style={{color: '#fff', textAlign: 'center', padding: 13}}>
                    Login
                  </Text>
                </View>
              </TouchableOpacity>

              <View style={styless.footer}>
                <Text style={styless.footerText}>Are you a teacher?</Text>
                <TouchableOpacity>
                  <Text
                    style={styless.registerButton}
                    onPress={() =>
                      this.props.navigation.navigate('login-teacher')
                    }>
                    Login here
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
