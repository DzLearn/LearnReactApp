import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'

export default function Home()
{
  const [count, setCount] = useState( "true" );
 

  const handleClick = () =>
  {
    if ( count === "true" )
    {
      setCount( "false" )
    } else
    {
      setCount( "true" )
    }
    
  };
  return (
    <div>
      <Button variant="primary" onClick={handleClick}>Primary</Button>
      <hr/>
      <h1>this is {count}</h1>
    </div>
    
  )
}
