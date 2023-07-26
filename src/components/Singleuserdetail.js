import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Button, Modal } from 'react-bootstrap'
import Fileicon2 from "../assets/images/file-icon-grey.png"
import Settingicon from "../assets/images/setting-grey.png"
import Alarmicon from "../assets/images/circular-alarm-clock-tool.png"
import Whatsappicon from "../assets/images/whatsapp.png"
import Smsicon from "../assets/images/communication.png"
import Lettericon from "../assets/images/letter-i.png"
import Usericon from "../assets/images/user.png"

export default function Singleuserdetail(props) {

    useEffect(() => {

        fetch("http://localhost:3001/customer", {
            method: "GET",
            headers: { "content-type": "application/json" }
        }).then(async (res) => {

            let record = await res.json();

            setSingleCustomerData(record);

        }).catch((err) => {
            console.log("Record not found");
        })

    }, [])

    const disablePastDate = () => {
        const today = new Date();
        const dd = String(today.getDate() + 1).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const currentDate = new Date().toISOString().split("T")[0];

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const customerId = useParams();

    const userId = customerId.id;

    let blankPageId = props.blankPageId;

    if (userId === "" || userId === null || userId === undefined || userId === "customer") {
        blankPageId = "close";
    }
    else {
        blankPageId = "open";
    }

    const [singleCustomerData, setSingleCustomerData] = useState();

    const [firstCharacter, setFirstCharacter] = useState("");
    const [partyName, setPartyName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    /* You Gave Form Start */
    const [gaveAmount, setGaveAmount] = useState();
    const [gaveDescription, setGaveDescription] = useState();

    const youGaveData = {
        gaveamount: gaveAmount,
        gavedescription: gaveDescription,
        gavedate: selectedDate
    }

    let customerYouGaveData = [];
    
    const yougaveform = (e) => {
        
        e.preventDefault();
        

        customerYouGaveData = [...customerYouGaveData, youGaveData];

        console.log(customerYouGaveData);

        console.log(singleCustomerData);

        // if (singleCustomerData.partyname === partyName) {


            // fetch("http://localhost:3001/customer/" + partyName, {
            //     method: "PUT",
            //     headers: { "content-type": "application/json" },
            //     body: JSON.stringify(customerGaveData)
            // }).then((rec) => {

            //     console.log("Data add successfully");

            // }).catch((err) => {
            //     console.log(err.message)
            // })

        // }

    }

    /* You Gave Form End */

    useEffect(() => {

        fetch("http://localhost:3001/customer", {
            method: "GET",
            headers: { "content-type": "application/json" }
        }).then(async (res) => {

            let record = await res.json();

            for (var i = 0; i < record.length; i++) {
                if (record[i].partyname === userId) {
                    setFirstCharacter(record[i].firstCharacter);
                    setPartyName(record[i].partyname);
                    setPhoneNumber(record[i].phonenumber);
                    setSingleCustomerData(record[i])
                }
            }

        }).catch((err) => {
            console.log("Record not found");
        })
    }, [])

    return (
        <div className={'single-user-data ' + blankPageId}>
            <div className='blank-page'>
                <img src={Usericon} alt='' />
                <h4>No customer selected</h4>
            </div>
            <div className='single-user-detail-page'>
                <div className='username'>
                    <div className='name'>
                        <span>{firstCharacter}</span>
                        <div className='name-number'>
                            <h4>{partyName}</h4>
                            <p>{phoneNumber}</p>
                        </div>
                    </div>
                    <div className='report-setting-btn'>
                        <button className='report'><span><img src={Fileicon2} alt='' /></span>Report</button>
                        <button className='setting'><img src={Settingicon} alt='' /></button>
                    </div>
                </div>
                <div className='date-balance-row'>
                    <div className='due-date'>
                        <h3><span><img src={Alarmicon} alt='' /></span>Due Date:</h3>
                        <div className='date'>
                            <p>02 July 2023</p>
                            <button>Edit</button>
                            <input type='date' min={disablePastDate()} />
                        </div>
                    </div>
                    <div className='net-balance'>
                        <h4>Net Balance</h4>
                        <p>You'll Get: <span>₹1,256.25</span></p>
                    </div>
                </div>
                <div className='send-reminder-row'>
                    <h6>Send Reminder<span><img src={Lettericon} alt='' /></span></h6>
                    <div className='send-reminder-btn'>
                        <button className='whatsapp'><img src={Whatsappicon} alt='' />via<span>Whatsapp</span>from your number</button>
                        <button className='sms'><img src={Smsicon} alt='' />via<span>SMS</span>from Khatabook's number</button>
                    </div>
                </div>
                <div className='entries-table-section'>
                    <table>
                        <thead>
                            <tr>
                                <td className='entries'>Entries</td>
                                <td className='you-gave'>You Gave</td>
                                <td className='you-got'>You Got</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='entries'>
                                    <h5 className='date-time'>02 Jul 2023<span className='time'>12:44 AM</span></h5>
                                    <h6 className='balance'>Balance:- <span>1,570.00</span></h6>
                                    <p className='items'><span>391</span>items.</p>
                                </td>
                                <td className='you-gave'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                                <td className='you-got'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                            </tr>
                            <tr>
                                <td className='entries'>
                                    <h5 className='date-time'>02 Jul 2023<span className='time'>12:44 AM</span></h5>
                                    <h6 className='balance'>Balance:- <span>1,570.00</span></h6>
                                    <p className='items'><span>391</span>items.</p>
                                </td>
                                <td className='you-gave'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                                <td className='you-got'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                            </tr>
                            <tr>
                                <td className='entries'>
                                    <h5 className='date-time'>02 Jul 2023<span className='time'>12:44 AM</span></h5>
                                    <h6 className='balance'>Balance:- <span>1,570.00</span></h6>
                                    <p className='items'><span>391</span>items.</p>
                                </td>
                                <td className='you-gave'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                                <td className='you-got'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                            </tr>
                            <tr>
                                <td className='entries'>
                                    <h5 className='date-time'>02 Jul 2023<span className='time'>12:44 AM</span></h5>
                                    <h6 className='balance'>Balance:- <span>1,570.00</span></h6>
                                    <p className='items'><span>391</span>items.</p>
                                </td>
                                <td className='you-gave'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                                <td className='you-got'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                            </tr>
                            <tr>
                                <td className='entries'>
                                    <h5 className='date-time'>02 Jul 2023<span className='time'>12:44 AM</span></h5>
                                    <h6 className='balance'>Balance:- <span>1,570.00</span></h6>
                                    <p className='items'><span>391</span>items.</p>
                                </td>
                                <td className='you-gave'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                                <td className='you-got'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                            </tr>
                            <tr>
                                <td className='entries'>
                                    <h5 className='date-time'>02 Jul 2023<span className='time'>12:44 AM</span></h5>
                                    <h6 className='balance'>Balance:- <span>1,570.00</span></h6>
                                    <p className='items'><span>391</span>items.</p>
                                </td>
                                <td className='you-gave'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                                <td className='you-got'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                            </tr>
                            <tr>
                                <td className='entries'>
                                    <h5 className='date-time'>02 Jul 2023<span className='time'>12:44 AM</span></h5>
                                    <h6 className='balance'>Balance:- <span>1,570.00</span></h6>
                                    <p className='items'><span>391</span>items.</p>
                                </td>
                                <td className='you-gave'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                                <td className='you-got'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                            </tr>
                            <tr>
                                <td className='entries'>
                                    <h5 className='date-time'>02 Jul 2023<span className='time'>12:44 AM</span></h5>
                                    <h6 className='balance'>Balance:- <span>1,570.00</span></h6>
                                    <p className='items'><span>391</span>items.</p>
                                </td>
                                <td className='you-gave'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                                <td className='you-got'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                            </tr>
                            <tr>
                                <td className='entries'>
                                    <h5 className='date-time'>02 Jul 2023<span className='time'>12:44 AM</span></h5>
                                    <h6 className='balance'>Balance:- <span>1,570.00</span></h6>
                                    <p className='items'><span>391</span>items.</p>
                                </td>
                                <td className='you-gave'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                                <td className='you-got'><span className='rupee-icon'>₹</span><span className='amount'>100.00</span><span className='blank'>-</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='you-gave-got-btn'>
                    <Button className='gave' variant="primary" onClick={handleShow}>You Gave ₹</Button>
                    <Button className='got' onClick={handleShow1}>You Got ₹</Button>
                </div>
                <div className='you-gave-form'>
                    <Modal show={show} onHide={handleClose} className='add-customer you-gave-form'>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Entry</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form id='youGaveForm' onSubmit={(e) => yougaveform(e)}>
                                <div className='input number'>
                                    <div className='all-span'>
                                        <span className='label'>Amount</span>
                                    </div>
                                    <div className='amount'>
                                        <div className='coutry-amount'>
                                            <input type='number' placeholder='Enter amount' name='countryamount' onChange={(e) => setGaveAmount(e.target.value)} />
                                            <span className='amount-icon'>₹</span>
                                        </div>
                                        <span className='error'></span>
                                    </div>
                                </div>
                                <div className='input textarea'>
                                    <span className='label'>Description</span>
                                    <textarea placeholder='Enter Details (Item Name, Bill No, Quantity, etc)' rows="6" onChange={(e) => setGaveDescription(e.target.value)}></textarea>
                                    <span className='error'></span>
                                </div>
                                <div className='input calendar'>
                                    <span className='label'>Date</span>
                                    <input type="date" id="datepicker" value={selectedDate} onChange={handleDateChange} max={currentDate} />
                                </div>
                                <input type='submit' value="Save" className='submit-btn' />
                            </form>
                        </Modal.Body>
                    </Modal>
                </div>
                <div className='you-gave-form'>
                    <Modal show={show1} onHide={handleClose1} className='add-customer you-gave-form'>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Entry</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form id='youGaveForm' onSubmit={(e) => yougaveform(e)}>
                                <div className='input number'>
                                    <div className='all-span'>
                                        <span className='label'>Amount</span>
                                    </div>
                                    <div className='amount'>
                                        <div className='coutry-amount'>
                                            <input type='number' placeholder='Enter amount' name='countryamount' onChange={(e) => setGaveAmount(e.target.value)} />
                                            <span className='amount-icon'>₹</span>
                                        </div>
                                        <span className='error'></span>
                                    </div>
                                </div>
                                <div className='input textarea'>
                                    <span className='label'>Description</span>
                                    <textarea placeholder='Enter Details (Item Name, Bill No, Quantity, etc)' rows="6" onChange={(e) => setGaveDescription(e.target.value)}></textarea>
                                    <span className='error'></span>
                                </div>
                                <div className='input calendar'>
                                    <span className='label'>Date</span>
                                    <input type="date" id="datepicker" value={selectedDate} onChange={handleDateChange} max={currentDate} />
                                </div>
                                <input type='submit' value="Save" className='submit-btn' />
                            </form>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
        </div>  
    )
}
