import React, { useState, useEffect } from "react";
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
import Axios from "axios";
import AsyncStorage from "@react-native-community/async-storage";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);
const initialValues = {
  username: "",
  firstName: "",
  lastName: "",
};
function Update({ navigation }) {
  const keyboardVerticalOffset =
    Platform.OS === "android" ? -ht * 0.2 : -ht * 0.1;

  let [values, setvalues] = useState(initialValues);
  let [token, settoken] = useState("");
  let [id, setid] = useState("");

  const GetData = async () => {
    const asyncid = await AsyncStorage.getItem("id");
    let Id = JSON.parse(asyncid);
    setid(Id);
    console.log(Id);
    const asynctoken = await AsyncStorage.getItem("token");
    let Token = JSON.parse(asynctoken);
    settoken(Token);
    console.log(Token);
    await Axios.get(`http://192.168.1.146:4000/users/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setvalues(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    GetData();
  }, []);

  const handleChange = (e, name) => {
    setvalues({
      ...values,
      [name]: e,
    });
  };

  const update = async () => {
    await Axios.put(`http://192.168.1.146:4000/users/${id}`, values, {
      headers: {
        contentType: "application/json",
        Authorization: `bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        alert("user Updation Done!");
      })
      .catch((err) => alert("something went wrong", err));
  };
  const Delete = async () => {
    await Axios.delete(`http://192.168.1.146:4000/users/${id}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        alert("user Deleted Done!");
        navigation.navigate("login");
      })
      .catch((err) => alert("something went wrong", err));
  };
  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        keyboardVerticalOffset={keyboardVerticalOffset}
        behavior="position"
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={styles.img}>
            <Image
              style={styles.logo}
              source={require("../../assets/Profileicon.png")}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputText}>Username</Text>
            <TextInput
              style={styles.input}
              name="username"
              editable={false}
              value={values.username}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputText}>First Name</Text>
            <TextInput
              style={styles.input}
              value={values.firstName}
              name="firstName"
              onChangeText={(e) => handleChange(e, "firstName")}
            />
          </View>
          <View style={styles.inputView}>
            <Text style={styles.inputText}>Last Name</Text>
            <TextInput
              style={styles.input}
              onChangeText={(e) => handleChange(e, "lastName")}
              value={values.lastName}
              name="lastName"
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
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                alignSelf: "flex-start",
                marginTop: ht * 0.02,
                marginLeft: wd * 0.07,
              }}
            >
              <TouchableOpacity style={styles.button} onPress={() => Delete()}>
                <Text
                  style={{
                    color: "white",
                    fontSize: ht * 0.04,
                    textAlign: "center",
                  }}
                >
                  Delete
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                alignSelf: "flex-end",
                marginTop: ht * 0.02,
                marginRight: wd * 0.07,
              }}
            >
              <TouchableOpacity
                onPress={(e) => {
                  if (
                    values.firstName == "" ||
                    values.lastName == ""
                  ) {
                    alert("Input Fields Can't be Empty");
                  } else {
                    alert("information updated");
                    update();
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
    flexDirection: "column",
  },
  logo: {
    width: wd * 0.35,
    height: wd * 0.35,
    borderRadius: ht * 0.1,
    alignSelf: "center",
    backgroundColor: "white",
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
  img: {
    borderRadius: ht * 0.1,
    justifyContent: "center",
    marginTop: ht * 0.04,
  },
});
export default Update;
