import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StudentHome from '../screens/student/Home';
import StudentTest from '../screens/student/Test';
import StudentTestScreen from '../screens/student/TestScreen';
import StudentTestNya from './Test';
import StudentDetail from '../screens/student/Detail';
import StudentFinish from '../screens/student/FinishScreen';
import StudentAdd from '../screens/student/Add';
import StudentStatistic from '../screens/student/Statistic';
import Upgrade from '../screens/student/UpgradeScreen';

import TeacherHome from '../screens/student/HomeTeacher';
import TeacherDetail from '../screens/student/DetailTeacher';
import teacherLive from '../screens/student/LiveTeacher';
// import LoginTeacher from '../screens/login/Teacher';

const Stack = createStackNavigator();

const LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="student-home" headerMode="none">
      <Stack.Screen name="teacher-home" component={TeacherHome} />
      <Stack.Screen name="teacher-detail" component={TeacherDetail} />
      <Stack.Screen name="teacher-live" component={teacherLive} />
      
      {/* <Stack.Screen name="upgrade" component={Upgrade} /> */}

      <Stack.Screen name="student-home" component={StudentHome} />
      <Stack.Screen name="student-test" component={StudentTest} />
      <Stack.Screen name="student-test-nya" component={StudentTestNya} />
      <Stack.Screen name="student-test-screen" component={StudentTestScreen} />
      <Stack.Screen name="student-finish" component={StudentFinish} />
      <Stack.Screen name="student-detail" component={StudentDetail} />
      <Stack.Screen name="student-add" component={StudentAdd} />
      <Stack.Screen name="student-statistic" component={StudentStatistic} />
      {/* <Stack.Screen name="login-teacher" component={LoginTeacher} /> */}
      {/* <Stack.Screen name="navigator-student" component={NavigatorStudent} />
      <Stack.Screen name="navigator-teacher" component={NavigatorTeacher} /> */}
    </Stack.Navigator>
  );
};

export default LoginNavigator;
