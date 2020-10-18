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
    jsonServer.post("/blogPosts", { title, content });
    if (callback) {
      callback();
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
