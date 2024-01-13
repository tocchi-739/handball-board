import Image from "next/image";
import Draggable from "react-draggable";

const Ball = () => {
  return (
    <Draggable defaultPosition={{ x: 0, y: 0 }}>
      <Image
        src="/ball.png"
        alt="ボールの画像"
        width={30}
        height={30}
        priority
        className="cursor-pointer"
      />
    </Draggable>
  );
};

export const Balls = () => {
  const numberOfBalls = 2;

  return (
    <div className="flex flex-wrap">
      {[...Array(numberOfBalls)].map((_, index) => (
        <Ball key={index} />
      ))}
    </div>
  );
};
