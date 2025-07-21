export default function MainContent() {
  return (
    <main className="h-full relative">
      <img
        className="absolute right-0 top-[25%] h-[600px]"
        src="/main_image.webp"
        alt="Background Drawings flower,geomerty and a hand drawing stars "
      />
      <section className="flex flex-col h-9/12 justify-evenly ml-16 mt-26">
        <div className="text-[7.5rem]/[6rem] font-[Playfair_Display]">
          <h1>Human</h1>
          <h1>stories & ideas</h1>
        </div>
        <span className="text-2xl font-light mt-6">
          A place to read, write, and deepen your understanding
        </span>
        <a href="#">
          <button className="px-10 py-2 mt-4 bg-[black] text-[white] text-xl font-light rounded-4xl cursor-pointer">
            Start reading
          </button>
        </a>
      </section>
    </main>
  );
}
