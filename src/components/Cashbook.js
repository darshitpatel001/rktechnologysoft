import React, { useState } from 'react'
import transation from '../assets/images/image-removebg-preview-(7)-1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from "@fortawesome/free-regular-svg-icons"
import { Button, Modal } from 'react-bootstrap'
import DatePicker from 'react-datetime';
import moment from 'moment';

export default function Cashbook() {
    const today = moment();
    const disableFutureDt = current => {
        return current.isBefore(today)
    }
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    return (
        <>
            <section className="Cash-section">
                <div className='details-section'>
                    <div className='Balance'>
                        <h3>Cashbook</h3>
                        <div className='row'>
                            <div className='col-lg-4'>
                                <div className='Total-balance'>
                                    <p className="you">
                                        Total Balance
                                    </p>
                                    <p className='rupeess'>
                                        ₹5,02,143.87
                                    </p>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className='Total-balance'>
                                    <p className="you">
                                        Todays Balance
                                    </p>
                                    <p className="rupees">
                                        ₹ 0
                                    </p>
                                </div>
                            </div>
                            <div className='col-lg-4 d-flex justify-content-end'>
                                <div className="pdf-button">
                                    <button className="row align-item-center d-flex">
                                        <div className="pdf-img">
                                            <FontAwesomeIcon icon={faFileLines} />
                                        </div>
                                        View Report
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Payment-date'>
                        <div class="row">
                            <div class="col">
                                <label for="Date">Date</label>
                                <input type="date" class="form-control" name="Date" />
                            </div>
                            <div class="col">
                                <label for="email">Payment Mode</label>
                                <select class="form-select" id="sel1" name="sellist1">
                                    <option>All</option>
                                    <option>All</option>
                                    <option>Cash</option>
                                    <option>Online</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='Out-in'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                NAME
                            </div>
                            <div className='col-lg-3'>
                                OUT
                            </div>
                            <div className='col-lg-3'>
                                IN
                            </div>
                        </div>
                    </div>
                    <div className='Out-Date'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <p className='date'>14 Jul 2023 (TODAY)</p>
                                <span>0 Entries</span>
                            </div>
                            <div className='col-lg-3'>
                                <p className='red'>₹--</p>
                            </div>
                            <div className='col-lg-3'>
                                <p className='green'>₹--</p>
                            </div>
                        </div>
                    </div>
                    <div className='transation-img text-center'>
                        <img src={transation} alt='' />
                        <p className='transation-contant'>Add your first transation</p>
                        <p>Looks a bit empty in here!</p>
                    </div>
                    <div className='transation-contant-btn'>
                        <div className='transation-out'>
                            <Button onClick={handleShow}>OUT</Button>
                        </div>

                        <Modal show={show} onHide={handleClose} className='add-customer you-gave-form'>
                            <Modal.Header closeButton>
                                <Modal.Title>Out Entry</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <form id='youGaveForm'>
                                    <div className='input number'>
                                        <div className='all-span'>
                                            <span className='label'>Amount</span>
                                        </div>
                                        <div className='amount'>
                                            <div className='coutry-amount'>
                                                <input type='number' placeholder='Enter amount' name='countryamount' />
                                                <span className='amount-icon'>₹</span>
                                            </div>
                                            <span className='error'></span>
                                        </div>
                                    </div>
                                    <div className='input textarea'>
                                        <span className='label'>Description</span>
                                        <textarea placeholder='Enter Details (Item Name, Bill No, Quantity, etc)' rows="6"></textarea>
                                        <span className='error'></span>
                                    </div>
                                    <div className='input calendar'>
                                        <span className='label'>Date</span>
                                        <div className='App'>
                                            <DatePicker timeFormat={false} isValidDate={disableFutureDt} />
                                        </div>
                                    </div>
                                    <input type='submit' value="Save" className='submit-btn' />
                                </form>
                            </Modal.Body>
                        </Modal>

                        <div className='transation-out'>
                            <Button onClick={handleShow1}>IN</Button>
                            <Modal show={show1} onHide={handleClose1} className='add-customer you-gave-form'>
                                <Modal.Header closeButton>
                                    <Modal.Title>In Entry</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <form id='youGaveForm'>
                                        <div className='input number'>
                                            <div className='all-span'>
                                                <span className='label'>Amount</span>
                                            </div>
                                            <div className='amount'>
                                                <div className='coutry-amount'>
                                                    <input type='number' placeholder='Enter amount' name='countryamount' />
                                                    <span className='amount-icon'>₹</span>
                                                </div>
                                                <span className='error'></span>
                                            </div>
                                        </div>
                                        <div className='input textarea'>
                                            <span className='label'>Description</span>
                                            <textarea placeholder='Enter Details (Item Name, Bill No, Quantity, etc)' rows="6"></textarea>
                                            <span className='error'></span>
                                        </div>
                                        <div className='input calendar'>
                                            <span className='label'>Date</span>
                                            <div className='App'>
                                                <DatePicker timeFormat={false} isValidDate={disableFutureDt} />
                                            </div>
                                        </div>
                                        <input type='submit' value="Save" className='submit-btn' />
                                    </form>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
                <div className='details-section1'>
                    <div className='single-user-data'>
                        <div className='username'>
                            <div className='name'>
                                <div className='circle'></div>
                                <div className='name-number'>
                                    <h4>In</h4>
                                    <p>12:54 PM 14 Jul 2023</p>
                                </div>
                            </div>
                            <div className='report-setting-btn'>
                                <button className='report'>Edit</button>
                                <button className='report1'>Delete </button>
                            </div>
                        </div>
                    </div>
                    <div className='Description'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <p>Description</p>
                            </div>
                            <div className='col-lg-6 description-content'>
                                <p className='description-content1'>₹65</p>
                                <p className='description-content2'>ONLINE</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
