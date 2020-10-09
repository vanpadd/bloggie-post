import React, { useReducer } from "react";
import { BlogPostReducer } from "../reducers/BlogPostReducer";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(BlogPostReducer, []);

  const addBlogPost = () => {
    dispatch({ type: "add_blogpost", payload: 1 });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
