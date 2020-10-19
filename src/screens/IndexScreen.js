import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPost } = useContext(Context);

  useEffect(() => {
    const listener = navigation.addListener("didFocus", () => {
      getBlogPost();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          const { id } = item;

          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id })}
            >
              <View style={styles.row}>
                <Text style={styles.text}>
                  #{item.id} - {item.title}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Feather
                    style={styles.trash}
                    name="trash"
                    size={18}
                  ></Feather>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        style={styles.add}
        onPress={() => navigation.navigate("Create")}
      >
        <Feather name="plus" size={30} color="red" />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "black",
  },
  text: {
    padding: 10,
    fontSize: 18,
  },
  trash: {
    padding: 10,
  },
  add: {
    marginRight: 5,
  },
});

export default IndexScreen;
