import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Box, Typography } from '@material-ui/core';

// import components into App
import Comments from '../Comments/Comments';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box
          p={3}
          m={3}
          color="white"
          bgcolor="palevioletred"
          textAlign="center"
        >
          <Typography variant="h3">Feedback!</Typography>
        </Box>
        <Route path="/" component={Home} />
        <Route path="/feeling" component={Feeling} />
        <Route path="/understanding" component={Understanding} />
        <Route path="support" component={Support} />
        <Route path="/comments" component={Comments} />
      </Container>
    </Router>
  );
}

export default App;
