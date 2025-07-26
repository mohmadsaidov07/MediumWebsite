export default function Header() {
  return (
    <header className="z-10 flex justify-center border-b-1 bg-[hsl(40,29%,94%)] px-[5%] py-3">
      <section className="flex w-full justify-between 2xl:w-[1192px]">
        <div className="cursor-pointer font-[Playfair_Display] text-[32px] font-extrabold">
          Medium
        </div>
        <nav className="flex items-center justify-between text-[14px] sm:w-[220px] md:w-[416.5px]">
          <div>
            <a href="#" className="hidden md:block">
              Our story
            </a>
          </div>
          <div>
            <a href="#" className="hidden md:block">
              Membership
            </a>
          </div>
          <div>
            <a href="#" className="hidden md:block">
              Write
            </a>
          </div>
          <div>
            <a href="#" className="hidden sm:block">
              Sign in
            </a>
          </div>
          <a href="#">
            <button className="h-9.5 w-[104px] cursor-pointer rounded-4xl bg-[black] text-[14px] font-extralight text-[white]">
              Get started
            </button>
          </a>
        </nav>
      </section>
    </header>
  );
}
