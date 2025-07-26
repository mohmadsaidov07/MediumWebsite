import { useState } from "react";

export default function MainContent() {
  const [isReading, setIsReading] = useState(true);
  return (
    <main className="relative flex h-full flex-col justify-center 2xl:items-center">
      <img
        className="fixed mt-20 ml-205 hidden h-[600px] w-[460px] lg:block xl:right-0 xl:ml-0"
        src="https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png"
        alt="Background Drawings flower,geomerty and a hand drawing stars "
      />
      <section className="m-[75px_24px_0px] flex h-[396px] flex-col items-start justify-between sm:justify-evenly md:m-[75px_48px_0px] md:justify-around lg:m-[75px_64px_0px] 2xl:w-[1192px]">
        <div>
          <h2 className="color-[#242424] w-[253px] font-[Playfair_Display] text-[5rem]/[4.5rem] sm:w-full md:text-[6.5rem]/[6rem] lg:text-[7.5rem]/[6.5rem]">
            Human <br /> stories & ideas
          </h2>
        </div>
        {isReading && (
          <h3 className="w- text-[22px] font-light">
            A place to read, write, and deepen your understanding
          </h3>
        )}
        <a href="#">
          <button
            onClick={() => setIsReading((prev) => !prev)}
            className="w-48 cursor-pointer rounded-4xl bg-[#1A8917] px-5 py-2 text-xl font-extralight text-[white] lg:bg-[black]"
          >
            {isReading ? "Stop reading" : "Start reading"}
          </button>
        </a>
      </section>
    </main>
  );
}
