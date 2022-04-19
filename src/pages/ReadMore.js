import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Card, Button } from 'react-bootstrap'

import { motion } from 'framer-motion';

import '../assets/styles/more.css'

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
            <NavCard data={data} />
            <AnimationCard data={data}/>
        </div>
    )
}

function NavCard(props)
{
    return (
        <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
                <Card.Title>{props.data.title}</Card.Title>
                <Card.Text>
                    {props.data.body}
                </Card.Text>
                <Button variant="primary">
                    <Link to="/" style={linkStyle}>Return Home</Link>
                </Button>
            </Card.Body>
            <Card.Footer className="text-muted">{props.data.userId} days ago</Card.Footer>
        </Card>
    );
}

function AnimationCard( props )
{
    const [isOpen, setIsOpen] = useState( false );
    return (
        <div className='main'>
            <motion.div
                style={{
                    borderRadius: "2rem",
                    boxShadow:"0px 10px 30px rgba(0,0,0,0.5)"
                }}
                layout
                transition={{layout:{duration:1,type:"spring"}}}
                onClick={() => { setIsOpen( !isOpen ) }} className='mcard'>
                <motion.h2 layout="position">{props.data.title}</motion.h2>
                {isOpen && (
                    ( <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{duration:1}}
                            className='expand'
                        >
                            <p>{props.data.body}</p>
                        </motion.div>
                        <Button variant="primary">
                            <Link to="/" style={linkStyle}>Return Home</Link>
                        </Button>
                   </>)
                )}
                
                
            </motion.div>
        </div> );
}
