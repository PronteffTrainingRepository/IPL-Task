import React, { useReducer } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }

};


function Try() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={{ flexDirection: "row", alignContent: "space-between" }}>
      <Text>Count-{count}</Text>
      <TouchableOpacity onPress={() => dispatch("increment")}>
        <Text>Increment</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch("decrement")}>
        <Text>Decrement</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch("reset")}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Try;
