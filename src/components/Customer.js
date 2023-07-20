import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Tab, Tabs } from 'react-bootstrap'
import Arrow1 from "../assets/images/Arrow-1.png"
import Arrow2 from "../assets/images/Arrow-2.png"
import Fileicon from "../assets/images/file-icon.png"
import Searchicon from "../assets/images/Group-38.png"
import Filtericon from "../assets/images/Group-41.png"
import Sorticon from "../assets/images/Group-44.png"
import Downicon from "../assets/images/Vector.png"
import Downarrow from "../assets/images/down-arrow.png"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Singleuserdetail from './Singleuserdetail'

export default function Customer() {

  const [show, setShow] = useState(false);  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [partyName, setPartyName] = useState("");
  const [partyNameError, setPartyNameError] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [countryAmount, setCountryAmount] = useState("");
  const [countryAmountError, setCountryAmountError] = useState("");
  const [gaveGot, setGaveGot] = useState("You'll Gave");
  const [gstin, setGstin] = useState("");
  const [gstinError, setGstinError] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [billingAddressError, setBillingAddressError] = useState("");
  const [areaLocality, setareaLocality] = useState("");
  const [areaLocalityError, setareaLocalityError] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [pinCodeError, setPinCodeError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");

  const [customerDetail, setCustomerDetail] = useState();

  const pageId = useParams();

  const pageIdText = pageId.page;

  const [blankPage, setBlankPage] = useState();

  useEffect(() => {

    fetch("http://localhost:3001/customer", {
      method: "GET",
      headers: { "content-type": "application/json" }
    }).then(async (res) => {

      let record = await res.json();

      setCustomerDetail(record);

    }).catch((err) => {
      console.log("Record not found");
    })

    if (pageIdText === "customer") {
      setBlankPage("open");
    }
    else {
      setBlankPage("close");
    }

  }, [])

  const customerData = (e) => {

    e.preventDefault();

    let character = partyName.slice(0, 1);

    if (partyName === "" || phoneNumber === "" || countryAmount === "" || gstin === "" || billingAddress === "" || areaLocality === "" || pinCode === "" || city === "" || state === "") {

      if (partyName === "") {
        setPartyNameError("Please fill this field. This field is required.");
      }
      else {
        setPartyNameError("")
      }
      if (phoneNumber === "") {
        setPhoneNumberError("Please fill this field. This field is required.");
      }
      else {
        setPhoneNumberError("")
      }
      if (countryAmount === "") {
        setCountryAmountError("Please fill this field. This field is required.");
      }
      else {
        setCountryAmountError("")
      }
      if (gstin === "") {
        setGstinError("Please fill this field. This field is required.");
      }
      else {
        setGstinError("")
      }
      if (billingAddress === "") {
        setBillingAddressError("Please fill this field. This field is required.");
      }
      else {
        setBillingAddressError("")
      }
      if (areaLocality === "") {
        setareaLocalityError("Please fill this field. This field is required.");
      }
      else {
        setareaLocalityError("")
      }
      if (pinCode === "") {
        setPinCodeError("Please fill this field. This field is required.");
      }
      else {
        setPinCodeError("")
      }
      if (city === "") {
        setCityError("Please fill this field. This field is required.");
      }
      else {
        setCityError("")
      }
      if (state === "") {
        setStateError("Please fill this field. This field is required.");
      }
      else {
        setStateError("")
      }

    }
    else {

      const customerRecord = {
        firstCharacter: character,
        partyname: partyName,
        phonenumber: phoneNumber,
        countryamount: countryAmount,
        gavegot: gaveGot,
        gstin: gstin,
        billingaddress: billingAddress,
        arealocality: areaLocality,
        pincode: pinCode,
        city: city,
        state: state
      }

      fetch("http://localhost:3001/customer", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(customerRecord)
      }).then((res) => {
        console.log("Blog record uploaded");
      }).catch((err) => {
        console.log("Blog record not uploaded");
      })
      setShow("")

      setPartyName("");
      setPhoneNumber("");
      setCountryAmount("");
      setGstin("");
      setBillingAddress("");
      setareaLocality("");
      setPinCode("");
      setCity("");
      setState("");

      window.location.reload(true)
    }

  }

  return (
    <section className='customer-section'>
      <div className='detail-section'>
        <Tabs defaultActiveKey="customers" id="uncontrolled-tab-example" className="mb-3" >
          <Tab eventKey="customers" title="Customers">
            <div className='amount-row'>
              <div className='you-give-amount amount'>
                <h3>You'll Give:</h3>
                <h6>₹0</h6>
                <span><img src={Arrow1} alt='arrow' /></span>
              </div>
              <div className='you-get-amount amount'>
                <h3>You'll Get:</h3>
                <h6>₹40,983</h6>
                <span><img src={Arrow2} alt='arrow' /></span>
              </div>
              <div className='report-btn'>
                <button><span><img src={Fileicon} alt='icon' /></span>View Report</button>
              </div>
            </div>
            <div className='filter-row'>
              <div className='search-filter filter'>
                <h4>Search for Customer</h4>
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
                    <option>Select</option>
                    <option>All</option>
                    <option>You'll Give</option>
                    <option>You'll Get</option>
                    <option>Settled</option>
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
                <h5>Name</h5>
                <h5>Amount</h5>
              </div>
              <div className='user-details'>
                {
                  customerDetail && customerDetail.map((value, index) => {
                    return (
                      <a href={"/customer/" + value.partyname}>
                        <div className='single-user-details'>
                          <div className='username'>
                            <span>{value.firstCharacter}</span>
                            <div className='name'>
                              <h4>{value.partyname}</h4>
                              <p>11 days ago</p>
                            </div>
                          </div>
                          <div className='amount'>
                            <h4>₹ {value.countryamount}</h4>
                            <p>{value.gavegot}</p>
                          </div>
                        </div>
                      </a>
                    )
                  })
                }
              </div>
              <div className='add-customer'>
                <Button variant="primary" onClick={handleShow}>+ Add Customer</Button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="suppliers" title="Suppliers">
            Tab content for Profile
          </Tab>
        </Tabs>
      </div>
      <Singleuserdetail blankPageId={blankPage} />
      <div className='forms'>
        <div className='add-customer-form'>
          <Modal show={show} onHide={handleClose} className='add-customer'>
            <Modal.Header closeButton>
              <Modal.Title>Add New Party</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form id='addcustomerform' onSubmit={(e) => customerData(e)} >
                <div className='input name'>
                  <span className='label'>Party Name</span>
                  <input type='text' placeholder='Enter Party Name' name='partyname' value={partyName} onChange={(e) => setPartyName(e.target.value)} />
                  <span className='error'>{partyNameError}</span>
                </div>
                <div className='input number'>
                  <div className='all-span'>
                    <span className='label'>Phone Number</span>
                  </div>
                  <div className='phone-number'>
                    <input type='number' placeholder='Enter Phone Number' name='phonenumber' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <span className='country'>+91</span>
                  </div>
                  <span className='error'>{phoneNumberError}</span>
                </div>
                <div className='input number'>
                  <div className='all-span'>
                    <span className='label'>Opening Balance</span>
                  </div>
                  <div className='amount'>
                    <div className='coutry-amount'>
                      <input type='number' placeholder='Enter amount' name='countryamount' value={countryAmount} onChange={(e) => setCountryAmount(e.target.value)} />
                      <span className='amount-icon'>₹</span>
                    </div>
                    <div className='select'>
                      <select name='gavegot' onChange={(e) => setGaveGot(e.target.value)}>
                        <option>You Gave</option>
                        <option>You Got</option>
                      </select>
                      <img src={Downarrow} alt='' />
                    </div>
                    <span className='error'>{countryAmountError}</span>
                  </div>
                </div>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Add GSTIN & Address</Accordion.Header>
                    <Accordion.Body>
                      <div className='input gstin'>
                        <span className='label'>Gstin</span>
                        <input type='text' placeholder='Add GSTIN' name='gstin' value={gstin} onChange={(e) => setGstin(e.target.value)} />
                        <span className='error'>{gstinError}</span>
                      </div>
                      <div className='billing-address'>
                        <h2>Billing Address</h2>
                        <div className='input flat-number'>
                          <span className='label'>Flat / Building Number</span>
                          <input type='text' name='billingaddress' value={billingAddress} onChange={(e) => setBillingAddress(e.target.value)} />
                          <span className='error'>{billingAddressError}</span>
                        </div>
                        <div className='input area-locality'>
                          <span className='label'>Area / Locality</span>
                          <input type='text' className='arealocality' value={areaLocality} onChange={(e) => setareaLocality(e.target.value)} />
                          <span className='error'>{areaLocalityError}</span>
                        </div>
                        <div className='input pin-code'>
                          <span className='label'>PIN Code</span>
                          <input type='number' name='pincode' value={pinCode} onChange={(e) => setPinCode(e.target.value)} />
                          <span className='error'>{pinCodeError}</span>
                        </div>
                        <div className='city-state'>
                          <div className='input city'>
                            <span className='label'>City</span>
                            <input type='text' name='city' value={city} onChange={(e) => setCity(e.target.value)} />
                            <span className='error'>{cityError}</span>
                          </div>
                          <div className='input state'>
                            <span className='label'>State</span>
                            <input type='text' name='state' value={state} onChange={(e) => setState(e.target.value)} />
                            <span className='error'>{stateError}</span>
                          </div>
                        </div>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <input type='submit' value="Add Customer" className='submit-btn' />
              </form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </section>
  )
}