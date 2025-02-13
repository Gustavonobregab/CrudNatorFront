export default function Search (){
  return (
    <main>
        <div className="flex justify-center items-center p-4 z-10">
            <div className=" p-6">
                <h2 className="text-stone-700 text-xl font-bold">Looking a Post?</h2>
                <p className="mt-1 text-sm">Tell me more:</p>
                <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="text-stone-600 text-sm font-medium">Title</label>
                        <input type="text" id="name" placeholder="titulo" className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="manufacturer" className="text-stone-600 text-sm font-medium">Author</label>
                        <input type="manufacturer" id="manufacturer" placeholder="Criador" className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="date" className="text-stone-600 text-sm font-medium">Post Date</label>
                        <input type="date" id="date" className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="status" className="text-stone-600 text-sm font-medium">Area</label>

                        <select id="status" className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                            <option>Frontend</option>
                            <option>Backend</option>
                            <option>Fullstack</option>
                            <option>Mobile</option>
                            <option>DevOps</option>
                            <option>UX/UI</option>
                            <option>QA</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
                <button className="hover:text-white hover:bg-black bg-slate-300 text-black font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reset</button>
                <button className="text-white bg-black hover:bg-slate-300 hover:text-black font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Search</button>
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center p-4 z-10">
            posts pesquisados aqui
        </div>
    </main>

  );
};