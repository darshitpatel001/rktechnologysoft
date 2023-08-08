import React from 'react'
import Setting from './Setting'
import Callus from '../assets/images/phone.png'

export default function Helpsupport() {
    return (
        <>
            <div className='Helpsupport'>
                <Setting />
                <div className='Details-section'>
                    <div className='information'>
                        <h5>Help & Support </h5>
                        <div className='box'>
                            <img src={Callus} />
                            <h5>Call Us on +91 9725483242</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
