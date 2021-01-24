import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// material-ui imports
import { Box, Typography, Button, Grid, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

function Feeling({ Steps, FeedbackSlider }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [slider, setSlider] = useState(0);
  const [alertSnackbarOpen, setAlertSnackbarOpen] = useState(false);
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const feedbackReducer = useSelector((state) => state.feedbackReducer);

  useEffect(() => checkForReset(), []);

  const checkForReset = () => {
    if (feedbackReducer.reset) {
      setSuccessSnackbarOpen(true);
    }
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
  };

  const handleSuccessSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return setSuccessSnackbarOpen(false);
    }
  };

  return (
    <Box>
      <Box p={3} m={3} display="flex" justifyContent="center">
        <Typography>How are you feeling today?</Typography>
      </Box>
      <Grid container direction="row" spacing={3}>
        <Grid item xs>
          <Typography>Feeling bad...</Typography>
        </Grid>
        <Grid item xs={6}>
          <FeedbackSlider slider={slider} setSlider={setSlider} />
        </Grid>
        <Grid item xs>
          <Typography>Feeling great!</Typography>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
      <Steps activeStep={1} />
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
          severity="success"
        >
          Your feedback has been reset.
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Feeling;
