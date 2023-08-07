import React from 'react'
import Transactionicon from "../assets/images/transaction-reports-icon.png"
import Salesicon from "../assets/images/sales-reports-icon.png"
import Purchaseicon from "../assets/images/purchase-reports-icon.png"
import Cashbookicon from "../assets/images/cashbook-reports-icon.png"
import Gstricon1 from "../assets/images/gstr-1.png"
import Gstricon2 from "../assets/images/gstr-2.png"
import Gstricon3b from "../assets/images/gstr-3B.png"
import { Link } from 'react-router-dom'

export default function Reportsidebar() {
  return (
    <div className='report-sidebar'>
      <div className='report-heading'>
        <h3>Reports</h3>
      </div>
      <div className='report-filter'>
        <select>
          <option value="All">All</option>
          <option value="Parties Reports">Parties Reports</option>
          <option value="Bills Reports">Bills Reports</option>
          <option value="Gst Reports">Gst Reports</option>
        </select>
      </div>
      <div className='parties-heading heading'>
        <h3>Parties Reports</h3>
      </div>
      <Link to="/reports">
        <div className='parties-reports-filter filter'>
          <img src={Transactionicon} />
          <div className='transaction-report'>
            <h4>Transaction Report</h4>
            <p>All customers, All Transactions</p>
          </div>
        </div>
      </Link>
      <div className='bills-heading heading'>
        <h3>Bills Reports</h3>
      </div>
      <div className='bills-reports-filter filter'>
        <Link to="/salesreport">
          <div className='sales-report report'>
            <img src={Salesicon} />
            <h4>Sales Report</h4>
          </div>
        </Link>
        <Link to="/purchasereport">
          <div className='purchase-report report'>
            <img src={Purchaseicon} />
            <h4>Purchase Report</h4>
          </div>
        </Link>
        <Link to="/cashbookreport">
          <div className='cashbook-report report'>
            <img src={Cashbookicon} />
            <h4>Cashbook Report</h4>
          </div>
        </Link>
      </div>
      <div className='gst-heading heading'>
        <h3>GST Reports</h3>
      </div>
      <div className='gst-reports-filter filter'>
        <Link to="/gstr1">
          <div className='gstr1-report report'>
            <img src={Gstricon1} />
            <h4>GSTR-1</h4>
          </div>
        </Link>
        <div className='gstr2-report report'>
          <img src={Gstricon2} />
          <h4>GSTR-2</h4>
        </div>
        <Link to="/gstr3b">
          <div className='gstr3-report report'>
            <img src={Gstricon3b} />
            <h4>GSTR-3B</h4>
          </div>
        </Link>
      </div>
    </div>
  )
}