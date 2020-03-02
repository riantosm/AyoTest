import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginStudent from '../screens/login/Student.js';
import LoginTeacher from '../screens/login/Teacher.js';
import NavigatorStudent from './Student';
import NavigatorTeacher from './Teacher';
import RegisterStudent from '../screens/login/RegisterStudent';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="login-student" headerMode="none">
      <Stack.Screen name="login-student" component={LoginStudent} />
      <Stack.Screen name="login-teacher" component={LoginTeacher} />
      <Stack.Screen name="register-student" component={RegisterStudent} />
      <Stack.Screen name="navigator-student" component={NavigatorStudent} />
      <Stack.Screen name="navigator-teacher" component={NavigatorTeacher} />
    </Stack.Navigator>
  );
};

export default LoginNavigator;
