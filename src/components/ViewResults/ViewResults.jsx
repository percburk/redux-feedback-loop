import { useHistory } from 'react-router-dom';
import { Box, Typography, Button } from '@material-ui/core';
import { useSelector } from 'react-redux';
import axios from 'axios';

function ViewResults() {
  const history = useHistory();
  const results = useSelector((state) => state.feedbackReducer);

  const handleSubmit = () => {
    axios
      .post('/feedback', results)
      .then(() => history.push('/'))
      .catch((err) => alert('error in POST', err));
  };

  return (
    <Box textAlign="center">
      <Typography>You're in view results!</Typography>
      <Box>
        <Typography>How I'm feeling: {results.feeling}</Typography>
        <Typography>How I'm understanding: {results.understanding}</Typography>
        <Typography>How supported: {results.support}</Typography>
        <Typography>Comments: {results.comments}</Typography>
      </Box>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}

export default ViewResults;
