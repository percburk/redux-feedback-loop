import { Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedbackReducer);
  console.log(feedback);

  useEffect(() => checkFeedbackReducer(), []);

  const checkFeedbackReducer = () => {
    if (feedback.feeling) {
      alert('thanks for submitting your feedback!');
      dispatch({
        type: 'CLEAR'
      });
    }
  };

  return (
    <Box display="flex" justifyContent="center">
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/feeling')}
      >
        Click to begin!
      </Button>
    </Box>
  );
}

export default Home;
