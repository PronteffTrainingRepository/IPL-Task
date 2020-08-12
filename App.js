import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/Screens/Home";
import Login from "./src/Screens/Login";
import Result from "./src/Screens/Result";
import Stats from "./src/Screens/Stats";
import Ground from "./src/Screens/Ground";
import Team from "./src/Screens/Team";

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

const Stack = createStackNavigator();

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: "LOGIN",
            headerStyle: {
              backgroundColor: "#4D4F79",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="home"
          component={Homes}
          options={{
            title: "My Home",
            headerLeft: null,
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="result"
          component={Result}
          options={{
            title: "Match Result",
            headerStyle: {
              backgroundColor: "#4D4F79",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="stats"
          component={Homes2}
          options={{
            title: "Statistics",
            headerStyle: {
              backgroundColor: "#4D4F79",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="ground"
          component={Ground}
          options={{
            title: "Matches in Stadium",
            headerStyle: {
              backgroundColor: "#4D4F79",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="team"
          component={Team}
          options={{
            title: "Matches Team Played",
            headerStyle: {
              backgroundColor: "#4D4F79",
            },
            headerTintColor: "#fff",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>

    //  <Home1/>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D4F79",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
const Tab = createBottomTabNavigator();

function Homes() {
  return (
    <Tab.Navigator
      initialRouteName="2017"

      tabBarOptions={{
        labelStyle: {
          justifyContent: "center",
          alignContent: "center",
          fontSize: ht*0.04,
          fontWeight: "bold",
        },
        tabStyle: {
          justifyContent: "center",
          alignContent: "center",
          borderWidth: 0.5,
          borderColor: "white",
          borderRadius:40,
        },
        activeTintColor: "white",
        activeBackgroundColor: "#8459B5",
        inactiveBackgroundColor: "black",
        inactiveTintColor: "white",
      }}
    >
      <Tab.Screen name="2017" component={Home} />
      <Tab.Screen name="2018" component={Home} />
      <Tab.Screen name="2019" component={Home} />
    </Tab.Navigator>
  );
}
function Homes2() {
  return (
    <Tab.Navigator
      initialRouteName="2017"
      tabBarOptions={{
        labelStyle: {
          justifyContent: "center",
          alignContent: "center",
          fontSize: ht * 0.04,
          fontWeight: "bold",
        },
        tabStyle: {
          justifyContent: "center",
          alignContent: "center",
          borderWidth: 0.5,
          borderColor: "white",
          borderRadius: 40,
        },
        activeTintColor: "white",
        activeBackgroundColor: "#8459B5",
        inactiveBackgroundColor: "black",
        inactiveTintColor: "white",
      }}
    >
      <Tab.Screen name="2017" component={Stats} />
      <Tab.Screen name="2018" component={Stats} />
      <Tab.Screen name="2019" component={Stats} />
    </Tab.Navigator>
  );
}
