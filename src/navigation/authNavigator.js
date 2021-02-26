import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import LoggedInNavigator from "./loggedInNavigator";
import Help from "../components/Help";
import HelpScreen from "../screens/HelpScreen";

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome" component={LoggedInNavigator} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
