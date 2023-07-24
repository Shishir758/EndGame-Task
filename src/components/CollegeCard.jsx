import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';







const CollegeCard = () => {
    const [colleges, setCollegesData] = useState([]);

    useEffect(() => {
      fetch('/colleges.json')
        .then(response => response.json())
        .then(data => setCollegesData(data))
        .catch(error => console.error('Error fetching colleges:', error));
    }, []);

  return (
    <>
    <Header/>
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
    </>
  );
};

export default CollegeCard;