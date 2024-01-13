interface HeaderProps {
  setIsHalfCourt: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({ setIsHalfCourt }) => {
  const switchHalfCourt = () => {
    setIsHalfCourt(true);
  };
  const switchAllCourt = () => {
    setIsHalfCourt(false);
  };

  return (
    <header className="w-full flex justify-between">
      <h1>ハンドボールの作戦ボード</h1>
      <ul className="flex gap-4">
        <li>
          <button onClick={switchHalfCourt}>ハーフ</button>
        </li>
        <li>
          <button onClick={switchAllCourt}>オール</button>
        </li>
      </ul>
    </header>
  );
};
