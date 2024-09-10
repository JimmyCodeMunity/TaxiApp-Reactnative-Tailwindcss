import React, { useRef, useEffect } from "react";
import { View, Image, Platform, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, PROVIDER_DEFAULT } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";

const GOOGLE_MAPS_API_KEY = "AIzaSyDdUQ1EIQJB46n2RSusQro1qP3Pd4mGZcA";

const RouteMap = ({ origin, destination }) => {
  const mapRef = useRef(null);

  const originloc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationloc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  // Zoom and focus to the selected origin and destination coordinates
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.fitToCoordinates([originloc, destinationloc], {
        edgePadding: {
          top: 50,
          right: 50,
          bottom: 50,
          left: 50,
        },
        animated: true,
      });
    }
  }, [originloc, destinationloc]);

  return (
    <MapView
      ref={mapRef}
      provider={Platform.OS === "android" ? PROVIDER_GOOGLE : PROVIDER_DEFAULT}
      className="h-full w-full"
      showsUserLocation={true}
      mapType="mutedStandard"
    >
      <MapViewDirections
        origin={originloc}
        destination={destinationloc}
        apikey={GOOGLE_MAPS_API_KEY}
        strokeWidth={5}
        strokeColor="black"
      />
      {originloc?.latitude != null && (
        <Marker coordinate={originloc} anchor={{ x: 0.5, y: 0.5 }}>
          <Image
            source={require("../assets/loc1.png")}
            className="object-contain h-16 w-16"
            style={styles.markerDestination}
            resizeMode="cover"
          />
        </Marker>
      )}
      {destinationloc?.latitude != null && (
        <Marker coordinate={destinationloc} anchor={{ x: 0.5, y: 0.5 }}>
          <Image
            source={require("../assets/loc2.png")}
            className="object-contain h-16 w-16"
            style={styles.markerOrigin2}
            resizeMode="cover"
          />
        </Marker>
      )}
    </MapView>
  );
};

export default RouteMap;

const styles = StyleSheet.create({
  markerDestination: {
    width: 16,
    height: 16,
  },
  markerOrigin2: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
