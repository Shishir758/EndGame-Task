
import React, { useContext,  useState, Fragment, useRef } from 'react';
import { useLoaderData } from 'react-router-dom';

import useTitle from '../useTitle';

import Header from './Header';
import { AuthContext } from './provider/AuthProviders';
import 'animate.css';
import { Slide } from 'react-awesome-reveal';
import { Dialog, Transition } from '@headlessui/react'
const Admission = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);

  const users= useLoaderData()

  const instructors= users.filter(user=> user.role==='Instructor')


  useTitle('Admission')



  return (
    <><Header></Header>
    <h1 className='text-center font-bold text-4xl mt-4 mb-6'>All of our colleges</h1>
        <Slide>
        <div className="mx-16 grid grid-cols-2 gap-4">
        {instructors.map((instructor) => (




<button
className='bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent items-center'
onClick={() => setOpen(true)}><span className="flex items-center">Daynamic College Name</span>
</button>
        ))}
</div>
        </Slide>



      <Transition.Root show={open} as={Fragment}>
        
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={() => setOpen(false)}>
          <div className="flex lg:mt-16 items-end justify-center min-h-screen pt-4 px-4 pb-10 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* Rest of the modal content */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div className="sm:flex sm:items-start">
              
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Send me a Message:
                    </Dialog.Title>
                    <div className="mt-2">
                      <form  ref={form} /* onSubmit={sendEmail} */ class="w-full max-w-lg">
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Your Full Name
      </label>
      <input name="from_name"  class="appearance-none block w-full bg-gray-200 text-gray-700 border py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Your Name"/>
    </div>
    <div class="w-full md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Your Email Address
      </label>
      <input name="from_email"  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Your Email"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-6">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">Your Message</label>
      <textarea name="message" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Your message"/>
    </div>
  </div>
  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-green-700 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}>Submit</button>

                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)} // Close the modal
                    /* ref={cancelButtonRef} */
                  >
                    Cancel
                  </button>
                </div>
</form>
                    </div>
                  </div>
                </div>
              
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>





      

    </>
  );
};

export default Admission;