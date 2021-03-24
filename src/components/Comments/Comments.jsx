import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui imports
import { Box, Typography, Button, TextField, Paper } from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';

function Comments({ Steps }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedbackReducer);
  const [comments, setComments] = useState(
    !feedback.comments ? '' : feedback.comments
  );

  const handleNext = () => {
    dispatch({
      type: 'ADD_COMMENTS',
      payload: comments,
    });
    history.push('/viewResults');
  };

  const handleBack = () => {
    history.push('/support');
  };

  return (
    <>
      <Box m={5}>
        <Paper elevation={4}>
          <Box paddingTop={6} paddingBottom={6}>
            <Typography align="center" variant="h6">
              Any comments you would like to add?
            </Typography>
            <Box p={3}>
              <TextField
                multiline
                fullWidth
                rows={3}
                variant="outlined"
                onChange={(event) => setComments(event.target.value)}
                value={feedback.comments}
              />
            </Box>
          </Box>
        </Paper>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}
          startIcon={<ArrowBack />}
        >
          Back
        </Button>
        <Box width="75%" marginLeft={3} marginRight={3}>
          <Steps activeStep={4} />
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
          endIcon={<ArrowForward />}
        >
          Next
        </Button>
      </Box>
    </>
  );
}

export default Comments;
