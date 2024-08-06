import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";


export default function SplashScreen() {
  return (
  <View>

       <LinearGradient
        colors={["#5560ff", "#aa52a1", "#ff4343"]}
        start={[0, 0]}
        end={[1, 1]}
        style={{ height: "100%" }}
      >
        <View style={styles.container}>
            <Image
                      style={{
                        resizeMode: 'contain',
                        height: "6%",
                        width: "100%",
                      }}
              source={require("../assets/images/logo.png")}
            />
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Text
              style={{
                textTransform: "uppercase",
                letterSpacing: 3,
                color: "#fff",
              }}
            >
              Welcome to
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 32,
                  color: "#fff",
                  fontWeight: "900",
                  textTransform: "uppercase",
                  letterSpacing: 4,
                }}
              >
                Ticket
              </Text>
              <Text style={{ fontSize: 32, color: "#fff", fontWeight: "300", textTransform: "uppercase" }}>
                App
              </Text>
            </View>
          </View>

          <View>
            <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
              Safe, secure, reliable ticketing.Your ticket to live
              entertainment!
            </Text>
          </View>
          {/* <TouchableOpacity style={styles.btn} onPress={handleRouterLogin}>
            <Text style={styles.textBtn} >Log in</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={handleRouterRegister}>
            <Text style={styles.textBtn}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btn} onPress={handleRouterHome}>
            <Text style={styles.textBtn}>Home</Text>
          </TouchableOpacity> */}
        </View>
      </LinearGradient> 
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      paddingHorizontal: 32,
      paddingVertical: 16,
      gap: 30,
    },
    btn: {
      backgroundColor: "#fff",
      // padding: 16,
      borderRadius: 30,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    textBtn: {
      fontSize: 18,
      fontWeight: "500",
      color: "#5560ff",
      textTransform: "uppercase",
      letterSpacing: 2,
      paddingVertical: 16,
      paddingHorizontal: 60,
    },
  });