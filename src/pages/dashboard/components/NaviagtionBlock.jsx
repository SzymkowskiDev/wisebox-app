import React from "react";

const NaviagtionBlock = ({ children, title, image, reversed, background }) => {
  const direction = reversed ? "e" : "s";
  return (
    <div
      class={`${
        reversed && "flex-row-reverse"
      } d-flex justify-content-between align-items-end`}
      style={{
        height: "248px",
        background,
      }}
    >
      <div
        class={`py-4 p${direction}-4 p${direction}-lg-5 m${direction}-xl-5 m${direction}-xxl-0 text-${
          reversed ? "end" : "start"
        }`}
        style={{
          height: "100%",
        }}
      >
        <h2 class="header-1">{title.toUpperCase()}</h2>
        <p class="note-3">{children}</p>
        <button
          class="note-3 py-2 px-3 mt-4 px-lg-4 mt-lg-5 border border-dark border-2"
          style={{
            backgroundColor: "transparent",
          }}
        >
          GO TO {title.toUpperCase()}
        </button>
      </div>
      <img src={image} alt={title} />
    </div>
  );
};

export default NaviagtionBlock;
