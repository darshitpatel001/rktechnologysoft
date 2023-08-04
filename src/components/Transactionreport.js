import React from 'react'
import Reportsidebar from "./Reportsidebar";
import {Tab, Tabs} from 'react-bootstrap';
import Transactionicon from "../assets/images/transaction-reports-icon.png"

export default function Transactionreport() {
    return (
        <div className='report-section'>
            <Reportsidebar />
            <div className='transaction-report-section'>
                <div className='transaction-report-header'>
                    <div className='icon-text'>
                        <img src={Transactionicon} />
                        <h2>Transactions Reports</h2>
                    </div>
                    <div className='download-btns'>
                        <button><span className='icon'></span>Download PDF</button>
                    </div>
                </div>
                <div className='customer-supplier-reports'>
                    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3" >
                        <Tab eventKey="customer" title="Customer">
                            Tab content for Home
                        </Tab>
                        <Tab eventKey="supplier" title="Supplier">
                            Tab content for Profile
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}