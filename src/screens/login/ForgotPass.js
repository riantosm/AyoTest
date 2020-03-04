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
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
const radio_props = [
  {label: 'Laki - laki', value: 0},
  {label: 'Perempuan', value: 1},
];

import font from '../Fonts';
import styless from './Style';

const url = 'http://3.85.4.188:3333/api/admin/login';

export default class ForgotPassword extends React.Component {
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
        <KeyboardAvoidingView style={styless.container}>
          <View style={styless.loginScreenContainer}>
            <View style={styless.loginFormView}>
              <View style={styless.logoCon}>
                <Text style={[font.Aquawax, {fontSize: 65, color: '#060709'}]}>
                  ayo<Text style={{color: '#0FB63F'}}>test</Text>.
                </Text>
                <Text style={[{color: '#060709'}]}>Rubah kata sandi anda</Text>
              </View>

              <Text style={{fontSize: 18, textAlign: 'center'}}>
                Masukan email anda.
              </Text>
              <TextInput
                style={[styless.inputText, {textAlign: 'center'}]}
                placeholder="Masukan email"
              />
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  paddingBottom: 20,
                }}>
                Silakan cek email anda!
              </Text>
            </View>
            <TouchableOpacity>
              <View style={[styless.loginButton]}>
                <Text style={{color: '#fff', textAlign: 'center', padding: 13}}>
                  Daftar
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[{marginTop: 0}, styless.loginButton]}>
                <Text style={{color: '#fff', textAlign: 'center', padding: 13}}>
                  Kembali
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
