import React from 'react'
import Email from '../Email/Email'
import Name from '../Name/Name'
import Address from '../Address/Adress'
import PersonalInfo from '../PersonalInfo/PersonalInfo'

function Profile() {
  return (
    <>
      <div className='section'>
        <div className='container'>
          <div className='section_content'>
            <Name />
            <Email />
            <Address />
            <PersonalInfo />
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile