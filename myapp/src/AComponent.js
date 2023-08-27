import React from 'react'
import DataContext from './createContext';
import BComponent from './BComponent';

const AComponent = () => {
    const inform = "Hi I am Khushi Dadhich";
  return (
    <DataContext.Provider value={inform}>
        <div>AComponent
            <BComponent/>
        </div>
    </DataContext.Provider>
  );
};

export default AComponent
