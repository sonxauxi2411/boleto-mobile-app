import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";

type Props = {
    title: string ,
    handleBtn : ()=>void
}

const ButtonLinearGradient = ({title , handleBtn} : Props ) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleBtn}>
      <LinearGradient
        colors={["#5560ff", "#aa52a1", "#ff4343"]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.button}
      >
        <Text style={styles.btnText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default ButtonLinearGradient

const styles = StyleSheet.create({

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        borderRadius: 30,
      },
      btnText: {
        paddingVertical: 16,
        paddingHorizontal: 60,
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        textTransform: "uppercase",
        // width : "100%"
      },
})