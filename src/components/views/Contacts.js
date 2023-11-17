import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import LetsContact from '../LetsContact'
import CallUs from '../CallUs'
import LeaveMessage from '../LeaveMessage'
import ContactsAdress from '../ContactsAdress'











const Contacts = () => {
  return (
    <div className='wrapper'>
        <Header/>
            <main>
                <LetsContact />
                <CallUs />
                <LeaveMessage />
                <ContactsAdress />
                
                
                
            </main>
        <Footer/>
    </div>
  )
}

export default Contacts