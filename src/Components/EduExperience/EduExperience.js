import React from 'react'
import './EduExperience.css'

function EduExperience() {
  return (
    <div className='EduEx'>
        <h2>Educational Experience :</h2>
        <div className='university'> 
            <h3 className='shcName'> University of Ilorin</h3>
            <h3 className='duration'> 2015 - 2021 </h3>
        </div>
        <p className='cert'> SECOND CLASS UPPER (B.ENG) </p>
        <p className='info'> * Took modules in Industrial Engineering I, Electrical Machines for Mechanical Engineers, Engineering Communication, Manufacturing Processes I and II and other related courses </p>
        
        <div className='college'> 
            <h3 className='shcName1'> Jelly-Las College</h3>
            <h3 className='duration1'> 2008 - 2014 </h3>
        </div>
        <p className='cert'> WAEC (School Leaving Certificate) </p>    
        <p className='info'> * Made 8 distinctions in the Senior Secondary Certificate Examination at first siting</p>
        <p className='info'> * Awarded the best student (of my school) in further mathematics </p>
    </div>
  )
}

export default EduExperience