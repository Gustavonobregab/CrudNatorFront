import { ChevronDownIcon } from '@heroicons/react/16/solid'


export default function Posts() {
    return (
      <div className="flex flex-wrap justify-center gap-10 p-5 flex-grow min-h-[calc(100vh-100px)]">
       <main className="container mx-auto">
        <section className="flex flex-col place-items-center">
          <h1 className="grow text-4xl font-extrabold leading-none tracking-tight text-gray-900 pb-2">Let`s create a post!</h1>
        </section>
      </main>
      <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <p className="mt-1 text-sm/6 text-gray-600">
                This information will be displayed publicly so be careful what you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
                <div className="sm:col-span-4">
                  <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                    Author
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Author Name"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                    Post title
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
                      <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Post title"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                    Post Link
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">https://github.com/</div>
                      <input
                        id="Link"
                        name="Link"
                        type="text"
                        placeholder="postLink"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                    Area
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="Area"
                      name="Area"
                      autoComplete="Area-name"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>Frontend</option>
                      <option>Backend</option>
                      <option>Fullstack</option>
                      <option>Mobile</option>
                      <option>DevOps</option>
                      <option>UX/UI</option>
                      <option>QA</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                    Content
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      defaultValue={''}
                    />
                  </div>
                  <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about the project.</p>
                </div>
              </div>
            </div>
            </div>


          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" className="text-sm/6 font-semibold text-red-500">
              Cancel
            </button>
            <button
              className="text-white bg-black hover:bg-slate-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save
            </button>
          </div>
      </form>
      </div>
    );
  }