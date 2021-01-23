import { Stepper, Step, StepLabel, Box } from '@material-ui/core';

function Steps({ activeStep }) {
  const stepNames = [
    'Home',
    'Feeling',
    'Understanding',
    'Support',
    'Comments',
    'Results',
  ];

  return (
    <Box>
      <Stepper activeStep={activeStep}>
        {stepNames.map((name, i) => {
          return (
            <Step key={i}>
              <StepLabel>{name}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}

export default Steps;
