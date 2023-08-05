import React from 'react'
import Reportsidebar from "./Reportsidebar";
import Transactionicon from "../assets/images/cashbook-reports-icon.png"
import Pdficon from "../assets/images/pdf.png"

export default function CashbookReport() {
  return (
    <>
 <div className='report-section'>
                <Reportsidebar />
                <div className='transaction-report-section'>
                    <div className='transaction-report-header'>
                        <div className='icon-text'>
                            <img src={Transactionicon} />
                            <h2>Cashbook Report</h2>
                        </div>
                        <div className='download-btns'>
                            <button><span className='icon'><img src={Pdficon} /></span>Download PDF</button>
                        </div>
                    </div>
                    <div className='customer-supplier-reports'>
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
                                    <p className='title'>Total In</p>
                                </div>
                                <div className='you-got-amount tl-amount'>
                                    <h3 className='amount'>₹ 35,931.96</h3>
                                    <p className='title'>Total Out</p>
                                </div>
                                <div className='net-balance-amount tl-amount'>
                                    <h3 className='amount'>₹ -8,059.32</h3>
                                    <p className='title'>Net Balance</p>
                                </div>
                            </div>
                        </div>
                        <div className='entries-datatable cashbook-datatable'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th className='date'>DATE</th>
                                        <th className='totel-on'>TOTAL IN</th>
                                        <th className='totel-out'>TOTAL OUT</th>
                                        <th className='balance'>BALANCE</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='date'>09 Aug 2023</td>
                                        <td className='totel-on'>7-1</td>
                                        <td className='totel-out'>Ankit Singhania</td>
                                        <td className='balance'>Sale Return</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
