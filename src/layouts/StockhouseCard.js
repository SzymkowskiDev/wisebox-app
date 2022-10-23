import storageIcon2 from "./../assets/storageIcon2.svg";
import "../styles/StockhouseCard.scss";
export const StockhouseCard = ({ data }) => {
  return (
    <div className="container d-flex align-items-center mb-4 px-0 mt-2 ">
      <div className="p-1 p-xxl-2 d-flex justify-content-center align-items-center stockhouse">
        <img src={storageIcon2} alt="" className="img-fluid" />
      </div>
      <div className="d-flex flex-column align-items-start">
        <p className="header-3 m-0 ps-3 pt-xxl-2">{data.city}</p>
        <p className="header-4 text--ink ps-3 pt-1 mb-0 pb-1 pb-xxl-2">
          {data.type}
        </p>
      </div>
    </div>
  );
};
