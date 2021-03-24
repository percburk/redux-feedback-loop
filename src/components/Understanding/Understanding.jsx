import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui imports
import { Box, Typography, Button, Paper, Snackbar } from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';

function Understanding({ Steps, FeedbackSlider }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector((state) => state.feedbackReducer);
  const [slider, setSlider] = useState(
    !feedback.understanding ? 0 : feedback.understanding
  );
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleNext = () => {
    if (slider === 0) {
      setSnackbarOpen(true);
    } else {
      dispatch({
        type: 'ADD_UNDERSTANDING',
        payload: slider,
      });
      history.push('/support');
    }
  };

  const handleBack = () => {
    history.push('/feeling');
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return setSnackbarOpen(false);
    }
    return setSnackbarOpen(false);
  };

  return (
    <>
      <Box m={5}>
        <Paper elevation={4}>
          <Box paddingTop={6} paddingBottom={6}>
            <Typography align="center">
              How well did you understand today's material?
            </Typography>
            <Box p={4} display="flex" justifyContent="center">
              <Typography align="right">Did not understand.</Typography>
              <Box width="65%" paddingLeft={5} paddingRight={5}>
                <FeedbackSlider slider={slider} setSlider={setSlider} />
              </Box>
              <Typography>Understood well!</Typography>
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
          <Steps activeStep={2} />
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
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          variant="filled"
          elevation={3}
          onClose={handleSnackbarClose}
          severity="error"
        >
          Please complete your feedback.
        </Alert>
      </Snackbar>
    </>
  );
}

export default Understanding;
