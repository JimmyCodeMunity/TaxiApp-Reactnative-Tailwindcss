import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigation from './navigation/StackNavigation';

import SearchResults from './screens/SearchResults';
import HomeScreen from './screens/HomeScreen';
import DestinationSearch from './screens/DestinationSearch';
import MainNavigator from './navigation/MainNavigator';

export default function App() {
  return (
    <MainNavigator/>
    // <StackNavigation/>
    // <SearchResults/>
    // <HomeScreen/>
    // <DestinationSearch/>
  );
}

const styles = StyleSheet.create({
  
});
