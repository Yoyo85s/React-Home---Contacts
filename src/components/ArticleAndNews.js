import React from 'react'

import Sectionhead from '../GroupComponents/Sectionhead'
import Button from './Geniral/Button'
import EventsBoxes from '../GroupComponents/EventsBoxes'
import Image25Mar from '../Assests/Images/Image-25-Mar.png'
import Image17Mar from '../Assests/Images/Image-17-Mar.png'
import Image13Mar from '../Assests/Images/Image-13-Mar.png'
import Dot from '../Assests/Images/dot.svg'


const ArticleAndNews = () => {
  return (
    <section className="Article & News">
  <div className="container">
    <div className="header">
      <div className="main-title">

        <div className="title">
            <Sectionhead text="Article & News" describe="Get Every Single Articles &amp; News" />
        </div>

        <div className="button, btn">
          <Button text="Browse Articles" url ="/contacts" />
        </div>

      </div>


      <div className="events">

        <EventsBoxes src={Image25Mar} />
        <EventsBoxes src={Image17Mar} />
        <EventsBoxes src={Image13Mar} />
        
      </div>


      <div className="dot">
        <img src={Dot} alt />
      </div>

    </div>
  </div>
  </section>

  )
}

export default ArticleAndNews