import React from 'react'

import '../assets/styles/footer.css'

export default function Footer() {
  return (
    <div className='main-footer'>
      <div className='container'>
        <div className='row'>
          {/*coulmns1*/}
          <div className='col'>
            <h4>col 1</h4>
            <ul className='list-unstyeld'>
              <li>l1.1</li>
              <li>l1.2</li>
              <li>l1.3</li>
              <li>l1.4</li>
            </ul>
          </div>
          {/*coulmns2*/}
          <div className='col'>
            <h4>col 2</h4>
            <ul className='list-unstyeld'>
              <li>l2.1</li>
              <li>l2.2</li>
              <li>l2.3</li>
              <li>l2.4</li>
            </ul>
          </div>
          {/*coulmns3*/}
          <div className='col'>
            <h4>col 3</h4>
            <ul className='list-unstyeld'>
              <li>l3.1</li>
              <li>l3.2</li>
              <li>l3.3</li>
              <li>l3.4</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <p className='col-row'>
            &copy;{new Date().getFullYear()} All right reserve to Learn 
          </p>
        </div>
      </div>
    </div>
  )
}
