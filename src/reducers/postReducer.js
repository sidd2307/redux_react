import { FETCH_POSTS, NEW_pOST } from "../actions/types";

const initialState = {
  // posts coming from api
  items: [],
  // create a new post
  item: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      console.log("reducer")
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
