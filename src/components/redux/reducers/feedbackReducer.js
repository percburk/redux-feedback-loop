const feedbackReducer = (state = {}, action) => {
  // adds to feedback object, eventually submitted to db to view on admin
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

    // 'CLEAR_KEEP_NAME' is called on ViewResults to reset feedback, keep name
    case 'CLEAR_KEEP_NAME':
      return { name: action.payload };

    default:
      return state;
  }
};

export default feedbackReducer;
