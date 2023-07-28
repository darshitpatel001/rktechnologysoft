import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Tab, Tabs } from 'react-bootstrap'
import Downicon from "../assets/images/Vector.png"
import Searchicon from "../assets/images/Group-38.png"
import Filtericon from "../assets/images/Group-41.png"
import Sorticon from "../assets/images/Group-44.png"

export default function Item() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    return (
        <>
            <section className='Item-section'>
                <div className='detail-section'>
                    <Tabs defaultActiveKey="Products" id="uncontrolled-tab-example" className="mb-3" >
                        <Tab eventKey="Products" title="Products">
                            <div className='amount-row'>
                                <div className='you-give-amount amount'>
                                    <h3>Total Stock value:</h3>
                                    <h6>₹4,25,799.81</h6>
                                </div>
                                <div className='you-get-amount amount'>
                                    <h3>Low Stock Products:</h3>
                                    <h6>0</h6>
                                </div>
                            </div>
                            <div className='filter-row'>
                                <div className='search-filter filter'>
                                    <h4>Search for Products</h4>
                                    <div className='search-filter-input'>
                                        <img src={Searchicon} alt='' />
                                        <input type='text' placeholder='Name or Phonenumber' />
                                    </div>
                                </div>
                                <div className='select-filter filter'>
                                    <h4>Filter By</h4>
                                    <div className='select-filter-select select'>
                                        <img src={Filtericon} className='filter-icon' alt='' />
                                        <select>
                                            <option value="">Select</option>
                                            <option value="">You'll Give</option>
                                            <option value="">You'll Get</option>
                                        </select>
                                        <img src={Downicon} className='down-icon' alt='' />
                                    </div>
                                </div>
                                <div className='sort-filter filter'>
                                    <h4>Sort By</h4>
                                    <div className='sort-filter-select select'>
                                        <img src={Sorticon} className='filter-icon' alt='' />
                                        <select>
                                            <option>Select</option>
                                            <option>Most Recent</option>
                                            <option>Highest Amount</option>
                                            <option>Least Amount</option>
                                            <option>By Name</option>
                                            <option>Oldest</option>
                                        </select>
                                        <img src={Downicon} className='down-icon' alt='' />
                                    </div>
                                </div>
                            </div>
                            <div className='user-detail-section'>
                                <div className='user-detail-title'>
                                    <h5>PRODUCT NAME</h5>
                                    <h5 className='Sales-Price'>SALES PRICE</h5>
                                    <h5>STOCK QTY</h5>
                                </div>
                                <div className='user-details'>
                                    <div className='single-user-details'>
                                        <div className='Product-name'>
                                            <span></span>
                                            <div className='name'>
                                                <h4>Apples</h4>
                                            </div>
                                        </div>
                                        <div className='amount'>
                                            <h4>₹ 200</h4>
                                        </div>
                                        <div className='Stock-Qty'>
                                            <h4>64</h4>
                                        </div>
                                    </div>
                                </div>
                                <div className='add-customer'>
                                    <Button variant="primary" >+ Add Product</Button>
                                </div>
                            </div>
                        </Tab>


                        <Tab eventKey="Services" title="Services">
                            Services
                        </Tab>
                    </Tabs>
                </div>
                <div className='details-section1'>
                    <div className='single-user-detail-page'>
                        <div className='username'>
                            <div className='name'>
                                <span>A</span>
                                <div className='name-number'>
                                    <h4>Poha</h4>
                                </div>
                            </div>
                            <div className='report-setting-btn'>
                                <button className='report'>Edit Product</button>
                            </div>
                        </div>
                    </div>
                    <div className='Item-boxs'>
                        <div class="container text-center ">
                            <div class="row box">
                                <div class="col-sm-3">
                                    <h6>₹52.51</h6>
                                    <p>SALE PRICE</p>
                                </div>
                                <div class="col-sm-3">
                                    <h6>₹26.68</h6>
                                    <p>PURCHASE PRICE</p>
                                </div>
                                <div class="col-sm-3">
                                    <h6>164 NOS</h6>
                                    <p>STOCK QUANTITY</p>
                                </div>
                                <div class="col-sm-3">
                                    <h6>₹4,811.76</h6>
                                    <p>STOCK VALUE</p>
                                </div>

                            </div>
                        </div>
                        <div class="container text-center">
                            <div class="row">
                                <div class="col-sm-3">
                                    <h6>KGS</h6>
                                    <p>UNITS</p>
                                </div>
                                <div class="col-sm-3">
                                    <h6>0 KGS</h6>
                                    <p>LOW STOCK</p>
                                </div>
                                <div class="col-sm-3">
                                    <h6>-</h6>
                                    <p>HSN CODE</p>
                                </div>
                                <div class="col-sm-3">
                                    <h6>GST@ 0.1%</h6>
                                    <p>GST %</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Profit-Tracker'>
                        <h6>ITEM PROFIT TRACKER</h6>
                    </div>
                    <div className='report-setting-btn'>
                        <button className='report'>Today</button>
                        <button className='report'>Yesterday</button>
                        <button className='report'>This Week</button>
                        <button className='report'>This Month</button>
                        <button className='report'>Custom dates</button>
                    </div>
                    <div className='item-box'>
                        <h5>Track your profits on this item</h5>
                        <h6><a href=''>STOCK OUT TO TRACK PROFIT </a></h6>
                    </div>
                    <div className='Item-table-section'>
                        <table>
                            <thead>
                                <tr>
                                    <td className='entries'>STOCK ENTRY</td>
                                    <td className='you-gave'>STOCK OUT</td>
                                    <td className='you-got'>STOCK IN</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='entries'>
                                        <h5 className='date-time'>02 Jul 2023<span className='time'> 12:44 AM</span></h5>
                                        <h6 className='balance'>Stock bal.91KGS</h6>
                                    </td>
                                    <td className='you-gave'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                                    <td className='you-got'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='you-gave-got-btn'>
                        <Button className='gave' variant="primary" onClick={handleShow}>Stock Out</Button>
                        <Button className='got' onClick={handleShow1}>Stock In</Button>
                    </div>

                    <Modal show={show} onHide={handleClose} className='Item-customer'>
                        <Modal.Header closeButton>
                            <Modal.Title>Stock Out</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className='input number'>
                                    <div className='all-span'>
                                        <span className='label'>Enter the quantity of sold products*</span>
                                    </div>
                                    <div className='amount'>
                                        <div className='coutry-amount'>
                                            <input type='number' placeholder='Enter quantity' name='countryamount' />
                                            <span className='amount-icon'>KGS</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='billing-address'>
                                    <div className='amount'>
                                        <div className='city-state'>
                                            <div className='input Price'>
                                                <div className='coutry-amount'>
                                                    <span className='label'>Sale Price</span>
                                                    <input type='number' name='city' />
                                                </div>
                                            </div>
                                            <div className='input Date'>
                                                <span className='label'>Sale Date*</span>
                                                <input type='date' name='state' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='input number'>
                                    <div className='all-span'>
                                        <span className='label'>Add notes (Optional)</span>
                                    </div>
                                    <div className='amount'>
                                        <div className='coutry-amount'>
                                            <input type='text' placeholder='Enter details (Party name, Bill no. etc.)' />
                                        </div>
                                    </div>
                                </div>
                                <div className='Stock-btn'>
                                    <Button className='Stockout'>Stock Out</Button>
                                </div>

                            </form>
                        </Modal.Body>
                    </Modal>

                    <Modal show={show1} onHide={handleClose1} className='Item-customer'>
                        <Modal.Header closeButton>
                            <Modal.Title>Stock In</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className='input number'>
                                    <div className='all-span'>
                                        <span className='label'>Enter the quantity of sold products*</span>
                                    </div>
                                    <div className='amount'>
                                        <div className='coutry-amount'>
                                            <input type='number' placeholder='Enter quantity' name='countryamount' />
                                            <span className='amount-icon'>KGS</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='billing-address'>
                                    <div className='amount'>
                                        <div className='city-state'>
                                            <div className='input Price'>
                                                <div className='coutry-amount'>
                                                    <span className='label'>Sale Price</span>
                                                    <input type='number' name='city' />
                                                </div>
                                            </div>
                                            <div className='input Date'>
                                                <span className='label'>Sale Date*</span>
                                                <input type='date' name='state' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='input number'>
                                    <div className='all-span'>
                                        <span className='label'>Add notes (Optional)</span>
                                    </div>
                                    <div className='amount'>
                                        <div className='coutry-amount'>
                                            <input type='text' placeholder='Enter details (Party name, Bill no. etc.)' />
                                        </div>
                                    </div>
                                </div>
                                <div className='Stock-btn'>
                                    <Button className='Stock'>Stock Out</Button>
                                </div>

                            </form>
                        </Modal.Body>
                    </Modal>
                </div>
            </section>
        </>
    )
}
