import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import eventApi from "@/api/modules/event.api";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from "expo-router";
import CardEventItem from "@/components/CardEventItem";

type EventData = {
  background: string;
  _id: any;
  display_name: any;
  start_date: any;
};

type Events = {
  cate: string;
  data: EventData[];
};

export default function Home() {
  const [events, setEvents] = useState<Events[]>([]);

  const router = useRouter()

  useEffect(() => {
    const fetch = async () => {
      try {
        const res: any = await eventApi.getTopEvents();
        setEvents(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetch();
  }, []);

  const handleSeeMore = (cate : string)=>{
    const queryParams = new URLSearchParams({
      cate
  
    }).toString();

    router.push(`/search/Search?${queryParams}`)
  }

  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image source={require("../../assets/images/logo.png")} />
        </View>
        <TouchableOpacity onPress={()=>router.push('/search/Search?cate=all')}>
          <AntDesign name="search1" size={18} color="#fff" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {events.map((e, index) => (
          <View key={index} style={styles.eventContainer}>
            {/* header list event */}
            <View style={styles.eventHeader}>
              <Text style={styles.eventCategory}>{e.cate}</Text>
              <TouchableOpacity style={styles.seeMoreButton} onPress={()=>handleSeeMore(e.cate)}>
                <Text style={styles.seeMoreText}>see more</Text>
                <MaterialIcons name="navigate-next" size={28} color="#6d7bba" />
              </TouchableOpacity>
            </View>

            {/* content list event */}
            <CardEventItem data={e.data} />
     
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 10,
    // paddingVertical: 10,
    paddingTop: 35,
    backgroundColor: "#0a1e5e",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scrollView: {
    backgroundColor: "#001232",
    flex: 1,
    paddingHorizontal: 10,
  },
  eventContainer: {
    marginVertical: 10,
  },
  eventHeader: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eventCategory: {
    color: "#fff",
    fontSize: 16,
  },
  seeMoreButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeMoreText: {
    color: "#6d7bba",
    fontSize: 14,
  },
  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageWrapper: {
    width: "48%",
    marginBottom: 18,
  },
  image: {
    // width: 'auto',
    height: 70,
    resizeMode: "contain",
    borderRadius : 6
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
    display : "flex", 
    flexDirection : "column", 
    gap: 4,
    paddingTop : 6
  },
  searchIcon: {
    padding : 10,
  }
});
