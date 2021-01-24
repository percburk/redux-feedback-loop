import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// material-ui imports
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

function ViewResults({ Steps }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const results = useSelector((state) => state.feedbackReducer);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleSubmit = () => {
    axios
      .post('/feedback', results)
      .then(() => history.push('/'))
      .catch((err) => alert('error in POST', err));
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = (clicked) => {
    if (clicked === 'no') {
      setDialogOpen(false);
    } else {
      dispatch({
        type: 'CLEAR_KEEP_NAME',
        payload: { name: results.name, reset: true },
      });
      history.push('/feeling');
    }
  };

  return (
    <Box textAlign="center">
      <Typography>You're in view results!</Typography>
      <Box>
        <Typography>My name: {results.name}</Typography>
        <Typography>How I'm feeling: {results.feeling}</Typography>
        <Typography>How I'm understanding: {results.understanding}</Typography>
        <Typography>How supported: {results.support}</Typography>
        <Typography>Comments: {results.comments}</Typography>
      </Box>
      <Box>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDialogOpen}
        >
          Reset
        </Button>
      </Box>
      <Steps activeStep={5} />
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle>{'Are you sure you want to reset?'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You will need to start your feedback from the beginning.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDialogClose('no')}
          >
            No
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => handleDialogClose('yes')}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ViewResults;
