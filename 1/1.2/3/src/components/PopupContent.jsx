import { createPortal } from "react-dom";
import React from "react";

const PopupContent = ({ copied }) => {
  return createPortal(
    <section>
      {copied && (
        <div style={{ color: "green", position: "absolute", bottom: "3rem" }}>
          Copied to clipboard!
        </div>
      )}
    </section>,
    document.querySelector('#popup-content')
  );
};

export default PopupContent;
 