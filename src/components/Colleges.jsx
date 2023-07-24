import Header from './Header';

import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../useTitle';
import { Fade} from 'react-awesome-reveal';


const Colleges = () => {
  useTitle('Colleges')
  const users= useLoaderData()
  const colleges= users.filter(user=> user.role==='Instructor')


  return (
    <>
      <Header />
      <h1 className='text-center font-bold text-4xl mt-4 mb-6'>All Colleges</h1>
     <Fade>
     
     <div className="w-full px-4 mb-8 grid lg:grid-cols-3 gap-4 ">
         {colleges.map(college => (
      <div className="bg-white shadow-md rounded-lg p-6">
        <img src={college.image?college.image:'Not available'} alt={college.name} className="w-full h-48 object-cover mb-4 rounded-md" />
        <h2 className="text-xl font-semibold mb-2">{college.name}</h2>
        <p className="mb-2"><strong>Admission Dates:</strong> {college.admissionDates}</p>
        <p className="mb-2"><strong>Events:</strong> {college.events}</p>
        <p className="mb-2"><strong>Research History:</strong> {college.researchHistory}</p>
        <p className="mb-2"><strong>Sports:</strong> {college.sports}</p>
        <Link to='/'><button className='btn btn-primary'>Details</button></Link>
      </div>
      ))}
    </div>
     </Fade>

    </>
  );
};
export default Colleges;