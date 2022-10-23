export const GrayHeader = ({ icon, text }) => {
  return (
    <div className="d-flex flex-row pt-4">
      <div className="header-2-ink pe-3"> {icon}</div>
      <div className=" d-inline header-2-ink ">{text}</div>
    </div>
  );
};
