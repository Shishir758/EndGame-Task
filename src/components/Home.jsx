import React, { useState} from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import '@smastrom/react-rating/style.css'
import useTitle from '../useTitle';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../components/home.css';

import { FiMoon, FiSun } from 'react-icons/fi';

const colleges = [
  {
    id: 1,
    name: 'University of Knowledge',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNea9PVNr6eDeOUmPyNK5UM8_qi5XzC6rScMIpYs2qJp56177375qb1HTww5Frci1EMHc&usqp=CAU',
    admissionDates: 'August 15 - September 15',
    events: 'Freshers\' Party, Orientation Day',
    researchHistory: 'Founded in 1885, producing 50 Nobel laureates.',
    sports: 'Football, Basketball, Swimming',
  },
  {
    id: 2,
    name: 'Tech Institute',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNea9PVNr6eDeOUmPyNK5UM8_qi5XzC6rScMIpYs2qJp56177375qb1HTww5Frci1EMHc&usqp=CAU',
    admissionDates: 'July 1 - August 30',
    events: 'Tech Fest, Hackathon',
    researchHistory: 'Pioneers in AI and Robotics research.',
    sports: 'Cricket, Table Tennis, Volleyball',
  },
  {
    id: 3,
    name: 'Art & Design College',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNea9PVNr6eDeOUmPyNK5UM8_qi5XzC6rScMIpYs2qJp56177375qb1HTww5Frci1EMHc&usqp=CAU',
    admissionDates: 'March 1 - April 15',
    events: 'Art Expo, Fashion Show',
    researchHistory: 'Promoting creativity since 1972.',
    sports: 'Paintball, Chess',
  },
];


const Home = () => {
  const users= useLoaderData()



return (
  <>
    <div className=' mx-auto lg:w-3/4'>
      <h1 className='text-center font-bold text-2xl mt-10'>Popular Colleges</h1>

    </div>
    <div className="w-full px-4 mb-8 grid lg:grid-cols-3 gap-4 ">
         {colleges.map(college => (
      <div className="bg-white shadow-md rounded-lg p-6">
        <img src={college.image?college.image:'Not available'} alt={college.name} className="w-full h-48 object-cover mb-4 rounded-md" />
        <h2 className="text-xl font-semibold mb-2">{college.name}</h2>
        <p className="mb-2"><strong>Admission Dates:</strong> {college.admissionDates}</p>
        <p className="mb-2"><strong>Events:</strong> {college.events}</p>
        <p className="mb-2"><strong>Research History:</strong> {college.researchHistory}</p>
        <p className="mb-2"><strong>Sports:</strong> {college.sports}</p>
        <Link to={`/college/${college.id}`}><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">|Details|</button></Link>
      </div>
      ))}
    </div>


    <div className=' mx-auto lg:w-3/4'>
      <h1 className='text-center font-bold text-2xl mt-10'>Photo Gallary</h1>
      
    </div>

    <div className="mx-6 grid lg:grid-cols-3 mb-8 gap-12 h-full" data-aos="fade-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        
        {colleges.map((college) => (
          <div key={college.id} className="bg-white rounded-lg shadow-md p-2 flex flex-col h-full">
            <img src={college.image} alt="Instructor" className="rounded-xl w-full mb-4 h-96" />
      
          </div>
        ))}
      </div>


    <div className=' mx-auto lg:w-3/4'>
      <h1 className='text-center font-bold text-2xl mt-10'>Request Class Form</h1>
      <h1 className='text-center text-2xl mt-2 mb-4'>Please let us know what class do you want by fill this form.</h1>
    </div>

    <form className="lg:max-w-6xl lg:mx-auto mx-4" data-aos="fade-left">
      <div className='grid lg:grid-cols-2 gap-4'>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-gray-700 font-bold mb-2">
            Class Name:
          </label>
          <input
            type="text"
            id="productName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue=""

            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
            Fees (In Us Dollar)
          </label>
          <input
            type="number"
            id="quantity"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue=''
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
          Class Duration in Month
          </label>
          <input
            type="number"
            id="price"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
            Write something about calss
          </label>
          <textarea
            id="address"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue=''
            required
          ></textarea>
        </div>
      </div>
      <button
        type="submit"
        className="bg-blue-700 mb-4 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
       Request for a class
      </button>
    </form>
  </>
);
};

export default Home;