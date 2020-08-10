import React from "react";
import { Text, StyleSheet, View } from "react-native";

const {textStyle} = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    color: "blue"
  }
});

const HomeScreen = () => {
  return <View>
    <Text style={textStyle}>a change</Text>
    <Text style={textStyle}>has occured!</Text>
  </View>
  ;
};

export default HomeScreen;
