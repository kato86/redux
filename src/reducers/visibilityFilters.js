import { VisibilityFilters } from "../actions";

const visibilityFilters = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.state) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilters;
