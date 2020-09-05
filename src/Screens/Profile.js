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
import AsyncStorage from "@react-native-community/async-storage";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

const initialValues = {
  username: "",
  firstName: "",
  lastName: "",
};

function Profile({ navigation, route }) {
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
    // alert(asynctoken);
    // alert("askha", asyncid);
    await Axios.get(`http://192.168.1.146:4000/users/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
        //   Authorization:
        //     "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjUyMzkyYmIwOWM4NjEyNGNjOGRhMmMiLCJpYXQiOjE1OTkyMjgzNDMsImV4cCI6MTU5OTgzMzE0M30.rN_rxaZje-tXlUoVH9jAmhFkhlcBtNxaWfr5Db_GJUA",
      },
    })
      .then((res) => {
        console.log(res.data);
        // alert(res.data.firstName);

        setvalues(res.data);
      })
      .catch((err) => {
        alert("akjsd", err);
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
        //   navigation.navigate("home");
        console.log(res.data);
        alert("user Updation Done!");
      })
      .catch((err) => alert("something went wrong", err));
  };
  // http:192.168.1.146:4000/users/5f4e2ab63531ce4eb4d658dd
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
            PROFILE SCREEN
          </Text>
        </View>

        <View style={styles.view}>
          <Text>UserName</Text>
          <TextInput
            style={styles.textinput}
            name="username"
            editable={false}
            value={values.username}
          />
        </View>

        <View style={styles.view}>
          <Text>First Name</Text>
          <TextInput
            style={styles.textinput}
            value={values.firstName}
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
          <TouchableOpacity style={styles.button} onPress={() => update()}>
            <Text>Update</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => Delete()}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Profile;

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
    backgroundColor: "lightblue",
    height: ht * 0.03,
    width: ht * 0.1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: ht * 0.03,
  },
});
