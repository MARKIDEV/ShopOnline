import React from "react";

export const ShowLoading = () => (
  <div role="status">
    <i
      style={{
        fontSize: "24px",
        color: "purple",
      }}
      className="fa fa-gear fa-spin"
    ></i>
    <i
      style={{
        fontSize: "24px",
        color: "yellow",
      }}
      className="fa fa-gear fa-spin"
    ></i>
    <i
      style={{
        fontSize: "24px",
        color: "green",
      }}
      className="fa fa-gear fa-spin"
    ></i>
    <i
      style={{
        fontSize: "24px",
        color: "orange",
      }}
      className="fa fa-gear fa-spin"
    ></i>
  </div>
);
