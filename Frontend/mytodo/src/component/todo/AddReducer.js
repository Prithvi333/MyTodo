export default function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_VALUE": {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
    default: {
      throw new Error("Invalid action");
    }
  }
}
