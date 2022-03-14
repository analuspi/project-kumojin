import React from 'react';

import './EventItem.css';

const EventItem = props => {
  return (
    <li className="event__item">
      <h2>{props.name}</h2>
      <p>Description: {props.description}</p>
      <p>Start date: {props.startDate}</p>
      <p>End date: {props.endDate}</p>
    </li>
  );
};

export default EventItem;
