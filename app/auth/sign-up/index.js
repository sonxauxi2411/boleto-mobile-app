import ScreendContainerAuth from "@/components/ScreendContainerAuth";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
  Button,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SignUp = () => {
  return (
    <ScreendContainerAuth title="Welcome" subTitle="To Boleto">
      <View style={styles.formRegister}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#4c588f"
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#4c588f"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#4c588f"
          secureTextEntry
        />
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#4c588f"
          secureTextEntry
        />

      </View>
    </ScreendContainerAuth>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  formRegister: {
    paddingTop: 20,
    width: "100%",
  },
  label: {
    color: "#dbe2fb",
    textTransform: "uppercase",
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ffff",
    paddingHorizontal: 12,
    marginBottom: 16,
    borderRadius: 4,
    fontSize: 16,
    color: "#ffff",
    // backgroundColor: '#fff',
    height: 50,
    lineHeight: 50,
    textTransform: "uppercase",
    textAlign: "center",
  },
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
    // backgroundColor: '#31d7a9',
  },
});
