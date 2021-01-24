import { useState } from 'react';
import axios from 'axios';
import { DateTime } from 'luxon';

// material-ui imports
import {
  TableRow,
  TableCell,
  Typography,
  IconButton,
  Box,
  Collapse,
} from '@material-ui/core';
import {
  ExpandLess,
  Flag,
  FlagOutlined,
  DeleteOutline,
  ChatOutlined,
} from '@material-ui/icons';

function AdminListItem({ entry, getFeedback, setDeleteSnackbarOpen }) {
  const [rowOpen, setRowOpen] = useState(false);
  const [flagged, setFlagged] = useState(entry.flagged);

  const handleFlagged = () => {
    setFlagged(!flagged);
    axios
      .put(`/feedback/${entry.id}`)
      .then(getFeedback())
      .catch((err) => alert('error in PUT', err));
  };

  const handleDelete = () => {
    setDeleteSnackbarOpen(true);
    axios
      .delete(`/feedback/${entry.id}`)
      .then(getFeedback())
      .catch((err) => alert('error in DELETE', err));
  };

  return (
    <>
      <TableRow>
        <TableCell align="center">
          <IconButton size="small" onClick={handleFlagged}>
            {flagged ? <Flag color="secondary" /> : <FlagOutlined />}
          </IconButton>
        </TableCell>
        <TableCell>{DateTime.fromISO(entry.date).toLocaleString()}</TableCell>
        <TableCell>{entry.name}</TableCell>
        <TableCell align="center">{entry.feeling}</TableCell>
        <TableCell align="center">{entry.understanding}</TableCell>
        <TableCell align="center">{entry.support}</TableCell>
        <TableCell align="center">
          {entry.comments && (
            <IconButton size="small" onClick={() => setRowOpen(!rowOpen)}>
              {rowOpen ? <ExpandLess /> : <ChatOutlined color="primary" />}
            </IconButton>
          )}
        </TableCell>
        <TableCell align="center">
          <IconButton size="small" onClick={handleDelete}>
            <DeleteOutline />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={rowOpen} timeout="auto" unmountOnExit>
            <Box m={2}>
              <Typography variant="body2">{entry.comments}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default AdminListItem;
