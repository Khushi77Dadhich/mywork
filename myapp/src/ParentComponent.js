import React from 'react'
import { useState, data } from 'react';

import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    
    const HandleChild = (children) => {
        const [data , setData] = useState(null);
        setData(children);
    };
  return (
    <div>
      <ChildComponent onDataFromChild={HandleChild} />
      <p>{data}</p>
    </div>
  );
};

export default ParentComponent;
