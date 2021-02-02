import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import FaceBook from './screens/FaceBook';
import Instagram from './screens/Instagram';

export default class App extends React.Component {
  render(){
    return (

        <AppContainer />

    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook: {screen: FaceBook},
  Instagram: {screen: Instagram}
},
{
  defaultNavigationOptions: ({navigation})=>{
    return({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "Facebook"){
        return(
          <Image
          source={require("./assets/facebook.png")}
          style={{width:30, height:30}}
        />)

      }
      else if(routeName === "Instagram"){
        return(
          <Image
          source={require("./assets/instagram.png")}
          style={{width:30, height:30}}
        />)
         
    }}}
    )}
}
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

    tabStyle: {
      width: 100,
    },
    style: {
      backgroundColor: 'white',
      alignSelf:'center'
    }
  
  });
