import React from 'react'
//import moment from 'moment';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { MdModeEdit, MdDelete } from 'react-icons/md'
import { Card, } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

dayjs.extend(relativeTime)
const Memory = ({ memory }) => {
  return (
    <Card className='rounded py-3 my-3'>
      <Card.Img variant="top" src={memory.image} />
      <Card.Body>
        <Card.Title style={{ fontWeight: 'bold', color: 'black' }}>{memory.title}</Card.Title>
        <Card.Text>{memory.content}  </Card.Text>
        <Card.Title><span style={{ fontWeight: 'bold', color: 'darkcyan' }}>Author:</span> {memory.creator}</Card.Title>
        {/* <Card.Subtitle>{moment(memory.createdAt).fromNow()}</Card.Subtitle> */}
        <Card.Subtitle>{dayjs(memory.createdAt).fromNow(false)}</Card.Subtitle>
      </Card.Body>
      <Card.Footer style={{ display: 'flex', justifyContent: 'space-between' }} className='bg-white pb-0'>
        <LinkContainer to='/' style={{ cursor: 'pointer' }}>
          <MdModeEdit color='blue' size={18} />
        </LinkContainer>
        <MdDelete style={{ cursor: 'pointer' }} color='red' size={18} />
      </Card.Footer>
    </Card>


  )
}

export default Memory