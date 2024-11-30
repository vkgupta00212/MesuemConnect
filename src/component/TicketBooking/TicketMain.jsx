import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import './TicketMain.css'

const TicketMain = () => {

  const navigate = useNavigate();

  const singleButtonClick = () => {
    navigate('/singlebooking');
  };

  const groupBookingButton = ()=>{
    navigate('/groupbooking');
  };

  return (
    <div className="ticket-section-container">

      <div className="ticket-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>

        <div className="ticketbookingSection">
          
              <div className="booking-subheading">
                <h2>Museum Ticket Booking</h2>
              </div>

                <div className="booking-option">
                    <button className="single-button" onClick={singleButtonClick}>
                        Single Booking <FiArrowRight />{" "}
                      </button>

                      <button className="group-button" onClick={groupBookingButton}>
                        Group Booking <FiArrowRight />{" "}
                      </button>
                </div>

                <div className="bookinginfo">
                        
                      <h2 class>Important Instructions:</h2>
                  <ul>
                      <li>The e-ticket is not transferable.</li>
                      <li>Entry Fee is not refundable.</li>
                      <li>Visitor shall be required to show photo identity proof in original at the entry to the monument.</li>
                      <li>Ticket is valid </li>
                  </ul>
                </div>
     
      </div>

  

    </div>
  );
};

export default TicketMain;