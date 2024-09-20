import React from "react";
import "./forms.css";

const Form = () => {
  return (
    <div className="frm">
      <img 
        src="https://res.cloudinary.com/dcsduqstu/image/upload/v1726767497/Datasprint-extended_1_sc1l0w.jpg" 
        alt="Top Image" 
        className="form-image"
      />  
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfmFWfCecys0Ka7Yp-2s2JzXNe3u5sxp-rIaBS1vhBPDyq2wg/viewform?embedded=true"
        width="100%"
        height="2600"
        scrolling="no"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default Form;
