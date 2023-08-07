import React from 'react'
import Reportsidebar from "./Reportsidebar";
import { Tab, Tabs } from 'react-bootstrap';
import Transactionicon from "../assets/images/transaction-reports-icon.png"
import Pdficon from "../assets/images/pdf.png"

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
                        <button><span className='icon'><img src={Pdficon} /></span>Download PDF</button>
                    </div>
                </div>
                <div className='customer-supplier-reports'>
                    <Tabs defaultActiveKey="customer" id="uncontrolled-tab-example" className="mb-3" >
                        <Tab eventKey="customer" title="Customer">
                            <div className='customer-filter-part filter-part'>
                                <div className='customer-name-filter filter'>
                                    <h5 className='heading'>Customer Name</h5>
                                    <input type='text' placeholder='Search' />
                                </div>
                                <div className='period-filter filter'>
                                    <h5 className='heading'>Period</h5>
                                    <select>
                                        <option value="This Year">This Year</option>
                                        <option value="This Quarter">This Quarter</option>
                                        <option value="This Month">This Month</option>
                                        <option value="This Week">This Week</option>
                                        <option value="Yesterday">Yesterday</option>
                                        <option value="Today">Today</option>
                                        <option value="Customer Date">Customer Date</option>
                                    </select>
                                </div>
                                <div className='start-filter filter'>
                                    <h5 className='heading'>Start</h5>
                                    <input type='date' />
                                </div>
                                <div className='end-filter filter'>
                                    <h5 className='heading'>End</h5>
                                    <input type='date' />
                                </div>
                            </div>
                            <div className='total-entries entries-data'>
                                <h6 className='total-entries-heading'>Total 301 entries</h6>
                                <div className='amount-detail'>
                                    <div className='you-gave-amount tl-amount'>
                                        <h3 className='amount'>₹ 43,991.28</h3>
                                        <p className='title'>You Gave</p>
                                    </div>
                                    <div className='you-got-amount tl-amount'>
                                        <h3 className='amount'>₹ 35,931.96</h3>
                                        <p className='title'>You Got</p>
                                    </div>
                                    <div className='net-balance-amount tl-amount'>
                                        <h3 className='amount'>₹ -8,059.32</h3>
                                        <p className='title'>Net Balance</p>
                                    </div>
                                </div>
                            </div>
                            <div className='entries-datatable transactionreport-datatable'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th className='date'>Date</th>
                                            <th className='customer-name'>Customer Name</th>
                                            <th className='details'>Details</th>
                                            <th className='you-gave'>You Gave</th>
                                            <th className='you-got'>You Got</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='date'>05 Aug 2023</td>
                                            <td className='customer-name'>Ankit Singhania</td>
                                            <td className='details'>-</td>
                                            <td className='you-gave'>₹ 1,720.27</td>
                                            <td className='you-got'>₹ 0</td>
                                        </tr>
                                        <tr>
                                            <td className='date'>05 Aug 2023</td>
                                            <td className='customer-name'>Ankit Singhania</td>
                                            <td className='details'>-</td>
                                            <td className='you-gave'>₹ 1,720.27</td>
                                            <td className='you-got'>₹ 0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Tab>
                        <Tab eventKey="supplier" title="Supplier">
                            <div className='customer-filter-part filter-part'>
                                <div className='customer-name-filter filter'>
                                    <h5 className='heading'>Supplier Name</h5>
                                    <input type='text' placeholder='Search' />
                                </div>
                                <div className='period-filter filter'>
                                    <h5 className='heading'>Period</h5>
                                    <select>
                                        <option value="This Year">This Year</option>
                                        <option value="This Quarter">This Quarter</option>
                                        <option value="This Month">This Month</option>
                                        <option value="This Week">This Week</option>
                                        <option value="Yesterday">Yesterday</option>
                                        <option value="Today">Today</option>
                                        <option value="Supplier Date">Supplier Date</option>
                                    </select>
                                </div>
                                <div className='start-filter filter'>
                                    <h5 className='heading'>Start</h5>
                                    <input type='date' />
                                </div>
                                <div className='end-filter filter'>
                                    <h5 className='heading'>End</h5>
                                    <input type='date' />
                                </div>
                            </div>
                            <div className='total-entries entries-data'>
                                <h6 className='total-entries-heading'>Total 301 entries</h6>
                                <div className='amount-detail'>
                                    <div className='you-gave-amount tl-amount'>
                                        <h3 className='amount'>₹ 43,991.28</h3>
                                        <p className='title'>You Gave</p>
                                    </div>
                                    <div className='you-got-amount tl-amount'>
                                        <h3 className='amount'>₹ 35,931.96</h3>
                                        <p className='title'>You Got</p>
                                    </div>
                                    <div className='net-balance-amount tl-amount'>
                                        <h3 className='amount'>₹ -8,059.32</h3>
                                        <p className='title'>Net Balance</p>
                                    </div>
                                </div>
                            </div>
                            <div className='entries-datatable transactionreport-datatable'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th className='date'>Date</th>
                                            <th className='customer-name'>Customer Name</th>
                                            <th className='details'>Details</th>
                                            <th className='you-gave'>You Gave</th>
                                            <th className='you-got'>You Got</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='date'>05 Aug 2023</td>
                                            <td className='customer-name'>Ankit Singhania</td>
                                            <td className='details'>-</td>
                                            <td className='you-gave'>₹ 1,720.27</td>
                                            <td className='you-got'>₹ 0</td>
                                        </tr>
                                        <tr>
                                            <td className='date'>05 Aug 2023</td>
                                            <td className='customer-name'>Ankit Singhania</td>
                                            <td className='details'>-</td>
                                            <td className='you-gave'>₹ 1,720.27</td>
                                            <td className='you-got'>₹ 0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Tab>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}