import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const item = state.find(
    (blogpost) => blogpost.id === navigation.getParam("id")
  );

  const { title, content } = item;

  return (
    <View style={styles.view}>
      <Text style={styles.title}>{title} </Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam("id");

  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Edit", { id })}>
        <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 1,
    borderColor: "black",
    height: 300,
    marginTop: 30,
    margin: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
    marginLeft: 20,
    textDecorationLine: "underline",
  },
  content: {
    fontSize: 20,
    marginLeft: 20,
  },
});

export default ShowScreen;
