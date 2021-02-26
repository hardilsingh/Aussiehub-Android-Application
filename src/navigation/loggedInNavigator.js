import React from "react";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import ApplicationTimelineScreen from "../screens/ApplicationTimelineScreen";
import SendMailScreen from "../screens/SendMailScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import DocsStatus from "../screens/DocsStatus";
import HelpScreen from "../screens/HelpScreen";

const Tab = createMaterialBottomTabNavigator();

function LoggedInNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Status"
      barStyle={{ backgroundColor: "#DA251C" }}
    >
      <Tab.Screen
        name="Status"
        component={ApplicationTimelineScreen}
        options={{
          tabBarLabel: "Status",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color="#fff" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={SendMailScreen}
        options={{
          tabBarLabel: "Upload Docs",
          tabBarIcon: ({ color }) => (
            <Entypo name="text-document" color="#fff" size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Docs"
        component={DocsStatus}
        options={{
          tabBarLabel: "Alerts",
          tabBarIcon: ({ color }) => (
            <Entypo name="bell" color="#fff" size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Help"
        component={HelpScreen}
        options={{
          tabBarLabel: "Help",
          tabBarIcon: ({ color }) => (
            <Entypo name="help-with-circle" color="#fff" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default LoggedInNavigator;
