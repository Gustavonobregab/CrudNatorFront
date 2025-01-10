import PostList from "../components/PostList";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
       <main className="container mx-auto">
        <section className="flex flex-col place-items-center">
          <h1 className="grow text-4xl font-extrabold leading-none tracking-tight text-gray-900 pb-2">Welcome to CrudNator!</h1>
          <p className="text-sm text-slate-500 mb-4">
            "As melhores inovações vêm da colaboração, não da competição." – Satya Nadella (CEO da Microsoft)
          </p>
        </section>
      </main>
      <PostList />
    </div>
  );
}
