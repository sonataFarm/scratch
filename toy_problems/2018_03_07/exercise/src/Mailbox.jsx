import React from 'react';

export const Mailbox = ({ messages }) => (
  <div>
    <h1>Hello!</h1>
    { !!messages.length && <h3>{`You have ${messages.length} unread messages.`}</h3>}
  </div>
);

export default Mailbox;
