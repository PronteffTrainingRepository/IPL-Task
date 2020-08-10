import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Screens/Home";
import Login from "./src/Screens/Login";
import Result from "./src/Screens/Result";
import Stats from './src/Screens/Stats';
import Ground from './src/Screens/Ground';
import Team from './src/Screens/Team';
const Stack = createStackNavigator();

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
          }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "My home",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "#fff",
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
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="stats"
          component={Stats}
          options={{
            title: "Statistics",
            headerStyle: {
              backgroundColor: "#4D4F79",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="ground"
          component={Ground}
          options={{
            title: "Matches On Specific Ground",
            headerStyle: {
              backgroundColor: "#4D4F79",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="team"
          component={Team}
          options={{
            title: "Matches Played by Team",
            headerStyle: {
              backgroundColor: "#4D4F79",
            },
            headerTintColor: "#fff",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // <View style={styles.container}>

    //  <Stats/>
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
