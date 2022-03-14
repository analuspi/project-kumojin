import React from "react";
import EventItem from "./EventItem";
import "./EventList.css";

const EventList = props => {
  let content;
  if (!props.items || props.items.length === 0) {
    content = <p>There is no events.</p>;
  } else {
    content = (
      <ul className="event__list">
        {props.items.map(item => (
          <EventItem
            key={item.id}
            name={item.title}
            description={item.description}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        ))}
      </ul>
    );
  }

  return <section id="events">{content}</section>;
};

export default EventList;
