import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

// material-ui imports
import {
  Box,
  Typography,
  Button,
  Grid,
  Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

function Support({ Steps, FeedbackSlider }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [slider, setSlider] = useState(0);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleNext = () => {
    if (slider === 0) {
      setSnackbarOpen(true);
    } else {
      dispatch({
        type: 'ADD_SUPPORT',
        payload: slider,
      });
      history.push('/comments');
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return setSnackbarOpen(false);
    }
  };

  return (
    <Box>
      <Box p={3} m={3} display="flex" justifyContent="center">
        <Typography>How supported do you feel today?</Typography>
      </Box>
      <Grid container direction="row" spacing={3}>
        <Grid item xs>
          <Typography>Not at all supported...</Typography>
        </Grid>
        <Grid item xs={6}>
          <FeedbackSlider slider={slider} setSlider={setSlider} />
        </Grid>
        <Grid item xs>
          <Typography>Extremely supported!</Typography>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
      <Steps activeStep={3} />
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
    </Box>
  );
}

export default Support;
