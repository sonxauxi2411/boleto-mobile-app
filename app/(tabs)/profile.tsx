import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonLinearGradient from "@/components/ButtonLinearGradient";

export default function Profile() {

  const handleNavigation = ()=>{

  }
  return (
    <View>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.title}> My Account</Text>
      </View>
     <View style={{backgroundColor : "#fff" , height: "100%" , width :"100%", paddingVertical: 20}}>
     <View style={styles.cardLogin}>
          <Image source={require("../../assets/images/avatar.png")} />
          <View>
            <ButtonLinearGradient title='Login' handleBtn={handleNavigation} />
            <Text style={{textAlign:"center"}}>To fully experience features in</Text>
          </View>
      </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0a1e5e",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    paddingTop: 35,
  },
  title: {
    padding: 10,
    color: "#fff",
    fontSize: 20,
  },
  cardLogin :{
    display : "flex", 
    flexDirection : "row",
    justifyContent : "space-evenly",
    alignItems : "center",
    marginBottom : 20,
    paddingHorizontal : 10,
    backgroundColor : "#f6f8fa",
    borderRadius : 10,
  }
});
