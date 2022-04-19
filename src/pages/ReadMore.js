import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'

const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white',
    cursor: "pointer"
};

export default function ReadMore(props)
{
    const [data, setData] = useState( [] )
    let { id } = useParams();

    useEffect( () =>
    {   
        Axios.get( `https://jsonplaceholder.typicode.com/posts/${id}` )
            .then( res => setData( res.data ) ).catch( err => console.log( err ) )
    }, [id] )

    return (
        <div className='container'>
            <Card className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        {data.body}
                    </Card.Text>
                    <Button variant="primary">
                        <Link to="/" style={linkStyle}>Return Home</Link>
                    </Button>
                </Card.Body>
                <Card.Footer className="text-muted">{data.userId} days ago</Card.Footer>
            </Card>
        </div>
    )
}
