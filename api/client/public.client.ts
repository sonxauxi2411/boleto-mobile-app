import axios from "axios";

import { appInfo } from "@/constants/appInfo";

const baseURL = `${appInfo.API_URL}/api`
const publicClient = axios.create({
    baseURL ,
  withCredentials: true
})


publicClient.interceptors.request.use(async (config : any) => {
  return {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };
});

publicClient.interceptors.response.use(
  (response) => {

    if (response && response.data) return response.data;
    return response;
  },
  (err) => {
    console.log(err)
    return err.response.data;
  }
);

export default publicClient;
