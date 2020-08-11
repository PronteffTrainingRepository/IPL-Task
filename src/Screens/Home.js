import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Result from "./Result";
import Team from "./Team";
const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Home({ navigation, year, route }) {
  const arr = [
    {
      year: "2017",
      date: "5-april-2017",
      team_1: "Mumbai Indians",
      team_2: " Chennai Super Kings",
      Venue: "hyderabad",
      wonBy: "Mumbai Indians",
    },
    {
      year: "2017",
      date: "6-april-2017",
      team_1: "Gujarat Lions  ",
      team_2: "Kolkata Knight Riders",
      Venue: "Saurashtra Cricket Association Stadium, Rajkot",
      wonBy: "Gujarat Lions ",
    },
    {
      year: "2017",
      date: "6-april-2017",
      team_1: "Rising Pune Supergiants ",
      team_2: "Mumbai Indians",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Mumbai Indians ",
    },
    {
      year: "2017",
      date: "8-april-2017",
      team_1: "Kings XI Punjab ",
      team_2: "Mumbai Indians",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Mumbai Indians ",
    },
    {
      year: "2017",
      date: "8-april-2017",
      team_1: "Royal Challengers Bangalore ",
      team_2: " Delhi Daredevils",
      Venue: "M. Chinnaswamy Stadium, Bengaluru",
      wonBy: "Royal Challengers Bangalore ",
    },
    {
      year: "2017",
      date: "8-april-2017",
      team_1: "Sunrisers Hyderabad",
      team_2: " Gujarat Lions",
      Venue: "Rajiv Gandhi Intl. Cricket Stadium, Hyderabad",
      wonBy: "Gujarat Lions ",
    },
    {
      year: "2017",
      date: "9-april-2017",
      team_1: "Mumbai Indians",
      team_2: "Kolkata Knight Riders",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "Kolkata Knight Riders ",
    },
    {
      year: "2017",
      date: "10-april-2017",
      team_1: "Kings XI Punjab",
      team_2: "Royal Challengers Bangalore",
      Venue: "Holkar Cricket Stadium, Indore",
      wonBy: "Kings XI Punjab",
    },
    {
      year: "2017",
      date: "11-april-2017",
      team_1: "Rising Pune Supergiants",
      team_2: "Delhi Daredevils",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2017",
      date: "12-april-2017",
      team_1: "Mumbai Indians",
      team_2: "Sunrisers Hyderabad",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "Sunrisers Hyderabad",
    },
    {
      year: "2017",
      date: "12-april-2017",
      team_1: "Mumbai Indians",
      team_2: "Kolkata Knight Riders",
      Venue: "Holkar Cricket Stadium, Indore",
      wonBy: "Mumbai IndiansS",
    },
    {
      year: "2017",
      date: "13-april-2017",
      team_1: "Gujarat Lions",
      team_2: "Delhi Daredevils",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2017",
      date: "14-april-2017",
      team_1: "Rising Pune Supergiants",
      team_2: "Delhi Daredevils",
      Venue: "Eden Gardens, Kolkata",
      wonBy: "Rising Pune Supergiants",
    },
    {
      year: "2017",
      date: "14-april-2017",
      team_1: "Gujarat Lions",
      team_2: "Delhi Daredevils",
      Venue: "Eden Gardens, Kolkata",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2017",
      date: "15-april-2017",
      team_1: "Kolkata Knight Riders",
      team_2: "Sunrisers Hyderabad",
      Venue: "Rajiv Gandhi Intl. Cricket Stadium, Hyderabad",
      wonBy: "Sunrisers Hyderabad",
    },
    {
      year: "2017",
      date: "16-april-2017",
      team_1: "Mumbai Indians",
      team_2: "Gujarat Lions",
      Venue: "M. Chinnaswamy Stadium, Bengaluru",
      wonBy: "Gujarat Lions",
    },
    {
      year: "2017",
      date: "17-april-2017",
      team_1: "Delhi Daredevils",
      team_2: "Kings XI Punjab",
      Venue: "Rajiv Gandhi Intl. Cricket Stadium, Hyderabad",
      wonBy: "Kings XI Punjab",
    },
    {
      year: "2017",
      date: "18-april-2017",
      team_1: "Gujarat Lions",
      team_2: "Royal Challengers Bangalore",
      Venue: "Saurashtra Cricket Association Stadium, Rajkot",
      wonBy: "Gujarat Lions",
    },
    {
      year: "2017",
      date: "19-april-2017",
      team_1: "Sunrisers Hyderabad",
      team_2: "Delhi Daredevils",
      Venue: "Rajiv Gandhi Intl. Cricket Stadium, Hyderabad",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2017",
      date: "20-april-2017",
      team_1: "Kings XI Punjab",
      team_2: "Mumbai Indians",
      Venue: "Holkar Cricket Stadium, Indore",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2017",
      date: "21-april-2017",
      team_1: "Kolkata Knight Riders",
      team_2: "Gujarat Lions",
      Venue: "Eden Gardens, Kolkata",
      wonBy: "Gujarat Lions",
    },
    {
      year: "2017",
      date: "22-april-2017",
      team_1: "Delhi Daredevils",
      team_2: "Mumbai Indians",
      Venue: "Feroz Shah Kotla Ground, Delhi i",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2017",
      date: "22-april-2017",
      team_1: "Rising Pune Supergiants",
      team_2: "Sunrisers Hyderabad",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Rising Pune Supergiants",
    },
    {
      year: "2017",
      date: "23-april-2017",
      team_1: "Kings XI Punjab",
      team_2: "Gujarat Lions",
      Venue: "Saurashtra Cricket Association Stadium, Rajkot",
      wonBy: "Gujarat Lions",
    },
    {
      year: "2017",
      date: "23-april-2017",
      team_1: "Kolkata Knight Riders",
      team_2: "Royal Challengers Bangalore",
      Venue: "Eden Gardens, Kolkata",
      wonBy: "Royal Challengers Bangalore",
    },
    {
      year: "2017",
      date: "24-april-2017",
      team_1: "Mumbai Indians",
      team_2: "Rising Pune Supergiants",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "Rising Pune Supergiants",
    },
    {
      year: "2017",
      date: "25-april-2017",
      team_1: "Royal Challengers Bangalore",
      team_2: "Sunrisers Hyderabad",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "Sunrisers Hyderabad",
    },
    {
      year: "2017",
      date: "26-april-2017",
      team_1: "Rising Pune Supergiants",
      team_2: "Kolkata Knight Riders",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Kolkata Knight Riders",
    },
    {
      year: "2017",
      date: "27-april-2017",
      team_1: "Rising Pune Supergiants",
      team_2: "Kolkata Knight Riders",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Kolkata Knight Riders",
    },
    {
      year: "2017",
      date: "28-april-2017",
      team_1: "Mumbai Indians",
      team_2: "Delhi Daredevils",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2017",
      date: "28-april-2017",
      team_1: "Mumbai Indians",
      team_2: "Delhi Daredevils",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2018",
      date: "5-april-2018",
      team_1: "Mumbai Indians",
      team_2: " Chennai Super Kings",
      Venue: "hyderabad",
      wonBy: "Mumbai Indians",
    },
    {
      year: "2018",
      date: "6-april-2018",
      team_1: "Chennai Super Kings  ",
      team_2: "Kolkata Knight Riders",
      Venue: "Saurashtra Cricket Association Stadium, Rajkot",
      wonBy: "Chennai Super Kings ",
    },
    {
      year: "2018",
      date: "6-april-2018",
      team_1: "Kolkata Knight Riders ",
      team_2: "Mumbai Indians",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Mumbai Indians ",
    },
    {
      year: "2018",
      date: "8-april-2018",
      team_1: "Kolkata Knight Riders",
      team_2: "Mumbai Indians",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Kolkata Knight Riders ",
    },
    {
      year: "2018",
      date: "8-april-2018",
      team_1: "Royal Challengers Bangalore ",
      team_2: " Delhi Daredevils",
      Venue: "M. Chinnaswamy Stadium, Bengaluru",
      wonBy: "Royal Challengers Bangalore ",
    },
    {
      year: "2018",
      date: "8-april-2018",
      team_1: "Sunrisers Hyderabad",
      team_2: " Delhi Daredevils",
      Venue: "Rajiv Gandhi Intl. Cricket Stadium, Hyderabad",
      wonBy: "Gujarat Lions ",
    },
    {
      year: "2018",
      date: "9-april-2018",
      team_1: "Royal Challengers Bangalore",
      team_2: "Kolkata Knight Riders",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "Royal Challengers Bangalore",
    },
    {
      year: "2018",
      date: "10-april-2018",
      team_1: "Kings XI Punjab",
      team_2: "Royal Challengers Bangalore",
      Venue: "Holkar Cricket Stadium, Indore",
      wonBy: "Kings XI Punjab",
    },
    {
      year: "2018",
      date: "11-april-2018",
      team_1: "Rising Pune Supergiants",
      team_2: "Royal Challengers Bangalore",
      Venue: "Holkar Cricket Stadium, Indore",
      wonBy: "Rising Pune Supergiants",
    },
    {
      year: "2018",
      date: "12-april-2018",
      team_1: "Mumbai Indians",
      team_2: "Sunrisers Hyderabad",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "Rising Pune Supergiants",
    },
    {
      year: "2018",
      date: "12-april-2018",
      team_1: "Mumbai Indians",
      team_2: "Kolkata Knight Riders",
      Venue: "Holkar Cricket Stadium, Indore",
      wonBy: "Mumbai IndiansS",
    },
    {
      year: "2018",
      date: "13-april-2018",
      team_1: "Gujarat Lions",
      team_2: "Delhi Daredevils",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2018",
      date: "14-april-2018",
      team_1: "Rising Pune Supergiants",
      team_2: "Delhi Daredevils",
      Venue: "Eden Gardens, Kolkata",
      wonBy: "Rising Pune Supergiants",
    },
    {
      year: "2018",
      date: "14-april-2018",
      team_1: "Gujarat Lions",
      team_2: "Delhi Daredevils",
      Venue: "Eden Gardens, Kolkata",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2018",
      date: "15-april-2018",
      team_1: "Gujarat Lions",
      team_2: "Sunrisers Hyderabad",
      Venue: "Rajiv Gandhi Intl. Cricket Stadium, Hyderabad",
      wonBy: "Sunrisers Hyderabad",
    },
    {
      year: "2018",
      date: "16-april-2018",
      team_1: "Mumbai Indians",
      team_2: "Gujarat Lions",
      Venue: "M. Chinnaswamy Stadium, Bengaluru",
      wonBy: "Gujarat Lions",
    },
    {
      year: "2018",
      date: "17-april-2018",
      team_1: "Delhi Daredevils",
      team_2: "Kings XI Punjab",
      Venue: "Rajiv Gandhi Intl. Cricket Stadium, Hyderabad",
      wonBy: "Kings XI Punjab",
    },
    {
      year: "2018",
      date: "18-april-2018",
      team_1: "Gujarat Lions",
      team_2: "Mumbai Indians",
      Venue: "Saurashtra Cricket Association Stadium, Rajkot",
      wonBy: "Gujarat Lions",
    },
    {
      year: "2018",
      date: "19-april-2018",
      team_1: "Sunrisers Hyderabad",
      team_2: "Delhi Daredevils",
      Venue: "Rajiv Gandhi Intl. Cricket Stadium, Hyderabad",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2018",
      date: "20-april-2018",
      team_1: "Kings XI Punjab",
      team_2: "Sunrisers Hyderabad",
      Venue: "Holkar Cricket Stadium, Indore",
      wonBy: "Sunrisers Hyderabad",
    },
    {
      year: "2018",
      date: "21-april-2018",
      team_1: "Kolkata Knight Riders",
      team_2: "Gujarat Lions",
      Venue: "Eden Gardens, Kolkata",
      wonBy: "Gujarat Lions",
    },
    {
      year: "2018",
      date: "22-april-2018",
      team_1: "Delhi Daredevils",
      team_2: "Mumbai Indians",
      Venue: "Feroz Shah Kotla Ground, Delhi i",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2018",
      date: "22-april-2018",
      team_1: "Rising Pune Supergiants",
      team_2: "Sunrisers Hyderabad",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Rising Pune Supergiants",
    },
    {
      year: "2018",
      date: "23-april-2018",
      team_1: "Kings XI Punjab",
      team_2: "Gujarat Lions",
      Venue: "Saurashtra Cricket Association Stadium, Rajkot",
      wonBy: "Gujarat Lions",
    },
    {
      year: "2018",
      date: "23-april-2018",
      team_1: "Kolkata Knight Riders",
      team_2: "Royal Challengers Bangalore",
      Venue: "Eden Gardens, Kolkata",
      wonBy: "Royal Challengers Bangalore",
    },
    {
      year: "2018",
      date: "24-april-2018",
      team_1: "Mumbai Indians",
      team_2: "Rising Pune Supergiants",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "Rising Pune Supergiants",
    },
    {
      year: "2018",
      date: "25-april-2018",
      team_1: "Royal Challengers Bangalore",
      team_2: "Sunrisers Hyderabad",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "Sunrisers Hyderabad",
    },
    {
      year: "2018",
      date: "26-april-2018",
      team_1: "Rising Pune Supergiants",
      team_2: "Kolkata Knight Riders",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Kolkata Knight Riders",
    },
    {
      year: "2018",
      date: "27-april-2018",
      team_1: "Rising Pune Supergiants",
      team_2: "Mumbai Indians",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Mumbai Indians",
    },
    {
      year: "2018",
      date: "28-april-2018",
      team_1: "Sunrisers Hyderabad",
      team_2: "Delhi Daredevils",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2018",
      date: "28-april-2018",
      team_1: "Mumbai Indians",
      team_2: "Delhi Daredevils",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2019",
      date: "5-may-2019",
      team_1: "Kolkata Knight Riders",
      team_2: " Chennai Super Kings",
      Venue: "hyderabad",
      wonBy: "Mumbai Indians",
    },
    {
      year: "2019",
      date: "6-may-2019",
      team_1: "Chennai Super Kings  ",
      team_2: "Kolkata Knight Riders",
      Venue: "Saurashtra Cricket Association Stadium, Rajkot",
      wonBy: "Chennai Super Kings ",
    },
    {
      year: "2019",
      date: "6-may-2019",
      team_1: "Kolkata Knight Riders ",
      team_2: "Mumbai Indians",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Mumbai Indians ",
    },
    {
      year: "2019",
      date: "8-may-2019",
      team_1: "Kolkata Knight Riders",
      team_2: "Delhi Daredevils",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Kolkata Knight Riders ",
    },
    {
      year: "2019",
      date: "8-may-2019",
      team_1: "Royal Challengers Bangalore ",
      team_2: " Delhi Daredevils",
      Venue: "M. Chinnaswamy Stadium, Bengaluru",
      wonBy: "Royal Challengers Bangalore ",
    },
    {
      year: "2019",
      date: "8-may-2019",
      team_1: "Sunrisers Hyderabad",
      team_2: " Delhi Daredevils",
      Venue: "Rajiv Gandhi Intl. Cricket Stadium, Hyderabad",
      wonBy: "Gujarat Lions ",
    },
    {
      year: "2019",
      date: "9-may-2019",
      team_1: "Royal Challengers Bangalore",
      team_2: "Kolkata Knight Riders",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "Royal Challengers Bangalore",
    },
    {
      year: "2019",
      date: "10-may-2019",
      team_1: "Kings XI Punjab",
      team_2: "Royal Challengers Bangalore",
      Venue: "Holkar Cricket Stadium, Indore",
      wonBy: "Kings XI Punjab",
    },
    {
      year: "2019",
      date: "11-may-2019",
      team_1: "Rising Pune Supergiants",
      team_2: "Royal Challengers Bangalore",
      Venue: "Holkar Cricket Stadium, Indore",
      wonBy: "ising Pune Supergiants",
    },
    {
      year: "2019",
      date: "12-may-2019",
      team_1: "Mumbai Indians",
      team_2: "Sunrisers Hyderabad",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "ising Pune Supergiants",
    },
    {
      year: "2019",
      date: "12-may-2019",
      team_1: "Royal Challengers Bangalore",
      team_2: "Kolkata Knight Riders",
      Venue: "Holkar Cricket Stadium, Indore",
      wonBy: "Royal Challengers Bangalore",
    },
    {
      year: "2019",
      date: "13-may-2019",
      team_1: "Gujarat Lions",
      team_2: "Delhi Daredevils",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2019",
      date: "14-may-2019",
      team_1: "Rising Pune Supergiants",
      team_2: "Delhi Daredevils",
      Venue: "Eden Gardens, Kolkata",
      wonBy: "Rising Pune Supergiants",
    },
    {
      year: "2019",
      date: "14-may-2019",
      team_1: "Gujarat Lions",
      team_2: "Delhi Daredevils",
      Venue: "Eden Gardens, Kolkata",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2019",
      date: "15-may-2019",
      team_1: "Gujarat Lions",
      team_2: "Sunrisers Hyderabad",
      Venue: "Rajiv Gandhi Intl. Cricket Stadium, Hyderabad",
      wonBy: "Sunrisers Hyderabad",
    },
    {
      year: "2019",
      date: "16-may-2019",
      team_1: "Mumbai Indians",
      team_2: "Gujarat Lions",
      Venue: "M. Chinnaswamy Stadium, Bengaluru",
      wonBy: "Gujarat Lions",
    },
    {
      year: "2019",
      date: "17-may-2019",
      team_1: "Delhi Daredevils",
      team_2: "Kings XI Punjab",
      Venue: "Rajiv Gandhi Intl. Cricket Stadium, Hyderabad",
      wonBy: "Kings XI Punjab",
    },
    {
      year: "2019",
      date: "18-may-2019",
      team_1: "Gujarat Lions",
      team_2: "Mumbai Indians",
      Venue: "Saurashtra Cricket Association Stadium, Rajkot",
      wonBy: "Gujarat Lions",
    },
    {
      year: "2019",
      date: "19-may-2019",
      team_1: "Sunrisers Hyderabad",
      team_2: "Delhi Daredevils",
      Venue: "Rajiv Gandhi Intl. Cricket Stadium, Hyderabad",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2019",
      date: "20-may-2019",
      team_1: "Kings XI Punjab",
      team_2: "Delhi Daredevils",
      Venue: "Holkar Cricket Stadium, Indore",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2019",
      date: "21-may-2019",
      team_1: "Kolkata Knight Riders",
      team_2: "Mumbai Indians",
      Venue: "Eden Gardens, Kolkata",
      wonBy: "Mumbai Indians",
    },
    {
      year: "2019",
      date: "22-may-2019",
      team_1: "Delhi Daredevils",
      team_2: "Mumbai Indians",
      Venue: "Feroz Shah Kotla Ground, Delhi i",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2019",
      date: "22-may-2019",
      team_1: "Rising Pune Supergiants",
      team_2: "Sunrisers Hyderabad",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Rising Pune Supergiants",
    },
    {
      year: "2019",
      date: "23-may-2019",
      team_1: "Kings XI Punjab",
      team_2: "Gujarat Lions",
      Venue: "Saurashtra Cricket Association Stadium, Rajkot",
      wonBy: "Gujarat Lions",
    },
    {
      year: "2019",
      date: "23-may-2019",
      team_1: "Kolkata Knight Riders",
      team_2: "Royal Challengers Bangalore",
      Venue: "Eden Gardens, Kolkata",
      wonBy: "Royal Challengers Bangalore",
    },
    {
      year: "2019",
      date: "24-may-2019",
      team_1: "Mumbai Indians",
      team_2: "Rising Pune Supergiants",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "Rising Pune Supergiants",
    },
    {
      year: "2019",
      date: "25-may-2019",
      team_1: "Royal Challengers Bangalore",
      team_2: "Sunrisers Hyderabad",
      Venue: "Wankhede Stadium, Mumbai",
      wonBy: "Sunrisers Hyderabad",
    },
    {
      year: "2019",
      date: "26-may-2019",
      team_1: "Rising Pune Supergiants",
      team_2: "Kolkata Knight Riders",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Kolkata Knight Riders",
    },
    {
      year: "2019",
      date: "27-may-2019",
      team_1: "Delhi Daredevils",
      team_2: "Mumbai Indians",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Mumbai Indians",
    },
    {
      year: "2019",
      date: "28-may-2019",
      team_1: "Sunrisers Hyderabad",
      team_2: "Delhi Daredevils",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Delhi Daredevils",
    },
    {
      year: "2019",
      date: "28-may-2019",
      team_1: "Mumbai Indians",
      team_2: "Delhi Daredevils",
      Venue: "Maharashtra Cricket Association's International Stadium, Pune",
      wonBy: "Delhi Daredevils",
    },
  ];

  React.useEffect(
    () =>
      navigation.addListener("beforeRemove", (e) => {
        const action = e.data.action;
        e.preventDefault();
      }),
    [navigation]
  );
  const [count, setCount] = useState(2017);

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Teams Cards Started */}
        <View
          style={{
            backgroundColor: "#8459B5",
            borderRadius: 10,
            marginTop: ht * 0.02,
          }}
        >
          <View style={{ flexDirection: "row-reverse" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("stats");
              }}
            >
              <Ionicons
                name="ios-stats"
                size={24}
                color="white"
                style={{ paddingRight: wd * 0.04, paddingTop: ht * 0.01 }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: ht * 0.04,
              marginTop: ht * 0.02,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("team", {
                  teams: " Chennai Super Kings",
                });
              }}
            >
              <Image
                style={styles.logo}
                source={require("../../assets/csk.jpg")}
              />
              <Text style={styles.teamname}>CSK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("team", {
                  teams: "Kings XI Punjab",
                });
              }}
            >
              <Image
                style={styles.logo}
                source={require("../../assets/kxip.jpg")}
              />
              <Text style={styles.teamname}>KXIP</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("team", {
                  teams: "Mumbai Indians",
                });
              }}
            >
              <Image
                style={styles.logo}
                source={require("../../assets/mi.jpg")}
              />
              <Text style={styles.teamname}>MI</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("team", {
                  teams: "Kolkata Knight Riders",
                });
              }}
            >
              <Image
                style={styles.logo}
                source={require("../../assets/kkr.jpg")}
              />
              <Text style={styles.teamname}>KKR</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginBottom: ht * 0.04,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("team", {
                  teams: "Royal Challengers Bangalore",
                });
              }}
            >
              <Image
                style={styles.logo}
                source={require("../../assets/rcb.jpg")}
              />
              <Text style={styles.teamname}>RCB</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("team", {
                  teams: "Sunrisers Hyderabad",
                });
              }}
            >
              <Image
                style={styles.logo}
                source={require("../../assets/srh.jpg")}
              />
              <Text style={styles.teamname}>SRH</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("team", {
                  teams: "Rising Pune Supergiants",
                });
              }}
            >
              <Image
                style={styles.logo}
                source={require("../../assets/pune.jpg")}
              />
              <Text style={styles.teamname}>RPS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("team", {
                  teams: "Delhi Daredevils",
                });
              }}
            >
              <Image
                style={styles.logo}
                source={require("../../assets/dd.webp")}
              />
              <Text style={styles.teamname}>DD</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Teams Card Ends */}

        {/* Matches Card Starts */}
        <View>
          <ScrollView horizontal>
            {arr
              .filter((it) => it.year == route.name)
              .map((item, index) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("result", {
                      team1: item.team_1,
                      team2: item.team_2,
                      venue: item.Venue,
                      date: item.date,
                      years: item.year,
                      won: item.wonBy,
                    });
                  }}
                >
                  <View key={item.index} style={styles.card}>
                    <Text style={styles.info}>Team 1 :{item.team_1}</Text>
                    <Text style={styles.info}>Team 2 :{item.team_2}</Text>
                    <Text style={styles.info}>Venue :{item.Venue}</Text>
                    <Text style={styles.info}>Result :{item.wonBy}</Text>
                    <Text style={styles.info}>Year :{item.year}</Text>
                  </View>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>
        {/* matches card ends */}

        {/* Grounds Starts */}
        <View
          style={{
            backgroundColor: "#8459B5",
            borderRadius: 10,
            marginBottom: ht * 0.02,
          }}
        >
          <ScrollView horizontal>
            <View style={styles.stadium}>
              <View style={{ paddingLeft: wd * 0.04 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ground", {
                      ground: "M. Chinnaswamy Stadium, Bengaluru",
                    });
                  }}
                >
                  <Image
                    style={styles.stadiumimg}
                    source={require("../../assets/stadium/banglore.jpg")}
                  />
                  <Text style={styles.stadiumname}>Bangalore</Text>
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: wd * 0.04 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ground", {
                      ground: "Rajiv Gandhi Intl. Cricket Stadium, Hyderabad",
                    });
                  }}
                >
                  <Image
                    style={styles.stadiumimg}
                    source={require("../../assets/stadium/hyd.jpg")}
                  />
                  <Text style={styles.stadiumname}>Hyderabad</Text>
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: wd * 0.04 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ground", {
                      ground: "Eden Gardens, Kolkata",
                    });
                  }}
                >
                  <Image
                    style={styles.stadiumimg}
                    source={require("../../assets/stadium/kolkata.jpg")}
                  />
                  <Text style={styles.stadiumname}>Kolkata</Text>
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: wd * 0.04 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ground", {
                      ground:
                        "Maharashtra Cricket Association's International Stadium, Pune",
                    });
                  }}
                >
                  <Image
                    style={styles.stadiumimg}
                    source={require("../../assets/stadium/pune.jpg")}
                  />
                  <Text style={styles.stadiumname}>Pune</Text>
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: wd * 0.04 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ground", {
                      ground: "Saurashtra Cricket Association Stadium, Rajkot",
                    });
                  }}
                >
                  <Image
                    style={styles.stadiumimg}
                    source={require("../../assets/stadium/rajkot.jpg")}
                  />
                  <Text style={styles.stadiumname}>Rajkot</Text>
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: wd * 0.04 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ground", {
                      ground: "Holkar Cricket Stadium, Indore",
                    });
                  }}
                >
                  <Image
                    style={styles.stadiumimg}
                    source={require("../../assets/stadium/indore.jpg")}
                  />
                  <Text style={styles.stadiumname}>Indore</Text>
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: wd * 0.04 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ground", {
                      ground: "Wankhede Stadium, Mumbai",
                    });
                  }}
                >
                  <Image
                    style={styles.stadiumimg}
                    source={require("../../assets/stadium/mumbai.jpg")}
                  />
                  <Text style={styles.stadiumname}>Mumbai</Text>
                </TouchableOpacity>
              </View>
              <View style={{ paddingLeft: wd * 0.04, paddingRight: wd * 0.04 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ground", {
                      ground: "Feroz Shah Kotla Ground, Delhi i",
                    });
                  }}
                >
                  <Image
                    style={styles.stadiumimg}
                    source={require("../../assets/stadium/delhi.jpg")}
                  />
                  <Text style={styles.stadiumname}>Delhi</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          {/* <View style={{ flexDirection: "row-reverse" }}>
            <TouchableOpacity>
              <AntDesign
                name="pluscircle"
                size={24}
                color="white"
                style={{ paddingRight: wd * 0.04, paddingBottom: ht * 0.01 }}
              />
            </TouchableOpacity>
          </View> */}
        </View>
        {/* Grounds Ends */}
      </ScrollView>
      {/* tabs buttons started*/}
      {/* <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          position: "relative",
          bottom: 0,
        }}
      >
        <TouchableOpacity onPress={() => setCount(2017)}>
          <View style={styles.years}>
            <Text style={styles.yearstext}>2017</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCount(2018)}>
          <View style={styles.years}>
            <Text style={styles.yearstext}>2018</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCount(2019)}>
          <View style={styles.years}>
            <Text style={styles.yearstext}>2019</Text>
          </View>
        </TouchableOpacity>
      </View> */}

      {/* tabs buttons Ended */}
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D4F79",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  logo: {
    width: wd * 0.2,
    height: wd * 0.2,
    borderRadius: 20,
  },
  card: {
    backgroundColor: "red",
    width: wd * 0.9,
    borderRadius: 15,
    marginLeft: wd * 0.04,
    height: ht * 0.25,
    marginTop: ht * 0.02,
    marginBottom: ht * 0.02,
    marginRight: wd * 0.02,
  },
  info: {
    paddingLeft: wd * 0.05,
    color: "white",
    fontSize: ht * 0.022,
    marginTop: ht * 0.01,
  },
  stadiumname: {
    textAlign: "center",
    color: "white",
    fontStyle: "italic",
  },
  stadiumimg: {
    width: wd * 0.4,
    height: wd * 0.4,
    borderRadius: 20,
  },
  stadium: {
    flexDirection: "row",
    paddingTop: ht * 0.02,
    paddingBottom: ht * 0.02,
  },
  teamname: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  years: {
    borderWidth: 1,
    backgroundColor: "black",
    width: wd * 0.35,
    borderColor: "white",
  },
  yearstext: {
    color: "white",
    fontWeight: "bold",
    fontSize: ht * 0.05,
    textAlign: "center",
  },
});
