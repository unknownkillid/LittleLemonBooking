import './App.css';
import navbarLogo from './assets/littlelemonlogo.png'
import mainPicrure from './assets/Mario.jpg'
import testimonialsPic from './assets/2.jpeg'
import test2Pic from './assets/pexels-photo-3225416.jpeg'
import test3pic from './assets/pexels-photo-3261141.jpeg'
import test4Pic from './assets/pexels-photo-3375230.jpeg'
import lastpics from './assets/restauranfood.jpg'
import lastpics2 from './assets/res.jpg'
import footerpic from './assets/restaurantfooter.jpg'
import React, { useState } from 'react';

function resopen() {
  document.getElementById('reserveSection').classList.add('display')
  document.getElementById('section1').classList.add('none')
  document.getElementById('reserveSection').classList.remove('none')
}

const body = document.body

function App() {
  const [occasion, setOccasion] = useState('');
  const [numberOfDinners, setNumberOfDinners] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [dateValue, setDateValue] = useState('');

  const popDown = () => {
    document.getElementById('pop').classList.add('none')
    body.style.overflowY = 'scroll'
    document.getElementById('section1').classList.remove('none')
  }



  const handleReserveNow = () => {
    let isValid = true;

    const indoorSeatingChecked = document.getElementById('check1').checked;
    const outdoorSeatingChecked = document.getElementById('check2').checked;
    if (!indoorSeatingChecked && !outdoorSeatingChecked) {
      isValid = false;
      document.getElementById('textcontent').textContent = "You missed check boxes"
      document.getElementById('check1').classList.add('borseat');
      document.getElementById('check2').classList.add('borseat');
    } else {
      document.getElementById('textcontent').textContent = ""
      document.getElementById('check1').classList.remove('borseat');
      document.getElementById('check2').classList.remove('borseat');
    }

    if (dateValue === '') {
      isValid = false;
      document.getElementById('dateInputt').classList.add('invalid');
    } else {
      document.getElementById('dateInputt').classList.remove('invalid');
    }

    if (occasion === '') {
      isValid = false;
      document.getElementById('birthday').classList.add('invalid');
    } else {
      document.getElementById('birthday').classList.remove('invalid');
    }

    if (numberOfDinners === '') {
      isValid = false;
      document.getElementById('dinner').classList.add('invalid');
    } else {
      document.getElementById('dinner').classList.remove('invalid');
    }

    if (selectedTime === '') {
      isValid = false;
      document.getElementById('time').classList.add('invalid');
    } else {
      document.getElementById('time').classList.remove('invalid');
    }

    if (isValid) {
      body.style.overflow = 'hidden'
      document.getElementById('pop').classList.add('display')
      document.getElementById('pop').classList.remove('none')
      document.getElementById('reserveSection').classList.add('none')
      console.log('Form submitted');
    }
  };

  return (
    <div className="App">

      <header>

        <div className="navbar-container">
          <img src={navbarLogo} alt="" className="navbarlogo" />
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Menu</a>
          <a href="#">Reservations</a>
          <a href="#">OlderOnline</a>
          <a href="#">Login</a>
        </div>

      </header>

      <div className="popup" id='pop'>
        <div className="contentpop">
          <h1>Table Reserved!</h1>
          <h2>Thank you for using our service</h2>
          <button className='okay' id='okaybtn' onClick={popDown}>Done</button>
        </div>
      </div>

      <section className='reserveSection' id='reserveSection'>
        <h1>Reserve Table</h1>
        <div className="reserveCotnainers">
          <div className="reservFirstContainer">
            <form action="#">
              <div className="checkDiv">
                <input type="checkbox" id='check1' className='inSeatCheck' />
                <label htmlFor="check1">Indoor seating</label>
              </div>
              <br />
              <label htmlFor="dateInput">Date*</label>
              <input
                type="date"
                id='dateInputt'
                placeholder='Date'
                className='dateinput'
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
              />
              <br />
              <label htmlFor="birthday">Occasion*</label>
              <select name="occasion" id="birthday" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option selected hidden>Occasion</option>
                <option value="Birth Day">Birth Day</option>
                <option value="Engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </form>
          </div>
          <div className="reservSecondContainer">
            <form action="#">
              <div className="checkDiv">
                <input type="checkbox" id='check2' className='inSeatCheck' />
                <label htmlFor="check2">Outdoor seating</label>
              </div>
              <br />
              <label htmlFor="dinner">Dinner*</label>
              <select name="dinner" id="dinner" value={numberOfDinners} onChange={(e) => setNumberOfDinners(e.target.value)}>
                <option selected hidden>Number of dinners</option>
                <option value="dinner1">1 Dinner</option>
                <option value="dinner2">2 Dinner</option>
                <option value="dinner3">3 Dinner</option>
                <option value="dinner4">4 Dinner</option>
                <option value="dinner5">5 Dinner</option>
              </select>
              <br />
              <label htmlFor="time">Time*</label>
              <select name="time" id="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                <option selected hidden >Select Time</option>
                <option value="5">5:00 pm</option>
                <option value="6">6:00 pm</option>
                <option value="7">7:00 pm</option>
                <option value="8">8:00 pm</option>
                <option value="9">9:00 pm</option>
              </select>
            </form>
          </div>
        </div>
        <div id='textcontent'></div>
        <button className='reserveNow' id='reserveNowButton' onClick={handleReserveNow}>
          Reserve Now
        </button>
      </section>

      <section className="section1" id='section1'>
        <div className="text-container">
          <div className="text">
            <div className="headermain">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam accusantium culpa rem nihil quia quaerat tempora.</p>
          </div>

          <div className="mainbtn">
            <button className="mainbutton" id='resbtn' onClick={resopen}>Reserve a Table</button>
          </div>
        </div>

        <div className="imageContainer">
          <img src={mainPicrure} width="480px" alt="" />
        </div>
      </section>

      <section className="section2">
        <div className="secton2Container">
          <div className="header">
            <h1>Specials</h1>
            <button className="mainbutton">Online Menu</button>
          </div>

          <div className="cards-container">
            <div className="card">
              <div className="card-img"></div>
              <div className="card-content">
                <div className="card-header">
                  <h2>Greek Salad</h2>
                  <h2 className="price">$12.99</h2>
                </div>
                <div className="cardp">
                  <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                </div>
                <div className="orderbtn">
                  <a href="#">Order a delivery</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-img2"></div>
              <div className="card-content">
                <div className="card-header">
                  <h2>Bruchetta</h2>
                  <h2 className="price">$5.99</h2>
                </div>
                <div className="cardp">
                  <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
                </div>
                <div className="orderbtn">
                  <a href="#">Order a delivery</a>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-img3"></div>
              <div className="card-content">
                <div className="card-header">
                  <h2>Lemon Dessert</h2>
                  <h2 className="price">$5.00</h2>
                </div>
                <div className="cardp">
                  <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                </div>
                <div className="orderbtn">
                  <a href="#">Order a delivery</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section3">
        <h1>Testimonials</h1>
        <div className="testCardsContainer">
          <div className="testCard">
            <h2>Rating: 5.0</h2>
            <div className="picAndText">
              <img src={testimonialsPic} width="50px" alt="testimonial/1" />
              <h3>Monica</h3>
            </div>
            <h3>Review Text</h3>
          </div>
          <div className="testCard">
            <h2>Rating: 3.4</h2>
            <div className="picAndText">
              <img src={test2Pic} width="50px" alt="testimonial/1" />
              <h3>Ronny</h3>
            </div>
            <h3>Review Text</h3>
          </div>
          <div className="testCard">
            <h2>Rating: 4.5</h2>
            <div className="picAndText">
              <img src={test3pic} width="50px" alt="testimonial/1" />
              <h3>Maria</h3>
            </div>
            <h3>Review Text</h3>
          </div>
          <div className="testCard">
            <h2>Rating: 4.7</h2>
            <div className="picAndText">
              <img src={test4Pic} width="50px" alt="testimonial/1" />
              <h3>John</h3>
            </div>
            <h3>Review Text</h3>
          </div>
        </div>
      </section>

      <section className="section4">
        <div className="lillemontext">
          <div className="heads">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
          </div>
          <div className="paragraph">
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              <br /> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
          </div>
        </div>
        <div className="twopics">
          <img src={lastpics} className="foodpic" width="300px" height="400px" alt="" />
          <img src={lastpics2} className="respic" width="300px" height="400px" alt="" />
        </div>
      </section>


      <footer>
        <div className="footerimg">
          <img src={footerpic} width="200px" alt="" />
        </div>

        <div className="footerlinks">
          <div className="footercard">
            <h1>Doormat Navigation</h1>

            <br />
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Reservations</a>
            <a href="#">Older Online</a>
            <a href="#">Login</a>
          </div>
          <div className="footercard">
            <h1>Contact</h1>

            <br />
            <a href="#">Adress</a>
            <a href="#">Phone Number</a>
            <a href="#">Email</a>
          </div>
          <div className="footercard">
            <h1>Social Media Links</h1>

            <br />
            <a href="#">Adress</a>
            <a href="#">Phone Number</a>
            <a href="#">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;