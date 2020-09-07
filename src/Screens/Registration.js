import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import axios from "axios";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback
    onPress={() => Keyboard.dismiss()}
  >
    {children}
  </TouchableWithoutFeedback>
);
function Registration({ navigation }) {
  const keyboardVerticalOffset =
    Platform.OS === "android" ? -ht * 0.055 : -ht * 0.1;
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function getData() {
    await axios
      .post(
        "http://192.168.1.146:4000/users/register  ",

        {
          firstName: fname,
          lastName: lname,
          username: username,
          password: password,
        }
      )
      .then((res) => {
        alert("Successfully Created");
        navigation.navigate("login");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        keyboardVerticalOffset={keyboardVerticalOffset}
        behavior="position"
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={{ marginTop: ht * 0.04 }}>
            <Image
              style={styles.logo}
              source={require("../../assets/ipl.jpg")}
            />
          </View>
          <View style={{ alignSelf: "center", marginBottom: ht * 0.005 }}>
            <Text style={styles.heading}>Registration</Text>
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputText}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter First Name"
              placeholderTextColor="orange"
              onChangeText={(text) => setFname(text)}
              value={fname}
              autoFocus={true}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputText}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Last Name"
              placeholderTextColor="orange"
              onChangeText={(text) => setLname(text)}
              value={lname}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputText}>Email Id</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email Id"
              placeholderTextColor="orange"
              onChangeText={(text) => setUsername(text)}
              value={username}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputText}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Password"
              placeholderTextColor="orange"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View>
          <View style={{ alignSelf: "center", marginTop: ht * 0.02 }}>
            <TouchableOpacity
              onPress={() => {
                if (
                  fname == "" ||
                  lname == "" ||
                  username == "" ||
                  password == ""
                ) {
                  alert("Fields Must be Filled");
                } else {
                  getData();
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
                Registration
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar barStyle="light-content" backgroundColor="black" />
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4D4F79",
    height: ht * 1,
  },
  logo: {
    width: wd * 0.35,
    height: wd * 0.35,
    borderRadius: 40,
    alignSelf: "center",
  },
  inputView: {
    alignSelf: "center",
    marginTop: ht * 0.02,
  },
  input: {
    borderWidth: wd * 0.005,
    borderRadius: ht * 0.018,
    borderColor: "grey",
    width: wd * 0.85,
    height: ht * 0.06,
    paddingLeft: wd * 0.04,
    fontSize: ht * 0.03,
    color: "pink",
    opacity: 0.9,
  },
  inputText: {
    fontWeight: "bold",
    fontSize: ht * 0.023,
    marginTop: ht * 0.006,
    color: "white",
    marginBottom: ht * 0.004,
    opacity: 0.95,
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
  heading: {
    color: "white",
    fontWeight: "bold",
    fontSize: ht * 0.045,
  },
});
export default Registration;
