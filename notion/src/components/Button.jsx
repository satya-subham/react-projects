import React from "react";
import "./Button.css";
import { useState } from "react";

export function Button() {
  const [name, setName] = useState("");
  const [toggle, setToggle] = useState(false);


  const showPopUp = () => {
    if (!toggle) {
      setToggle(true);
    } else {
      setToggle(false);
    }
  };
  return (
    <>
      <h1>PopUp</h1>
      <div className="add_btn_div">
        <button onClick={showPopUp}>Add</button>
      </div>
      {toggle ? (
        <div className="popup_div">
          <input
            type="text"
            id="popup_inp"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button>Invite</button>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
