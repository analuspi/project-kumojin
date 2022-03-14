import React, { useState } from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import './NewEvent.css';

const NewEvent = props => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDescription, setEnteredDescription] = useState('');
  const [enteredStartDate, setEnteredStartDate] = useState('');
  const [enteredEndDate, setEnteredEndDate] = useState('');

  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value);
  };

  const descriptionChangeHandler = e => {
    setEnteredDescription(e.target.value);
  };

  const startDateChangeHandler = e => {
    setEnteredStartDate(e.target.value);
  };
  const endDateChangeHandler = e => {
    setEnteredEndDate(e.target.value);
  };


  const submitEventHandler = e => {
    e.preventDefault();
    props.onAddEvent(enteredTitle, enteredDescription, enteredStartDate, enteredEndDate);
  };

  return (
    <section id="new-event">
      <h2>Add a new event</h2>
      <form onSubmit={submitEventHandler}>
        <Input
          type="text"
          label="Title"
          id="title"
          value={enteredTitle}
          onChange={titleChangeHandler}
        />
        <Input
          type="textarea"
          label="Description"
          id="description"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        />
         <Input
          type="date"
          label="Start Date"
          id="startDate"
          value={enteredStartDate}
          onChange={startDateChangeHandler}
        />
         <Input
          type="date"
          label="End Date"
          id="endDate"
          value={enteredEndDate}
          onChange={endDateChangeHandler}
        />
        <Button />
      </form>
    </section>
  );
};

export default NewEvent;
