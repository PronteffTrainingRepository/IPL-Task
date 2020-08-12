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
        backgroundColor: "transparent",
      }}
    >
      <Tab.Screen name="2017" component={Stats} />
      <Tab.Screen name="2018" component={Stats} />
      <Tab.Screen name="2019" component={Stats} />
    </Tab.Navigator>
  );
}
