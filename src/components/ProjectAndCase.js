import React from 'react'
import Sectionhead from '../GroupComponents/Sectionhead'
import '../Assests/style.css'
import ProjectSections from '../GroupComponents/ProjectSections'
import Artical1 from '../Assests/Images/image-artical1.png'
import Image2 from '../Assests/Images/Image 2.png'
import Image3 from '../Assests/Images/Image 3.png'
import Image4 from '../Assests/Images/Image 4.png'





const ProjectAndCase = () => {
  return (
  <section className=" project-and-case">
      <div className="container">
              <div className="section-title">
                  <Sectionhead text="Project &amp; Case Studies" describe="Let’s Looks Our Global Projects" />
              </div>

              <div className="project-and-cases">
                  <ProjectSections text="Grow your business" href="/contacts" src={Artical1} />
                  <ProjectSections text="Why your client needs a responsive website" href="/contacts" src={Image2} />
                  <ProjectSections text="Educate your employees to get better results" href="/contacts" src={Image3} />
                  <ProjectSections text="Business Insights is a important piece of your business" href="/contacts" src={Image4} />

              </div>
        
        
            
            <div class="center-contant">
              <a class="btn-black" href="./services">All Recent Projects<i class="fa-solid fa-square-arrow-up-right"></i></a>
            </div>
        
      
        
      </div>
  </section>

  )
}

export default ProjectAndCase