import React from 'react'
import './Form.css'

function Form() {

    function submitFunc(e) {
        e.preventDefault()
        alert("Form müvəffəqiyyətlə göndərildi !")
    }

    return (
        <>
            <section className='userForm'>
                    <div className='container'>
                        <form action="#" className='userForm_form'>
                            <div className='form_group'>
                                <label htmlFor="name" className='form_group_label'>Ad:</label>
                                <input type="text" id='name' name='name' className='form_group_input' placeholder='Name...'/>
                            </div>
                            <div className='form_group'>
                                <label htmlFor="surname" className='form_group_label'>Soyad:</label>
                                <input type="text" id='surname' name='surname' className='form_group_input' placeholder='Surname...'/>
                            </div>
                            <div className='form_group'>
                                <label htmlFor="tel" className='form_group_label'>Telefon:</label>
                                <input type="number" id='tel' name='tel' className='form_group_input' placeholder='Telefon...'/>
                            </div>
                            <div className='form_group'>
                                <label htmlFor="email" className='form_group_label'>E-mail:</label>
                                <input type="email" id='email' name='email' className='form_group_input' placeholder='E-mail...'/>
                            </div>
                            <div className='form_group'>
                                <label htmlFor="comment" className='form_group_label'>Şərh:</label>
                                <textarea type="text" id='comment' name='comment' className='form_group_input' placeholder='Şərh...'></textarea>
                            </div>
                            <div className='form_group'>
                                <button type="submit" onClick={submitFunc} className='login_btn'>Göndər</button>
                            </div>
                        </form>
                    </div>
                </section>
        </>
    )
}

export default Form