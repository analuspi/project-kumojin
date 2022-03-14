import React, { useState} from 'react';
import Header from './Components/Header/Header';
import NewEvent from './Components/Events/NewEvent';
import EventList from './Components/Events/EventList';
import './App.css';

function App() {
  const [loadedEvents, setLoadedEvents] = useState([]);
 

  

  const addEventHandler = async (eventName, eventDescription) => {
    
      const newEvent = {
        title: eventName,
        description: eventDescription
      };
      setLoadedEvents(prevEvents => {
        return prevEvents.concat({
          ...newEvent
        });
      });
  };

  return (
    <div className='container'>
      <Header />
      <main>
        <NewEvent onAddEvent={addEventHandler} />
        <EventList items={loadedEvents} />
      </main>
    </div>
     
  
  );
}

export default App;
