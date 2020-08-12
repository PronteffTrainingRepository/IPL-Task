import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Team({ route, navigation }) {
  const { teams,data } = route.params;
  
  let [total1, setTotal1] = useState(0);
  let [total2, setTotal2] = useState(0);
  let [total3, setTota13] = useState(0);
  let [won1, setWon1] = useState(0);
  let [won2, setWon2] = useState(0);
  let [won3, setWon3] = useState(0);
 
  useEffect(() => {
    total1 = 0;
    total2 = 0;
    total3 = 0;    
    data.map((item) => {
      if (item.year == 2017 && (item.team_1 == teams || item.team_2 == teams)) {
        return setTotal1((total1 += 1));
      } else if (
        item.year == 2018 &&
        (item.team_1 == teams || item.team_2 == teams)
      ) {
        return setTotal2((total2 += 1));
      } else if (
        item.year == 2019 &&
        (item.team_1 == teams || item.team_2 == teams)
      ) {
        return setTota13((total3 += 1));
      }
    });
  }, []);

  useEffect(() => {
    won1 = 0;
    won2 = 0;
    won3 = 0;
    data.map((item) => {
      if (item.year == 2017 && item.won == teams) {
        return setWon1((won1 += 1));
      } else if (item.year == 2018 && item.won == teams) {
        return setWon2((won2 += 1));
      } else if (item.year == 2019 && item.won == teams) {
        return setWon3((won3 += 1));
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#8459B5",
          borderRadius: 20,
          marginTop: ht * 0.02,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: ht * 0.04,
            fontStyle: "italic",
            fontWeight: "bold",
          }}
        >
          {teams}
        </Text>
      </View>
      <View>
        <ScrollView horizontal>
          {data.map((item) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("result", {
                    team1 :item.team_1,
                    team2: item.team_2,
                    venue: item.Venue,
                    date: item.date,
                    years: item.year,
                    won: item.won,
                  });
                }}
              >
                <View  style={styles.card}>
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

      <View style={styles.table}>
        <View
          style={{ backgroundColor: "black", borderRadius: 10, marginTop: 0.0 }}
        >
          <Text style={styles.tableheading}>Year stats</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentdata}>Info</Text>
          <Text style={styles.contentdata}>2017</Text>
          <Text style={styles.contentdata}>2018</Text>
          <Text style={styles.contentdata}>2019</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentdata}>Total</Text>
          <Text style={styles.contentdata}>{total1}</Text>
          <Text style={styles.contentdata}>{total2}</Text>
          <Text style={styles.contentdata}>{total3}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentdata}>Won</Text>
          <Text style={styles.contentdata}>{won1}</Text>
          <Text style={styles.contentdata}>{won2}</Text>
          <Text style={styles.contentdata}>{won3}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.contentdata}>Lost</Text>
          <Text style={styles.contentdata}>{total1 - won1}</Text>
          <Text style={styles.contentdata}>{total2 - won2}</Text>
          <Text style={styles.contentdata}>{total3 - won3}</Text>
        </View>
      </View>
    </View> 
  );
}

export default Team;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D4F79",
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: ht * 0.04,
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
  table: {
    backgroundColor: "#8459B5",
    borderRadius: 5,
    width: wd * 0.95,
    marginLeft: wd * 0.02,
    justifyContent: "center",
    alignContent: "center",
    height: ht * 0.26,
  },
  tableheading: {
    color: "white",
    fontSize: ht * 0.08,
    paddingLeft: wd * 0.07,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    //borderWidth: 2,
  },
  contentdata: {
    //borderWidth: 2,
    color: "white",
    width: wd * 0.24,
    textAlign: "center",
    fontSize: ht * 0.026,
  },
});
