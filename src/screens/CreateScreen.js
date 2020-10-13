import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View>
      <Text style={styles.text}>Enter Title:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={title}
        onChangeText={(title) => setTitle(title)}
      ></TextInput>
      <Text style={styles.text}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(content) => setContent(content)}
      ></TextInput>
      <Button title="Add Blog Post"></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 24,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default CreateScreen;
