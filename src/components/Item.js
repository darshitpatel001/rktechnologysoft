import React, { useState, useEffect } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import Downicon from "../assets/images/Vector.png"
import Button from 'react-bootstrap/Button';
import Searchicon from "../assets/images/Group-38.png"
import Filtericon from "../assets/images/Group-41.png"
import Sorticon from "../assets/images/Group-44.png"

export default function Item() {
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
                                        <input type='text' placeholder='Name or Phonenumber'/>
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
            </section>
        </>
    )
}
