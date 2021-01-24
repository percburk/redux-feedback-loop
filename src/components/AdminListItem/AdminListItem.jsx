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

function AdminListItem({ entry, getFeedback }) {
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
    axios
      .delete(`/feedback/${entry.id}`)
      .then(getFeedback())
      .catch((err) => alert('error in DELETE', err));
  };

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton size="small" onClick={handleFlagged}>
            {flagged ? <Flag color="secondary" /> : <FlagOutlined />}
          </IconButton>
        </TableCell>
        <TableCell>{DateTime.fromISO(entry.date).toLocaleString()}</TableCell>
        <TableCell>{entry.name}</TableCell>
        <TableCell>{entry.feeling}</TableCell>
        <TableCell>{entry.understanding}</TableCell>
        <TableCell>{entry.support}</TableCell>
        <TableCell>
          {entry.comments && (
            <IconButton size="small" onClick={() => setRowOpen(!rowOpen)}>
              {rowOpen ? <ExpandLess /> : <ChatOutlined color="primary" />}
            </IconButton>
          )}
        </TableCell>
        <TableCell>
          <IconButton size="small" onClick={handleDelete}>
            <DeleteOutline />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
          <Collapse in={rowOpen} timeout="auto" unmountOnExit>
            <Box m={2} textAlign="center">
              <Typography variant="body2">{entry.comments}</Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default AdminListItem;
