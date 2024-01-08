import "./styles/court.css";

export const AllCourt = () => {
  return (
    <div className="court-wrapper">
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
      <div className="court">
        <div className="line-6m right">
          <div className="upper"></div>
          <div className="middle"></div>
          <div className="lower"></div>
        </div>
        <div className="line-9m right">
          <div className="upper"></div>
          <div className="middle"></div>
          <div className="lower"></div>
        </div>
      </div>
      <div className="goal right-goal"></div>
    </div>
  );
};
