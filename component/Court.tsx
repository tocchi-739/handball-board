import "./styles/court.css";

export const Court = () => {
  return (
    <div className="coat-wrapper">
      <div className="goal left-goal"></div>
      <div className="coat">
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
      <div className="coat">
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
