import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './containers/Sidebar';
import Item from './components/Cashbook';
import Customer from './components/Customer';
import Sales from './components/Sales';

function App() {
  return (
    <section className='dashboard'>
      <BrowserRouter>
        <Sidebar />      
        <Routes>
          <Route path='/:page' element={<Customer />} />
          <Route path='/customer/:id' element={<Customer />} />
          <Route path='/cashbook' element={<Item />} />
          <Route path='/sales' element={<Sales />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;