import React from 'react'
import Reportsidebar from "./Reportsidebar";
import { Tab, Tabs } from 'react-bootstrap';
import Transactionicon from "../assets/images/transaction-reports-icon.png"
import Pdficon from "../assets/images/pdf.png"

export default function Gstrtwo() {
    return (
        <div className='report-section'>
            <Reportsidebar />
            <div className='transaction-report-section gstr-report-section'>
                <div className='transaction-report-header'>
                    <div className='icon-text'>
                        <img src={Transactionicon} />
                        <h2>GSTR-2</h2>
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
                <div className='customer-supplier-reports'>
                    <Tabs defaultActiveKey="Purchase" id="uncontrolled-tab-example" className="mb-3" >
                        <Tab eventKey="Purchase" title="Purchase">
                            <div className='entries-datatable gstrone-datatable'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th className='gstin-uin-no' rowSpan="2">GSTIN/UIN NO.</th>
                                            <th className='invoice'>Invoice
                                                <div className='invoice-list'>
                                                    <th className='party-name'>Party Name</th>
                                                    <th className='no-inner'>No.</th>
                                                    <th className='date-inner'>Date</th>
                                                    <th className='value-inner'>Value</th>
                                                </div>
                                            </th>
                                            <th className='rate'>Rate</th>
                                            <th className='cess-rate'>Cess Rate</th>
                                            <th className='taxable-value'>Taxable Value</th>
                                            <th className='tax-amount'>Tax Amount
                                                <div className='tax-amount-list'>
                                                    <th className='integrated-tax-inner'>Integrated Tax</th>
                                                    <th className='central-tax-inner'>Central Tax</th>
                                                    <th className='state-ut-tax-inner'>State/Ut Tax</th>
                                                    <th className='cess-tax-inner'>Cess</th>
                                                    <th className='additional-tax-inner'>Additional Cess</th>
                                                </div>
                                            </th>
                                            <th className='place-of-supply'>Place of Supply</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='gstin-uin-no' rowSpan="2">29ABCDE1234TMZP</td>
                                            <td className='invoice'>
                                                <div className='invoice-list'>
                                                    <td className='party-name'>Ankit Singhania</td>
                                                    <td className='no-inner'>20</td>
                                                    <td className='date-inner'>05 Aug 2023</td>
                                                    <td className='value-inner'>₹1,720.27</td>
                                                </div>
                                            </td>
                                            <td className='rate'>28%</td>
                                            <td className='cess-rate'>0%</td>
                                            <td className='taxable-value'>₹1,221.44</td>
                                            <td className='tax-amount'>
                                                <div className='tax-amount-list'>
                                                    <td className='integrated-tax-inner'>₹0</td>
                                                    <td className='central-tax-inner'>₹249.41</td>
                                                    <td className='state-ut-tax-inner'>₹249.41</td>
                                                    <td className='cess-tax-inner'>₹0</td>
                                                    <td className='additional-tax-inner'>₹0</td>
                                                </div>
                                            </td>
                                            <td className='place-of-supply'></td>
                                        </tr>
                                        <tr>
                                            <td className='gstin-uin-no' rowSpan="2">29ABCDE1234TMZP</td>
                                            <td className='invoice'>
                                                <div className='invoice-list'>
                                                    <td className='party-name'>Ankit Singhania</td>
                                                    <td className='no-inner'>20</td>
                                                    <td className='date-inner'>05 Aug 2023</td>
                                                    <td className='value-inner'>₹1,720.27</td>
                                                </div>
                                            </td>
                                            <td className='rate'>28%</td>
                                            <td className='cess-rate'>0%</td>
                                            <td className='taxable-value'>₹1,221.44</td>
                                            <td className='tax-amount'>
                                                <div className='tax-amount-list'>
                                                    <td className='integrated-tax-inner'>₹0</td>
                                                    <td className='central-tax-inner'>₹249.41</td>
                                                    <td className='state-ut-tax-inner'>₹249.41</td>
                                                    <td className='cess-tax-inner'>₹0</td>
                                                    <td className='additional-tax-inner'>₹0</td>
                                                </div>
                                            </td>
                                            <td className='place-of-supply'></td>
                                        </tr>
                                        <tr>
                                            <td className='gstin-uin-no' rowSpan="2">29ABCDE1234TMZP</td>
                                            <td className='invoice'>
                                                <div className='invoice-list'>
                                                    <td className='party-name'>Ankit Singhania</td>
                                                    <td className='no-inner'>20</td>
                                                    <td className='date-inner'>05 Aug 2023</td>
                                                    <td className='value-inner'>₹1,720.27</td>
                                                </div>
                                            </td>
                                            <td className='rate'>28%</td>
                                            <td className='cess-rate'>0%</td>
                                            <td className='taxable-value'>₹1,221.44</td>
                                            <td className='tax-amount'>
                                                <div className='tax-amount-list'>
                                                    <td className='integrated-tax-inner'>₹0</td>
                                                    <td className='central-tax-inner'>₹249.41</td>
                                                    <td className='state-ut-tax-inner'>₹249.41</td>
                                                    <td className='cess-tax-inner'>₹0</td>
                                                    <td className='additional-tax-inner'>₹0</td>
                                                </div>
                                            </td>
                                            <td className='place-of-supply'></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Tab>
                        <Tab eventKey="Purchasereturn" title="Purchase Return">
                            <div className='entries-datatable gstrone-datatable salesreturn-datatable'>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th className='gstin-uin-no' rowSpan="2">GSTIN/UIN NO.</th>
                                            <th className='invoice'>DEBIT NOTE
                                                <div className='invoice-list'>
                                                    <th className='party-name'>Party Name</th>
                                                    <th className='date-inner'>Date</th>
                                                    <th className='no-inner'>Invoice No.</th>
                                                    <th className='invoice-date-inner'>Invoice Date</th>
                                                    <th className='value-inner'>Invoice Value</th>
                                                </div>
                                            </th>
                                            <th className='rate'>Rate</th>
                                            <th className='cess-rate'>Cess Rate</th>
                                            <th className='taxable-value'>Taxable Value</th>
                                            <th className='tax-amount'>Tax Amount
                                                <div className='tax-amount-list'>
                                                    <th className='integrated-tax-inner'>Integrated Tax</th>
                                                    <th className='central-tax-inner'>Central Tax</th>
                                                    <th className='state-ut-tax-inner'>State/Ut Tax</th>
                                                    <th className='cess-tax-inner'>Cess</th>
                                                    <th className='additional-tax-inner'>Additional Cess</th>
                                                </div>
                                            </th>
                                            <th className='place-of-supply'>Place of Supply</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='gstin-uin-no' rowSpan="2">29ABCDE1234TMZP</td>
                                            <td className='invoice'>
                                                <div className='invoice-list'>
                                                    <td className='party-name'>Ankit Singhania</td>
                                                    <td className='date-inner'>09 Aug 2023</td>
                                                    <td className='no-inner'>7-1</td>
                                                    <td className='invoice-date-inner'>	05 Aug 2023</td>
                                                    <td className='value-inner'>₹1,018.02</td>
                                                </div>
                                            </td>
                                            <td className='rate'>28%</td>
                                            <td className='cess-rate'>0%</td>
                                            <td className='taxable-value'>₹1,221.44</td>
                                            <td className='tax-amount'>
                                                <div className='tax-amount-list'>
                                                    <td className='integrated-tax-inner'>₹0</td>
                                                    <td className='central-tax-inner'>₹249.41</td>
                                                    <td className='state-ut-tax-inner'>₹249.41</td>
                                                    <td className='cess-tax-inner'>₹0</td>
                                                    <td className='additional-tax-inner'>₹0</td>
                                                </div>
                                            </td>
                                            <td className='place-of-supply'>KARNATAKA</td>
                                        </tr>
                                        <tr>
                                            <td className='gstin-uin-no' rowSpan="2">29ABCDE1234TMZP</td>
                                            <td className='invoice'>
                                                <div className='invoice-list'>
                                                    <td className='party-name'>Ankit Singhania</td>
                                                    <td className='date-inner'>09 Aug 2023</td>
                                                    <td className='no-inner'>7-1</td>
                                                    <td className='invoice-date-inner'>	05 Aug 2023</td>
                                                    <td className='value-inner'>₹1,018.02</td>
                                                </div>
                                            </td>
                                            <td className='rate'>28%</td>
                                            <td className='cess-rate'>0%</td>
                                            <td className='taxable-value'>₹1,221.44</td>
                                            <td className='tax-amount'>
                                                <div className='tax-amount-list'>
                                                    <td className='integrated-tax-inner'>₹0</td>
                                                    <td className='central-tax-inner'>₹249.41</td>
                                                    <td className='state-ut-tax-inner'>₹249.41</td>
                                                    <td className='cess-tax-inner'>₹0</td>
                                                    <td className='additional-tax-inner'>₹0</td>
                                                </div>
                                            </td>
                                            <td className='place-of-supply'>KARNATAKA</td>
                                        </tr>
                                        <tr>
                                            <td className='gstin-uin-no' rowSpan="2">29ABCDE1234TMZP</td>
                                            <td className='invoice'>
                                                <div className='invoice-list'>
                                                    <td className='party-name'>Ankit Singhania</td>
                                                    <td className='date-inner'>09 Aug 2023</td>
                                                    <td className='no-inner'>7-1</td>
                                                    <td className='invoice-date-inner'>	05 Aug 2023</td>
                                                    <td className='value-inner'>₹1,018.02</td>
                                                </div>
                                            </td>
                                            <td className='rate'>28%</td>
                                            <td className='cess-rate'>0%</td>
                                            <td className='taxable-value'>₹1,221.44</td>
                                            <td className='tax-amount'>
                                                <div className='tax-amount-list'>
                                                    <td className='integrated-tax-inner'>₹0</td>
                                                    <td className='central-tax-inner'>₹249.41</td>
                                                    <td className='state-ut-tax-inner'>₹249.41</td>
                                                    <td className='cess-tax-inner'>₹0</td>
                                                    <td className='additional-tax-inner'>₹0</td>
                                                </div>
                                            </td>
                                            <td className='place-of-supply'>KARNATAKA</td>
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
