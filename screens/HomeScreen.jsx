import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import HomeMap from "../components/HomeMap";
import WelcomeMessage from "../components/WelcomeMessage";
import HomeSearch from "../components/HomeSearch";
const wh = Dimensions.get("window").height;

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" />
      <View style={{ height: wh - 550 }}>
        <HomeMap />
      </View>
      <View style={{height:550}}>
        <WelcomeMessage />
        <HomeSearch />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
