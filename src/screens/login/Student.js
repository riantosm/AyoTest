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
import SwipeRender from 'react-native-swipe-render';

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
      <SwipeRender
        // OPTIONAL PROP USAGE.
        index={1} // default 0
        loop={false} // default false
        loadMinimal={true} // default false
        loadMinimalSize={2}
        horizontal={true} // default true
        enableAndroidViewPager={false} // default ScrollView
        // TO ENABLE AndroidViewPager:
        // react-native >= 0.60 - install @react-native-community/viewpager separately
        // react-native < 0.60 - ready to go!
      >
        <View style={{flex: 1, backgroundColor: '#000'}}>
          <ScrollView style={{backgroundColor: '#CBDBEC'}}>
            <StatusBar backgroundColor="#060709" translucent={true} />
            <KeyboardAvoidingView style={styless.container}>
              <View style={styless.loginScreenContainer}>
                <View style={styless.loginFormView}>
                  <View style={styless.logoCon}>
                    <Text
                      style={[font.Aquawax, {fontSize: 65, color: '#060709'}]}>
                      ayo<Text style={{color: '#0FB63F'}}>test</Text>.
                    </Text>
                    <Text style={[{color: '#060709'}]}>
                      Masuk sebagai siswa
                    </Text>
                  </View>
                  <TextInput
                    style={styless.inputText}
                    placeholder="Username"
                    placeholderTextColor="rgba(0,0,0,.5)"
                    onChange={e =>
                      this.setState({username: e.nativeEvent.text})
                    }
                  />
                  <TextInput
                    style={styless.inputText}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="rgba(0,0,0,.5)"
                    onChange={e =>
                      this.setState({password: e.nativeEvent.text})
                    }
                  />

                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.dispatch(
                        StackActions.replace('navigator-student'),
                      )
                    }>
                    <View style={[styless.loginButton]}>
                      <Text
                        style={{
                          color: '#fff',
                          textAlign: 'center',
                          padding: 13,
                        }}>
                        Masuk
                      </Text>
                    </View>
                  </TouchableOpacity>

                  <View style={styless.footer}>
                    <Text style={styless.footerText}>Belum memiliki akun?</Text>
                    <TouchableOpacity>
                      <Text
                        style={styless.registerButton}
                        onPress={() =>
                          this.props.navigation.navigate('register-student')
                        }>
                        Daftar disini
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'
          }}>
          <Text style={[font.Aquawax, {fontSize: 70, color: '#060709'}]}>
            ayo<Text style={{color: '#0FB63F'}}>test</Text>.
          </Text>
          <Text style={[{color: '#060709', textAlign:'left'}]}>{'<< '}Geser untuk Masuk >></Text>
        </View>
        <View style={{flex: 1, backgroundColor: '#000'}}>
          
      <ScrollView style={{backgroundColor: '#74A2A8'}}>
        <StatusBar backgroundColor="#060709" translucent={true} />
        <KeyboardAvoidingView behavior="padding" style={styless.container}>
          <View style={styless.loginScreenContainer}>
            <View style={styless.loginFormView}>
              <View style={styless.logoCon}>
                <Text style={[font.Aquawax, {fontSize: 65, color: '#060709'}]}>
                  ayo<Text style={{color: '#CBDBEC'}}>test</Text>.
                </Text>
                <Text style={[font.Questriasl, {color: '#060709'}]}>
                  Login for teacher.
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
                    StackActions.replace('navigator-teacher'),
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
                <Text style={styless.footerText}>Are you a student?</Text>
                <TouchableOpacity>
                  <Text
                    style={styless.registerButton}
                    onPress={() =>
                      this.props.navigation.navigate('login-student')
                    }>
                    Login here
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
        </View>
      </SwipeRender>
    );
  }
}

const styles = StyleSheet.create({});
