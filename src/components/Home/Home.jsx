import { Box, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();

  return (
    <Box display="flex" justifyContent="center">
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/feeling')}
      >
        Click to begin!
      </Button>
    </Box>
  );
}

export default Home;
