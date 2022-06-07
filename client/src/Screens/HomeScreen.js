import React, { useEffect, useState } from 'react'
import { Spinner, Row, Col } from 'react-bootstrap';
import { fetchMemories } from '../axios/index.js';
import MemoryCard from '../components/MemoryCard';

const HomeScreen = () => {
  const [memories, setMemories] = useState([])

  useEffect(() => {
    const getMemories = async () => {
      const { data } = await fetchMemories();
      setMemories(data)
    }

    getMemories()
  }, [])
  return (<>
    <h1>Actual Memories</h1>
    {!memories.length ? <Spinner animation='border' /> : (
      <Row className='m-auto'>
       { memories.map(memory => (

        <Col sm={12} md={6} lg={4} xl={3}
          key={memory._id}
          className='m-auto'>
          <MemoryCard memory={memory} />
        </Col>
        )
        )}

      </Row>)
    }

  </>
  )
}

export default HomeScreen