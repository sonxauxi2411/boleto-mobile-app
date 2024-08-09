import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    TextInput,
    Touchable,
    TouchableOpacity,
    Button,
  } from "react-native";
  import React from "react";
  import { useRouter } from "expo-router";
  import { LinearGradient } from "expo-linear-gradient";
  import Zocial from "@expo/vector-icons/Zocial";
  import ScreendContainerAuth from "@/components/ScreendContainerAuth";
  import authApi from "@/api/modules/auth.api";
  import axios from "axios";
  
  const  Login = () => {
    const router = useRouter();
  
      const handleLogin = async()=>{
  
        try {
        //  const res = await axios.get("http://192.168.1.56:8080/api/event/top-events")
        //  console.log(res.data)
  
        } catch (error) {
          console.error(error)
        }
      }
  
    return (
   
      <ScreendContainerAuth handlebtn={handleLogin} title='Hello' subTitle="Welcome back" isLogin>
        <View style={styles.formLogin}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#4c588f"
          />
  
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#4c588f"
          />
  
        </View>
      </ScreendContainerAuth>
    );
  };
  
  const styles = StyleSheet.create({
    formLogin: {
      paddingTop: 20,
      width: "100%",
    },
    label: {
      color: "#dbe2fb",
      textTransform: "uppercase",
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: "#ffff",
      paddingHorizontal: 12,
      marginBottom: 16,
      borderRadius: 4,
      fontSize: 16,
      color: "#ffff",
      // backgroundColor: '#fff',
      height: 50,
      lineHeight: 50,
      textTransform: "uppercase",
      textAlign: "center",
    },
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10,
      borderRadius: 30,
    },
    btnText: {
      paddingVertical: 16,
      paddingHorizontal: 60,
      fontSize: 18,
      fontWeight: "bold",
      color: "#fff",
      textTransform: "uppercase",
      // backgroundColor: '#31d7a9',
    },
    btnLoginSocial: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 20,
      borderRadius: 30,
    },
    btnContent: {
      display: "flex",
      flexDirection: "row",
      borderRadius: 30,
      padding: 10,
  
      alignItems: "center",
    },
    colorFace: {
      backgroundColor: "#4c68a8",
    },
    colorGoogle: {
      backgroundColor: "#c94130",
    },
  });
  
  export default Login;