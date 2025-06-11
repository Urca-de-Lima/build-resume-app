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

  const handleInputChange = (event) => {
    setResumeData(event.target.value); // Update state on input change
  }

  return (
    <div>
      <h1>Working on: {resumeId}</h1>
      {/* input test */}
      <div className="input-container">
        {/*<input
          className="styled-input"
          type="text"
          value={resumeData ? resumeData.name : "Loading..."}
          onChange={handleInputChange}
          placeholder="Enter your text here..." />*/}
      </div>
      {/* input with label test */}
      <div className="input-container">
        <label className="styled-label-2" htmlFor="name">Your Name</label>
        <input className="styled-input-2" type="text" id="name" required />
      </div>
      {/* label test */}
      <div className="input-container-2">
        <label htmlFor="name" className="input-label-2">
          My Name
        </label>
        {/*<input
          id="name"
          type="text"
          value={resumeData.name}
          onChange={handleInputChange}
          placeholder="Enter your text here..."
          className="styled-input-3"
        />*/}
      </div>
      {/* another test */}
      <div className="matui-input-container">
        <input className="matui-input" type="text" id="input" required />
        <label for="input" className="matui-input-label">Your Label</label>
      </div>
      {/* DATA */}
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
