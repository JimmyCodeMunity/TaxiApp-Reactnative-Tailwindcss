import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const WelcomeMessage = () => {
  return (
    <View className="bg-black p-5 rounded-t-lg space-y-3">
      <Text className="text-xl font-bold text-white">WelcomeMessage</Text>
      <Text className="text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat optio
        rerum aspernatur natus, amet eligendi porro deleniti dicta accusantium
        qui veritatis esse. Quaerat molestiae, quas officiis odit assumenda
        perferendis voluptates?
      </Text>
      <View className="flex-row items-center space-x-2">
      <Text className="text-white">Learn More</Text>
      <Icon name="arrow-right" size={24} color="white" />
      </View>
    </View>
  );
};

export default WelcomeMessage;

const styles = StyleSheet.create({});
