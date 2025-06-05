/*
* FetchResume Service
* This service is responsible for fetching resume data from a specified path.
* It returns the resume data as a JSON object.
* If an error occurs during the fetch, it logs the error and re-throws it.
*/
const FetchResume = async (resumeId) => {
  try {
    const response = await fetch(`/data/${resumeId}`); // Adjust the path as necessary
    if (!response.ok) {
      throw new Error(`(First response) Error fetching resume: ${response.statusText}`);
    }
    const resumeData = await response.json();
    return resumeData; // Return the fetched resume data
  } catch (error) {
    console.error('(Second response) Error fetching resume:', error);
    throw error; // Re-throw the error for further handling if needed
  }
}

export default FetchResume;
