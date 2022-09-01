import React from 'react';
import Card from 'react-bootstrap/Card';

function SeriesList({seriesImg, title, year}) {
  return (
    <Card className='rounded border-0 bg-black text-white'>
      <Card.Img variant="top" src={seriesImg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p className='text-muted'>{year}</p>
      </Card.Body>
    </Card>
  );
}

export default SeriesList;