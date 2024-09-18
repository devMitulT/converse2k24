import React from "react";
import "./LogoHuntPage.css"; // Import the CSS file for styling
import Footer from "../../components/Footer";
import great from "./great.png";
import { Link } from "react-router-dom";
import ScrollToTop from "../../components/ScrollToTop";
import blind from "../../team/Non-tech-poster/a4chessclash.jpeg";

const handleClick = () => {
  window.open(
    "https://docs.google.com/forms/d/e/1FAIpQLSd-EdIg-cy_IHxeKar3OT5a_suNPW3SKHYqka3OxikxKFXazg/viewform",
    "_blank",
    "noopener,noreferrer"
  );
};

const ChessClash = () => {
  return (
    <>
      <ScrollToTop />
      <div className="teams-section">
        <div className="lin">
          <h1>
            <Link to="/">Home</Link>
          </h1>
          <img src={great} className="symb" />
          <h1>
            <Link to="/events">Events</Link>
          </h1>
          <img src={great} className="symb" />
          <h1>
            <Link to="/Nontech-event">Non Tech</Link>
          </h1>
        </div>
      </div>

      <div className="logo-hunt-page">
        <h1>Chess Clash</h1>
        <div className="logo-hunt-content">
          <div className="logo-hunt-image">
            <img src={blind} alt="Chess Clash" />
            <button className="register-button" onClick={handleClick}>
              Register for Event
            </button>
          </div>
          <div className="logo-hunt-details">
            <h3 className="logo3">Description</h3>
            <p>Event Name: Chess Clash</p>
            <p>Event Date: 20 September</p>
            <p>Event Time: 10:00 AM to 12:00 PM</p>
            <p>Venue: IT LAB 5</p>
            <p>Registration Fee: ₹20 per person</p>
            <p>Prize: Cash Prize</p>
            <p>Number of Players: Individual</p>

            <h3 className="logo3">General Rules</h3>
            <p>Join Us for the Ultimate Chess Showdown: Chess Clash!</p>
            <ul>
              <li>
                <p>
                  <b>Round 1: Chess puzzles</b>
                </p>
                <ul>
                  <li> Solve as many puzzles as you can within 5 minutes!</li>
                  <li>- Top performers will advance to Round 2.</li>
                </ul>
              </li>
              <li>
                <p>
                  <b>Round 2: blitz and rapid games</b>
                </p>
                <ul>
                  <li>
                    Shortlisted candidates will compete in blitz and rapid
                    games.
                  </li>
                  <li>- Elimination rounds will lead to the grand finale.</li>
                </ul>
              </li>
            </ul>

            <h2>
              🏆 The winner will be crowned the “GM of SCET,” with awards for
              both the winner and runner-up!
            </h2>

            <h2>Entry Fee: ₹20</h2>

            <h3 className="logo3">Event Coordinators</h3>
            <ul>
              <li>Viraj Dapkawala - 9712720391</li>
              <li>Arham Shah - 8320909126</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ChessClash;
