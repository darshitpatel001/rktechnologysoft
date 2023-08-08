import React from 'react'
import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import Deleteicon from "../assets/images/Group-391.png"
import Accordion from 'react-bootstrap/Accordion';

export default function Salereturn() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <section className='Editsales-Section'>
                <form>
                    <div className='details-section'>
                        <h3>Create Sale Return</h3>
                    </div>

                    <div className='Editsales-details'>
                        <div className='main-box d-flex'>
                            <div className='editsales-box'>
                                <h6>PARTY DETAILS</h6>
                                <div class="row">
                                    <div class="col-6">
                                        <label for="partyname" class="form-label">Party Name</label>
                                        <input type="text" class="form-control" placeholder="Party Name" name="partyname" />
                                    </div>
                                    <div class="col-6">
                                        <label for="PNumber" class="form-label">Phone Number</label>
                                        <input type="number" class="form-control" placeholder="Enter the phone number" name="pnumber" />
                                    </div>
                                    <div class="col-6">
                                        <label for="address" class="form-label">Party Address</label>
                                        <input type="text" class="form-control" placeholder="Enter their address here" name="   " />
                                    </div>
                                    <div class="col-6">
                                        <label for="gst" class="form-label">GSTIN (optional)</label>
                                        <input type="text" class="form-control" placeholder="Enter their party's GSTIN" name="gst" />
                                    </div>
                                </div>
                            </div>
                            <div className='editsales-box'>
                                <h6>SALE RETURN DETAILS</h6>
                                <div class="row">
                                    <div class="col-6">
                                        <label for="InvoiceNumber" class="form-label">Sale Return Number</label>
                                        <input type="number" class="form-control" placeholder="Sale Return Number" name="invoicenumber" />
                                    </div>
                                    <div class="col-6">
                                        <label for="InvoiceDate" class="form-label">Sale Return Number</label>
                                        <input type="date" class="form-control" name="invoicedate" />
                                    </div>
                                    <div class="col-6">
                                        <label for="GSTIN" class="form-label">Your GSTIN</label>
                                        <input type="text" class="form-control" placeholder="Enter Your GSTIN" name="GSTIN" />
                                    </div>
                                    <div class="col-6">
                                        <label for="StateofSupply" class="form-label">State of Supply</label>
                                        <input type="text" class="form-control" placeholder="Enter Your State" name="stateofsupply" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='editsales-boxs d-flex'>
                            <label>INVOICE SETTLED AGAINST</label>
                            <input type="text" class="form-control" placeholder="18" name="stateofsupply" disabled />
                        </div>
                        <div className='editsales-boxs'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th className='sl-no'>Sl. No.</th>
                                        <th className='items'>Items</th>
                                        <th className='hsn-code'>Hsn/Sac</th>
                                        <th className='quantity'>Quantity</th>
                                        <th className='selling-price'><span>Selling Price</span><span>Rate (Incl. Discount)</span></th>
                                        <th className='discount-unit'><span>Discount</span><span>Unit</span></th>
                                        <th className='gst-amount'><span>Gst (%)</span><span>Amount (₹)</span></th>
                                        <th className='amount'>Amount (₹)</th>
                                        <th className='delete-icon'></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='sl-no'>1</td>
                                        <td className='items'>Masoor dal</td>
                                        <td className='hsn-code'>
                                            <Button variant="primary" onClick={handleShow} className='hsn-btn'>Hsn Code</Button>
                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Modal heading</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                                                <Modal.Footer>
                                                    <Button variant="secondary" onClick={handleClose}>
                                                        Close
                                                    </Button>
                                                    <Button variant="primary" onClick={handleClose}>
                                                        Save Changes
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </td>
                                        <td className='quantity'><input type='number' class="form-control" /></td>
                                        <td className='selling-price'><span className='add-number'><input type='number' class="form-control" /></span><span className='Incl-discount'>0</span></td>
                                        <td className='discount-unit'>
                                            <span className='add-number'>
                                                <input type='number' class="form-control" />
                                            </span>
                                            <span className='unit-icon'>
                                                <select class="form-control">
                                                    <option value="%">%</option>
                                                    <option value="₹">₹</option>
                                                </select>
                                            </span>
                                        </td>
                                        <td className='gst-amount'>
                                            <span className='gst'>
                                                <Button className='Gst-btn'>0.25</Button>
                                            </span>
                                            <span className='amount'>0.9</span>
                                        </td>
                                        <td className='amount'>50</td>
                                        <td className='delete-icon'>
                                            <img src={Deleteicon} />
                                        </td>
                                    </tr>
                                    <div className='Items-Inventory'>
                                        <Button className='Inventory-btn'> + Select Items from Inventory</Button>
                                    </div>
                                </tbody>
                            </table>
                        </div>
                        <div className='main-boxs d-flex'>
                            <div className='editsales-boxes'>
                                <Accordion defaultActiveKey="0" flush>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                            <h6>Add Optional Information</h6>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                            <div className='Information'>
                                                <div>
                                                    <a href=''> + My Address</a>
                                                </div>
                                                <div>
                                                    <a href=''> + Terms & Conditions</a>
                                                </div>
                                                <div>
                                                    <a href=''> + Custom Fields</a>
                                                </div>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                </Accordion>
                            </div>
                            <div className='editsales-boxes'>
                                <div className='Total d-flex'>
                                    <h5>Totel Amount</h5>
                                    <div className='amount'>
                                        <input type='number' class="form-control" placeholder='Enter amount' name='' />
                                        <span className='amount-icon'>₹</span>
                                    </div>
                                </div>
                                <div className='paid-via d-flex'>
                                    <p>Paid via</p>
                                    <div className='radio-btn'>
                                        <input type="radio" class="form-check-input" name="optradio" value="option1" />
                                        <label class="form-check-label" for="radio1"> Unpaid</label>
                                        <input type="radio" class="form-check-input" name="optradio" value="option1" />
                                        <label class="form-check-label" for="radio1"> Online</label>
                                        <input type="radio" class="form-check-input" name="optradio" value="option1" />
                                        <label class="form-check-label" for="radio1"> Cash</label>
                                    </div>
                                </div>
                                <div className='Balance d-flex'>
                                    <h5>Balance Due</h5>
                                    <p>₹ 0</p>
                                </div>
                            </div>
                        </div>
                        <div className='editsales-boxes'>
                            <div className='Private'>
                                <h6>Private to you</h6>
                                <input type='text' class="form-control" placeholder='Add Notes' name='' />
                            </div>
                        </div>
                    </div>
                    <div className='details-section1'>
                        <Button>Create Sale Return</Button>
                    </div>

                </form>
            </section>
        </>
    )
}
