import {
  Text,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Redirect, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import SplashScreen from "@/components/SplashScreen";

export default function Index() {

  


  const [isShowSplash, setShowSplash] = useState(true)
  useEffect(() =>{
    const timeout = setTimeout(()=>{
      setShowSplash(false)
    },1500)

    return ()=> clearTimeout(timeout)
    
  },[])

  return (

    isShowSplash ? <SplashScreen /> : <Redirect href={'/home'} /> 
    // <SplashScreen />

    
   
  );
}



