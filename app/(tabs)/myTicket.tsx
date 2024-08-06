import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {useAsyncStorage} from '@react-native-async-storage/async-storage'
import {useDispatch, useSelector} from "react-redux"
import { authSelector } from '@/redux/reducers/authReducer'
import { Redirect } from 'expo-router'

export default function MyTicket() {

  
  const {getItem, setItem} =  useAsyncStorage("token")

  const auth = useSelector(authSelector)
  const dispatch = useDispatch()

  useEffect(()=>{

  },[])

  const checkLogin = async ()=>{
    const res = await getItem()
  }
  console.log(auth)
  return (
   <>
    {auth.isLogin ? <Text>Login seccues</Text> : <Redirect href={'/auth/sign-in'} />}
   </>
  )
}

const styles = StyleSheet.create({})