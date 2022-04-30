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
        <p className='duration'> SEPTEMBER 2018 - OCTOBER 2018 </p>
        <p className='info'> * Saddled with the duty of working with a team of engineers on the installation of elevators (ORONA) at various sites.</p>
        <div className='work'> 
            <h3 className='company1'> Mikano International Limited </h3>
            <h3 className='position1'> Intern </h3>
        </div>
        <p className='duration'> MARCH 2019 - OCTOBER 2019 </p>
        <p className='info'> * Had the primary duty of working with an engineer on servicing and maintenance of diesel generators of capacities ranging from 20KVA to 200KVA</p>
        <p className='info'> * I was part of the team that changed the cylinder head gasket for a 2000KVA (MTU) gas generator</p>
    </div>
  )
}

export default WorkExperience