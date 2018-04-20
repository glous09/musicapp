export default function mainReducer(state={}, action) {
  switch (action.type) {
    case "SAVE_NEW_LIST":
      return state;
    case "SAVE_NEW_SONG":
      return state;
    case "REMOVE_SONG":
      return state;
    default:
      return state;
  }
}
