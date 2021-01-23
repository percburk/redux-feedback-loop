import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box } from '@material-ui/core';

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
    <div>
      <ul>
        {feedbackData.map((entry) => {
          return (
            <li key={entry.id}>
              {entry.date} {entry.feeling} {entry.understanding}
              {entry.support} {entry.comments} {entry.flagged}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Admin;
