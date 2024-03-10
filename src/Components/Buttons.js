import React from "react";
import "../App.css";

const Buttons = ({ img, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        marginTop: "100px",
      }}
    >
      <img src={img} alt="logo" />
    </button>
  );
};

export default Buttons;
