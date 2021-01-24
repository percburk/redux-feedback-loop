import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// material-ui imports, css
import { Container, Box, Typography, ThemeProvider, Divider } from '@material-ui/core';

// component imports
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ViewResults from '../ViewResults/ViewResults';
import Admin from '../Admin/Admin';
import Steps from '../Steps/Steps';
import FeedbackSlider from '../FeedbackSlider/FeedbackSlider';
import MuiTheme from '../MuiTheme/MuiTheme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={MuiTheme}>
        <Box p={3} marginBottom={2} bgcolor="#bbdefb">
          <Typography variant="h4" align="center">
            Reflections
          </Typography>
        </Box>
        <Divider />
        <Container>
          <Route path="/" exact>
            <Home Steps={Steps} />
          </Route>
          <Route path="/feeling">
            <Feeling Steps={Steps} FeedbackSlider={FeedbackSlider} />
          </Route>
          <Route path="/understanding">
            <Understanding Steps={Steps} FeedbackSlider={FeedbackSlider} />
          </Route>
          <Route path="/support">
            <Support Steps={Steps} FeedbackSlider={FeedbackSlider} />
          </Route>
          <Route path="/comments">
            <Comments Steps={Steps} />
          </Route>
          <Route path="/viewResults">
            <ViewResults Steps={Steps} />
          </Route>
          <Route path="/admin" component={Admin} />
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
