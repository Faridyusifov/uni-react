import React from 'react'
import Header from '../Header/Header'
import './PersonalInfo.css'

function PersonalInfo() {
  return (
    <>
      <div className='personalInfo'>
        <div className='container'>
          <Header text="Personal Info" />
          <div className='personalInfo_content'>
            <div className='personalInfo_content_item'>
              <div className='personalInfo_content_item_title'>
                Ad
              </div>
              <div className='personalInfo_content_item_text'>
                Farid
              </div>
            </div>
            <div className='personalInfo_content_item'>
              <div className='personalInfo_content_item_title'>
                Yaş
              </div>
              <div className='personalInfo_content_item_text'>
                19  
              </div>
            </div>
            <div className='personalInfo_content_item'>
              <div className='personalInfo_content_item_title'>
                Yaşayış yeri
              </div>
              <div className='personalInfo_content_item_text'>
                Baku, Hovsan
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonalInfo