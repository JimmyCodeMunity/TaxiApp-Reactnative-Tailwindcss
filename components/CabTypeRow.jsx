import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CabTypeRow = ({cab}) => {
  const getImage = ()=>{
    if(cab.type === 'UberX'){
      return require('../assets/images/UberX.jpeg');
    }
    if(cab.type === 'Comfort'){
      return require('../assets/images/Comfort.jpeg');
    }
    return require('../assets/images/UberXL.jpeg');
  }
  return (
    <View className="w-full flex-row items-center px-4 py-5 justify-between">
      <View className="flex-row items-center space-x-3">
        <View>
          <Image
            source={getImage()}
            className="h-12 w-20 object-cover"
          />
        </View>
        <View>
          <View>
          <Text className="text-slate-900 font-bold text-xl">{cab.type}</Text>
          {/* <Icon name="persons"/> */}
          <Icon/>
          </View>
          <Text className="text-xs text-slate-400">5:60 P.M dropoff</Text>
        </View>
      </View>
      <View className="space-x-2 flex-row items-center">
        <Icon name="tag" color="lightgreen"/>
        <Text className="text-slate-500 font-semibold text-lg">est.KES.{cab.price}</Text>
      </View>
    </View>
  );
};

export default CabTypeRow;

const styles = StyleSheet.create({});
