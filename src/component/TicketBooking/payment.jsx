import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import AboutBackground from "../Assets/about-background.png";
import './payment.css';


const payment = () => {

  return (
    <div className='group-bookingWrapped'>

            <div className="groupBooking-backgroundImage">
                <img src={AboutBackground} alt="" />
            </div>

            < className="groupBooking">

                <div className="booking-subheading">
                    <h2>Payment Gateway</h2>
                </div>

               

        

                <div className="booking-option">
                      <button className="book-button">
                        Pay <FiArrowRight />{" "}
                      </button>
                </div>

            </div>
    </div>
  )
}

export default payment;
