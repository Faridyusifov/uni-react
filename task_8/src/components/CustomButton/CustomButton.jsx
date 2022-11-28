import React, {useState} from 'react'
import './CustomButton.css'

function CustomButton(props) {
    const [warnMessage, UseWarnMessage] = useState(false);

    const changeWarnMessage = () => {
        UseWarnMessage(prevState => !prevState);
    }

    const showHintMessage = () =>{
        alert(props.hint)
    }

    return (
        <>
            <div className='item'>
                <div className='head'>Default btn</div>
                <button className="button">
                    {props.text}
                </button>
            </div>
            <div className='item'>
                <div className='head'>Click edende Warn message gosterir</div>
                <button className={warnMessage ? "button btnError" : "button"} onClick={changeWarnMessage}>
                    {props.text}
                </button>
                <div className='error'>
                    {warnMessage ? props.warnMessage : null}
                </div>
            </div>
            <div className='item'>
                <div className='head'>Mouseover edende hint message gorsenir</div>
                <button className="button" onMouseOver={showHintMessage}>
                    {props.text}
                </button>
            </div>
        </>
    )
}

export default CustomButton