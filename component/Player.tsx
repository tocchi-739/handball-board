import Draggable from "react-draggable";
import "./styles/player.css";

interface PlayerProps {
  cpColor: string;
  gkColor: string;
}

export const Player: React.FC<PlayerProps> = ({ cpColor, gkColor }) => {
  const gkValue = 1;
  const maxCpsValue = 7;
  const cpsValuesArray = Array.from(
    { length: maxCpsValue - 1 },
    (_, index) => index + 2
  );
  return (
    <div className="flex flex-wrap">
      <Draggable defaultPosition={{ x: 0, y: 0 }}>
        <div className="person" style={{ backgroundColor: gkColor }}>
          {gkValue}
        </div>
      </Draggable>
      {cpsValuesArray.map((cp) => {
        return (
          <Draggable defaultPosition={{ x: 0, y: 0 }}>
            <div
              key={cp}
              className="person"
              style={{ backgroundColor: cpColor }}
            >
              {cp}
            </div>
          </Draggable>
        );
      })}
    </div>
  );
};
