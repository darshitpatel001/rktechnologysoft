import React from 'react'
import Reportsidebar from "./Reportsidebar";
import Transactionicon from "../assets/images/purchase-reports-icon.png"
import Pdficon from "../assets/images/pdf.png"

export default function PurchaseReport() {
    return (
        <>
            <div className='report-section'>
                <Reportsidebar />
                <div className='transaction-report-section'>
                    <div className='transaction-report-header'>
                        <div className='icon-text'>
                            <img src={Transactionicon} />
                            <h2>Purchase Report</h2>
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
                                <div className='you-gavee-amount tl-amount'>
                                    <h3 className='amount'>₹ 43,991.28</h3>
                                    <p className='title'>Total In</p>
                                </div>
                                <div className='you-gott-amount tl-amount'>
                                    <h3 className='amount'>₹ 35,931.96</h3>
                                    <p className='title'>Total Out</p>
                                </div>
                                <div className='net-balancee-amount tl-amount'>
                                    <h3 className='amount'>₹ -8,059.32</h3>
                                    <p className='title'>Net Balance</p>
                                </div>
                            </div>
                        </div>
                        <div className='entries-datatable transactionreport-datatable salesreport-datatable'>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th className='date'>DATE</th>
                                        <th className='invoice-name'>INVOICE</th>
                                        <th className='party-name'>PARTY NAME</th>
                                        <th className='transactions'>TRANSACTIONS</th>
                                        <th className='payment'>PAYMENT</th>
                                        <th className='amount'>AMOUNT</th>
                                        <th className='balance'>BALANCE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='date'>09 Aug 2023</td>
                                        <td className='invoice-name'>7-1</td>
                                        <td className='party-name'>Ankit Singhania</td>
                                        <td className='transactions'>Sale Return</td>
                                        <td className='payment'>Online</td>
                                        <td className='amount'>₹581.41</td>
                                        <td className='balance'>₹0</td>
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