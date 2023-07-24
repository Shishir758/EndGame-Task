import React from 'react';

import Header from './Header';

const Feedback = () => {

    return (
        <>
        <Header/>
        <h1 className='mb-8 font-bold text-4xl text-center text-orange-500'>Feedback Message</h1>
            
        <form onSubmit={handleUpdate} id="toyForm" className="space-y-4">

<div className="flex flex-col w-2/3 mx-auto">
  <label htmlFor="pictureUrl" className="text-lg font-semibold mb-1">
  Feedback Message:
  </label>
  <textarea className="border border-gray-300 rounded-md py-2 px-3"
    type="text" id="pictureUrl"
    name="message" defaultValue={clas.feedback} />
</div>


<div className='text-center mb-8'><button
  type="submit"
  className=" mb-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4"
>Send Feedback</button>
</div>
</form>

          
        </>
    );
};

export default Feedback;