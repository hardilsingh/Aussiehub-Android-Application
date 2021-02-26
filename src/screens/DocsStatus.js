import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, RefreshControl } from "react-native";
import { Header } from "react-native-elements";
import { ActivityIndicator } from "react-native-paper";
import Timeline from "react-native-timeline-flatlist";

import { connect } from "react-redux";
import { getAssessment } from "../actions/assessment";
import Help from "../components/Help";

import Home from "../components/Home";

const DocsScreen = ({
  status_updates,
  getAssessment,
  mobile,
  first_name,
  navigation,
}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    getAssessment(mobile, false).then(() => setRefreshing(false));
  }, []);
  const data = [];
  const pushData = () => {
    const doc_updates = status_updates.filter(
      (doc) => doc.action_required === true
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

  function renderFooter() {
    //show loading indicator
    if (refreshing) {
      return <ActivityIndicator />;
    } else {
      return <Text>~</Text>;
    }
  }

  if (data.length === 0) {
    return (
      <View style={{ flex: 1 }}>
        <Header
          leftComponent={<Help navigation={navigation} />}
          centerComponent={{
            text: "Alerts",
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
          <View style={{ display: "flex", marginLeft: 20, marginTop: 20 }}>
            <Text>No immidiate action required.</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={<Help navigation={navigation} />}
        centerComponent={{
          text: "Alerts",
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
          circleSize={20}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          timeContainerStyle={{ minWidth: 115, marginTop: 0 }}
          timeStyle={{
            textAlign: "center",
            backgroundColor: "#ff9797",
            color: "white",
            padding: 5,
            borderRadius: 13,
          }}
          descriptionStyle={{ color: "gray" }}
          options={{
            style: { paddingTop: 5 },
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
})(DocsScreen);
