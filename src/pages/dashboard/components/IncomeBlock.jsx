import React from "react";

const IncomeBlock = ({ title, value, icon }) => {
  return (
    <div
      class="d-flex flex-column justify-content-end rounded-4 text-start p-3"
      style={{
        backgroundColor: "white",
        height: "180px",
        width: "180px",
        position: "relative",
      }}
    >
      <i
        className={`ci-${icon} p-2 rounded-4`}
        style={{
          fontSize: "40px",
          backgroundColor: "var(--sun)",
          color: "white",
          width: "max-content",
          position: "absolute",
          top: "-15px",
          left: "20px",
        }}
      />
      <p class="note-2 m-0">{title.toUpperCase()}</p>
      <div class="d-flex align-items-baseline">
        <p class="note-1 m-0">{value}</p>
        <i className={`ci-long_up`} style={{ color: "var(--grass)" }} />
      </div>
      <p class="note-4 m-0 text--ink">PLN</p>
    </div>
  );
};

export default IncomeBlock;
