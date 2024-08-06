import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0a1e5e",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#b4b4b4",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent;

          if (route.name === 'home') {
            IconComponent = Feather;
            iconName = 'home';
          } else if (route.name === 'myTicket') {
            IconComponent = MaterialCommunityIcons;
            iconName = 'ticket-confirmation-outline';
          } else if (route.name === 'profile') {
            IconComponent = FontAwesome5;
            iconName = 'user-circle';
          }

          return <IconComponent name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tabs.Screen
        name="myTicket"
        options={{
          tabBarLabel: 'My Ticket',
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'Profile',
        }}
      />
    </Tabs>
  );
}
