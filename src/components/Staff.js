import React from 'react'
import staff from '../assets/images/image-removebg-preview-(18)-1.png'

export default function Staff() {
    return (
        <>
            <div className='staff'>
                <div className='staff-details text-center'>
                    <img src={staff} alt='' />
                    <h4>No staff selected</h4>
                    <div className='add-staff'>
                        <button variant="primary">+ Add New Staff</button>
                    </div>
                </div>
            </div>
        </>
    )
}
