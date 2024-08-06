import React, { ReactNode } from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Zocial from "@expo/vector-icons/Zocial";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRouter } from "expo-router";

type Props = {
  children: ReactNode;
  title: string;
  subTitle: string;
  isLogin: boolean;
  handlebtn: () => void;
};

const ScreendContainerAuth = ({
  children,
  title,
  subTitle,
  isLogin,
  handlebtn,
}: Props) => {


  const navigation = useNavigation()
  const router = useRouter()
  const handleGoBack = ()=>{
    // navigation.goBack()
    router.back()
  }

  return (
    <ScrollView  style={{
      backgroundColor: "#171744",
      height: "100%",
    }}>
      <View
       
      >
        <View>
          <ImageBackground
            source={{
              uri: "https://pixner.net/boleto/assets/css/img/banner-shape.png",
            }}
            style={{ height: "100%" }}
          >
            <View style={styles.container}>
              <View style={styles.title}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
              </View>
              <View>
                {children}

                {/* forger password */}
                <View style={{ display: "flex", flexDirection : "row" , justifyContent: "space-between" }}>
                  <TouchableOpacity onPress={handleGoBack} >
                  <Ionicons name="arrow-back-outline" size={24} color="#6d7bba" />
                  </TouchableOpacity>
                  <TouchableOpacity
                  //  onPress={()=>router.push("/auth/sign-in")}
                  >
                    <Text
                      style={{
                        color: "#6d7bba",
                        fontSize: 14,
                      }}
                    >
                      Forger Password?
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* btn handle */}
                <TouchableOpacity style={styles.button} onPress={handlebtn}>
                  <LinearGradient
                    colors={["#5560ff", "#aa52a1", "#ff4343"]}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={styles.button}
                  >
                    <Text style={styles.btnText}>
                      {isLogin ? "Log in" : "Sign up"}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>

                {/* router login & register */}

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 10,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, color: "#ffff" }}>
                    {isLogin
                      ? " Don't have an account?"
                      : "Already have an account?"}
                  </Text>
                  <TouchableOpacity
                  // onPress={()=>router.push("/auth/sign-up")}
                  >
                    <Text style={{ color: "#31d7a9", fontSize: 16 }}>
                      {isLogin ? "Sign up now" : "Login"}
                    </Text>
                  </TouchableOpacity>
                </View>

                <View style={{ paddingHorizontal: 20 }}>
                  {/* btn login facebook */}
                  <TouchableOpacity
                    style={[styles.btnLoginSocial, styles.colorFace]}
                  >
                    <View style={styles.btnContent}>
                      <Zocial name="facebook" size={24} color="white" />
                      <Text
                        style={{
                          textAlign: "center",
                          width: "80%",
                          color: "white",
                          fontSize: 16,
                        }}
                      >
                        Login with Facebook
                      </Text>
                    </View>
                  </TouchableOpacity>
                  {/* btn- login google */}
                  <TouchableOpacity
                    style={[styles.btnLoginSocial, styles.colorGoogle]}
                  >
                    <View style={styles.btnContent}>
                      <Zocial name="googleplus" size={24} color="white" />
                      <Text
                        style={{
                          textAlign: "center",
                          width: "80%",
                          color: "white",
                          fontSize: 16,
                        }}
                      >
                        Sign in with Google
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    height: "100%",
    paddingHorizontal: 32,
    paddingVertical: 16,
    marginTop: 24,
  },
  title: {
    display: "flex",
    flexDirection: "column",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#31d7a9",
    textTransform: "uppercase",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 28,
    textTransform: "uppercase",
    color: "#dbe2fb",
    fontWeight: "bold",
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
    // width : "100%"
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

export default ScreendContainerAuth;
