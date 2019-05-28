import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import './main.scss'

export default function Calender() {

  const calendarComponentRef = React.createRef()
  const [calendarWeekends, setCalendarWeekends] = useState(true);
  const [calendarEvents, setCalendarEvents] = useState([ // initial event data
    { title: 'Event Now', start: new Date() }
  ])

  const handleDateClick = (arg) => {
    setCalendarEvents(calendarEvents.concat({ // creates a new array
      title: 'New Event',
      start: arg.date,
      allDay: arg.allDay
    }))
  }

  return (
    <div className='demo-app' style={{ backgroundColor: 'white', padding: '20px' }}>
      <header className="page header">
        <div className="content">
          <h1 className="display-4 mb-0">Basic Calender</h1>
          <p className="lead text-muted">Basic Example of use of the calender plugin</p>
        </div>
      </header>
      <div className='demo-app-calendar'>
        <FullCalendar
          defaultView="dayGridMonth"
          header={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          ref={calendarComponentRef}
          weekends={calendarWeekends}
          events={calendarEvents}
          dateClick={handleDateClick}
        />
      </div>
    </div>
  )
}

