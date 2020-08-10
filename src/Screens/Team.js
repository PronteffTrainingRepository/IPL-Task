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
  const { teams } = route.params;
  let [total1, setTotal1] = useState(0);
  let [total2, setTotal2] = useState(0);
  let [total3, setTota13] = useState(0);
  let [won1, setWon1] = useState(0);
  let [won2, setWon2] = useState(0);
  let [won3, setWon3] = useState(0);
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
  useEffect(() => {
    arr.map((item) => {
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
    arr.map((item) => {
      if (item.year == 2017 && item.wonBy == teams) {
        return setWon1((won1 += 1));
      } else if (item.year == 2018 && item.wonBy == teams) {
        return setWon2((won2 += 1));
      } else if (item.year == 2019 && item.wonBy == teams) {
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
          {arr
            .filter((it) => it.team_1 == teams)
            .map((item) => (
              <TouchableOpacity>
                <View key={item.date} style={styles.card}>
                  <Text style={styles.info}>Team 1 :{item.team_1}</Text>
                  <Text style={styles.info}>Team 2 :{item.team_2}</Text>
                  <Text style={styles.info}>Venue :{item.Venue}</Text>
                  <Text style={styles.info}>Result :{item.wonBy}</Text>
                  <Text style={styles.info}>Year :{item.year}</Text>
                </View>
              </TouchableOpacity>
            ))}
          {arr
            .filter((it) => it.team_2 == teams)
            .map((item) => (
              <TouchableOpacity>
                <View key={item.date} style={styles.card}>
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
