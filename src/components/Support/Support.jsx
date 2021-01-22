import { useHistory } from 'react-router-dom';
import { Box, Typography, Button, Slider, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Support() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [slider, setSlider] = useState(1);

  const handleSlider = (event, newValue) => {
    setSlider(newValue);
    console.log(slider);
  };

  const handleNext = () => {
    dispatch({
      type: 'ADD_SUPPORTED',
      payload: slider,
    });
    history.push('/comments');
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
          <Typography>Extremely supported!</Typography>
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

export default Support;
