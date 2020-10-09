export const BlogPostReducer = (state, action) => {
  switch (action.type) {
    case "add_blogpost":
      return [
        ...state,
        { title: `Blog Post #${state.length + action.payload}` },
      ];
  }
};
