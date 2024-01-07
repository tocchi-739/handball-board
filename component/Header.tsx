export const Header = () => {
  return (
    <header className="w-full flex justify-between">
      <h1>ハンドボールの作戦ボード</h1>
      <ul className="flex gap-4">
        <li>
          <button>半面</button>
        </li>
        <li>
          <button>縦</button>
        </li>
      </ul>
    </header>
  );
};
