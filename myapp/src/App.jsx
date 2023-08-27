// import ParentComponent from './ParentComponent'
import React, { AComponent } from 'react';
// import Nav_Bar from './Nav_Bar';

// import './App.css';
// import Carsoul from './Carsoul';
// import ImgCard from './ImgCard';
// // import imagedata from './imagedata';
// import {useEffect, useState} from 'react';


// const nCard = (val) => {
//   return <ImgCard 
//   title ={val.title} 
//   imgsrc={val.image} 
//   desc = {val.price}
//   />
// }

function App() {
  // const[Data, SetData]= useState([]);
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     try{
  //       const response = await fetch("https://fakestoreapi.com/products");
  //       const Data = await response.json();
  //       SetData(Data);
  //     }
  //     catch(error){
  //       console.log('error comes', error);
  //     }
  //   };
  //   fetchdata();
  // }, []);

  return (
    // <div>
    // <Nav_Bar />
    // <Carsoul />

    //   <div className="row">
    //     {Data.map((val, index) => (
    //       <div key = {val.id} className='col-md-4'>
    //       {nCard(val)}
    //       </div>
    //     ))}
    //   </div>   
    //   </div>
    // <>
    // <ParentComponent/>
    // </>
    <AComponent/>
  );
}
export default App;
