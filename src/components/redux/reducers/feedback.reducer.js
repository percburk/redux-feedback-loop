// stores the feedback as an object, each piece of the feedback adding
// a new key: value pair
const feedbackReducer = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_FEELING':
      return { ...state, feeling: action.payload };
    case 'ADD_UNDERSTANDING':
      return { ...state, understanding: action.payload };
    case 'ADD_SUPPORTED':
      return { ...state, supported: action.payload };
    case 'ADD_COMMENTS':
      return { ...state, comments: action.payload };
    default:
      return state;
  }
};

export default feedbackReducer;
