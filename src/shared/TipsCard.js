import "../styles/TipsCard.scss";

export const TipsCard = ({ tips }) => {
  return (
    <div
      style={{ backgroundColor: tips.color }}
      className="text-center card pannel"
    >
      <div>
        <span style={{ backgroundColor: tips.color }} className="pannel--icon">
          <div>
            <i className={`${tips.icon} txt-1`} />
          </div>
        </span>

        <div className="pannel--overlay">
          <span className="pannel--overlay_circle" />
          <span className="d-flex pannel--overlay_circle" />
        </div>
      </div>
      <div className="pannel--overlay_index mt-3 mt-xxl-5">
        <div className="px-2 px-xxl-4 mt-4 txt-1 ">{tips.question} </div>
        <div className="px-2 px-xxl-5 mt-2 mt-xxl-3 txt-3">{tips.text}</div>
        <button
          href={tips.href}
          className="btn-spec mt-4 w-75 py-2 py-xxl-3 txt-3"
        >
          {tips.textButton}
        </button>
      </div>
    </div>
  );
};
