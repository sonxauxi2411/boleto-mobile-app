import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "@/redux/reducers/authReducer";
import { useRouter } from "expo-router";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function MyTicket() {
  const { getItem, setItem } = useAsyncStorage("token");

  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  const router = useRouter();
  const translateY = useSharedValue(100);

  useEffect(() => {
    const checkLogin = async () => {
      const token = await getItem();
      // if (auth.isLogin) {
      //   setModalVisible(true)
      // } else {
      //   setModalVisible(false)
      // }
    };

    checkLogin();
  }, [getItem]);

  useEffect(() => {
    translateY.value = withTiming(0, { duration: 500 });
  }, [translateY]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <>
      <Animated.View style={[styles.container, animatedStyle]}>
        {!auth.isLogin ? (
          <>{auth.isFormLogin ? <Login /> : <Register />}</>
        ) : (
          <Text>My Ticket</Text>
        )}
      </Animated.View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
