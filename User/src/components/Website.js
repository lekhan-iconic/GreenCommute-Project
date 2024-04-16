import React, { useEffect } from "react";
import $ from "jquery";

const Website = () => {
  useEffect(() => {
    // Your JavaScript code here
    // For example:
    $("#menu-btn").click(function () {
      $("nav .navigation ul").addClass("active");
    });

    $("#menu-close").click(function () {
      $("nav .navigation ul").removeClass("active");
    });
  }, []);
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App</title>
    <link rel="stylesheet" href="project.css" />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <section id="home">
      <div class="navbar-container">
        <nav class="navigation">
          <ul class="menu">
            <li><a href="#home">GCSTA</a></li>
          </ul>
        </nav>
        <nav class="navigation1">
          <ul class="menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About </a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <nav class="navigation2">
          <ul class="menu">
            <li><a href="/login">LOGIN</a></li>
          </ul>
        </nav>
      </div>
      <div class="container">
        <div class="main-text">
          <h1>Green Commute <br />Sustainable Transportation</h1>
        </div>
      </div>
    </section>
    <section id="about">
      <h1 class="title-about">About US</h1>

      <div class="about-info">
        <h1>Green Commute and Sustainable Transportation APP</h1>
        <br /><br />
        <p>
          GreenCommute is an innovative application designed to encourage and
          facilitate sustainable transportation choices. Powered by the MERN
          Stack (MongoDB, Express.js, React, Node.js), Green Commute aims to
          reduce carbon footprints by providing users with eco-friendly
          commuting options. Sustainable transportation refers to modes of
          travel and system of infrastructure that have minimum negative impacts
          on the environment, society, and economy. The app offers features such
          as real-time public transportation information, carpooling
          connections, and biking routes, creating a comprehensive solution for
          sustainable mobility.
        </p>
      </div>
    </section>
    <section id="features">
      <div>
        <h1 class="feature-title">Key Features</h1>
        <div class="box-container">
          <div class="box">
            <h2>Emission Tracking</h2>
            <br />
            
            <ul>
              <li>Helps monitor and analyze carbon emissions.</li>
              <li>Provides insights into sources of emissions.</li>
              <li>Enables tracking of emission levels over time.</li>
              <li>Facilitates compliance with environmental regulations.</li>
              <li>Supports efforts to reduce carbon footprint.</li>
              <li>Can be integrated with other sustainability initiatives.</li>
            </ul>
          </div>
          <div class="box">
            <h2> Public Transportation Info</h2>
            <br />
            <ul>
              <li>
                Provides real-time updates on public transportation schedules.
              </li>
              <li>Offers information on delays and disruptions.</li>
              <li>Includes data on vehicle locations and arrival times.</li>
              <li>
                Allows passengers to plan their journeys more effectively.
              </li>
              <li>Enhances overall user experience for commuters.</li>
            </ul>
          </div>
          <div class="box">
            <h2>Gamification and Rewards</h2>
            <br />
        
            <ul>
              <li>Utilizes game-like elements to engage users.</li>
              <li>Encourages desired behaviors through incentives.</li>
              <li>
                Rewards users for completing tasks or achieving milestones.
              </li>
              <li>Enhances user motivation and participation.</li>
              <li>Fosters a sense of accomplishment and progress.</li>
              <li>Can include badges, points, levels, or virtual currency.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
<section id="services">
      <h1 class="service-title">MY Services</h1>
      <div class="boxs-container">
        <div class="boxs">
          <h1 class="text-center">Car Pooling</h1>
          <p class="text-center">
            Carpooling involves sharing rides with others, reducing traffic,
            costs, and environmental impact through shared transportation.It is
            fosters social connections, enhances convenience, and optimizes
            vehicle usage for sustainable commuting
          </p>
          <button type="submit" class="button"><a href="/login">Read More</a></button>
        </div>
        <div class="boxs">
          <h1 class="text-center">Bike Riding</h1>
          <p class="text-center">
            Bike riding promotes health, reduces emissions, and offers a
            cost-effective, eco-friendly alternative for commuting and leisure.
            Bike riding encourages active lifestyles, fosters community, and
            contributes to a greener, more sustainable environment.
          </p>
          <button type="submit" class="button"><a href="/login">Read More</a></button>
        </div>
        <div class="boxs">
          <h1 class="text-center">Biking Routes</h1>
          <p class="text-center">
            Bike routing involves planning optimal paths for cyclists,
            considering safety, accessibility, and scenic routes, often
            utilizing dedicated bike lanes and trails. Cyclists utilize maps and
            apps to navigate efficiently, promoting biking as a viable mode of
            transportation and recreation.
          </p>
          <button type="submit" class="button"><a href="/login">Read More</a></button>
        </div>
      </div>
    </section>

    
  <section id="contact">
      <h2 class="title-contact">Contact Me</h2>
      <form action="https://formspree.io/f/xkndrkaq" method="POST">
        <div class="contact-container container">
          <div class="contact-content">
            <div class="inputs">
              <input type="text" name="Name" placeholder="Name" />
              <input type="email" name="Email" placeholder="Email" />
            </div>
            <input type="text" name="Info" placeholder="Info" />
            <textarea
              name="Message"
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button type="submit" class="btn">
              Send
            </button>
          </div>
        </div>
      </form>
    </section>
  </body>
</html>
  `;

  return (
    <div>
      <link rel="stylesheet" href="Project.css" />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    </div>
  );
};

export default Website;
