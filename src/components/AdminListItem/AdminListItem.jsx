// material-ui imports
import {
  TableRow,
  TableCell,
  Typography,
  IconButton,
  Box,
} from '@material-ui/core';
import {
  KeyboardArrowUpIcon,
  Flag,
  FlagOutlined,
  DeleteOutline,
  ChatOutlined,
  DeleteOutlineRounded
} from '@material-ui/icons';

// system imports
import axios from 'axios';
import { useState } from 'react';

function AdminListItem({ entry, getFeedback }) {
  const [rowOpen, setRowOpen] = useState(false);
  const [flagged, setFlagged] = useState(entry.flagged);
  console.log(entry);

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
    <TableRow>
      <TableCell>
        <IconButton size="small" onClick={handleFlagged}>
          {flagged ? <Flag color="secondary" /> : <FlagOutlined />}
        </IconButton>
      </TableCell>
      <TableCell>{entry.date}</TableCell>
      <TableCell>{entry.name}</TableCell>
      <TableCell>{entry.feeling}</TableCell>
      <TableCell>{entry.understanding}</TableCell>
      <TableCell>{entry.support}</TableCell>
      <TableCell>{entry.comments}</TableCell>
      <TableCell>
        <IconButton size="small" onClick={handleDelete}>
          <DeleteOutline />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

export default AdminListItem;
