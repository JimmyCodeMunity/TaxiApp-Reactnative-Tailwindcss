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

const HomeMap = () => {
  const getImage = (type)=>{
    if(type === 'UberX'){
      return require('../assets/images/top-UberX.png');
    }
    if(type === 'Comfort'){
      return require('../assets/images/top-Comfort.png');
    }
    return require('../assets/images/top-UberXL.png');
  }
  return (
    <MapView
    mapType={Platform.OS == "android" ? "none" : "standard"}
      provider={Platform.OS === "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
      className="h-full w-full"
      showsUserLocation={true}
      showsBuildings={true}
      mapType="mutedStandard"
      // followsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      zoomEnabled="true"
      // followsUserLocation={true}
      // fitToCoordinates
    >
      {cars.map((item, index) => {
        return (
          <Marker
            key={index}
            coordinate={{
              latitude: item.latitude,
              longitude: item.longitude,
            }}
          >
            <Image
              source={getImage(item.type)}
              className="object-contain h-16 w-14"
              resizeMode="contain"
              style={{
                transform:[{
                  rotate: `${item.heading}deg`,
                }]
              }}
            />
          </Marker>
        );
      })}
    </MapView>
  );
};

export default HomeMap;

const styles = StyleSheet.create({});
