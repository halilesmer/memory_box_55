import React from 'react'
import { Card } from 'react-bootstrap'

const Memory = ({memory}) => {
  return (
    <Card border="dark" >
     <Card.Header>{memory.title}</Card.Header>
     <Card.Img variant="top" src={memory.image} />

     <Card.Body>
        <Card.Title> {memory.title} </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
     </Card>
  )
}

export default Memory