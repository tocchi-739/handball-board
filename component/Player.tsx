import Draggable from "react-draggable";
import "./styles/player.css";

interface PlayerProps {
  cpColor: string;
  gkColor: string;
}

export const Player: React.FC<PlayerProps> = ({ cpColor, gkColor }) => {
  const gk = [1];
  const cps = [2, 3, 4, 5, 6, 7];
  return (
    <div className="flex">
      {gk.map((gk) => {
        return (
          <Draggable defaultPosition={{ x: 0, y: 0 }}>
            <div
              key={gk}
              className="person"
              style={{ backgroundColor: gkColor }}
            >
              {gk}
            </div>
          </Draggable>
        );
      })}
      {cps.map((cp) => {
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
