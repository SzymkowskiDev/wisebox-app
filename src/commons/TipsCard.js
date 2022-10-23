import "./TipsCard.scss";

export const TipsCard = ({ tips }) => {
  return (
    <div className="card text-center tipsPadding bg-red-500">
      <div>
        <span className="overlaysC">
          <div>
            <i className={`${tips.icon} translate-middle txt-1 iconPadding`} />
          </div>
        </span>

        <div className="card-body circleOverflow">
          <span className="overlaysRT" />
          <span className="d-flex overlaysLD" />
        </div>
      </div>
      <div className="overlaysZIndex">
        <div className="card-title txt-1 ">{tips.question} </div>
        <div className="card-text txt-3">{tips.text}</div>
        <button href={tips.href} className="btn-spec txt-3">
          {tips.textButton}
        </button>
      </div>
    </div>
  );
};
