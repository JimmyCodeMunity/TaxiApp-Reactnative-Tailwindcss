import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import DestinationSearch from '../screens/DestinationSearch';
import SearchResults from '../screens/SearchResults';
import SettingScreen from '../screens/SettingScreen';



const Stack = createStackNavigator();


const StackNavigation = () => {
  return (
    
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="login" component={LoginScreen} options={{headerShown:false}}/>
            <Stack.Screen name="destinationsearch" component={DestinationSearch} options={{headerShown:false}}/>
            <Stack.Screen name="settings" component={SettingScreen} options={{headerShown:false,presentation:'modal'}}/>
            <Stack.Screen name="search" component={SearchResults} options={{headerShown:false}}/>
        </Stack.Navigator>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})