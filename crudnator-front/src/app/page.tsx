import PostList from "../components/PostList";

export default function Home() {
  return (
    <div className="grid grid-rows-[200px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="container mx-auto">
        <section className="flex flex-col place-items-center">
          <div className="flex flex-col items-center relative">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight text-gray-900 top-0 pb-2">Welcome to</h1>
            <h1 className="text-6xl md:text-7xl lg:text-9xl absolute font-bold -bottom-12">
              <span className="text-blue-500">C</span>
              <span className="text-red-100">r</span>
              <span className="text-green-500">u</span>
              <span className="text-yellow-500">d</span>
              <span className="text-purple-500">N</span>
              <span className="text-pink-500">a</span>
              <span className="text-orange-500">t</span>
              <span className="text-gray-200">o</span>
              <span className="text-gray-400">r</span>
            </h1>
          </div>
          <p className="text-sm text-slate-500 mb-4 pt-10"> "As melhores inovações vêm da colaboração, não da competição." – Satya Nadella (CEO da Microsoft)</p>
        </section>
      </main>
      <PostList />
    </div>
  );
}
