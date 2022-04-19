import React, { useState } from 'react'

import { Routes, Route } from "react-router-dom";

import Home from '../pages/Home'
import Motion from '../pages/Motion'
import ReadMore from '../pages/ReadMore';

import Base from '../components/Base'
import Toppings from '../components/Toppings'
import Order from '../components/Order'

export default function NavRoutes()
{
  const [pizza, setPizza] = useState( { base: "", toppings: [] } );

  const addBase = ( base ) =>
  {
    setPizza( { ...pizza, base } )
  }

  const addTopping = ( topping ) =>
  {
    let newToppings;
    if ( !pizza.toppings.includes( topping ) )
    {
      newToppings = [...pizza.toppings, topping];
    } else
    {
      newToppings = pizza.toppings.filter( item => item !== topping );
    }
    setPizza( { ...pizza, toppings: newToppings } );
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/motion" element={<Motion />} />
      <Route path="/card/:id" element={<ReadMore />} />
      <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />}/>
      <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />}/>
      <Route path="/order" element={<Order pizza={pizza} />}/>
    </Routes>
  )
}
