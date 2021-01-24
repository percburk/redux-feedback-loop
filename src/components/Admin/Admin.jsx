import { useEffect, useState } from 'react';
import axios from 'axios';

// component imports
import AdminListItem from '../AdminListItem/AdminListItem';

// material-ui imports
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Snackbar,
  Box
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';

function Admin() {
  useEffect(() => getFeedback(), []);
  const [feedbackData, setFeedbackData] = useState([]);
  const [deleteSnackbarOpen, setDeleteSnackbarOpen] = useState(false);

  const getFeedback = () => {
    axios
      .get('/feedback')
      .then((res) => setFeedbackData(res.data))
      .catch((err) => alert('error in GET', err));
  };

  const handleDeleteSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return setDeleteSnackbarOpen(false);
    }
    return setDeleteSnackbarOpen(false);
  };

  return (
    <>
      <Box m={3}>
        <TableContainer component={Paper} elevation={4}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="center">Feeling</TableCell>
                <TableCell align="center">Understanding</TableCell>
                <TableCell align="center">Support</TableCell>
                <TableCell align="center">Comments</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feedbackData.map((entry) => {
                return (
                  <AdminListItem
                    key={entry.id}
                    entry={entry}
                    getFeedback={getFeedback}
                    setDeleteSnackbarOpen={setDeleteSnackbarOpen}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Snackbar
        open={deleteSnackbarOpen}
        autoHideDuration={6000}
        onClose={handleDeleteSnackbarClose}
      >
        <Alert
          variant="filled"
          elevation={3}
          onClose={handleDeleteSnackbarClose}
          severity="info"
        >
          Feedback entry deleted.
        </Alert>
      </Snackbar>
    </>
  );
}

export default Admin;
