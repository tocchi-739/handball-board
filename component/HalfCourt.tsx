import "./styles/court.css";

export const HalfCourt = () => {
  return (
    <div className="court-wrapper rotate">
      <div className="goal left-goal"></div>
      <div className="court">
        <div className="line-6m">
          <div className="upper"></div>
          <div className="middle"></div>
          <div className="lower"></div>
        </div>
        <div className="line-9m">
          <div className="upper"></div>
          <div className="middle"></div>
          <div className="lower"></div>
        </div>
      </div>
    </div>
  );
};
