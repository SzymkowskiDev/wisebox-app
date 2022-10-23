export const GrayHeader = ({ icon, text }) => {
  return (
    <div className="d-flex align-items-center py-1 py-xxl-2 mt-xxl-1">
      <div className="header-2 text--ink pe-3">
        <i className={`ci-${icon} text--icon`} />
      </div>
      <div className=" d-inline header-2 text--ink ">{text}</div>
    </div>
  );
};
