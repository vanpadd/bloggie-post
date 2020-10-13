import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";

const CreateScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addBlogPost } = useContext(Context);

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
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={content}
        onChangeText={(content) => setContent(content)}
      ></TextInput>
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate("Index");
          });
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
    marginHorizontal: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

export default CreateScreen;
