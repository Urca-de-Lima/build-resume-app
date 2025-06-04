import React from 'react';
import { useParams } from 'react-router-dom';

const ResumePage = () => {
  const { resumeId } = useParams(); // Get the name from the URL

  return (
    <div>
      <h1>Resume: {resumeId}</h1>
      {/*Add resume details */}
    </div>
  );
};

export default ResumePage;
