import React from 'react'
import Footer from '../Footer'
import PageNotFound from '../PageNotFound'




const NotFound = () => {
  return (
    
    <div className='wrapper' style={{backgroundColor:  '#efe7cb', }}>
           
            <main>
            <PageNotFound />
            </main>
            <Footer/>
    </div>
  )
}

export default NotFound