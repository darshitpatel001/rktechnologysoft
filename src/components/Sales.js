import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from "@fortawesome/free-regular-svg-icons"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Searchicon from "../assets/images/Group-38.png"
import Arrow1 from "../assets/images/Arrow-1.png"
import Arrow2 from "../assets/images/Arrow-2.png"

export default function Sales() {
    return (
        <>
            <section className='Sales-section'>
                <div className='details-section'>
                    <div className='Sales'>
                        <h6>TRANSACTIONS SUMMARY</h6>
                        <div className='row'>
                            <div className='col-md-3'>
                                <div className='Total-balance'>
                                    <p className="you">
                                        Sales
                                    </p>
                                    <p className='rupeess d-flex'>
                                        ₹29,069.15
                                        <span><img src={Arrow2} alt='arrow' /></span>
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='Total-balance'>
                                    <p className="you">
                                        Expenses

                                    </p>
                                    <p className='rupeess d-flex'>
                                        ₹29,069.15
                                        <span><img src={Arrow2} alt='arrow' /></span>
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='Total-balance'>
                                    <p className="you">
                                        Purchases
                                    </p>
                                    <p className='rupeess d-flex'>
                                        ₹29,069.15
                                        <span><img src={Arrow1} alt='arrow' /></span>
                                    </p>
                                </div>
                            </div>
                            <div className='col-md-3 d-flex justify-content-end'>
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
                    <Tabs>
                        <Tab eventKey="sales" title="Sales">
                            <div className='filter-row'>
                                <div className='search-filter filter'>
                                    <h4>Search</h4>
                                    <div className='search-filter-input'>
                                        <img src={Searchicon} alt='' />
                                        <input type='text' placeholder='Customer Name' />
                                    </div>
                                </div>
                            </div>
                            <div className='user-detail-section'>
                                <div className='user-detail-title'>
                                    <h5>TRANSACTION</h5>
                                    <h5>Amount</h5>
                                </div>
                                <div className='user-details'>
                                    <div className='single-user-details'>
                                        <div className='username'>
                                            <span>A</span>
                                            <div className='name'>
                                                <h4>Darshit</h4>
                                                <p>17 Jul 2023</p>
                                            </div>
                                        </div>
                                        <div className='amount'>
                                            <h4>₹ 200</h4>
                                            <p>Online</p>
                                        </div>
                                    </div>
                                    <div className='single-user-details'>
                                        <div className='username'>
                                            <span>A</span>
                                            <div className='name'>
                                                <h4>Darshit</h4>
                                                <p>17 Jul 2023</p>
                                            </div>
                                        </div>
                                        <div className='amount'>
                                            <h4>₹ 200</h4>
                                            <p>Online</p>
                                        </div>
                                    </div>
                                    <div className='single-user-details'>
                                        <div className='username'>
                                            <span>A</span>
                                            <div className='name'>
                                                <h4>Darshit</h4>
                                                <p>17 Jul 2023</p>
                                            </div>
                                        </div>
                                        <div className='amount'>
                                            <h4>₹ 200</h4>
                                            <p>Online</p>
                                        </div>
                                    </div>
                                    <div className='single-user-details'>
                                        <div className='username'>
                                            <span>A</span>
                                            <div className='name'>
                                                <h4>Darshit</h4>
                                                <p>17 Jul 2023</p>
                                            </div>
                                        </div>
                                        <div className='amount'>
                                            <h4>₹ 200</h4>
                                            <p>Online</p>
                                        </div>
                                    </div>
                                    <div className='single-user-details'>
                                        <div className='username'>
                                            <span>A</span>
                                            <div className='name'>
                                                <h4>Darshit</h4>
                                                <p>17 Jul 2023</p>
                                            </div>
                                        </div>
                                        <div className='amount'>
                                            <h4>₹ 200</h4>
                                            <p>Online</p>
                                        </div>
                                    </div>
                                    <div className='single-user-details'>
                                        <div className='username'>
                                            <span>A</span>
                                            <div className='name'>
                                                <h4>Darshit</h4>
                                                <p>17 Jul 2023</p>
                                            </div>
                                        </div>
                                        <div className='amount'>
                                            <h4>₹ 200</h4>
                                            <p>Online</p>
                                        </div>
                                    </div>
                                    <div className='single-user-details'>
                                        <div className='username'>
                                            <span>A</span>
                                            <div className='name'>
                                                <h4>Darshit</h4>
                                                <p>17 Jul 2023</p>
                                            </div>
                                        </div>
                                        <div className='amount'>
                                            <h4>₹ 200</h4>
                                            <p>Online</p>
                                        </div>
                                    </div>
                                    <div className='single-user-details'>
                                        <div className='username'>
                                            <span>A</span>
                                            <div className='name'>
                                                <h4>Darshit</h4>
                                                <p>17 Jul 2023</p>
                                            </div>
                                        </div>
                                        <div className='amount'>
                                            <h4>₹ 200</h4>
                                            <p>Online</p>
                                        </div>
                                    </div>
                                    <div className='single-user-details'>
                                        <div className='username'>
                                            <span>A</span>
                                            <div className='name'>
                                                <h4>Darshit</h4>
                                                <p>17 Jul 2023</p>
                                            </div>
                                        </div>
                                        <div className='amount'>
                                            <h4>₹ 200</h4>
                                            <p>Online</p>
                                        </div>
                                    </div>
                                    <div className='single-user-details'>
                                        <div className='username'>
                                            <span>A</span>
                                            <div className='name'>
                                                <h4>Darshit</h4>
                                                <p>17 Jul 2023</p>
                                            </div>
                                        </div>
                                        <div className='amount'>
                                            <h4>₹ 200</h4>
                                            <p>Online</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input type='submit' value="Add Customer" className='submit-btn' />
                        </Tab>
                        <Tab eventKey="purchase" title="Purchase">
                            purchase
                        </Tab>
                        <Tab eventKey="expenses" title="Expenses">
                            expenses
                        </Tab>
                    </Tabs>
                </div>
            </section>
        </>
    )
}
