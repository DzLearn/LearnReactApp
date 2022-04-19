import React,{useState,useEffect} from 'react'
import Axios from 'axios'

import { Link } from "react-router-dom";

import { Card, Button } from 'react-bootstrap'

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white',
  cursor: "pointer"
};

export default function Home()
{
  const [data, setData] = useState( [] )
  
  
  useEffect( () =>
  {
    Axios.get( 'https://jsonplaceholder.typicode.com/posts' )
      .then( res => setData( res.data ) ).catch( err => console.log(err) )
  },[])
  return (
    <div className='container'>
      <div className='home-container'>
        {data.map( ( data, index ) =>
        {
          return <Cards data={data} />
        } )}
      </div>
    </div>
    
  )
}

function Cards(props)
{
  const [more, setMore] = useState( true )
  return (
    <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={require("../assets/images/img1.jpg")}/>
      <Card.Body>
        <Card.Title>{props.data.title.slice( 0, 10 )}..</Card.Title>
        <Card.Text>
          {more ? props.data.body.slice( 0,  50  ) : props.data.body}
          <br/>
          <button onClick={()=>{setMore(!more)}}>read more</button>
          </Card.Text>
        <Button variant="primary">
          <Link to={`/card/${ props.data.id }`} style={linkStyle}>Go somewhere</Link>
        </Button>
      </Card.Body>
    </Card>
  )
}
