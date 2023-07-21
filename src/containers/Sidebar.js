import React from 'react'
import Logo from "../assets/images/rk-cmyk.png"
import Customericon from "../assets/images/customers-grey.png"
import Suppliersicon from "../assets/images/grey-truck.png"
import Itemsicon from "../assets/images/item-grey.png"
import Salesicon from "../assets/images/sales-grey.png"
import Purchaseicon from "../assets/images/purchase-grey.png"
import Expensesicon from "../assets/images/expense-grey.png"
import Cashbookicon from "../assets/images/casebook-grey.png"
import Reportsicon from "../assets/images/report-grey.png"
import Stafficon from "../assets/images/staff-grey.png"
import Settingsicon from "../assets/images/setting-grey.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
      <section className='sidebar-section'>
        <div className='software-logo'>
          <img src={Logo} alt='logo' />
        </div>
        <div className='user-box'>
          <div className='user-icon'>
            <h5>RK</h5>
          </div>
          <div className='user-name'>
            <h2>RK Technology</h2>
          </div>
          <div className='arrow'>
            <FontAwesomeIcon icon={faAngleUp} />
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
        <div className='parties-menu menu'>
          <h5>Parties</h5>
          <ul>
            <li>
              <Link to="/customer"><span><img src={Customericon} alt='icon' /></span>Customers</Link>
            </li>
            <li>
              <Link to="/"><span><img src={Suppliersicon} alt='icon' /></span>Suppliers</Link>
            </li>
          </ul>
        </div>
        <div className='management-inventory-menu menu'>
          <h5>Management Inventory</h5>
          <ul>
            <li>
              <Link to="/"><span><img src={Itemsicon} alt='icon' /></span>Item</Link>
            </li>
          </ul>
        </div>
        <div className='bills-menu menu'>
          <h5>Bills</h5>
          <ul>
            <li>
              <Link to="/sales"><span><img src={Salesicon} alt='icon' /></span>Sales</Link>
            </li>
            <li>
              <Link to="/"><span><img src={Purchaseicon} alt='icon' /></span>Purchase</Link>
            </li>
            <li>
              <Link to="/"><span><img src={Expensesicon} alt='icon' /></span>Expenses</Link>
            </li>
            <li>
              <Link to="/cashbook"><span><img src={Cashbookicon} alt='icon' /></span>Cashbook</Link>
            </li>
          </ul>
        </div>
        <div className='others-menu menu'>
          <h5>Others</h5>
          <ul>
            <li>
              <Link to="/"><span><img src={Reportsicon} alt='icon' /></span>Reports</Link>
            </li>
            <li>
              <Link to="/"><span><img src={Stafficon} alt='icon' /></span>Staff</Link>
            </li>
            <li>
              <Link to="/"><span><img src={Settingsicon} alt='icon' /></span>Settings</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}