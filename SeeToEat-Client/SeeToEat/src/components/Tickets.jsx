import React from 'react';
import TicketItem from './TicketItem';
import '../styles/Tickets.css';

function Tickets() {
  const ticketData = [
    {
      title: 'Menu desactualizado',
      description: 'En el rinconcito el menu no esta al dia',
    },
    {
      title: 'Cambio de ubicación',
      description: 'El chinkiwinki cambio de ubicación',
    },
  ];

  return (
    <div className="tickets">
      <h3>Tickets enviados</h3>
      {ticketData.map((ticket, index) => (
        <TicketItem key={index} title={ticket.title} description={ticket.description} />
      ))}
    </div>
  );
}

export default Tickets;
