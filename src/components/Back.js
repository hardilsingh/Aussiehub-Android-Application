import React from "react";
import Entypo from "react-native-vector-icons/Entypo";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const Back = ({ navigation }) => {
  return (
    <View style={{ display: "flex" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Welcome")}>
        <Text style={{ color: "#fff" }}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Back;
