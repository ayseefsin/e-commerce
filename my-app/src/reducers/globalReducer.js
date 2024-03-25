const initialState = {
  roles: [],
  categories: [],
  theme: "",
  language: "",
};
const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add action cases here
    default:
      return state;
  }
};
export default globalReducer;
