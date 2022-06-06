import React, { useState } from 'react'
import { Form, Button, } from 'react-bootstrap'
import FileBase64 from 'react-file-base64';
import  *  as api from '../axios/index.js';


const SubmitMemory = (value) => {
    const [memoryData, setMemoryData] = useState({
        title: '',
        content: '',
        creator: '',
        image: '',
    })

    return (<>

        <Form onSubmit={(e) => {
            e.preventDefault();
            api.createMemory(memoryData);
        }}>
            <Form.Group>
                <h1>Create a Memory</h1>
            </Form.Group>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control
                    name='title'
                    type="text"
                    onChange={(e) => setMemoryData({ ...memoryData, title: e.target.value })} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                    name='creator'
                    type='text'
                    onChange={(e) => setMemoryData({ ...memoryData, creator: e.target.value })}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Your Memory</Form.Label>
                <Form.Control
                    name='content'
                    type='text'
                    as='textarea'
                    rows={4}
                    onChange={(e) => setMemoryData({ ...memoryData, content: e.target.value })}
                />
            </Form.Group>
            <Form.Group>
                <FileBase64
                    type='file'
                    multiple={false}
                    onDone={({ base64 }) => {
                      setMemoryData({ ...memoryData, image: base64 })
                    }}
                />
            </Form.Group>

            <Button className='my-3 col-12' type='submit' >Submit</Button>

        </Form>
    </>
    )
}

export default SubmitMemory