import Toast from "react-native-toast-message";
import { server } from "../api/server";
import { GET_ASSESSMENT } from "./types";

export const getAssessment = (mobile, navigation) => {
  return async (dispatch) => {
    try {
      const res = await server.get("/api/app/assessments/singleAssessment", {
        params: {
          mobile,
        },
      });
      dispatch({
        type: GET_ASSESSMENT,
        payload: res.data,
      });
      if (navigation) {
        return navigation.push("Welcome");
      }
    } catch (error) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Invalid Mobile Number",
        text2: "Mobile number not registered",
        visibilityTime: 10000,
      });
    }
  };
};
