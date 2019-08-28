import { createSlice } from "redux-starter-kit";

// export default createReducer(SHOW_ALL, {
//   SET_VISIBILITY_FILTER: (state, action) => action.payload
// });

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

const visibilityFilter = createSlice({
  slice: "visibilityFilter",
  initialState: VisibilityFilters.SHOW_ALL,
  reducers: {
    setVisibilityFilter: (state, action) => {
      return action.payload;
    }
  }
});

export default visibilityFilter;

export const { setVisibilityFilter } = visibilityFilter.actions;