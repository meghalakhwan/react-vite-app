/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";

const PortalComponent = (props) => {
  console.log(props);
  let sectionStyles = {
    height: "95vh",
    width : "98vw",
    border: "solid pink",
    position: "absolute",
    top: "0px",
    botton: "0px",
    background: "#333",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  };

  let articleStyles = {
    border: "solid white",
    height: "70%",
    width : "30%",
  };

  return ReactDOM.createPortal(
    <>
      <section style={sectionStyles}>
        <article style={articleStyles}>
          <h1>Here you can do login</h1>
          <button 
          onClick={props.closeFn} 
          style={{
            position:"fixed",
            top: "10px",
            right: "10px",
          }}>Skip</button>
        </article>
      </section>
    </>,document.getElementById("portal")
  );
};

export default PortalComponent;
