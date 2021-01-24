import { Slider } from '@material-ui/core';

function FeedbackSlider({ slider, setSlider }) {
  const marks = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
  ];

  return (
    <Slider
      defaultValue={1}
      value={slider}
      step={1}
      marks
      min={1}
      max={6}
      valueLabelDisplay="auto"
      onChange={(event, newValue) => setSlider(newValue)}
      marks={marks}
      required
    />
  );
}

export default FeedbackSlider;
