export default function Footer() {
  return (
    <footer className="z-10 mt-auto flex h-18 items-center border-t-1 bg-[black] lg:bg-[hsl(40,29%,94%)]">
      <nav className="flex w-5/12 justify-evenly text-[13px] font-light text-[hsl(0,0%,90%)] sm:justify-evenly md:ml-5 md:w-1/3 lg:mx-auto lg:w-[680px] lg:justify-start lg:text-[#6B6B6B]">
        <a href="#" className="order-2 lg:order-none lg:ml-3.5">
          Help
        </a>
        <a href="#" className="hidden lg:ml-3.5 lg:block">
          Status
        </a>
        <a href="#" className="order-1 lg:order-none lg:ml-3.5">
          About
        </a>
        <a href="#" className="hidden lg:ml-3.5 lg:block">
          Careers
        </a>
        <a href="#" className="hidden lg:ml-3.5 lg:block">
          Press
        </a>
        <a href="#" className="hidden lg:ml-3.5 lg:block">
          Blog
        </a>
        <a href="#" className="order-4 lg:order-none lg:ml-3.5">
          Privacy
        </a>
        <a href="#" className="hidden lg:ml-3.5 lg:block">
          Rules
        </a>
        <a href="#" className="order-3 lg:order-none lg:ml-3.5">
          Terms
        </a>
        <a href="#" className="hidden lg:ml-3.5 lg:block">
          Text to speech
        </a>
      </nav>
    </footer>
  );
}
