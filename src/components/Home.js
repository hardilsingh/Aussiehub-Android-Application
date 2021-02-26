import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import { View, TouchableOpacity, Text } from "react-native";
const Home = ({ navigation }) => {
  return (
    <View style={{ display: "flex" }}>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ color: "#fff" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
