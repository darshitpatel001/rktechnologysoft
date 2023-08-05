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
          <Route path='/addsale' element={<Addsale />} />
          <Route path='/editsale' element={<Editsale />} />
          <Route path='/reports' element={<Transactionreport />} />
          <Route path='/salesreport' element={<SalesReport />} />
          <Route path='/purchasereport' element={<PurchaseReport />} />
          <Route path='/cashbookreport' element={<CashbookReport />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;