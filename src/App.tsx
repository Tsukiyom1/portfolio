import deved from "../public/dias.jpg";
import react from "../public/react.png";
import node from "../public/node.jpg";
import ts from "../public/ts1.png";
import tg from '../public/tg.png'
import vk from '../public/vk (2).png'
import link from '../public/link.png'
import resume from '../public/resume.pdf'
function App() {


  return (
    <div className='container'>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <header className='flex items-center justify-between my-11'>
          <h1 className="font-protest text-xl text-white">frontenjoyer</h1>
          <ul>
            <li>
              <a
                  href={resume}
                  download="resume.pdf"
                 className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              >Resume</a>
            </li>
          </ul>
        </header>
        <section>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Dias Sagidoldy
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Fullstack developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Architecting solutions, not problems: As a full-stack developer, I excel at identifying the best tools and technologies for both frontend and backend to create efficient, scalable, and secure web applications.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://web.telegram.org/k/#@FrontEnjoyer" target="_blank">
                <img src={tg} alt="tg" width={48} height={48}/>
              </a>
              <a href="https://vk.com/dreamerdii" target="_blank">
                <img src={vk} alt="tg" width={48} height={48}/>
              </a>
              <a href="https://" target="_blank">
                <img src={link} alt="tg" width={48} height={48}/>
              </a>
            </div>

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full  overflow-hidden mt-20 md:h-96 md:w-96">
              <img src={deved} alt='image'   />
            </div>
          </div>
          <h2 className='text-white font-semibold text-2xl'>My main technology stack </h2>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <div className='mx-20'>
                <img  alt='alt' src={react} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Bringing interfaces to life</h3>
              <p className="py-2">
                I specialize in building interactive and user-friendly experiences with React, crafting smooth and engaging web applications.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className='mx-20'>
                <img  alt='alt' src={node} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Powering the backend
              </h3>
              <p className="py-2">
                Node.js is my tool for creating efficient and scalable APIs, ensuring your application runs seamlessly.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <div className='mx-20'>
                <img  alt='alt' src={ts} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Clean and confident code</h3>
              <p className="py-2">
                I leverage TypeScript for both frontend and backend, resulting in type-safe code that reduces errors and improves maintainability.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
