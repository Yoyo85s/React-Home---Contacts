import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import ShowcaseSection from '../ShowcaseSection';
import Sponsors from '../Sponsors';
import Features from '../Features';
import AboutCompany from '../AboutCompany';
import Ourservices from '../Ourservices';
import WhySection from '../WhySection';
import ProjectAndCase from '../ProjectAndCase';
import TeamAndReviews from '../TeamAndReviews';
import ArticleAndNews from '../ArticleAndNews';
import NewsSubscribe from '../NewsSubscribe';










const Home = () => {
  return (
    <div className='wrapper'>
        <Header/>
            <main>
                
              <ShowcaseSection/>
              <Sponsors />
              <Features />
              <AboutCompany />
              <Ourservices />
              <WhySection />
              <ProjectAndCase />
              <TeamAndReviews />
              <ArticleAndNews />
              <NewsSubscribe />
              
                
                
            </main>
        <Footer/>
    </div>
  )
}




export default Home