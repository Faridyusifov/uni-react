import React from 'react'
import Header from '../Header/Header'

function Contacts() {
  return (
    <>
        <div className='personalInfo'>
            <div className='container'>
                <Header text="Contacts" />
                <div className='personalInfo_content'>
                    <div className='personalInfo_content_item'>
                        <div className='personalInfo_content_item_title'>
                            Telefon nömrəsi 
                        </div>
                        <div className='personalInfo_content_item_text'>
                            050 413 36 84
                        </div>
                    </div>
                    <div className='personalInfo_content_item'>
                        <div className='personalInfo_content_item_title'>
                            Email 
                        </div>
                        <div className='personalInfo_content_item_text'>
                            faridyusifov2003@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contacts