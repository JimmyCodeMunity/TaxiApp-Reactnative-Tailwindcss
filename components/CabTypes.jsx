import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CabTypeRow from "./CabTypeRow";
import types from "../assets/data/types";

const CabTypes = () => {
  const confirm = () => {
    console.warn("Confirm");
  };
  return (
    <View className="bg-white">
      {types.map((cab) => {
        return <CabTypeRow cab={cab} />;
      })}

      <View className="w-full px-4 bg-white">
        <Pressable
          onPress={confirm}
          className="bg-black w-full h-12 justify-center items-center rounded-lg"
        >
          <Text className="text-white font-semibold">Confirm Ride</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CabTypes;

const styles = StyleSheet.create({});
