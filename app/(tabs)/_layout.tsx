import { View, Text, Modal, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { Tabs, usePathname } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "@/redux/reducers/authReducer";
import Login from "@/components/auth/Login";

export default function TabLayout() {
  const auth = useSelector(authSelector);
 



  return (
    <SafeAreaView style={{flex: 1}}>
      {/* tabs */}
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#0a1e5e",
            display: route.name === 'myTicket' && !auth.isLogin ? 'none' : 'flex'
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#b4b4b4",
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let IconComponent;

            if (route.name === "home") {
              IconComponent = Feather;
              iconName = "home";
            } else if (route.name === "myTicket") {
              IconComponent = MaterialCommunityIcons;
              iconName = "ticket-confirmation-outline";
            } else if (route.name === "profile") {
              IconComponent = FontAwesome5;
              iconName = "user-circle";
            }

            return <IconComponent name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: "Home",
          }}
        />
        <Tabs.Screen
          name="myTicket"
          options={{
            tabBarLabel: "My Ticket",
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: "Profile",
          }}
        />
      </Tabs>

      {/* modal login */}

    </SafeAreaView>
  );
}
