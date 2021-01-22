import { useHistory } from 'react-router-dom';
import { Box, Typography, Button, Slider, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Feeling() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [slider, setSlider] = useState(1);

  const handleSlider = (event, newValue) => {
    setSlider(newValue);
    console.log(slider);
  };

  const handleNext = () => {
    dispatch({
      type: 'ADD_FEELING',
      payload: slider,
    });
    history.push('/understanding');
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
          />
        </Grid>
        <Grid item xs>
          <Typography>Feeling great!</Typography>
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Feeling;
