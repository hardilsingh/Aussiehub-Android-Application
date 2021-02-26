import React from "react";
import { Linking, Text, View } from "react-native";
import { Button, Header } from "react-native-elements";
import { connect } from "react-redux";
import Help from "../components/Help";
import Home from "../components/Home";

const SendMailScreen = ({ assessment, navigation }) => {
  if (!assessment.case_handled_by) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>You have not been assigned a counselor.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={<Help navigation={navigation}  />}
        centerComponent={{
          text: "Email Documents",
          style: { color: "#fff" },
        }}
        rightComponent={<Home navigation={navigation} />}
        containerStyle={{
          backgroundColor: "#DA251C",
          justifyContent: "space-around",
          height: 90,
        }}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>
          Counselor: {assessment.case_handled_by.name}
        </Text>
        <Text style={{ fontSize: 20 }}>
          Email: {assessment.case_handled_by.email}
        </Text>
        <Button
          onPress={() =>
            Linking.openURL(
              `mailto:${assessment.case_handled_by.email}?subject=Docs Reference No: ${assessment.ref_no}&body=Below are the attached documents.`
            )
          }
          title="Upload Required Documents &rarr;"
          buttonStyle={{
            marginTop: 50,
            backgroundColor: "#402F7B",
            padding: 20,
            borderRadius: 30,
          }}
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return { assessment: state.assessment };
};

export default connect(mapStateToProps)(SendMailScreen);
