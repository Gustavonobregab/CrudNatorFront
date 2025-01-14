import PostList from "../components/PostList";

export default function Home() {
  return (
    <div className="grid grid-rows-[250px_1fr_350px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto">
        <section className="flex flex-col place-items-center">
          <div className="flex flex-col items-center relative">
            <h1 className=" text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight text-gray-900 mb-3 sm:pb-6 md:pb-4 lg:top-0 lg:pb-2">Welcome to</h1>
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl absolute font-bold -bottom-1 sm:-bottom-1 md:-bottom-7 lg:-bottom-12 ">
              <span className="text-headerColors-1">C</span>
              <span className="text-headerColors-2">r</span>
              <span className="text-headerColors-3">u</span>
              <span className="text-headerColors-4">d</span>
              <span className="text-headerColors-1">N</span>
              <span className="text-headerColors-2">a</span>
              <span className="text-headerColors-3">t</span>
              <span className="text-headerColors-4">o</span>
              <span className="text-headerColors-1">r</span>
            </h1>
          </div>
          <p className="text-sm sm:text-lg mb:text-md lg: text-slate-500 mb-4 pt-10 self-center"> "As melhores inovações vêm da colaboração, não da competição." – Satya Nadella (CEO da Microsoft)</p>
        </section>
      </main>
      <PostList />
    </div>
  );
}
