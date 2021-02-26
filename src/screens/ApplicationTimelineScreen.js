import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, RefreshControl } from "react-native";
import { Header } from "react-native-elements";
import { ActivityIndicator } from "react-native-paper";
import Timeline from "react-native-timeline-flatlist";

import { connect } from "react-redux";
import { getAssessment } from "../actions/assessment";

import * as Permissions from "expo-permissions";
import { Notifications } from "expo";
import { server } from "../api/server";
import Axios from "axios";
import Home from "../components/Home";
import Help from "../components/Help";

const ApplicationTimelineScreen = ({
  status_updates,
  getAssessment,
  mobile,
  first_name,
  navigation,
}) => {
  useEffect(() => {
    registerForPushNotificationsAsync();
  });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    getAssessment(mobile, false).then(() => setRefreshing(false));
  }, []);
  const data = [];
  const pushData = () => {
    const doc_updates = status_updates.filter(
      (doc) => doc.action_required === false
    );

    const latest = doc_updates.reverse();

    return latest.map((update) => {
      const obj = {
        time: new Date(update.time).toLocaleDateString(),
        title: "Update",
        description: update.msg,
      };

      return data.push(obj);
    });
  };
  pushData();

  const registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    const token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    server.get("/api/app/pushToken", {
      params: { notificationsPushToken: token, mobile: mobile },
    });
    if (Platform.OS === "android") {
      Notifications.createChannelAndroidAsync("status-update", {
        name: "New status update",
        sound: true,
        priority: "max",
        vibrate: [0, 250, 250, 250],
        shouldShowAlert: true,
        shouldShowMessage: true,
      });
    }
  };

  function renderFooter() {
    //show loading indicator
    if (refreshing) {
      return <ActivityIndicator />;
    } else {
      return <Text>~</Text>;
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={<Help navigation={navigation} />}
        centerComponent={{
          text: "Assessment Status",
          style: { color: "#fff" },
        }}
        rightComponent={<Home navigation={navigation} />}
        containerStyle={{
          backgroundColor: "#DA251C",
          justifyContent: "space-around",
          height: 90,
        }}
      />
      <ScrollView>
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        <Text
          style={{
            fontSize: 30,
            textAlign: "left",
            marginTop: 30,
            marginLeft: 10,
            fontWeight: "900",
          }}
        >
          Welcome {first_name}!
        </Text>
        <Timeline
          data={data}
          style={{
            marginTop: 50,
            marginLeft: 5,
            marginRight: 5,
            flex: 1,
          }}
          circleSize={25}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          timeContainerStyle={{ width: 115, marginTop: 0 }}
          timeStyle={{
            textAlign: "center",
            backgroundColor: "#ff9797",
            color: "white",
            padding: 5,
            borderRadius: 13,
          }}
          descriptionStyle={{ color: "gray" }}
          options={{
            
            refreshControl: (
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            ),
            renderFooter: renderFooter,
          }}
        />
      </ScrollView>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    status_updates: state.assessment.status_updates,
    mobile: state.assessment.mobile,
    first_name: state.assessment.first_name,
  };
};

export default connect(mapStateToProps, {
  getAssessment: getAssessment,
})(ApplicationTimelineScreen);
