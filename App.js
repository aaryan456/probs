import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DoubtType from './screens/DoubtType'
import LoginScreen from './screens/LoginScreen'
import QuestionScreen from './screens/QuestionScreen'
import SettingScreen from './screens/settingScreen'
import anstype from './screens/anstype'
import ansscreen from './screens/ansscreen'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
export default function App() {
  return (
    <AppContainer/>
    
  );
}

const student1nav = createBottomTabNavigator({
  TypeDoubtScreen:{screen:DoubtType},
  Question:{screen:QuestionScreen},
  s:{screen:SettingScreen},
  ReadAnswerScreen:{screen:ansscreen},
  TypeAnswerScreen:{screen:anstype}

})

const teachernav = createBottomTabNavigator({
  ReadAnswerScreen:{screen:ansscreen},
  TypeAnswerScreen:{screen:anstype},
  s:{screen:SettingScreen},
 

})


const AppContainer = createAppContainer(createSwitchNavigator({
  LoginScreen:{screen:LoginScreen},
  studentnav:{screen:student1nav},
  teachernav:{screen:teachernav},
}))



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
