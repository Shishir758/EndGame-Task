import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './components/Header';


const College = () => {
    const { id } = useParams();
    
  const [college, setCollegesData] = useState([]);

  const selectedCollege = college.find(college => college.id === parseInt(id));
  console.log(id,selectedCollege);

  useEffect(() => {
    fetch('/colleges.json')
      .then(response => response.json())
      .then(data => setCollegesData(data))
      .catch(error => console.error('Error fetching colleges:', error));
  }, []);
    return (
        <>
        <Header/>
        <div className="container mx-auto my-8 px-4">
      <div className="bg-white shadow-md rounded-lg p-6">

        <div className="flex flex-col md:flex-row">
        
          <div className="md:w-1/3 mb-4 md:mb-0">
            <img src={college.image ?? undefined } alt={`college Number:${id}`} className="w-full h-48 object-cover mb-4 rounded-md" />
          </div>
          <div className="md:w-2/3 md:pl-6">
            <h2 className="text-3xl font-semibold mb-4">{college.name}</h2>
            <p className="mb-4"><strong>Admission Process:</strong> {college.admissionProcess?? `Infomation for college number: ${id}`}</p>
            <p className="mb-4"><strong>Events Details:</strong> {college.eventsDetails ?? `Infomation for college number: ${id}`}</p>
            <p className="mb-4"><strong>Research Works:</strong> {college.researchWorks ?? `Infomation for college number: ${id}`}</p>
            <p className="mb-4"><strong>Sports Categories:</strong> {college.sportsCategories ?? `Infomation for college number: ${id}`}</p>
          </div>
        </div>
 
      </div>
    </div>
    </>
    );
};

export default College;