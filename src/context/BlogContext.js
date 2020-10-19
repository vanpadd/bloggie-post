import React, { useReducer } from "react";
import { Alert } from "react-native";
import { BlogPostReducer } from "../reducers/BlogPostReducer";
import createDataContext from "../context/createDataContext";
import jsonServer from "../api/jsonServer";

const getBlogPost = (dispatch) => {
  return async () => {
    try {
      const response = await jsonServer.get("/blogPosts");
      dispatch({ type: "get_blogpost", payload: response.data });
    } catch (e) {
      Alert.alert("Server Error! Please try again later.");
    }
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, callback) => {
    try {
      await jsonServer.post("/blogPosts", { title, content });
      if (callback) {
        callback();
      }
    } catch (e) {
      Alert.alert("Server Error! Please try again later.");
    }
  };
};

const editBlogPost = (dispatch) => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogPosts/${id}`, { title, content });
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogPosts/${id}`);
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  BlogPostReducer,
  { addBlogPost, editBlogPost, deleteBlogPost, getBlogPost },
  []
);
