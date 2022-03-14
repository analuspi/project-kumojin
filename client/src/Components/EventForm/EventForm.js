import React from 'react'
import './EventForm.css'

const EventForm = () => {
  return (
    <div className='eventForm'>
        <h4 className='eventForm__title'>Create an Event:</h4>
        <form className='eventForm__form'>
          <input type="text" name="title" placeholder="Title" />
          <input type="textarea" name="description" placeholder="Description" />
          <input type="text" name="start_datetime" placeholder="Start Date" />
          <input type="text" name="end_datetime" placeholder="End Date" />
          <button className='eventForm__btn' type="submit">Create Event</button>
        </form>
      </div>
  )
}

export default EventForm