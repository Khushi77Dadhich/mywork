import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const ImgCard = ({title, imgsrc, desc}) => {

  
    const [count, setCount] = useState(0);
    const HandleClick=() => {
      setCount(count + 1)
    console.log("Button Clicked", count);
  };
  return (
    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={imgsrc} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {desc}
      </Card.Text>
      <Button onClick={HandleClick} variant="primary">Go somewhere</Button>
      {count}
    </Card.Body>
  </Card>
    </div>
  )
}

export default ImgCard
