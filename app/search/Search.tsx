import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation, useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import eventApi from "@/api/modules/event.api";
import CardEventItem from "@/components/CardEventItem";
import {Dimensions} from 'react-native';

export default function Search() {
  const inputRef = useRef<TextInput>(null);
  const { cate } = useLocalSearchParams();
  const [results, setResults] = useState<any>([]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    //   if(inputRef.current){
    //       inputRef.current.focus()
    //   }

    const fetch = async () => {
      setLoading(true)
      try {
        const res = await eventApi.searchEvent({
          cate: cate == "all" ? "" : [cate],
        });
        const { results }: any = res;
        setResults(results);
        setLoading(false)
      } catch (error) {
        console.error(error);
      } finally {
       setLoading(true)
      }
    };
    fetch();
  }, []);

  const handleCannel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <TouchableOpacity onPress={handleCannel}>
            <Ionicons
              name="arrow-back-circle-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
          <Text style={{ color: "#fff", fontSize: 18 }}>Search</Text>
          <MaterialIcons name="filter-alt" size={24} color="white" />
        </View>
        <View>
          <TextInput style={styles.inputSearch} />
        </View>

        <View>
          <Text style={{ color: "#fff" }}>{cate}</Text>
        </View>

        <View >
          <ScrollView  >
           {loading ?  <CardEventItem data={results} isSearch /> : <Text style={{color : '#fff'}}>Loading...</Text> }
          
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001232",
  },
  header: {
    padding: 10,
    // paddingVertical: 10,
    paddingTop: 35,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  headerSearchInput: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  inputSearch: {
    borderBottomWidth: 1,
    fontSize: 18,
    color: "#fff",
    padding: 10,
    borderColor: "#31d7a9",
  },



  imagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
   
    // justifyContent: "space-between",
  },
  imageWrapper: {
    width: "48%",
    marginBottom: 18,
   
  },

});
