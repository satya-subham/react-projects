import React, { useState, useEffect } from "react";
import axios from "axios";

export function CovidApp() {
  const [details, setDetails] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios
      .get(`https://india-covid19vaccine.github.io/api/state_timeline.json`)
      .then((response) => {
        setDetails([...response.data]);
      })
      .catch(() => {});
  }, []);
  return (
    <>
      <header>
        <div className="header">
          <div>
            <h2>CoV19</h2>
          </div>

          <div className="inp_btn_container">
            <input
              type="text"
              id="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button id="click">Click</button>
            <button id="theme_btn">
              <i class="fa-solid fa-moon"></i>
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className="main_container">
          {details.map((item) => (
            <div className="container">
              <h2>State : {item.state}</h2>
              <h3>Date: {item.data[0].date}</h3>
              <h3>Total Doses : {item.data[0].total_doses}</h3>
              <h3>Total Vaccinated : {item.data[0].total_vaccinated}</h3>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
