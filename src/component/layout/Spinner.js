import React, { Fragment } from "react";

const Spinner = () => {
  return (
    <Fragment>
      <div style={{ position: "fixed", left: "50%", top: "50%" }}>
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Spinner;
