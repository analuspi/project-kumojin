import React, { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import NewEvent from "./Components/Events/NewEvent";
import EventList from "./Components/Events/EventList";
import "./App.css";

function App() {
  const [loadedEvents, setLoadedEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:5000/events");
      const responseData = await response.json();

      setLoadedEvents(responseData.events);
    };
    fetchEvents();
  }, []);

  const addEventHandler = async (
    eventName,
    eventDescription,
    eventStartDate,
    eventEndDate
  ) => {
    try {
      const newEvent = {
        title: eventName,
        description: eventDescription,
        startDate: eventStartDate,
        endDate: eventEndDate
      };
      let hasError = false;
      const response = await fetch("http://localhost:5000/event", {
        method: "POST",
        body: JSON.stringify(newEvent),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        hasError = true;
      }

      const responseData = await response.json();

      if (hasError) {
        throw new Error(responseData.message);
      }

      setLoadedEvents((prevEvents) => {
        return prevEvents.concat({
          ...newEvent,
          id: responseData.event.id,
        });
      });
    } catch (error) {
      alert(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="container">
      <Header />
      <main>
        <NewEvent onAddEvent={addEventHandler} />
        <EventList items={loadedEvents} />
      </main>
    </div>
  );
}

export default App;
