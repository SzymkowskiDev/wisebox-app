import React from "react";

const NaviagtionBlock = ({
  children,
  title,
  image,
  isWide,
  reversed,
  background,
}) => {
  return (
    <div
      class={`d-flex ${
        reversed && "flex-row-reverse"
      } justify-content-between align-items-end`}
      style={{
        width: isWide ? "655px" : "480px",
        height: "248px",
        background,
      }}
    >
      <div
        class={`py-4 p${reversed ? "e" : "s"}-5 text-${
          reversed ? "end" : "start"
        }`}
        style={{
          height: "100%",
        }}
      >
        <h2 class="header-1">{title.toUpperCase()}</h2>
        <p class="note-3">{children}</p>
        <button
          class="note-3 py-2 px-4 mt-5 border border-dark border-2"
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
