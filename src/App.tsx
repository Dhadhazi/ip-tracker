import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div id="absolute-div">
      <main id="details-box">
        <header>IP Address Tracker</header>
        <form id="input-box">
          <input id="ip-input" placeholder="Search for any IP address or domain" />
          <button id="submit-btn">></button>
        </form>

        <article id="ip-details">
          <section>
            <h1>IP ADDRESS</h1>
            <h3>192.212.174.101</h3>
          </section>
          <div className="divider-div">
            <hr className="divider" />
          </div>
          <section>
            <h1>LOCATION</h1>
            <h3>Brooklyn, NY 10001</h3>
          </section>
          <div className="divider-div">
            <hr className="divider" />
          </div>
          <section>
            <h1>TIMEZONE</h1>
            <h3>UTC -5:00</h3>
          </section>
          <div className="divider-div">
            <hr className="divider" />
          </div>
          <section>
            <h1>ISP</h1>
            <h3>SpaceX Starlink</h3>
          </section>
        </article>
      </main></div>
      <div id="img-background"></div>
      <div id="map"></div>
    </div>
  );
}

export default App;
