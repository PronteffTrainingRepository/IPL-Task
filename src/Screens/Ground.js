import React from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Ground({ route, navigation }) {
 
  const { ground,data } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        {data
          .filter((it) => it.Venue == ground)
          .map((item) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("result", {
                  team1: item.team_1,
                  team2: item.team_2,
                  venue: item.Venue,
                  date: item.date,
                  years: item.year,
                  won: item.won,
                });
              }}
            >
              <View key={item.date} style={styles.card}>
                <Text style={styles.info}>Team 1 :{item.team_1}</Text>
                <Text style={styles.info}>Team 2 :{item.team_2}</Text>
                <Text style={styles.info}>Venue :{item.Venue}</Text>
                <Text style={styles.info}>Winner :{item.won}</Text>
                <Text style={styles.info}>Year :{item.year}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
}

export default Ground;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D4F79",
    alignItems: "center",
    // justifyContent: "center",
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
});
