import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const item = state.find(
    (blogpost) => blogpost.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
