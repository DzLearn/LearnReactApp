import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import { useParams } from "react-router-dom";

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
        <div>
            <h3>{data.title }</h3>
            <p>{data.body }</p>
        </div>
    )
}
