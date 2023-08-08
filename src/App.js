import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './containers/Sidebar';
import Customer from './components/Customer';
import Sales from './components/Sales';
import Cashbook from './components/Cashbook';
import Item from './components/Item';
import Setting from './components/Setting';
import Addsale from './components/Addsale';
import Editsale from './components/Editsale';
import Transactionreport from './components/Transactionreport';
import SalesReport from './components/SalesReport';
import PurchaseReport from './components/PurchaseReport';
import CashbookReport from './components/CashbookReport';
import Gstrone from './components/Gstrone';
import Backupinformation from './components/Backupinformation';
import Helpsupport from './components/Helpsupport';
import Gstrtwo from './components/Gstrtwo';
import Addpurchase from './components/Addpurchase';
import Editpurchase from './components/Editpurchase';
import Gstrthreeb from './components/Gstrthreeb';
import Salereturn from './components/Salereturn';
import PurchaseReturn from './components/PurchaseReturn';

function App() {
  return (
    <section className='dashboard'>
      <BrowserRouter>
        <Sidebar />      
        <Routes>
          <Route path='/:page' element={<Customer />} />
          <Route path='/customer/:id' element={<Customer />} />
          <Route path='/item' element={<Item />} />
          <Route path='/cashbook' element={<Cashbook />} />
          <Route path='/sales' element={<Sales />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/backupinformation' element={<Backupinformation />} />
          <Route path='/helpsupport' element={<Helpsupport />} />
          <Route path='/addsale' element={<Addsale />} />
          <Route path='/editsale' element={<Editsale />} />
          <Route path='/salereturn' element={<Salereturn />} />
          <Route path='/addpurchase' element={<Addpurchase />} />
          <Route path='/editpurchase' element={<Editpurchase />} />
          <Route path='/purchasereturn' element={<PurchaseReturn />} />
          <Route path='/reports' element={<Transactionreport />} />
          <Route path='/salesreport' element={<SalesReport />} />
          <Route path='/purchasereport' element={<PurchaseReport />} />
          <Route path='/cashbookreport' element={<CashbookReport />} />
          <Route path='/gstr1' element={<Gstrone />} />
          <Route path='/gstr2' element={<Gstrtwo />} />
          <Route path='/gstr3b' element={<Gstrthreeb />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;