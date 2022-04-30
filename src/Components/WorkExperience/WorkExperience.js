import React from 'react'
import './WorkExperience.css'

function WorkExperience() {
  return (
    <div className='WorkEx'>
        <h2>Work Experience :</h2>
        <div className='work'> 
            <h3 className='company'> Horivac Company Limited </h3>
            <h3 className='position'> Intern </h3>
        </div>
        <p className='duration'> </p>
        <p className='info'></p>
        <div className='work'> 
            <h3 className='company1'> Mikano International Limited </h3>
            <h3 className='position1'> Intern </h3>
        </div>
        <p className='duration'> </p>
        <p className='info'></p>
    </div>
  )
}

export default WorkExperience