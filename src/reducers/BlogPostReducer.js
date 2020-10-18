export const BlogPostReducer = (state, action) => {
  switch (action.type) {
    case "get_blogpost":
      return action.payload;
    case "edit_blogpost":
      return state.map((blogPost) =>
        blogPost.id === action.payload.id ? action.payload : blogPost
      );
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    default:
      return state;
  }
};
