import React from 'react'
import Astronaut from '../Assests/Images/35901-5-astronaut-transparent-background_400x400.png'
import Button from './Geniral/Button'
import { useLinkClickHandler } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <section className="PageNotFound" style={{ padding: '30px',  textAlign: 'center', alignItems: 'center', justifyContent: 'center', marginLeft: 400}}>
    
    <div className="container" style={{maxWidth: 1000, margin: '0% auto'}}>
    <Button type='' text='Home'  url='/Home' />
    
    <div className="Top-404">

      <h1 style={{fontFamily: '"Kdam Thmor Pro", sans-serif', fontWeight: 600, fontSize: 40, color: '#191919',marginBottom: 20}}>404 - Page Not Found</h1>
      <img src={Astronaut} alt />
      <h5 style={{fontFamily: '"Kdam Thmor Pro", sans-serif', fontSize: 20, color: '#F94D1C', marginTop: 20, marginBottom:20 }}>Oops! The page you are looking for might be in another planet.</h5>
      
    </div>
   
  </div>
</section>


  )
}

export default PageNotFound