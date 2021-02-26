import React, { useEffect, useRef, useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button, Header } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  Easing,
  KeyboardAvoidingView,
  StatusBar,
} from "react-native";
import Toast from "react-native-toast-message";
import { getAssessment } from "../actions/assessment";
import { connect } from "react-redux";
import Home from "../components/Home";
import { ScrollView } from "react-native-gesture-handler";
import Help from "../components/Help";

const LoginScreen = ({ navigation, getAssessment, assessment }) => {
  const [mobile, setMobile] = useState("");
  const [checking, setChecking] = useState(false);
  const [spinAnim, setSpinAnim] = useState(new Animated.Value(0));
  const [showContent, setShowContent] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    setTimeout(() => setShowContent(true), 3000);
    setTimeout(() => setSpinAnim(new Animated.Value(0)), 6000);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 8000,
      useNativeDriver: true,
    }).start();
    Animated.loop(
      Animated.timing(spinAnim, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const findAssessment = async () => {
    setChecking(true);
    await getAssessment(mobile, navigation);
    setChecking(false);
  };

  const spin = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  if (!showContent) {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animated.Image
          source={require("../assets/new.png")}
          style={{ height: 150, width: 150, transform: [{ rotate: spin }] }}
        />
      </KeyboardAvoidingView>
    );
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar />
      <Animated.View
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animated.Image
          source={require("../assets/new.png")}
          style={{ height: 100, width: 100, transform: [{ rotate: spin }] }}
        />
        <View
          style={{
            width: "100%",
            paddingTop: 30,
            paddingBottom: 80,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"

          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 10,
              color: "#402F7B",
            }}
          >
            Welcome Aussie Hub
          </Text>
          <Text
            style={{
              fontSize: 15,
              textAlign: "center",
              marginBottom: 40,
              color: "#402F7B",
            }}
          >
            Enter registered mobile number to proceed.
          </Text>
          <Input
            placeholder="Registered Mobile No."
            value={mobile}
            onChangeText={(value) => setMobile(value)}
            inputContainerStyle={{
              borderWidth: 2,
              borderColor: "#402F7B",
              padding: 5,
              borderRadius: 50,
              borderBottomWidth: 2,
            }}
          />
          <Button
            buttonStyle={{
              backgroundColor: "#DA251C",
              padding: 20,
              borderRadius: 30,
              width:  150

            }}
            title={checking === true ? "Please wait...." : "Proceed"}
            onPress={findAssessment}
            style={{ alignSelf: "center", padding: 10 }}
          />
          <Text style={{ textAlign: "center", marginTop: 20 }}>
            &copy;Powered by RPS Technologies {new Date().getFullYear()}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { assessment: state.assessment };
};

export default connect(mapStateToProps, {
  getAssessment,
})(LoginScreen);
