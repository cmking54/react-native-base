import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const {textStyle} = StyleSheet.create({
  textStyle: {
    fontSize: 70,
    color: "green"
  }
});

const ListScreen = () => {
    const friends = [
        { name: "Friend #1" },
        { name: "Friend #2" },
        { name: "Friend #3" },
        { name: "Friend #4" },
        { name: "Friend #5" },
        { name: "Friend #6" },
        { name: "Friend #7" },
        { name: "Friend #8" },
        { name: "Friend #9" }
    ];
  return (
    <FlatList 
        keyExtractor={({name}) => name} // pulls name field and uses as key
        data={friends} 
        renderItem={ ({item: {name}}) => {
            return <Text style={textStyle}>{name}</Text>;
    }}/>
  );
};

export default ListScreen;
