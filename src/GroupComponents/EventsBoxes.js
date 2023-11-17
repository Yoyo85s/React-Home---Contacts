import React from 'react'
import Sectionhead from './Sectionhead'


const EventsBoxes = ({src}) => {
  return (
        <div className="box1">
          <img src={src} alt="event-25-Mar" />
          <div className="event-info">
            <Sectionhead  text="Business" describe="How To Use Digitalization In The Classroom" />
            <p className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
          </div>
        </div>
  )
}

export default EventsBoxes