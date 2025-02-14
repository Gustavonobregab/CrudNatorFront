import PostList from "../components/PostList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative grid grid-rows-[250px_1fr_350px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      {/* Imagem no canto superior direito */}
      <Image
        src="/CrudNatorGirl.png"
        alt="Descrição da imagem"
        width={500}
        height={300}
        className="absolute -top-24 -right-24 w-80 h-[400px] sm:w-96 sm:h-[500px] transform rotate-[240deg]"
      />

      <main className="container mx-auto">
        <section className="flex flex-col place-items-center">
          <div className="flex flex-col items-center relative">
            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] font-extrabold leading-none drop-shadow-2xl shadow-black tracking-[-0.05em] text-black mb-3 sm:pb-6 md:pb-4 lg:top-0 lg:pb-2">
              Welcome to
            </h1>
            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[10rem] absolute font-bold -bottom-1 sm:-bottom-1 md:-bottom-7 lg:-bottom-12 tracking-[-0.05em]">
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
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold lg:text-black mb-4 pt-10 self-center">
            Collaboration needs to be simple
          </p>
        </section>
      </main>
      <PostList />
    </div>
  );
}
