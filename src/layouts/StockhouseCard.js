import storageIcon2 from "./../assets/storageIcon2.svg";
import "./StockhouseCard.scss";
export const StockhouseCard = ({ data }) => {
  return (
    <div className="container d-flex align-items-center mb-3">
      <div className="border rounded-circle border-5 stockhouseBgColorShadow mr-2">
        <img src={storageIcon2} alt="" className="" />
      </div>
      <div className="d-flex flex-column align-items-start">
        <p className="header-3 m-0 ps-3 pt-2">{data.city}</p>
        <p className="header-4-ink ps-3 pt-1">{data.type}</p>
      </div>
    </div>
  );
};
