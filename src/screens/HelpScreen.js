import React from "react";
import { Linking, Text, View, Image } from "react-native";
import { Button, Header } from "react-native-elements";
import { connect } from "react-redux";
import Help from "../components/Help";
import Home from "../components/Home";
import Entypo from "react-native-vector-icons/Entypo";
import { ScrollView } from "react-native-gesture-handler";
import Back from "../components/Back";

const HelpScreen = ({ assessment, navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        centerComponent={{
          text: "Contact us",
          style: { color: "#fff" },
        }}
        rightComponent={<Home navigation={navigation} />}
        containerStyle={{
          backgroundColor: "#DA251C",
          justifyContent: "space-around",
          height: 90,
          marginBottom: 30,
        }}
      />
      <View
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 30,
            }}
          >
            <View style={{paddingLeft: 30, marginTop: 20}}>
              <Text style={{ fontSize: 20 }}>Meet our Visa Expert</Text>
              <Text style={{ fontSize: 20, color: "red", marginBottom: 40 }}>
                Mr. Harmanjit Singh
              </Text>
            </View>
            <View style={{paddingRight: 30}}>
              <Image
                source={require("../assets/hero.jpg")}
                resizeMode="cover"
                style={{ height: 110, width: 110, borderRadius: 100 }}
              />
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 10,
              padding: 10,
            }}
          >
            <Entypo
              name="address"
              color="#402F7B"
              size={28}
              style={{ marginRight: 10 }}
            />
            <View style={{ padding: 15 }}>
              <Text style={{ marginBottom: 10, fontSize: 25 }}>
                Gsp Branch{" "}
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  (Mon to Wed)
                </Text>
              </Text>
              <Text style={{ marginBottom: 10, paddingRight: 40 }}>
                VJ Tower level-1, above K7 Restaurant Library Road
                Gurdaspur-143521
              </Text>
              <View>
                <Text style={{ fontWeight: "bold" }}>Contact Us- </Text>
                <Text
                  onPress={() => Linking.openURL("tel:01874505505")}
                  style={{ marginBottom: 2 }}
                >
                  01874-505505
                </Text>
                <Text
                  onPress={() => Linking.openURL("tel:9915915924")}
                  style={{ marginBottom: 2 }}
                >
                  9915915924
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", marginBottom: 20,padding: 10 }}
          >
            <Entypo
              name="address"
              color="#402F7B"
              size={28}
              style={{ marginRight: 10 }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ marginBottom: 10, fontSize: 25 }}>
                Batala Branch{" "}
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  (Thu to Sat)
                </Text>
              </Text>
              <Text style={{ marginBottom: 10, paddingRight: 40 }}>
                SCO 105/150, Shastri Nagar, Hansli Bridge B/S Vishal Megamart,
                Batala Punjab-143505
              </Text>
              <View>
                <Text style={{ fontWeight: "bold" }}>Contact Us- </Text>
                <Text
                  onPress={() => Linking.openURL("tel:01871505505")}
                  style={{ marginBottom: 2 }}
                >
                  01871-505505
                </Text>
                <Text
                  onPress={() => Linking.openURL("tel:9696700069")}
                  style={{ marginBottom: 2 }}
                >
                  9696700069
                </Text>
              </View>
            </View>
          </View>
          <View
            onPress={() => Linking.openURL("mailto:contact@aussiehub.co.in")}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10
            }}
          >
            <Entypo
              name="email"
              color="#402F7B"
              size={28}
              style={{ marginRight: 10 }}
            />
            <Text>Email: contact@aussiehub.co.in</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 30,
              paddingLeft: 10
            }}
          >
            <Entypo
              name="email"
              color="#402F7B"
              size={28}
              style={{ marginRight: 10 }}
            />
            <Text onPress={() => Linking.openURL("https://aussiehub.co.in/")}>
              Website: www.aussiehub.co.in
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { assessment: state.assessment };
};

export default connect(mapStateToProps)(HelpScreen);
