import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

const apiValue = createContext();

function AllData({children}) {
  const [full, setFull] = useState([]);

  useEffect(() => {
    axios.get('/js/Api.json')
      .then((result) => {
        setFull(result.data.products);
      });
  }, []);

  return (
    <apiValue.Provider value={full}>
      {children}
    </apiValue.Provider>
  );
}

export { AllData, apiValue };
