import React, { useReducer } from "react";
import { BlogPostReducer } from "../reducers/BlogPostReducer";
import createDataContext from "../context/createDataContext";
import jsonServer from "../api/jsonServer";

const getBlogPost = (dispatch) => {
  return async () => {
    const response = await jsonServer.get("/blogPosts");
    dispatch({ type: "get_blogpost", payload: response.data });
  };
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    if (callback) {
      callback();
    }
  };
};

const editBlogPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: "delete_blogpost", payload: id });
};

export const { Context, Provider } = createDataContext(
  BlogPostReducer,
  { addBlogPost, editBlogPost, deleteBlogPost, getBlogPost },
  []
);
