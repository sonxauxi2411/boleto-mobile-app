import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import eventApi from "@/api/modules/event.api";

export default function Home() {
  const [events , setEvents] = useState({})

  useEffect(()=>{

    const fetch = async ()=>{
      try {
          const response = await eventApi.getTopEvents()
          setEvents(response)
      } catch (error) {
        console.error(error);
      }
    }

    fetch()

  },[])

  // console.log('events' , events)

  return (
    <View >
      <View style={styles.header}>
        <View>
          <Image
            source={require("../../assets/images/logo.png")}
          />
        </View>
        <Text style={{ color: "#fff" }}>search</Text>
      </View>
      <ScrollView style={{backgroundColor : "#001232" , height: "100%"}}>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 25,
  },
  header: {
    padding: 25,
    paddingTop: 55,
    backgroundColor: "#0a1e5e",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
