import "./LeftHeader.scss";

export const LeftHeader = ({ icon, text }) => {
  return (
    <div className="d-flex flex-row header-padding-25">
      <div className="header-2-ink icon-padding-4"> {icon}</div>
      <div className=" d-inline header-2-ink ">{text}</div>
    </div>
  );
};
