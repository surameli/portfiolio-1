import React from 'react'
import Header from '../components/Header/Header'
// import {Service,Work,Contact} from '../components/Header/Header'
import Profile from '../components/Banner/Profile/Profile'
import AboutMe from '../components/AboutMe/AboutMe'
import Resume from '../components/Resume/Resume'
import ContactMe from '../components/ContactMe/ContactMe'
// import { Route, Routes } from 'react-router-dom'
// import Header from '../../components/Header/Header'
// import Profile from '../../components/Banner/Profile/Profile'
// import AboutMe from '../../components/AboutMe/AboutMe'
// import Resume from '../../components/Resume/Resume'

// import ContactMe from '../../components/ContactMe/ContactMe'
const Home = () => {
  return (
    <>
    <Header/>
    {/* <Routes>
      <Route path='/Home' element={<Profile/>}/>
      <Route path='/service' element={<AboutMe/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/work' element={<Resume/>}/>
      <Route path='/contact' element={<ContactMe/>}/>
         
      </Routes> */}
      <Profile/>
      <AboutMe/>
      <Resume/>
     <ContactMe/>  
 
  
    
   
   
    </>
  )
}

export default Home