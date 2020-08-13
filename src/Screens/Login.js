import React, { Component } from "react";
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
import { Dimensions } from "react-native";
import Home from "./Home";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;
const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
function Login({ navigation }) {
  const [name, onChangeText] = React.useState("Useless Placeholder");
  const [password, onChangePassword] = React.useState("Useless Placeholder");
  const keyboardVerticalOffset =
    Platform.OS === "android" ? -ht * 0.048 : -ht * 0.1;
  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        keyboardVerticalOffset={keyboardVerticalOffset}
        behavior="position"
        style={styles.container}
      >
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
            onChangeText={(text) => onChangeText(text)}
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
            onChangeText={(text) => onChangePassword(text)}
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              // if (name === "Srashu" && password === "task@123")
              if (name === "pronteff" && password === "pronteff") {
                navigation.navigate("home");
              } else {
                alert("Invalid Username or Password");
              }
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
              Sign In
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
