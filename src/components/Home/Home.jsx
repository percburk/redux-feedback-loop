import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// material-ui imports
import {
  Box,
  Button,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  Grid,
  Snackbar,
  Paper,
} from '@material-ui/core';
import { AccountCircle, ArrowForward } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';

function Home({ Steps }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedbackReducer);
  const [name, setName] = useState(!feedback.name ? '' : feedback.name);
  const [alertSnackbarOpen, setAlertSnackbarOpen] = useState(false);
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  console.log(feedback);

  useEffect(() => checkFeedbackReducer(), []);

  const checkFeedbackReducer = () => {
    if (feedback.support) {
      setSuccessSnackbarOpen(true);
      dispatch({
        type: 'CLEAR',
      });
    }
  };

  const handleClick = () => {
    if (name) {
      dispatch({
        type: 'ADD_NAME',
        payload: name,
      });
      history.push('/feeling');
    } else {
      setAlertSnackbarOpen(true);
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
    setSuccessSnackbarOpen(false);
  };

  return (
    <>
      <Paper elevation={4}>
        <Box
          p={10}
          m={4}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <FormControl>
            <Grid container alignItems="center" spacing={3}>
              <Grid item>
                <InputLabel htmlFor="enterName">Enter your name</InputLabel>
                <Input
                  id="enterName"
                  startAdornment={
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  }
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                  endIcon={<ArrowForward />}
                >
                  Start
                </Button>
              </Grid>
            </Grid>
          </FormControl>
        </Box>
      </Paper>
      <Steps activeStep={0} />
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
          Please enter your name.
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
          Thanks for submitting your feedback!
        </Alert>
      </Snackbar>
    </>
  );
}

export default Home;
