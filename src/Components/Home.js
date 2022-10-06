import { useState } from "react";
import { Link } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const collectData = async () => {
    const result = await fetch("http://localhost:5000/queries", {
      method: "post",
      body: JSON.stringify({
        name,
        email,
        msg,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(name);
  };

  return (
    <>
      {/* carosoul */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide mt-5 cdiv"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src="https://img.freepik.com/free-vector/men-women-standing-long-queue-reception-3d-isometric-illustration_1284-55195.jpg?w=2000"
              className="d-block cimg "
              alt="..."
            />
           
          </div>
          
          
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://altezatel.com/public/images/token-system.webp"
              className="d-block cimg"
              alt="..."
            />
           
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section
        className="text-center my-5 py-5"
        style={{ backgroundColor: "#87CEFA" }}
      >
        <div className="container">
          <h1 style={{ fontSize: "25px" }}>
           Tired of waiting in a Queue for your turn?<br></br>
           Here's a solution for it!! Generate Token
          </h1>
          <p>
            <button type="button" className="btn btn-dark finddr mx-3 mt-3 ">
             
              <Link to={"/services"}>Generate Token</Link>
            </button>
          
          </p>
        </div>
      </section>

      <div id="faqs" class="container">
        <div class="row mb-4">
          <div class="col-9 mx-auto py-5 mb-3">
            <h4 class="text-center mt-2 mb-4 display-6">FAQs</h4>

            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item border">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    How to generate the token?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  For generating token, you just need to select the service and enter contact number, you can get an email of token number and time slot with necessary document.
                  </div>
                </div>
              </div>
              <div class="accordion-item border">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How we can come to know whether our token is generated or not?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  If you get an email with token number from e-Jan Seva Kendra, that means your token is generated.{" "}
                  </div>
                </div>
              </div>
              <div class="accordion-item border">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                   Why Jan Seva Kendra CSC service portal?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  Jan Seva Kendra CSC Services Portal is an organization with the aim of providing better services, management solutions and financial solutions to the e-governance kiosk, educational institutes, etc. In pan India. At bg techno solutions, customer satisfaction is the top priority. 
                  </div>
                </div>
              </div>
              <div class="accordion-item border">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                   Why we should use the website?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  In order to save time, we can use the website. We just need to choose service. just after doing this, we can enter mobile number , get OTP and time slot and necessary document via mail . This way we can save our time and also get to know which document we should carry along with us. 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div class="container-fluid bg-dark text-white p-5">
        <div class="container">
          <div class="row justify-content-evenly py-3">
            <div class="col-md-3 col-10 mt-5 mb-3 ">
            
           
              
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
