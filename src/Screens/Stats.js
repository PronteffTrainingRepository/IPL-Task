import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

function Stats({ route }) {
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
  let [kxip, setWonkxip] = useState(0);
  let [dd, setWondd] = useState(0);
  let [mi, setWonmi] = useState(0);
  let [kkr, setWonkkr] = useState(0);
  let [rcb, setWonrcb] = useState(0);
  let [srh, setWonsrh] = useState(0);
  let [rps, setWonrps] = useState(0);
  let [csk, setWoncsk] = useState(0);

  useEffect(() => {
    kxip = 0;
    dd = 0;
    mi = 0;
    kkr = 0;
    rcb = 0;
    srh = 0;
    rps = 0;
    csk = 0;
    arr.map((item) => {
      if (item.wonBy == "Kings XI Punjab" && item.year == route.name) {
        return setWonkxip((kxip += 1));
      } else if (item.wonBy == "Delhi Daredevils" && item.year == route.name) {
        return setWondd((dd += 1));
      } else if (item.wonBy == "Mumbai Indians" && item.year == route.name) {
        return setWonmi((mi += 1));
      } else if (item.wonBy == "Kolkata Knight Riders" && item.year == route.name) {
        return setWonkkr((kkr += 1));
      } else if (
        item.wonBy == "Royal Challengers Bangalore" &&
        item.year == route.name
      ) {
        return setWonrcb((rcb += 1));
      } else if (item.wonBy == "Sunrisers Hyderabad" && item.year == route.name) {
        return setWonsrh((srh += 1));
      } else if (item.wonBy == "Rising Pune Supergiants" && item.year == route.name) {
        return setWonrps((rps += 1));
      } else if (item.wonBy == "Chennai Super Kings" && item.year == route.name) {
        return setWoncsk((csk += 1));
      }
    });
  }, []);

  // const year1 = () => {
  //   kxip = 0;
  //   dd = 0;
  //   mi = 0;
  //   kkr = 0;
  //   rcb = 0;
  //   srh = 0;
  //   rps = 0;
  //   csk = 0;
  //   arr.map((item) => {
  //     if (item.wonBy == "Kings XI Punjab" && item.year == route.name) {
  //       return setWonkxip((kxip += 1));
  //     } else if (item.wonBy == "Delhi Daredevils" && item.year == route.name) {
  //       return setWondd((dd += 1));
  //     } else if (item.wonBy == "Mumbai Indians" && item.year == route.name) {
  //       return setWonmi((mi += 1));
  //     } else if (
  //       item.wonBy == "Kolkata Knight Riders" &&
  //       item.year == route.name
  //     ) {
  //       return setWonkkr((kkr += 1));
  //     } else if (
  //       item.wonBy == "Royal Challengers Bangalore" &&
  //       item.year == route.name
  //     ) {
  //       return setWonrcb((rcb += 1));
  //     } else if (
  //       item.wonBy == "Sunrisers Hyderabad" &&
  //       item.year == route.name
  //     ) {
  //       return setWonsrh((srh += 1));
  //     } else if (
  //       item.wonBy == "Rising Pune Supergiants" &&
  //       item.year == route.name
  //     ) {
  //       return setWonrps((rps += 1));
  //     } else if (
  //       item.wonBy == "Chennai Super Kings" &&
  //       item.year == route.name
  //     ) {
  //       return setWoncsk((csk += 1));
  //     }
  //   });
  // };
  // const year2 = () => {
  //   kxip = 0;
  //   dd = 0;
  //   mi = 0;
  //   kkr = 0;
  //   rcb = 0;
  //   srh = 0;
  //   rps = 0;
  //   csk = 0;
  //   arr.map((item) => {
  //     if (item.wonBy == "Kings XI Punjab" && item.year == route.name) {
  //       return setWonkxip((kxip += 1));
  //     } else if (item.wonBy == "Delhi Daredevils" && item.year == route.name) {
  //       return setWondd((dd += 1));
  //     } else if (item.wonBy == "Mumbai Indians" && item.year == route.name) {
  //       return setWonmi((mi += 1));
  //     } else if (item.wonBy == "Kolkata Knight Riders" && item.year == route.name) {
  //       return setWonkkr((kkr += 1));
  //     } else if (
  //       item.wonBy == "Royal Challengers Bangalore" &&
  //       item.year == route.name
  //     ) {
  //       return setWonrcb((rcb += 1));
  //     } else if (item.wonBy == "Sunrisers Hyderabad" && item.year == route.name) {
  //       return setWonsrh((srh += 1));
  //     } else if (item.wonBy == "Rising Pune Supergiants" && item.year == route.name) {
  //       return setWonrps((rps += 1));
  //     } else if (item.wonBy == "Chennai Super Kings" && item.year == route.name) {
  //       return setWoncsk((csk += 1));
  //     }
  //   });
  // };
  // const year3 = () => {
  //   kxip = 0;
  //   dd = 0;
  //   mi = 0;
  //   kkr = 0;
  //   rcb = 0;
  //   srh = 0;
  //   rps = 0;
  //   csk = 0;
  //   arr.map((item) => {
  //     if (item.wonBy == "Kings XI Punjab" && item.year == route.name) {
  //       return setWonkxip((kxip += 1));
  //     } else if (item.wonBy == "Delhi Daredevils" && item.year == route.name) {
  //       return setWondd((dd += 1));
  //     } else if (item.wonBy == "Mumbai Indians" && item.year == route.name) {
  //       return setWonmi((mi += 1));
  //     } else if (item.wonBy == "Kolkata Knight Riders" && item.year == route.name) {
  //       return setWonkkr((kkr += 1));
  //     } else if (
  //       item.wonBy == "Royal Challengers Bangalore" &&
  //       item.year == route.name
  //     ) {
  //       return setWonrcb((rcb += 1));
  //     } else if (item.wonBy == "Sunrisers Hyderabad" && item.year == route.name) {
  //       return setWonsrh((srh += 1));
  //     } else if (item.wonBy == "Rising Pune Supergiants" && item.year == route.name) {
  //       return setWonrps((rps += 1));
  //     } else if (item.wonBy == "Chennai Super Kings" && item.year == route.name) {
  //       return setWoncsk((csk += 1));
  //     }
  //   });
  // };
  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: ht * 0.04,
        }}
      >
        <View style={styles.graphView}>
          <View style={styles.nohyContainer}>
            <View style={{ flexDirection: "row", marginBottom: ht * 0.034 }}>
              <Text style={styles.number}>14-</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: ht * 0.035 }}>
              <Text style={styles.number}>12-</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: ht * 0.032 }}>
              <Text style={styles.number}>10-</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: ht * 0.034 }}>
              <Text style={styles.number}>8-</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: ht * 0.035 }}>
              <Text style={styles.number}>6-</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: ht * 0.035 }}>
              <Text style={styles.number}>4-</Text>
            </View>
            <View style={{ flexDirection: "row", marginBottom: ht * 0.019 }}>
              <Text style={styles.number}>2-</Text>
            </View>
          </View>
          <View style={styles.graph}>
            <View
              style={{
                width: wd * 0.08,
                height: ht * 0.03 * kxip,
                backgroundColor: "white",
                alignSelf: "flex-end",
              }}
            >
              <Text style={{ textAlign: "center" }}>
                {kxip > 0 ? kxip : null}
              </Text>
            </View>
            <View
              style={{
                width: wd * 0.08,
                height: ht * 0.03 * dd,
                backgroundColor: "white",
                alignSelf: "flex-end",
              }}
            >
              <Text style={{ textAlign: "center" }}>{dd > 0 ? dd : null}</Text>
            </View>
            <View
              style={{
                width: wd * 0.08,
                height: ht * 0.03 * mi,
                backgroundColor: "white",
                alignSelf: "flex-end",
              }}
            >
              <Text style={{ textAlign: "center" }}>{mi > 0 ? mi : null}</Text>
            </View>
            <View
              style={{
                width: wd * 0.08,
                height: ht * 0.03 * kkr,
                backgroundColor: "white",
                alignSelf: "flex-end",
              }}
            >
              <Text style={{ textAlign: "center" }}>
                {kkr > 0 ? kkr : null}
              </Text>
            </View>
            <View
              style={{
                width: wd * 0.08,
                height: ht * 0.03 * rcb,
                backgroundColor: "white",
                alignSelf: "flex-end",
              }}
            >
              <Text style={{ textAlign: "center" }}>
                {rcb > 0 ? rcb : null}
              </Text>
            </View>
            <View
              style={{
                width: wd * 0.08,
                height: ht * 0.03 * srh,
                backgroundColor: "white",
                alignSelf: "flex-end",
              }}
            >
              <Text style={{ textAlign: "center" }}>
                {srh > 0 ? srh : null}
              </Text>
            </View>
            <View
              style={{
                width: wd * 0.08,
                height: ht * 0.03 * rps,
                backgroundColor: "white",
                alignSelf: "flex-end",
              }}
            >
              <Text style={{ textAlign: "center" }}>
                {rps > 0 ? rps : null}
              </Text>
            </View>
            <View
              style={{
                width: wd * 0.08,
                height: ht * 0.03 * csk,
                backgroundColor: "white",
                alignSelf: "flex-end",
              }}
            >
              <Text style={{ textAlign: "center" }}>
                {csk > 0 ? csk : null}
              </Text>
            </View>
          </View>
          <View style={styles.teamname}>
            <Text
              style={{
                textAlign: "center",
                fontSize: ht * 0.015,
                width: wd * 0.09,
                paddingLeft: wd * 0.024,
              }}
            >
              KXIP
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: ht * 0.016,
                width: wd * 0.07,
              }}
            >
              DD
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: ht * 0.016,
                width: wd * 0.07,
              }}
            >
              MI
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: ht * 0.016,
                width: wd * 0.07,
              }}
            >
              KKR
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: ht * 0.016,
                width: wd * 0.07,
              }}
            >
              RCB
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: ht * 0.016,
                width: wd * 0.07,
              }}
            >
              SRH
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: ht * 0.016,
                width: wd * 0.07,
              }}
            >
              RPS
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontSize: ht * 0.016,
                width: wd * 0.07,
              }}
            >
              CSK
            </Text>
          </View>
        </View>
        {/* <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginTop: ht * 0.04,
          }}
        >
          <TouchableOpacity onPress={year1}>
            <View style={styles.years}>
              <Text style={styles.yearstext}>route.name</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={year2}>
            <View style={styles.years}>
              <Text style={styles.yearstext}>2018</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={year3}>
            <View style={styles.years}>
              <Text style={styles.yearstext}>2019</Text>
            </View>
          </TouchableOpacity>
        </View>*/}
      </View>
    </View>
  );
}

