import React from 'react';
import RichTextEditor from '../RichTextEditor';
import './NewResume.css';

function NewResume() {
  return (
    <div>
      <h1>New Resume Page</h1>
      <h5 className="h5-margin">This is where you can create a new resume.</h5>
      <div className='resume-section-headers'>
        <p style={{ margin: '15px 0px' }}>Profile:</p>
        <RichTextEditor />
      </div>
      <button
        className="save-button"
        type="button"
        onClick={() => alert('Resume saved!')}
      >Save</button>
    </div>
  );
}

export default NewResume;