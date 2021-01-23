const feedbackReducer = (state = {}, action) => {
  // adds to feedback object, eventually submitted to db to view on Admin
  switch (action.type) {
    // 'ADD_NAME' on Home, required
    case 'ADD_NAME':
      return { ...state, name: action.payload };

    // 'ADD_FEELING' on Feeling, required
    case 'ADD_FEELING':
      return { ...state, feeling: action.payload };

    // 'ADD_UNDERSTANDING' on Understanding, required
    case 'ADD_UNDERSTANDING':
      return { ...state, understanding: action.payload };

    // ADD_SUPPORT' on Support, required
    case 'ADD_SUPPORT':
      return { ...state, support: action.payload };

    // 'ADD_COMMENTS' on Comments, not required
    case 'ADD_COMMENTS':
      return { ...state, comments: action.payload };

    // 'CLEAR' is called when feedback is submitted to db
    case 'CLEAR':
      return {};

    // 'CLEAR_KEEP_NAME' is called on ViewResults to reset feedback, keep name,
    // also adds a reset: true to check on Feelings to display Snackbar
    case 'CLEAR_KEEP_NAME':
      return { name: action.payload.name, reset: action.payload.reset };

    default:
      return state;
  }
};

export default feedbackReducer;