export default Stats;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4D4F79",
   
  },
  years: {
    borderWidth: 1,
    backgroundColor: "black",
    width: wd * 0.3,
    borderColor: "white",
    borderRadius: 50,
  },
  yearstext: {
    color: "white",
    fontWeight: "bold",
    fontSize: ht * 0.05,
    textAlign: "center",
  },
  graphView: {
    backgroundColor: "#e26a00",
    width: wd * 0.95,
    marginLeft: wd * 0.02,
    height: ht * 0.6,
    justifyContent: "flex-end",
    paddingBottom: ht * 0.04,
    paddingLeft: wd * 0.058,
    borderRadius: 10,
  },
  graph: {
    borderLeftWidth: 2,
    borderLeftColor: "#fff",
    borderBottomWidth: 2,
    borderBottomColor: "#fff",
    width: wd * 0.88,
    paddingLeft: wd * 0.02,
    flexDirection: "row",
    //paddingLeft: wd * 0.02,
    justifyContent: "space-around",
    height: ht * 0.5,
  },
  graphbar: {
    width: wd * 0.08,
    //height: ht * 0.3,
    backgroundColor: "white",
    alignSelf: "flex-end",
  },
  teamname: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  number: {
    color: "white",
    fontSize: ht * 0.02,
  },
  hyphen: {
    color: "white",
    fontSize: ht * 0.02,
    //width:wd*0.05,
  },
  numbercontainer: {
    flexDirection: "row",
    marginBottom: ht * 0.02,
  },
  nohyContainer: {
    position: "absolute",
    bottom: ht * 0.11,
    //marginBottom: ht * 0.05,
  },
});
