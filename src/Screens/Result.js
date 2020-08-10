import React from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Result({ route, navigation }) {
  const { team1 } = route.params;
  const { team2 } = route.params;
  const { venue } = route.params;
  const { date } = route.params;
  const { years } = route.params;
  const { won } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.main}>
          <Text style={styles.heading}>Match Result</Text>
          <Image style={styles.logo} source={require("../../assets/ipl.jpg")} />
          <Text style={styles.content}>Team 1 : {team1} </Text>
          <Text style={styles.content}>Team 2 : {team2}</Text>
          <Text style={styles.content}>Venue : {venue}</Text>
          <Text style={styles.content}>Date : {date}</Text>
          <Text style={styles.content}>Year : {years}</Text>
          <Text style={styles.content}>Won By : {won}</Text>
          <Text style={styles.content}>
            Match was played between {team1} and {team2} on {venue} venue. Match
            was played on {date}, in {years} addition of IPL.This match was Won
            by {won}. Congratulations to captain of {won}, their whole team and
            management. Good Luck!!! To both teams {team1} and {team2} for their
            future journey....
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default Result;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D4F79",
    // alignItems: "center",
    // justifyContent: "center",
    // marginTop: ht * 0.02,
  },
  content: {
    color: "white",
    textAlign: "justify",
    fontSize: wd * 0.055,
    fontWeight: "bold",
    marginTop: ht * 0.01,
  },
  main: {
    marginTop: ht * 0.04,
    paddingLeft: wd * 0.04,
    paddingRight: wd * 0.04,
    backgroundColor: "#8459B5",
    borderRadius: 20,
    marginLeft: wd * 0.04,
    marginRight: wd * 0.04,
    paddingBottom: ht * 0.04,
    paddingTop: ht * 0.03,
  },
  heading: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: ht * 0.04,
    paddingBottom: ht * 0.03,
  },
  logo: {
    width: wd * 0.35,
    height: wd * 0.35,
    borderRadius: 40,
    alignSelf: "center",
  },
});
