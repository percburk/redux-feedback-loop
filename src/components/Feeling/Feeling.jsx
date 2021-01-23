import { useHistory } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Slider,
  Grid,
  Snackbar,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Feeling({ Steps }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [slider, setSlider] = useState(0);
  const [alertSnackbarOpen, setAlertSnackbarOpen] = useState(false);
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const feedbackReducer = useSelector((state) => state.feedbackReducer);

  const marks = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
  ];

  useEffect(() => checkForReset(), []);

  const checkForReset = () => {
    if (feedbackReducer.reset) {
      setSuccessSnackbarOpen(true);
    }
  };

  const handleSlider = (event, newValue) => {
    setSlider(newValue);
    console.log(slider);
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
          <Slider
            defaultValue={1}
            value={slider}
            step={1}
            marks
            min={1}
            max={6}
            valueLabelDisplay="auto"
            onChange={handleSlider}
            marks={marks}
          />
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
