import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

// material-ui imports, css
import { Container, Box, Typography, ThemeProvider } from '@material-ui/core';
import './App.css';

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

function App() {
  return (
    <Router>
      <Container maxWidth="md">
        <Box
          p={3}
          m={3}
          color="white"
          bgcolor="palevioletred"
          textAlign="center"
        >
          <Typography variant="h4">Reflections</Typography>
        </Box>
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
    </Router>
  );
}

export default App;
