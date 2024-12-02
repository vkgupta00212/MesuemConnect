import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
import Home from "./component/Home/Home";
import Ticket from "./component/TicketBooking/TicketMain";
import SingleBooking from "./component/TicketBooking/singleBooking";
import GroupBooking from "./component/TicketBooking/groupBooking";
import Work from "./component/Work/Work";
import Canteen from "./component/Canteen/Canteen";
import Contact from "./component/Maps/maps";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/work" element={<Work />} />
          <Route path="/canteen" element={<Canteen />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/singlebooking" element={<SingleBooking />} />
          <Route path="/groupbooking" element={<GroupBooking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
