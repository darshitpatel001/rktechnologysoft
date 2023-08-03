import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './containers/Sidebar';
import Customer from './components/Customer';
import Sales from './components/Sales';
import Staff from './components/Staff';
import Cashbook from './components/Cashbook';
import Item from './components/Item';
import Setting from './components/Setting';
import Addsale from './components/Addsale';
import Editsale from './components/Editsale';

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
          <Route path='/staff' element={<Staff />} />
          <Route path='/setting' element={<Setting />} />
          <Route path='/addsale' element={<Addsale />} />
          <Route path='/editsale' element={<Editsale />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;