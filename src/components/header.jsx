export default function Header() {
  return (
    <header className="px-17 py-5 flex justify-between border-b-1">
      <div className="text-3xl font-[Playfair_Display] font-extrabold cursor-pointer">
        Medium
      </div>
      <nav className="font-light pl-15 w-5/12 flex justify-between items-center text-[0.9rem]  ">
        <a href="#">Our story</a>
        <a href="#">Membership</a>
        <a href="#">Write</a>
        <a href="#">Sign in</a>
        <a href="#">
          <button className="px-4 py-2 bg-[black] text-[white] rounded-4xl cursor-pointer">
            Get started
          </button>
        </a>
      </nav>
    </header>
  );
}
