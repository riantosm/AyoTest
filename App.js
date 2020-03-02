/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, Image, View,StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Login from './src/screens/Login';
// import Register from './src/screens/Register';
// import Main from './src/screens/Main';
import AsyncStorage from '@react-native-community/async-storage';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Login from './src/navigators/Login';
import LoginStudent from './src/screens/login/Student.js';
import LoginTeacher from './src/screens/login/Teacher.js';
import NavigatorStudent from './src/navigators/Student';
import NavigatorTeacher from './src/navigators/Teacher';

// import Index from './src/screens/Index';
import font from './src/screens/Fonts';
import RegisterStudent from './src/screens/login/RegisterStudent';

const Stack = createStackNavigator();

class AppWithRedux extends React.Component {
  constructor() {
    super();
    this.state = {
      login: true,
      complete: false,
    };
  }

  checkLogin = async () => {
    const login = await AsyncStorage.getItem('token');
    if (login) {
      this.setState({
        login: true,
      });
    }
    this.setState({
      complete: true,
    });
  };

  componentDidMount() {
    this.checkLogin();
  }

  render() {
    return (
      <NavigationContainer>
      <StatusBar backgroundColor="rgba(0,0,0, .5)" translucent={true} style={{position:'absolute'}} />
        {this.state.complete ? (
          <Stack.Navigator
            initialRouteName="login-student"
            // initialRouteName={
            //   !this.state.login
            //     ? 'login'
            //     : this.state.teacher
            //     ? 'teacher'
            //     : 'student'
            // }
            headerMode="none">
            <Stack.Screen name="login-student" component={LoginStudent} />
            <Stack.Screen name="register-student" component={RegisterStudent} />

            <Stack.Screen name="login-teacher" component={LoginTeacher} />
            <Stack.Screen
              name="navigator-student"
              component={NavigatorStudent}
            />
            <Stack.Screen
              name="navigator-teacher"
              component={NavigatorTeacher}
            />
            {/* <Stack.Screen
              name="student"
              component={Student}
              options={{gestureEnabled: false}}
            />
            <Stack.Screen
              name="teacher"
              component={Teacher}
              options={{gestureEnabled: false}}
            /> */}
          </Stack.Navigator>
        ) : (
          <View
            style={{
              backgroundColor: '#fff',
              height: '100%',
              width: '100%',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={[font.Aquawax, {fontSize: 65, color: '#060709'}]}>
              ayo<Text style={{color: '#0FB63F'}}>Test</Text>.
            </Text>
          </View>
        )}
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <AppWithRedux />
    </Provider>
  );
};

export default App;
