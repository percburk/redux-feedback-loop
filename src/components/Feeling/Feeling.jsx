import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui imports
import { Box, Typography, Button, Snackbar, Paper } from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';

function Feeling({ Steps, FeedbackSlider }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const feedback = useSelector((state) => state.feedbackReducer);
  const [slider, setSlider] = useState(
    !feedback.feeling ? 0 : feedback.feeling
  );
  const [alertSnackbarOpen, setAlertSnackbarOpen] = useState(false);
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);

  useEffect(() => checkForReset(), []);

  const checkForReset = () => {
    if (feedback.reset) {
      setSuccessSnackbarOpen(true);
    }
  };

  const handleBack = () => {
    dispatch({
      type: 'CLEAR',
    });
    history.push('/');
  };

  const handleNext = () => {
    if (slider === 0) {
      setAlertSnackbarOpen(true);
    } else {
      dispatch({
        type: 'ADD_FEELING',
        payload: slider,
      });
      history.push('/understanding');
    }
  };

  const handleAlertSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return setAlertSnackbarOpen(false);
    }
    setAlertSnackbarOpen(false);
  };

  const handleSuccessSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return setSuccessSnackbarOpen(false);
    }
    return setSuccessSnackbarOpen(false);
  };

  return (
    <>
      <Box m={5}>
        <Paper elevation={4}>
          <Box paddingTop={6} paddingBottom={6}>
            <Typography align="center">How are you feeling today?</Typography>
            <Box p={4} display="flex" justifyContent="center">
              <Typography align="right">Not so great.</Typography>
              <Box width="65%" paddingLeft={5} paddingRight={5}>
                <FeedbackSlider slider={slider} setSlider={setSlider} />
              </Box>
              <Typography>Great!</Typography>
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
          <Steps activeStep={1} />
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
        open={alertSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleAlertSnackbarClose}
      >
        <Alert
          variant="filled"
          elevation={3}
          onClose={handleAlertSnackbarClose}
          severity="error"
        >
          Please complete your feedback.
        </Alert>
      </Snackbar>
      <Snackbar
        open={successSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleSuccessSnackbarClose}
      >
        <Alert
          variant="filled"
          elevation={3}
          onClose={handleSuccessSnackbarClose}
          severity="info"
        >
          Your feedback has been reset.
        </Alert>
      </Snackbar>
    </>
  );
}

export default Feeling;
