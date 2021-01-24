import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// material-ui imports
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  IconButton,
} from '@material-ui/core';
import {
  ArrowForward,
  ArrowBack,
  ChatOutlined,
  ExpandLess,
} from '@material-ui/icons';

function ViewResults({ Steps }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const results = useSelector((state) => state.feedbackReducer);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [rowOpen, setRowOpen] = useState(false);

  const handleSubmit = () => {
    axios
      .post('/feedback', results)
      .then(() => history.push('/'))
      .catch((err) => alert('error in POST', err));
  };

  const handleBack = () => {
    history.push('/comments');
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = (clicked) => {
    if (clicked === 'no') {
      setDialogOpen(false);
    } else {
      dispatch({
        type: 'CLEAR_KEEP_NAME',
        payload: { name: results.name, reset: true },
      });
      history.push('/feeling');
    }
  };

  return (
    <>
      <Box m={5}>
        <TableContainer component={Paper} elevation={4}>
          <Box p={6}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">How I'm Feeling</TableCell>
                  <TableCell align="center">How I'm Understanding</TableCell>
                  <TableCell align="center">How I'm Supported</TableCell>
                  <TableCell align="center">Comments</TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">
                    <Typography variant="h6">{results.name}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h6">{results.feeling}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h6">
                      {results.understanding}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography variant="h6">{results.support}</Typography>
                  </TableCell>
                  <TableCell align="center">
                    {results.comments && (
                      <IconButton
                        size="small"
                        onClick={() => setRowOpen(!rowOpen)}
                      >
                        {rowOpen ? (
                          <ExpandLess />
                        ) : (
                          <ChatOutlined color="primary" />
                        )}
                      </IconButton>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                    >
                      Submit
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={handleDialogOpen}
                    >
                      Reset
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={7}
                  >
                    <Collapse in={rowOpen} timeout="auto" unmountOnExit>
                      <Box m={2}>
                        <Typography variant="h6">{results.comments}</Typography>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </TableContainer>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}
          startIcon={<ArrowBack />}
        >
          Back
        </Button>
        <Box width="75%" marginLeft={3} marginRight={3}>
          <Steps activeStep={5} />
        </Box>
        <Button variant="disabled" endIcon={<ArrowForward />}>
          Next
        </Button>
      </Box>
      <Dialog open={dialogOpen} onClose={handleDialogClose}>
        <DialogTitle align="center">
          {'Are you sure you want to reset?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText align="center">
            You will need to start your feedback from the beginning.
          </DialogContentText>
        </DialogContent>
        <Box display="flex" justifyContent="center">
          <DialogActions>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDialogClose('no')}
            >
              No
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDialogClose('yes')}
            >
              Yes
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
}

export default ViewResults;
