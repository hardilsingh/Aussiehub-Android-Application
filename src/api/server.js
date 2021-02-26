import Axios from "axios";

export const server = Axios.create({
  baseURL: "https://aussiehub.herokuapp.com",
});
