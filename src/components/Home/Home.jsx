import {
  Box,
  Button,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  Grid,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const feedback = useSelector((state) => state.feedbackReducer);
  const [name, setName] = useState('');
  const [open, setOpen] = useState(false);
  console.log(feedback);

  useEffect(() => checkFeedbackReducer(), []);

  const checkFeedbackReducer = () => {
    if (feedback.feeling) {
      alert('thanks for submitting your feedback!');
      dispatch({
        type: 'CLEAR',
      });
    }
  };

  const handleClick = () => {
    
    history.push('/feeling');
  };

  return (
    <Box p={3} display="flex" justifyContent="center">
      <FormControl>
        <Grid container spacing={2} alignItems="center">
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
            <Button variant="contained" color="primary" onClick={handleClick}>
              Click to begin!
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Box>
  );
}

export default Home;
