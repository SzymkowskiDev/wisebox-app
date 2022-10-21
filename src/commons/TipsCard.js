import "./TipsCard.scss";
import { Tips } from "./Tips.js";

export const TipsCard = ({ tips }) => {
  console.log(tips);
  return (
    <div className="card text-center tipsPadding">
      <i className="ci-help_questionmark position-absolute top-0 start-50 translate-middle txt-1 " />
      <div className="card-body circleOverflow">
        <span className="overlaysRT" />
        <span className="d-flex overlaysLD" />
        <div className="card-title txt-1 ">TITLE </div>
        <div className="card-text txt-3">
          No problem. Let's look at our how-to guide. Moreover, you can always
          contat us!
        </div>
        <button className="btn-spec txt-3">GO TO GUIDE</button>
      </div>
    </div>
  );
};
