import React from 'react';
import FetchApp from '../../services/FetchData';

function DataModelTest() {
  return (
    <div>
      <h1>Data Model Test</h1>
      <h5 style={{ margin: '10px 0px' }}>This is where you can test the data model.</h5>
      <FetchApp />
    </div>
  );
}

export default DataModelTest;
