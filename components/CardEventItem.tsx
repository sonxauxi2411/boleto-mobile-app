import { StyleSheet, Text, View, Image, ScrollView ,TouchableOpacity } from "react-native";
import React from "react";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useRouter } from "expo-router";


type EventData = {
  background: string;
  _id: any;
  display_name: any;
  start_date: any;
  start_date_time? : any
};

type Events = {
  data: EventData[];
  isSearch? : boolean;
};

export default function CardEventItem(props: Events) {
  const { data, isSearch } = props;
  const router = useRouter()
  const handleNavigation = (id : string)=>{
    router.push(`/event/Event?id=${id}`)
  }
  return (
 
      <View  style={[styles.imagesContainer, { paddingBottom: isSearch ? 240 : 0 }]}>
        {data.map((item: EventData) => {
  
          const date = new Date(item.start_date || item.start_date_time ).toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
          });
          return (
            <TouchableOpacity onPress={()=>handleNavigation(item._id)} key={item._id} style={styles.imageWrapper}>
              <Image source={{ uri: item.background }} style={styles.image} />
              <View style={styles.textContent}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={styles.imageText}
                >
                  {item.display_name}
                </Text>
                <View style={{ display: "flex", flexDirection: "row", gap: 4 }}>
                  <Fontisto name="date" size={18} color="#b4b4b4" />
                  <Text style={styles.textDate}>{date}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
  );
}

const styles = StyleSheet.create({
 
 

  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingTop : 30
  },
  imageWrapper: {
    width: "48%",
    marginBottom: 18,
  },
  image: {
    // width: 'auto',
    height: 70,
    resizeMode: "contain",
    borderRadius: 6,
  },
  imageText: {
    color: "#fff",
    textAlign: "left",
    marginTop: 3,
    fontSize: 14,
  },
  textDate: {
    color: "#b4b4b4",
  },
  textContent: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    paddingTop: 6,
  },
  searchIcon: {
    padding: 10,
  },
});
