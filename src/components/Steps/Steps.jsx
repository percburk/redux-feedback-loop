// material-ui imports
import { Stepper, Step, StepLabel, Box } from '@material-ui/core';

// Steps is passed to all feedback pages in App via props
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
