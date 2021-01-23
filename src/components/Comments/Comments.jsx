import { useHistory } from 'react-router-dom';
import { Box, Typography, Button, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function Comments({ Steps }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [comment, setComment] = useState('');

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handleNext = () => {
    dispatch({
      type: 'ADD_COMMENTS',
      payload: comment,
    });
    history.push('/viewResults');
  };

  return (
    <Box>
      <Typography>Any comments you would like to add?</Typography>
      <TextField
        multiline
        fullWidth
        rows={6}
        variant="outlined"
        onChange={handleComment}
      />
      <Box padding={3} display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleNext}>
          Next
        </Button>
      </Box>
      <Steps activeStep={4} />
    </Box>
  );
}

export default Comments;
