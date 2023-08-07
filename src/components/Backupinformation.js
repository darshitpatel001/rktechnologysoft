import React from 'react'
import Setting from './Setting'

export default function Backupinformation() {
    return (
        <>
            <div className='Backupinformation'>
                <Setting />
                <div className='Details-section'>
                    <div className='information'>
                        <h5>Backup Information </h5>
                        <p>Your data is automatically backed-up when you are connected to the internet</p>
                        <h6>Last Backup at</h6>
                        <p>9:34 AM 7 Aug 2023</p>
                    </div>
                </div>
            </div>
        </>
    )
}
