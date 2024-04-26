import React from "react";
import "./BasicCSS.css";

//
function BasicCSS(props) {
  return (
    <>
      <h1>Basic CSS</h1>
      <div className="basiccss">
        <p>
          {" "}
          This example shows how to use basic css for positioning and styling{" "}
          <div className="absolute-position">Absolute Position</div>
          <div className="relative-position">Relative Position</div>
          <div className="fixed-position">Fixed Position</div>
        </p>
      </div>
    </>
  );
}

BasicCSS.propTypes = {};

export default BasicCSS;
