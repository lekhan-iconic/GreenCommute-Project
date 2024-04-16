import React from "react";
import { Card, Carousel, Navbar } from "react-bootstrap";
// import "./About.css";

function About() {
  const ul = {
    textDecoration: "underline",
  };
  return (
    <>
      <Navbar />
      <br></br>

      <h1 style={ul}>
        <center>About Us</center>
      </h1>
      <br></br>
      <h3>
        <center>The team behind Green Commute</center>
      </h3>

      <p>
        <center>
          𝓐 𝓼𝓾𝓼𝓽𝓪𝓲𝓷𝓪𝓫𝓵𝓮 𝓽𝓻𝓪𝓷𝓼𝓹𝓸𝓻𝓽𝓪𝓽𝓲𝓸𝓷 𝓹𝓻𝓸𝓳𝓮𝓬𝓽 𝓵𝓲𝓴𝓮 "𝓖𝓻𝓮𝓮𝓷 𝓒𝓸𝓶𝓶𝓾𝓽𝓮" 𝓪𝓲𝓶𝓼 𝓽𝓸
          𝓻𝓮𝓭𝓾𝓬𝓮 𝓬𝓪𝓻𝓫𝓸𝓷 𝓮𝓶𝓲𝓼𝓼𝓲𝓸𝓷𝓼 𝓪𝓷𝓭 𝓹𝓻𝓸𝓶𝓸𝓽𝓮 𝓮𝓬𝓸-𝓯𝓻𝓲𝓮𝓷𝓭𝓵𝔂 𝓶𝓸𝓭𝓮𝓼 𝓸𝓯
          𝓽𝓻𝓪𝓷𝓼𝓹𝓸𝓻𝓽𝓪𝓽𝓲𝓸𝓷.
        </center>
      </p>
      <br></br>
      <div className="size">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="row">
                <div className="col-md-4">
                  <div className="container">
                    <div className="card h-100">
                      <center>
                        {" "}
                        <img
                          style={{ width: "250px" }}
                          src="profilepic.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                      </center>
                      <div className="card-body">
                        <center>
                          {" "}
                          <h5
                            style={{
                              background: "green",
                              width: "350px",
                              color: "white",
                              border: "100%",
                              height: "40px",
                            }}
                            className="card-title"
                          >
                            Front-End Developer
                          </h5>{" "}
                        </center>
                        <center>
                          {" "}
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>{" "}
                        </center>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container">
                    <div className="card h-100">
                      <center>
                        {" "}
                        <img
                          style={{ width: "250px" }}
                          src="profilepic.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                      </center>
                      <div className="card-body">
                        <center>
                          {" "}
                          <h5
                            style={{
                              background: "green",
                              width: "350px",
                              color: "white",
                              border: "100%",
                              height: "40px",
                            }}
                            className="card-title"
                          >
                            Front-End Developer
                          </h5>{" "}
                        </center>
                        <center>
                          {" "}
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>{" "}
                        </center>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container">
                    <div className="card h-100">
                      <center>
                        {" "}
                        <img
                          style={{ width: "250px" }}
                          src="profilepic.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                      </center>
                      <div className="card-body">
                        <center>
                          {" "}
                          <h5
                            style={{
                              background: "green",
                              width: "350px",
                              color: "white",
                              border: "100%",
                              height: "40px",
                            }}
                            className="card-title"
                          >
                            Front-End Developer
                          </h5>
                        </center>
                        <center>
                          {" "}
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </center>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div className="row">
                <div className="col-md-4">
                  <div className="container">
                    <div className="card h-100">
                      <center>
                        {" "}
                        <img
                          style={{ width: "250px" }}
                          src="profilepic.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                      </center>
                      <div className="card-body">
                        <center>
                          {" "}
                          <h5
                            style={{
                              background: "green",
                              width: "350px",
                              color: "white",
                              border: "100%",
                              height: "40px",
                            }}
                            className="card-title"
                          >
                            Front-End Developer
                          </h5>{" "}
                        </center>
                        <center>
                          {" "}
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>{" "}
                        </center>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container">
                    <div className="card h-100">
                      <center>
                        {" "}
                        <img
                          style={{ width: "250px" }}
                          src="profilepic.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                      </center>
                      <div className="card-body">
                        <center>
                          {" "}
                          <h5
                            style={{
                              background: "green",
                              width: "350px",
                              color: "white",
                              border: "100%",
                              height: "40px",
                            }}
                            className="card-title"
                          >
                            Front-End Developer
                          </h5>{" "}
                        </center>
                        <center>
                          {" "}
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>{" "}
                        </center>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="container">
                    <div className="card h-100">
                      <center>
                        {" "}
                        <img
                          style={{ width: "250px" }}
                          src="profilepic.jpg"
                          className="card-img-top"
                          alt="..."
                        />
                      </center>
                      <div className="card-body">
                        <center>
                          {" "}
                          <h5
                            style={{
                              background: "green",
                              width: "350px",
                              color: "white",
                              border: "100%",
                              height: "40px",
                            }}
                            className="card-title"
                          >
                            Front-End Developer
                          </h5>
                        </center>
                        <center>
                          {" "}
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </center>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <br></br>
      <br></br>
      <h3>Here, We recieve </h3>
      <h2 style={{ marginLeft: "100px" }}>❝𝐋𝐨𝐯𝐞 & 𝐀𝐩𝐩𝐫𝐞𝐜𝐢𝐚𝐭𝐢𝐨𝐧𝐬❞</h2>
      <br></br>
      <br></br>
      <br></br>
      <div
        id="carouselExampleControlsNoTouching"
        class="carousel slide carousel-container "
        data-bs-touch="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <p style={{ color: "blue" }}>
              <center>
                ❝ 𝓐 𝓼𝓾𝓼𝓽𝓪𝓲𝓷𝓪𝓫𝓵𝓮 𝓽𝓻𝓪𝓷𝓼𝓹𝓸𝓻𝓽𝓪𝓽𝓲𝓸𝓷 𝓹𝓻𝓸𝓳𝓮𝓬𝓽 𝓵𝓲𝓴𝓮 "𝓖𝓻𝓮𝓮𝓷 𝓒𝓸𝓶𝓶𝓾𝓽𝓮" 𝓪𝓲𝓶𝓼
                𝓽𝓸 𝓻𝓮𝓭𝓾𝓬𝓮 𝓬𝓪𝓻𝓫𝓸𝓷 𝓮𝓶𝓲𝓼𝓼𝓲𝓸𝓷𝓼 𝓪𝓷𝓭 𝓹𝓻𝓸𝓶𝓸𝓽𝓮 𝓮𝓬𝓸-𝓯𝓻𝓲𝓮𝓷𝓭𝓵𝔂 𝓶𝓸𝓭𝓮𝓼 𝓸𝓯
                𝓽𝓻𝓪𝓷𝓼𝓹𝓸𝓻𝓽𝓪𝓽𝓲𝓸𝓷. ❞
              </center>
            </p>
          </div>
          <div class="carousel-item">
            <p style={{ color: "greenyellow" }}>
              <center>
                ❝ 𝓐 𝓼𝓾𝓼𝓽𝓪𝓲𝓷𝓪𝓫𝓵𝓮 𝓽𝓻𝓪𝓷𝓼𝓹𝓸𝓻𝓽𝓪𝓽𝓲𝓸𝓷 𝓹𝓻𝓸𝓳𝓮𝓬𝓽 𝓵𝓲𝓴𝓮 "𝓖𝓻𝓮𝓮𝓷 𝓒𝓸𝓶𝓶𝓾𝓽𝓮" 𝓪𝓲𝓶𝓼
                𝓽𝓸 𝓻𝓮𝓭𝓾𝓬𝓮 𝓬𝓪𝓻𝓫𝓸𝓷 𝓮𝓶𝓲𝓼𝓼𝓲𝓸𝓷𝓼 𝓪𝓷𝓭 𝓹𝓻𝓸𝓶𝓸𝓽𝓮 𝓮𝓬𝓸-𝓯𝓻𝓲𝓮𝓷𝓭𝓵𝔂 𝓶𝓸𝓭𝓮𝓼 𝓸𝓯
                𝓽𝓻𝓪𝓷𝓼𝓹𝓸𝓻𝓽𝓪𝓽𝓲𝓸𝓷. ❞
              </center>
            </p>
          </div>
          <div class="carousel-item">
            <p style={{ color: "red" }}>
              <center>
                ❝ 𝓐 𝓼𝓾𝓼𝓽𝓪𝓲𝓷𝓪𝓫𝓵𝓮 𝓽𝓻𝓪𝓷𝓼𝓹𝓸𝓻𝓽𝓪𝓽𝓲𝓸𝓷 𝓹𝓻𝓸𝓳𝓮𝓬𝓽 𝓵𝓲𝓴𝓮 "𝓖𝓻𝓮𝓮𝓷 𝓒𝓸𝓶𝓶𝓾𝓽𝓮" 𝓪𝓲𝓶𝓼
                𝓽𝓸 𝓻𝓮𝓭𝓾𝓬𝓮 𝓬𝓪𝓻𝓫𝓸𝓷 𝓮𝓶𝓲𝓼𝓼𝓲𝓸𝓷𝓼 𝓪𝓷𝓭 𝓹𝓻𝓸𝓶𝓸𝓽𝓮 𝓮𝓬𝓸-𝓯𝓻𝓲𝓮𝓷𝓭𝓵𝔂 𝓶𝓸𝓭𝓮𝓼 𝓸𝓯
                𝓽𝓻𝓪𝓷𝓼𝓹𝓸𝓻𝓽𝓪𝓽𝓲𝓸𝓷. ❞
              </center>
            </p>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControlsNoTouching"
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
          data-bs-target="#carouselExampleControlsNoTouching"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>
      <br></br>
    </>
  );
}

export default About;
