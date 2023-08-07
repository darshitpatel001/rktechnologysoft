import React from 'react'
import BookSetting from '../assets/images/Book-setting.png'
import Billing from '../assets/images/Billing.png'
import Backup from '../assets/images/Backup.png'
import Recycle from '../assets/images/Recycle-bin.png'
import Help from '../assets/images/Help-support.png'
import Logout from '../assets/images/Logout.png'
import { Link } from 'react-router-dom'

export default function Setting() {
    return (
        <>
            <div className="Setting-details">
                <div className='details-section'>
                    <h3>Setting</h3>
                </div>
                <section className='Setting-Section'>
                    <div className='Setting-details'>
                        <div className='heading'>
                            <h6>RK infotech</h6>
                        </div>
                        <div className='Book-setting'>
                            <img src={BookSetting} alt='' />
                            <div className='Book-Contant'>
                                <p className='Book-Setting-p'>Book Settings</p>
                                <p className='Book-Setting-Delete'>Delete your khata</p>
                            </div>

                        </div>
                        <div className='Account'>
                            <h6>Account Settings</h6>
                        </div>
                        <div className='Billing'>
                            <img src={Billing} alt='' />
                            <div className='Billing-Contant'>
                                <p className='Billing-Setting-p'>Plans and Billing</p>
                                <p className='Billing-Setting-Delete'>Manage your plans and download invoices</p>
                            </div>

                        </div>
                        <div className='Backup'>
                            <img src={Backup} alt='' />
                            <Link to="/backupinformation">
                                <div className='Backup-Contant'>
                                    <p className='Backup-Setting-p'>Backup Information</p>
                                    <p className='Backup-Setting-Delete'>Check your data sync status</p>
                                </div>
                            </Link>
                        </div>
                        <div className='Recycle'>
                            <img src={Recycle} alt='' />
                            <div className='Recycle-Contant'>
                                <p className='Recycle-Setting-p'>Recycle Bin</p>
                                <p className='Recycle-Setting-Delete'>Access deleted data</p>
                            </div>
                        </div>
                        <div className='Help'>
                            <img src={Help} alt='' />
                            <Link to="/helpsupport">
                                <div className='Help-Contant'>
                                    <p className='Help-Setting-p'>Help & Support</p>
                                    <p className='Help-Setting-Delete'>Understand how Khatabook works</p>
                                </div>
                            </Link>
                        </div>
                        <div className='Logout'>
                            <img src={Logout} alt='' />
                            <div className='Logout-Contant'>
                                <p className='Logout-Setting-p'>Logout</p>
                                <p className='Logout-Setting-Delete'>You will be logged out after data backup is complete</p>
                            </div>
                        </div>
                    </div>
                    <div className='Setting-details-content'>
                        <div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
