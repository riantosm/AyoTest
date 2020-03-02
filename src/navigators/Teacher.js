import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginStudent from '../screens/login/Student.js';
import LoginTeacher from '../screens/login/Teacher';
import TeacherHome from '../screens/teacher/Home'

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="teacher-home" headerMode="none">
      <Stack.Screen name="teacher-home" component={TeacherHome} />
      <Stack.Screen name="login-student" component={LoginStudent} />
      <Stack.Screen name="login-teacher" component={LoginTeacher} />
      {/* <Stack.Screen name="navigator-student" component={NavigatorStudent} />
      <Stack.Screen name="navigator-teacher" component={NavigatorTeacher} /> */}
    </Stack.Navigator>
  );
};

export default LoginNavigator;
