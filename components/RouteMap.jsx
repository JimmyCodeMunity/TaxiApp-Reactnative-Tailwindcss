import {
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import MapView, {
  PROVIDER_GOOGLE,
  PROVIDER_DEFAULT,
  Marker,
} from "react-native-maps";
import cars from "../assets/data/cars";
import MapViewDirections from "react-native-maps-directions";
// import { GOOGLE_MAPS_API_KEY } from "@env";
const GOOGLE_MAPS_API_KEY = "AIzaSyDdUQ1EIQJB46n2RSusQro1qP3Pd4mGZcA"

const RouteMap = ({origin,destination}) => {
 

  // console.log("olocal: " + originloc.latitude)
  // console.log("dlocal: " + destinationloc)
  const originloc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };
  const destinationloc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };
  // const origin = {
  //   latitude: 28.450627,
  //   longitude: -16.263045,
  // };
  // const destination = {
  //   latitude: 28.460128,
  //   longitude: -16.259929,
  // };
  return (
    <MapView
      provider={Platform.OS === "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
      className="h-full w-full"
      showsUserLocation={true}
      // showsBuildings
      mapType="mutedStandard"
      // region={{
      //   latitude: 28.450627,
      //   longitude: -16.263045,
      //   latitudeDelta: 0.0022,
      //   longitudeDelta: 0.0121,
      // }}
      // initialRegion={{
      //   latitude: 28.450627,
      //   longitude: -16.266745,
      //   latitudeDelta: 0.0022,
      //   longitudeDelta: 0.0121,
      // }}
    >
      <MapViewDirections
        origin={originloc}
        destination={destinationloc}
        apikey={GOOGLE_MAPS_API_KEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker
    //   key={}
      coordinate={origin}
      title=""
      description=""
      />
      <Marker
    //   key={}
      coordinate={destination}
      title=""
      description=""
      />
    </MapView>
  );
};

export default RouteMap;

const styles = StyleSheet.create({});
