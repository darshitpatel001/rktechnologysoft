import React from 'react'
import Reportsidebar from "./Reportsidebar";
import { Tab, Tabs } from 'react-bootstrap';
import Transactionicon from "../assets/images/transaction-reports-icon.png"
import Pdficon from "../assets/images/pdf.png"

export default function Gstrthreeb() {
    return (
        <div className='report-section'>
            <Reportsidebar />
            <div className='transaction-report-section gstr-report-section'>
                <div className='transaction-report-header'>
                    <div className='icon-text'>
                        <img src={Transactionicon} />
                        <h2>GSTR-1</h2>
                    </div>
                    <div className='download-btns'>
                        <button><span className='icon'><img src={Pdficon} /></span>Download PDF</button>
                    </div>
                </div>
                <div className='customer-filter-part filter-part'>
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
                <div className='table-first-heading table-heading'>
                    <h4 className='heading'>1. Details Of Outward Supplies And Inward Supplies Liable To Reverse Charge</h4>
                </div>
                <div className='entries-datatable transactionreport-datatable salesreport-datatable gstrthreeb-datatable'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='nature-of-supplies'>Nature Of Supplies</th>
                                <th className='taxable-value'>Total Taxable Value (₹)</th>
                                <th className='integrated-tax'>Integrated Tax (₹)</th>
                                <th className='central-tax'>Central Tax (₹)</th>
                                <th className='state-ut-tax'>State/Ut Tax (₹)</th>
                                <th className='cess'>Cess (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='nature-of-supplies'><span>Outward taxable supplies (other than zero rated, nil rated and exempted)</span></td>
                                <td className='taxable-value'>₹3726.08</td>
                                <td className='integrated-tax'>₹130.21</td>
                                <td className='central-tax'>₹671.4</td>
                                <td className='state-ut-tax'>₹671.4</td>
                                <td className='cess'>₹0</td>
                            </tr>
                            <tr>
                                <td className='nature-of-supplies'><span>Outward taxable supplies (other than zero rated, nil rated and exempted)</span></td>
                                <td className='taxable-value'>₹3726.08</td>
                                <td className='integrated-tax'>₹130.21</td>
                                <td className='central-tax'>₹671.4</td>
                                <td className='state-ut-tax'>₹671.4</td>
                                <td className='cess'>₹0</td>
                            </tr>
                            <tr>
                                <td className='nature-of-supplies'><span>Outward taxable supplies (other than zero rated, nil rated and exempted)</span></td>
                                <td className='taxable-value'>₹3726.08</td>
                                <td className='integrated-tax'>₹130.21</td>
                                <td className='central-tax'>₹671.4</td>
                                <td className='state-ut-tax'>₹671.4</td>
                                <td className='cess'>₹0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='table-second-heading table-heading'>
                    <h4 className='heading'>2. Details Of Inter-state Supplies Made To Unregistered Persons, Composition Dealer And Uin Holders</h4>
                </div>
                <div className='entries-datatable gstrone-datatable gstrthreeb-datatable-inner'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='place-of-supply' rowSpan="2">Place Of Supply(state/ut)</th>
                                <th className='supplies-unregistered-persons'>Supplies Made To Unregistered Persons
                                    <div className='supplies-unregistered-persons-list'>
                                        <th className='taxable-value-inner'>Total Taxable Value(₹)</th>
                                        <th className='integrated-tax'>Amount Of Integrated Tax(₹)</th>
                                    </div>
                                </th>
                                <th className='supplies-unregistered-persons'>Supplies Made To Composition Taxable Persons
                                    <div className='supplies-unregistered-persons-list'>
                                        <th className='taxable-value-inner'>Total Taxable Value(₹)</th>
                                        <th className='integrated-tax'>Amount Of Integrated Tax(₹)</th>
                                    </div>
                                </th>
                                <th className='supplies-unregistered-persons'>Supplies Made To Uin Holders
                                    <div className='supplies-unregistered-persons-list'>
                                        <th className='taxable-value-inner'>Total Taxable Value(₹)</th>
                                        <th className='integrated-tax'>Amount Of Integrated Tax(₹)</th>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className='table-three-heading table-heading'>
                    <h4 className='heading'>3. Details Of Eligible Input Tax Credit</h4>
                </div>
                <div className='table-one-title table-title'>
                    <h4 className='title'>(A) ITC Available(Whether in full or part)</h4>
                </div>
                <div className='entries-datatable transactionreport-datatable salesreport-datatable gstrthreeb-datatable gstrthreeb-datatable-2'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='nature-of-supplies'>DETAILS</th>
                                <th className='integrated-tax'>Integrated Tax (₹)</th>
                                <th className='central-tax'>Central Tax (₹)</th>
                                <th className='state-ut-tax'>State/Ut Tax (₹)</th>
                                <th className='cess'>Cess (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='nature-of-supplies'><span>(3) Inward service liable for reverse charge (other than 1 & 2 above)</span></td>
                                <td className='integrated-tax'>₹130.21</td>
                                <td className='central-tax'>₹671.4</td>
                                <td className='state-ut-tax'>₹671.4</td>
                                <td className='cess'>₹0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='table-two-title table-title'>
                    <h4 className='title'>(B) Ineligible ITC</h4>
                </div>
                <div className='entries-datatable transactionreport-datatable salesreport-datatable gstrthreeb-datatable gstrthreeb-datatable-2 gstrthreeb-datatable-3'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='nature-of-supplies'>DETAILS</th>
                                <th className='integrated-tax'>Integrated Tax (₹)</th>
                                <th className='central-tax'>Central Tax (₹)</th>
                                <th className='state-ut-tax'>State/Ut Tax (₹)</th>
                                <th className='cess'>Cess (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='nature-of-supplies'><span>(1) As per section 17(5)</span></td>
                                <td className='integrated-tax'>₹130.21</td>
                                <td className='central-tax'>₹671.4</td>
                                <td className='state-ut-tax'>₹671.4</td>
                                <td className='cess'>₹0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='table-four-heading table-heading'>
                    <h4 className='heading'>4. details Of Exempt, Nil-rated & Non-gst Inward Supplies</h4>
                </div>
                <div className='entries-datatable transactionreport-datatable salesreport-datatable gstrthreeb-datatable gstrthreeb-datatable-2 gstrthreeb-datatable-4'>
                    <table class="table">
                        <thead>
                            <tr>
                                <th className='nature-of-supplies'>Nature Of Supplies</th>
                                <th className='integrated-tax'>Inter State Supplies</th>
                                <th className='central-tax'>Intra State Supplies</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='nature-of-supplies'><span>From a supplier under Composition/exempt/nil-rated scheme</span></td>
                                <td className='integrated-tax'>₹0</td>
                                <td className='central-tax'>₹0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}