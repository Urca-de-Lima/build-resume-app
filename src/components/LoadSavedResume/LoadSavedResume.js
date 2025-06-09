import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchResume from '../../services/FetchResume';
import Resume from '../../Models/Resume';

const ResumePage = () => {
  const { resumeId } = useParams(); // Get the name from the URL
  const [resumeData, setResumeData] = useState(null); // State to hold the fetched resume data
  // State to hold the resume ID, if needed
  // Fetch the resume data using the FetchResume service
  useEffect(() => {
    const fetchResume = async () => {
      try {
        const data = await FetchResume(resumeId);
        console.log('Fetched Resume Data:', data);
        
        if (data) {
          const resumeInstances = new Resume(data);
          setResumeData(resumeInstances); // Set the fetched resume data to state
        }
      } catch (error) {
        console.error('Error fetching resume:', error);
      }
    };

    fetchResume();
  }, [resumeId]);

  return (
    <div>
      <h1>Resume: {resumeId}</h1>
      <input type="text" className="styled-input" placeholder="Enter your text here..." />
      <p>{resumeData ? resumeData.name : "Loading..."}</p>
      <p>{resumeData ? resumeData.address.street : "Loading..."}</p>
      <h2>Experience</h2>
      {resumeData ? (
        resumeData.experience.map((exp, index) => (
          <div key={index}>
            <h3>{exp.jobTitle}</h3>
            <p>{exp.company}</p>
            <p>{exp.startDate} - {exp.endDate}</p>
            <ul>
              {exp.responsibilities.map((res, resIndex) => (
                <li key={resIndex}>{res.description}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>Loading experience...</p>
      )}
    </div>
  );
};

export default ResumePage;
