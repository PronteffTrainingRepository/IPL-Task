import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Axios from "axios";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

const initialValues = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
};

function Registration({ navigation }) {
  let [values, setvalues] = useState(initialValues);

  console.log(values);

  const handleChange = (e, name) => {
    setvalues({
      ...values,
      [name]: e,
    });
  };

  const Registration = async () => {
    await Axios.post("http://192.168.1.146:4000/users/register", values)
      .then((res) => {
        //   navigation.navigate("home");
        console.log(res.data);
        alert("user registration Done!");
        navigation.navigate("login");
      })
      .catch((err) => alert("something went wrong", err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              color: "blue",
              fontWeight: "bold",
            }}
          >
            Registration SCREEN
          </Text>
        </View>

        <View style={styles.view}>
          <Text>UserName</Text>
          <TextInput
            style={styles.textinput}
            name="username"
            onChangeText={(e) => handleChange(e, "username")}
            value={values.username}
          />
        </View>

        <View style={styles.view}>
          <Text>Password</Text>
          <TextInput
            style={styles.textinput}
            value={values.password}
            name="password"
            secureTextEntry={true}
            onChangeText={(e) => handleChange(e, "password")}
          />
        </View>

        <View style={styles.view}>
          <Text>First Name</Text>
          <TextInput
            style={styles.textinput}
            value={values.firstname}
            name="firstName"
            onChangeText={(e) => handleChange(e, "firstName")}
          />
        </View>

        <View style={styles.view}>
          <Text>Last Name</Text>
          <TextInput
            onChangeText={(e) => handleChange(e, "lastName")}
            style={styles.textinput}
            value={values.lastName}
            name="lastName"
          />
        </View>

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Registration()}
          >
            <Text>Registration</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D4F79",
    alignItems: "center",
    // justifyContent: "center",
  },
  card: {
    marginTop: ht * 0.04,
    height: ht * 0.6,
    width: wd * 0.8,
    backgroundColor: "#FFFFFF",
    padding: ht * 0.06,
    elevation: 6,
    borderRadius: ht * 0.01,
  },
  textinput: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    height: ht * 0.05,
  },
  view: {
    marginTop: ht * 0.004,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    margin: ht * 0.04,
    backgroundColor: "lightgreen",
    height: ht * 0.04,
    width: ht * 0.2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ht * 0.03,
  },
});
