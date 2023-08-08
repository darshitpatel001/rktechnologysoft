import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from "@fortawesome/free-regular-svg-icons"
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Searchicon from "../assets/images/Group-38.png"
import Arrow1 from "../assets/images/Arrow-1.png"
import Arrow2 from "../assets/images/Arrow-2.png"
import Whatsappicon from "../assets/images/whatsapp.png"
import Lettericon from "../assets/images/letter-i.png"
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import sale from '../assets/images/sales.png'
import salereturn from '../assets/images/salesreturn.png'
import PaymentIn from '../assets/images/Payment in.png'
import purchased from '../assets/images/purchase.png'
import purchasereturn from '../assets/images/purchasereturn.png'
import paymentout from '../assets/images/payment out.png'

export default function Sales() {
    const navigate = useNavigate();

    const [Deleteshow, setDeleteshow] = useState(false);
    const DeleteEnteryClose = () => setDeleteshow(false);
    const DeleteEntery = () => setDeleteshow(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [purchase, setpurchaseshow] = useState(false);

    const purchaseClose = () => setpurchaseshow(false);
    const purchaseshow = () => setpurchaseshow(true);

    const [AddProductshow, setAddProductshow] = useState(false);

    const AddProductClose = () => setAddProductshow(false);
    const AddProductShow = () => setAddProductshow(true);

    const [paymentIn, setpaymentIn] = useState(false);

    const paymentInClose = () => setpaymentIn(false);
    const paymentInshow = () => setpaymentIn(true);

    const AddSale = () => {
        navigate('/addsale');
    };
    const EditSale = () => {
        navigate('/editsale');
    };

    const Addpurchase = () => {
        navigate('/addpurchase');
    };
    const Editpurchase = () => {
        navigate('/editpurchase');
    };
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
                                            <span></span>
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
                                            <span></span>
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
                                            <span></span>
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
                            <div className='user-detail-title'>
                                <Button className="btn" onClick={handleShow}>
                                    More
                                </Button>
                                <Modal show={show} className='sales-model' onHide={handleClose} animation={false}>
                                    <Modal.Body>
                                        <div className='more'>
                                            <div className='sale'>
                                                <Link to='/addsale'>
                                                    <img src={sale} className='sales' />
                                                </Link>
                                                <Link to='/salereturn'>
                                                    <img src={salereturn} className='sales-return' />
                                                </Link>
                                                <Button className="sales-btn">
                                                    <img src={PaymentIn} onClick={paymentInshow} className='payment-in' />
                                                </Button>
                                            </div>
                                            <div className='sale-content'>
                                                <h6 className='sales-content' onClick={AddSale}>Sale</h6>
                                                <h6 className='sales-return-content'>Sale Return</h6>
                                                <h6 className='payment-in-content'>Payment In</h6>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                                <Modal show={paymentIn} onHide={paymentInClose} className='payment-in-modal'>
                                    <Modal.Header closeButton>
                                        <Modal.Title>You Got ₹</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <form>
                                            <div className='payment-in'>
                                                <div className='amount'>
                                                    <div className='Sales-price'>
                                                        <div className='input Price'>
                                                            <div className='coutry-amount'>
                                                                <span className='label'>Payment Number</span>
                                                                <input type='number' placeholder='Payment Number' name='salesprice' />
                                                            </div>
                                                        </div>
                                                        <div className='input Date'>
                                                            <span className='label'>Date</span>
                                                            <input type='date' placeholder='Purchase Price' name='purchaseprice' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='customer-detailes'>
                                                <div className='customer-detailes-label'>
                                                    <span className='label'>CUSTOMER DETAILS</span>
                                                </div>
                                                <Button className='party-btn'>Select Party</Button>
                                            </div>

                                            <div className='input'>
                                                <div className='all-span'>
                                                    <span className='label'>Amount Paid</span>
                                                </div>
                                                <div className='amount'>
                                                    <div className='coutry-amount'>
                                                        <input type='number' className='inputs' placeholder='Enter Amount' name='productname' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='cash-online'>
                                                <div className='all-span'>
                                                    <span className='label'>Payment Mode</span>
                                                </div>
                                                <input type="radio" class="form-check-input" name="optradio" />
                                                <label class="form-check-label" className='radio-labal' for="">Cash</label>
                                                <input type="radio" class="form-check-input" name="optradio" />
                                                <label class="form-check-label" className='radio-labal' for="">Online</label>
                                            </div>
                                            <div className='input number'>
                                                <div className='all-span'>
                                                    <span className='label'>Enter Details</span>
                                                </div>
                                                <div className='amount'>
                                                    <div className='coutry-amount'>
                                                        <input type='number' placeholder='Enter Your Notes' name='productname' />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='input number'>
                                                <div className='all-span'>
                                                    <span className='label'>Reference Bill No.</span>
                                                </div>
                                                <div className='amount'>
                                                    <div className='coutry-amount'>
                                                        <input type='number' placeholder='Enter Reference Bill No' name='productname' />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='Stock-btn'>
                                                <Button className='Save-btn'>Save</Button>
                                            </div>
                                        </form>
                                    </Modal.Body>
                                </Modal>
                                <button className="btn" onClick={AddSale}>
                                    + Add Sale
                                </button>
                            </div>
                        </Tab>
                        <Tab eventKey="purchase" title="Purchase">
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
                                            <span></span>
                                            <div className='name'>
                                                <h4>Kapil</h4>
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
                                            <span></span>
                                            <div className='name'>
                                                <h4>Kapil</h4>
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
                                            <span></span>
                                            <div className='name'>
                                                <h4>Kapil</h4>
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
                            <div className='user-detail-title'>
                                <Button className="btn" onClick={purchaseshow}>
                                    More
                                </Button>
                                <Modal show={purchase} className='purchase-model' onHide={purchaseClose} animation={false}>
                                    <Modal.Body>
                                        <div className='more'>
                                            <div className='purchase'>
                                                <Link to='/addpurchase'>
                                                    <img src={purchased} className='purchases' />
                                                </Link>
                                                <Link to='/purchasereturn'>
                                                    <img src={purchasereturn} className='purchase-return' />
                                                </Link>
                                                <Button className="purchase-btn">
                                                    <img src={paymentout} onClick={AddProductShow} className='payment-out' />
                                                </Button>
                                                <Modal show={AddProductshow} onHide={AddProductClose} className='payment-out-modal'>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>You Paid ₹</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <form>
                                                            <div className='payment-out'>
                                                                <div className='amount'>
                                                                    <div className='Sales-price'>
                                                                        <div className='input Price'>
                                                                            <div className='coutry-amount'>
                                                                                <span className='label'>Payment Number</span>
                                                                                <input type='number' placeholder='Payment Number' name='salesprice' />
                                                                            </div>
                                                                        </div>
                                                                        <div className='input Date'>
                                                                            <span className='label'>Date</span>
                                                                            <input type='date' placeholder='Purchase Price' name='purchaseprice' />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='customer-detailes'>
                                                                <div className='customer-detailes-label'>
                                                                    <span className='label'>CUSTOMER DETAILS</span>
                                                                </div>
                                                                <Button className='party-btn'>Select Party</Button>
                                                            </div>

                                                            <div className='input'>
                                                                <div className='all-span'>
                                                                    <span className='label'>Amount Paid</span>
                                                                </div>
                                                                <div className='amount'>
                                                                    <div className='coutry-amount'>
                                                                        <input type='number' className='inputs' placeholder='Enter Amount' name='productname' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='cash-online'>
                                                                <div className='all-span'>
                                                                    <span className='label'>Payment Mode</span>
                                                                </div>
                                                                <input type="radio" class="form-check-input" name="optradio" />
                                                                <label class="form-check-label" className='radio-labal' for="">Cash</label>
                                                                <input type="radio" class="form-check-input" name="optradio" />
                                                                <label class="form-check-label" className='radio-labal' for="">Online</label>
                                                            </div>
                                                            <div className='input number'>
                                                                <div className='all-span'>
                                                                    <span className='label'>Enter Details</span>
                                                                </div>
                                                                <div className='amount'>
                                                                    <div className='coutry-amount'>
                                                                        <input type='number' placeholder='Enter Your Notes' name='productname' />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='input number'>
                                                                <div className='all-span'>
                                                                    <span className='label'>Reference Bill No.</span>
                                                                </div>
                                                                <div className='amount'>
                                                                    <div className='coutry-amount'>
                                                                        <input type='number' placeholder='Enter Reference Bill No' name='productname' />
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='Stock-btn'>
                                                                <Button className='Save-btn'>Save</Button>
                                                            </div>
                                                        </form>
                                                    </Modal.Body>
                                                </Modal>
                                            </div>
                                            <div className='purchase-content'>
                                                <h6 className='purchases-content' onClick={AddSale}>Purchase</h6>
                                                <h6 className='purchase-return-content'>Purchase Return</h6>
                                                <h6 className='payment-out-content'>Payment Out</h6>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                                <button className="btn" onClick={Addpurchase}>
                                    + Add Purchase
                                </button>
                            </div>
                        </Tab>
                        <Tab eventKey="expenses" title="Expenses">
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
                                            <span></span>
                                            <div className='name'>
                                                <h4>Office Expenses</h4>
                                                <p>17 Jul 2023</p>
                                            </div>
                                        </div>
                                        <div className='amount'>
                                            <h4>₹ 200</h4>
                                        </div>
                                    </div>
                                    <div className='single-user-details'>
                                        <div className='username'>
                                            <span></span>
                                            <div className='name'>
                                                <h4>Rent</h4>
                                                <p>17 Jul 2023</p>
                                            </div>
                                        </div>
                                        <div className='amount'>
                                            <h4>₹ 200</h4>
                                        </div>
                                    </div>
                                    <div className='single-user-details'>
                                        <div className='username'>
                                            <span></span>
                                            <div className='name'>
                                                <h4>Utilities</h4>
                                                <p>17 Jul 2023</p>
                                            </div>
                                        </div>
                                        <div className='amount'>
                                            <h4>₹ 200</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='user-detail-title'>
                                <button className="btn">
                                    + Add Expenses
                                </button>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
                <div className='Sales-details'>
                    <div className='single-user-data'>
                        <div className='username'>
                            <div className='name'>
                                <div className='name-number'>
                                    <h4>Sale Return #5  </h4>
                                    <p>01 Aug 2023</p>
                                </div>
                            </div>
                            <div className='report-setting-btn'>
                                <Button className='report' onClick={EditSale}>Edit</Button>
                                <Modal show={Deleteshow} onHide={DeleteEnteryClose} animation={false} className='Delete-Sales'>
                                    <Modal.Header closeButton>
                                        <Modal.Title>You sure you want to delete this sale return entry?</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Once you delete an entry, you can’t recover it, so think once before deleting</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={DeleteEnteryClose}>
                                            Yes, delete this
                                        </Button>
                                        <Button variant="primary" onClick={DeleteEnteryClose}>
                                            No, don't delete
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                                <button className='report1' onClick={DeleteEntery}>Delete </button>
                            </div>
                        </div>
                        <div className='date-balance-row'>
                            <div className='name'>
                                <span>A</span>
                                <div className='party-name-number'>
                                    <p className='Party-name'>Abc</p>
                                    <p className='phone-number'>123456789</p>
                                </div>
                            </div>

                            <div className='net-balance'>
                                <h4>₹1,018.02</h4>
                                <p><span>Full Paid</span></p>
                            </div>
                        </div>
                        <div className='send-reminder-row'>
                            <h6>Send Reminder<span><img src={Lettericon} alt='' /></span></h6>
                            <div className='send-reminder-btn '>
                                <button className='whatsapp'><img src={Whatsappicon} alt='' />via<span>Whatsapp</span>from your number</button>
                            </div>
                        </div>
                    </div>
                    <div className='Invoice-settled'>
                        <h6>INVOICE SETTLED AGAINST</h6>
                        <div className='name'>
                            <div className='name-number'>
                                <p className='Invoice-No'>INVOICE NO.</p>
                                <p className='Invoice-Gst'><b>#18</b></p>
                            </div>
                            <div className='name-number'>
                                <p className='Invoice-Date'>INVOICE DATE</p>
                                <p className='Invoice-Dates'><b>01 Aug 2023</b></p>
                            </div>
                            <div className='Invoice-Details-btn'>
                                <button className='btn'>View Invoice Details</button>
                            </div>
                        </div>
                    </div>
                    <div className='user-detail-section'>
                        <div className='user-detail-title'>
                            <h5>ITEMS RETURNED</h5>
                        </div>
                        <div className='user-details'>
                            <div className='single-user-details'>
                                <div className='Product-Name'>
                                    <div className='name'>
                                        <h4>Fenugreek seeds</h4>
                                        <p>Qty 1</p>
                                    </div>
                                </div>
                                <div className='amount'>
                                    <h4>₹37.80</h4>
                                    <h6 className='Discount'>Discount 1%</h6>
                                    <h6 className='Gst'>GST 0.1%</h6>
                                </div>
                            </div>
                            <div className='single-user-details'>
                                <div className='Product-Name'>
                                    <div className='name'>
                                        <h4>Suji</h4>
                                        <p>Qty 3</p>
                                    </div>
                                </div>
                                <div className='amount'>
                                    <h4>₹130.50</h4>
                                    <h6 className='Discount'>Discount 3%</h6>
                                    <h6 className='Gst'>GST 0.1%</h6>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
