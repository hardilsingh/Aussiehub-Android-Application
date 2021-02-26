import React from "react";

import Entypo from "react-native-vector-icons/Entypo";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const Help = ({ navigation }) => {
  return (
    <View style={{ display: "flex" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Help")}>
        <Text style={{ color: "#fff" }}>Help</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Help;
