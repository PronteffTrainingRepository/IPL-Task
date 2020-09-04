import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  TextBase,
} from "react-native";

import axios from "axios";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function AllUsers() {
  const [f, setFname] = useState([]);
  async function getData() {
    await axios
      .get("http://192.168.1.146:4000/users", {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZjUxZjFlZmIwOWM4NjEyNGNjOGRhMmEiLCJpYXQiOjE1OTkyMDU4OTIsImV4cCI6MTU5OTgxMDY5Mn0.yZT3imDxOI6E_tcm1UwooIDSniSiY0R64_b9ihdQ0sM`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setFname(res.data);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <View>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: ht * 0.03,
            marginBottom: ht * 0.01,
            textAlign: "center",
            marginTop: ht * 0.02,
          }}
        >
          List Of All Users
        </Text>
      </View>
      <View style={{ marginBottom: ht * 0.14 }}>
        <ScrollView>
          {f.map((item) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.text}> First Name :{item.firstName}</Text>
              <Text style={styles.text}> Last Name :{item.lastName}</Text>
              <Text style={styles.text}>UserName :{item.username}</Text>
              <Text style={styles.text}>Date :{item.createdDate}</Text>
              <Text style={styles.text}>ID :{item.id}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
export default AllUsers;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4D4F79",
  
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: ht * 0.02,
    marginTop: ht * 0.01,
    marginLeft: wd * 0.04,
    fontSize: ht * 0.023,
  },
  card: {
    backgroundColor: "red",
    marginTop: ht * 0.01,
    marginBottom: ht * 0.01,
    width: wd * 0.9,
    height: ht * 0.23,
    borderRadius: ht * 0.02,
    alignSelf: "center",
  },
});
