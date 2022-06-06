import React from 'react'
import { Form, Button, } from 'react-bootstrap'
import FileBase64 from 'react-file-base64';


const SubmitMemory = (value) => {
    return (<>

        <Form>
            <Form.Group>
                <h1>Create a Memory</h1>
            </Form.Group>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                    name='author'
                    type='text'
                    as='textarea'
                    rows={6}
                />
            </Form.Group>
            <Form.Group>
                <FileBase64
                    type='file'
                    multiple={false}
                    onDone={() => { }}
                />
            </Form.Group>

            <Button className='my-3 col-12' type='submit' >Submit</Button>

        </Form>
    </>
    )
}

export default SubmitMemory