import React, { useReducer } from "react";
import { BlogPostReducer } from "../reducers/BlogPostReducer";
import createDataContext from "../context/createDataContext";

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: { title, content } });
    callback();
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => dispatch({ type: "delete_blogpost", payload: id });
};

export const { Context, Provider } = createDataContext(
  BlogPostReducer,
  { addBlogPost, deleteBlogPost },
  []
);
