import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import useFetchData from './components/fetchapidata';
import TicketComponent from './components/users';
import Priority from './components/priority';
import orderingPriority from './components/orderingPriority';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const apiurl = 'https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers';
  const show = useFetchData(apiurl);

  return (
    <Router>
      <div>
        <Navbar show={show} />
        <Routes>
          <Route path="/" element={<Home show={show} />} />
          <Route path="/tickets" element={<TicketComponent show={show} />} />
          
          <Route path="/priority" element={<Priority show={show} />} />
          <Route path="/orderingpriority" element={<orderingPriority show={show} />} />
          

        </Routes>
      </div>
    </Router>
  );
}

export default App;
