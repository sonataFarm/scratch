import React from 'react';
import './Entry.css';

const Entry = ({ entry }) => (
  <div className="entry-container">
    <h3>{entry.date}</h3>
    <h1>{entry.title}</h1>
    <p>{entry.body}</p>
  </div>
);

export default Entry;
