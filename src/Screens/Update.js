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
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
function Update({ navigation }) {
  const keyboardVerticalOffset =
    Platform.OS === "android" ? -ht * 0.2 : -ht * 0.1;

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  //const [password, setPassword] = useState("");

  async function getData({ navigation }) {
    console.log({ firstName: name, lastName: password });
    await axios
      .put(
        "http://192.168.1.146:4000/users/5f4e2ab63531ce4eb4d658dd ",

        { firstName: fname, lastName: lname }
      )
      .then((res) => {
        alert("Update Successfully");
      })
      .catch((err) => {
        alert(err);
        console.log(err);
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
              source={require("../../assets/Profileicon.png")}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputText}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Edit First Name"
              placeholderTextColor="orange"
              onChangeText={(text) => setFname(text)}
              value={fname}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputText}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Edit Last Name"
              placeholderTextColor="orange"
              onChangeText={(text) => setLname(text)}
              value={lname}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputText}>Username</Text>
            <TextInput
              style={styles.input}
              placeholder="Edit Email Id"
              placeholderTextColor="orange"
              onChangeText={(text) => setUsername(text)}
              value={username}
            />
          </View>
          {/* <View style={styles.inputView}>
            <Text style={styles.inputText}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Edit Password"
              placeholderTextColor="orange"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
          </View> */}

          <View
            style={{
              alignSelf: "flex-end",
              marginTop: ht * 0.02,
              marginRight: wd * 0.07,
            }}
          >
            <TouchableOpacity
              onPress={(e) => {
                if (lname == "" || fname == "" || username == "") {
                  alert("Input Fields Can't be Empty");
                } else {
                  
                  alert("information updated");
                  navigation.navigate("homedrawer");
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
                Update
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar barStyle="light-content" backgroundColor="#4D4F79" />
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
    width: wd * 0.4,
    height: ht * 0.07,
    borderRadius: 30,
    marginTop: ht * 0.03,
  },
});
export default Update;
