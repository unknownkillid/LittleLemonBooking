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



function App() {
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

      <section className="section1">
        <div className="text-container">
          <div className="text">
            <div className="headermain">
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam accusantium culpa rem nihil quia quaerat tempora.</p>
          </div>

          <div className="mainbtn">
            <button className="mainbutton">Reserve a Table</button>
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
