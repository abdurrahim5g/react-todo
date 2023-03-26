import React from "react";
import "./Popup.css";
import { isPopupShow } from "../../utility/utility";

const Popup = ({ children, id }) => {
  const popupId = id ? id : "popup";
  return (
    <section className="popup hidden" id={popupId}>
      <div
        id="backdrop"
        className="backdrop"
        onClick={() => isPopupShow(false, popupId)}
      ></div>
      <div id="" className="popup-containe">
        <div className="popup-content">{children}</div>
      </div>
    </section>
  );
};

export default Popup;
