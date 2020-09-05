import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Axios from "axios";
import { Dimensions } from "react-native";
import Home from "./Home";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

const initialValues = {
  username: "",
  password: "",
};

function Login({ navigation }) {
  let [values, setvalues] = useState(initialValues);
  let token, id;

  const handleChange = (e, name) => {
    setvalues({
      ...values,
      [name]: e,
    });
  };

  const Signin = async () => {
    await Axios.post("http://192.168.1.146:4000/users/authenticate", values)
      .then(async (res) => {
        console.log(res.data);
        token = res.data.token;
        // console.log(token);
        // console.log(res.data.id);

        const jsontoken = JSON.stringify(res.data.token);
        await AsyncStorage.setItem("token", jsontoken);
        const jsonid = JSON.stringify(res.data.id);
        await AsyncStorage.setItem("id", jsonid);

        navigation.navigate("home", {});
      })
      .catch((message) => alert(message));
  };

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView behavior="position" style={styles.container}>
        <View style={{ marginTop: ht * 0.01, marginBottom: ht * 0.06 }}>
          <Image style={styles.logo} source={require("../../assets/ipl.jpg")} />
          <Text
            style={{ color: "white", fontSize: ht * 0.03, textAlign: "center" }}
          >
            Login to your account
          </Text>
        </View>
        <View style={{ marginBottom: ht * 0.03 }}>
          <Text
            style={{ color: "white", fontSize: ht * 0.03, textAlign: "left" }}
          >
            UserName
          </Text>
          <TextInput
            placeholder="Enter username"
            placeholderTextColor="orange"
            style={{
              height: ht * 0.055,
              borderColor: "gray",
              borderWidth: 3,
              width: wd * 0.8,
              borderRadius: 10,
              paddingTop: ht * 0.01,
              paddingLeft: wd * 0.04,
              color: "white",
            }}
            name="username"
            onChangeText={(e) => handleChange(e, "username")}
            value={values.username}
          />
        </View>
        <View style={{ marginBottom: ht * 0.03 }}>
          <Text style={{ color: "white", fontSize: ht * 0.03 }}>Password</Text>
          <TextInput
            secureTextEntry
            placeholder="Enter Password"
            placeholderTextColor="orange"
            style={{
              height: ht * 0.055,
              borderColor: "gray",
              borderWidth: 3,
              width: wd * 0.8,
              borderRadius: 10,
              paddingTop: ht * 0.01,
              paddingLeft: wd * 0.04,
              color: "white",
            }}
            name="password"
            onChangeText={(e) => handleChange(e, "password")}
            value={values.password}
          />
        </View>
        <View>
          <TouchableOpacity onPress={() => Signin()} style={styles.button}>
            <Text
              style={{
                color: "white",
                fontSize: ht * 0.04,
                textAlign: "center",
              }}
            >
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // if (name === "Srashu" && password === "task@123")
              // if (name === "pronteff" && password === "pronteff") {
              navigation.navigate("Registration");
              // } else {
              //   alert("Invalid Username or Password");
              // }
            }}
            style={styles.button}
          >
            <Text
              style={{
                color: "white",
                fontSize: ht * 0.04,
                textAlign: "center",
              }}
            >
              Registration
            </Text>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D4F79",
    alignItems: "center",
    // justifyContent: "center",
  },
  logo: {
    width: wd * 0.35,
    height: wd * 0.35,
    borderRadius: 40,
    alignSelf: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#3EA03B",
    padding: ht * 0.002,
    width: wd * 0.8,
    height: ht * 0.07,
    borderRadius: 30,
    marginTop: ht * 0.03,
  },
});
