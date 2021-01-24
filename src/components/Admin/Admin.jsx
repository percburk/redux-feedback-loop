// material-ui imports
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from '@material-ui/core';

// system imports
import axios from 'axios';
import { useEffect, useState } from 'react';
import AdminListItem from '../AdminListItem/AdminListItem';

function Admin() {
  useEffect(() => getFeedback(), []);
  const [feedbackData, setFeedbackData] = useState([]);

  const getFeedback = () => {
    axios
      .get('/feedback')
      .then((res) => setFeedbackData(res.data))
      .catch((err) => alert('error in GET', err));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Flag</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Feeling</TableCell>
            <TableCell>Understanding</TableCell>
            <TableCell>Support</TableCell>
            <TableCell>Comments</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedbackData.map((entry) => {
            return <AdminListItem key={entry.id} entry={entry} getFeedback={getFeedback} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Admin;
