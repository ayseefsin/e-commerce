import { fetchRoles } from "../api"; // Define your API call here

export const getRoles = () => {
  return async (dispatch, getState) => {
    try {
      const roles = await fetchRoles(); // Fetch roles from API
      dispatch(setRoles(roles));
    } catch (error) {
      console.error("Error fetching roles:", error);
      // Handle error as needed
    }
  };
};

const setRoles = (roles) => ({
  type: "SET_ROLES",
  payload: roles,
});
