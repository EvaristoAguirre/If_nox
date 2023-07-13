import React, { useState } from "react";
import "./DropdownButton.css";

function DropdownButton({ question, answer }) {
  const [iconClass, setIconClass] = useState("bi bi-chevron-down");
  const [showButton, setshowButton] = useState("show-button");

  const onOpenButton = () => {
    if (iconClass === "bi bi-chevron-up") {
      setIconClass("bi bi-chevron-down");
      setshowButton("show-button");
    } else {
      setshowButton("hide-button");
      setIconClass("bi bi-chevron-up");
    }
  };

  return (
    <>
      <div
        className="btn dropdown-button d-flex align-items-center mt-2"
        onClick={onOpenButton}
      >
        <div className="question ps-2">{question}</div>
        <i class={iconClass + " arrow-icon ms-auto"}></i>
      </div>
      <div className={"answer rounded-5 my-2 " + showButton}>
        <div className="ps-4 my-2">{answer}</div>
      </div>
    </>
  );
}

export default DropdownButton;
