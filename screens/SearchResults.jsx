import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import HomeMap from "../components/HomeMap";
import CabTypes from "../components/CabTypes";
import RouteMap from "../components/RouteMap";
import { useRoute } from "@react-navigation/native";

const wh = Dimensions.get("window").height;

const SearchResults = () => {
  const route = useRoute();
  const {origin,destination} = route.params;
  console.warn("origin",origin,"destination", destination);
  return (
    <View>
      <View className="w-full" style={{ height: wh - 400 }}>
        <RouteMap origin={origin} destination={destination} />
      </View>
      <View style={{height:400}}>
        <CabTypes />
      </View>
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
