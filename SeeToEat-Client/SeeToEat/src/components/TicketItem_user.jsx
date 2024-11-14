import React from 'react';
import '../styles/TicketItem.css';

function TicketItem({ title, description }) {
  return (
    <div className="ticket-item">
      <div className="ticket-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="ticket-actions">
      </div>
    </div>
  );
}

export default TicketItem;
