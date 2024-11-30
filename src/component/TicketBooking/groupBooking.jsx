import React from 'react';
import { FiArrowRight } from "react-icons/fi";
import AboutBackground from "../Assets/about-background.png";
import './groupBooking.css';


const groupBooking = () => {

  return (
    <div className='group-bookingWrapped'>

            <div className="groupBooking-backgroundImage">
                <img src={AboutBackground} alt="" />
            </div>

            <div className="groupBooking">

                <div className="booking-subheading">
                    <h2>Museum Ticket Booking(Group)</h2>
                </div>

                <div className="group-input">

                    <div className="wrap-inp">
                        <label htmlFor="Name">Name</label>
                        <input type="text" name='Name' required/>
                    </div>

                    <div className="wrap-inp">
                        <label htmlFor="DOB">DOB</label>
                        <input type="date" name='DOB' required/>
                    </div>

                    <div className="wrap-inp">
                            <label for="sex">Sex</label>
                            <select id="sex" name="sex" required>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                    </div>

                    <div className="wrap-inp">
                        <label for="aadhaar">Aadhaar Number</label>
                        <input type="text" id="aadhaar" name="aadhaar" pattern="\d{12}" title="Aadhaar number must be 12 digits" required/>
                    </div>

                    <div className="wrap-inp">
                        <label for="visitPlace">Place of Visit</label>
                            <select id="visitPlace" name="visitPlace" required>
                                <option value="Manav Sanghralaya">Manav Sanghralaya</option>
                                <option value="Library">Library</option>
                                <option value="Auditorium">Auditorium</option>
                            </select>
                    </div>

                    <div className="wrap-inp">
                        <label for="date">Date of Visit</label>
                        <input type="date" id="date" name="date" required/>
                    </div>


                    <div className="wrap-inp">
                        <label for="time">Time Slot</label>
                        <input type="time" id="time" name="time" required/>
                    </div>

                </div>

                <div className="booking-option">
                    <button className="calculate-button">
                        Calculate Cost <FiArrowRight />{" "}
                      </button>

                      <button className="book-button">
                        Book Ticket <FiArrowRight />{" "}
                      </button>
                </div>

            </div>
    </div>
  )
}

export default groupBooking;
