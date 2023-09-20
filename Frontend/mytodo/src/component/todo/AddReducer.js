export default function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_VALUE": {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }

    case "RESET_VALUE": {
      return { ...action.payload };
    }

    default: {
      throw new Error("Invalid action");
    }
  }
}
