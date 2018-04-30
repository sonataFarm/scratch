import React from 'react';

const Entry = ({ date, title, body }) => (
  <div>
    <h3>{date}</h3>
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
);

export default Entry;
