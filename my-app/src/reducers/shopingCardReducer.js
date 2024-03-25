const initialState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add action cases here
    default:
      return state;
  }
};

export default shoppingCartReducer;
