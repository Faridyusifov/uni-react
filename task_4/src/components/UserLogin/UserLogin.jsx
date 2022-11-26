import React from 'react'
import './UserLogin.css'

function UserLogin() {

    function emailValidate(e) {
        e.preventDefault();
        console.log("E-mail üçün: 'Yalnız .ru domenlərinə icazə verilir.'");
    }
    function passwordValidate(e) {
        e.preventDefault();
        console.log("Parol üçün: 'Ən azı 8 simvol'.");
    }

    return (
        <>
            <section className='userForm'>
                <div className='container'>
                    <form action="#" className='userForm_form'>
                        <div className='form_group'>
                            <label htmlFor="email" className='form_group_label'>Enter Email:</label>
                            <input type="email" onClick={emailValidate} id='email' name='email' className='form_group_input' placeholder='Type email...'/>
                        </div>
                        <div className='form_group'>
                            <label htmlFor="password" className='form_group_label'>Enter Password:</label>
                            <input type="password" onClick={passwordValidate} id='password' name='password' className='form_group_input' placeholder='Type password...'/>
                        </div>
                        <div className='form_group'>
                            <button type="submit" className='login_btn'>Login</button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default UserLogin