import { useHistory } from 'react-router-dom';
import { Box, Typography, Button, Slider, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [slider, setSlider] = useState(1);

  const handleSlider = (event, newValue) => {
    setSlider(newValue);
    console.log(slider);
  };

  const handleNext = () => {
    dispatch({
      type: 'ADD_UNDERSTANDING',
      payload: slider,
    });
    history.push('/support');
  };

  return (
    <Box>
      <Box p={3} m={3} display="flex" justifyContent="center">
        <Typography>How are you understanding today's material?</Typography>
      </Box>
      <Grid container direction="row" spacing={3}>
        <Grid item xs>
          <Typography>Not at all...</Typography>
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
          />
        </Grid>
        <Grid item xs>
          <Typography>Very well!</Typography>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Understanding;
