import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const HomeSearch = () => {
  const navigation = useNavigation()
  return (
    <View className="w-full px-3">
      <Pressable
      onPress={()=>navigation.navigate("destinationsearch")}
      className="flex-row bg-slate-200 rounded-md p-3 justify-between items-center w-full px-4 my-3">
        <Text className="text-xl font-semibold">Where to?</Text>
        <View className="flex-row bg-slate-100 p-1 rounded-md items-center space-x-1">
          <Icon name="clock" size={20} />
          <Text className="text-slate-600">Now</Text>
          <Icon name="chevron-down" size={20} />
        </View>
      </Pressable>

      <View className="flex-row p-4 w-full space-x-5 items-center border border-t-0 border-l-0 border-r-0 border-slate-200 shadow shadow-lg">
        <View className="rounded-full bg-slate-400 p-1">
          <Icon name="clock" size={20} color="lightgrey" />
        </View>
        <Text className="text-slate-600 font-semibold">Mwenda's Pub</Text>
      </View>
      <View className="flex-row p-4 w-full space-x-5 items-center border border-t-0 border-l-0 border-r-0 border-slate-200 shadow shadow-lg">
        <View className="rounded-full bg-slate-300 p-1">
          <Icon name="home" size={20} color="white" />
        </View>
        <Text className="text-slate-600 font-semibold">Home</Text>
      </View>
      <View className="flex-row p-4 w-full space-x-5 items-center border border-t-0 border-l-0 border-r-0 border-slate-200 shadow shadow-lg">
        <View className="rounded-full bg-slate-400 p-1">
          <Icon name="clock" size={20} color="lightgrey" />
        </View>
        <Text className="text-slate-600 font-semibold">Mwenda's Pub</Text>
      </View>
    </View>
  );
};

export default HomeSearch;

const styles = StyleSheet.create({});
