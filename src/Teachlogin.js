import React from 'react';
import { Link } from 'react-router-dom';
import "./Component/c1.css";

import { Component } from 'react'


export default class Tlogin extends Component {
    
  render() {

     
    return (
      <div className='form'>
           <form action="">
           <h1>Login Here</h1>
           <p>
               <label htmlFor="">
                   Mail
               </label> <br />
               <input type="text" id='user'/>
           </p>
           <p>
               <label htmlFor="">
                   Password
               </label> <br />
               <input type="password" id='pass' />
           </p>
           <p>
               <label htmlFor="">
                   Teacher Code
               </label> <br />
               <input type="number" id='pass'  />
           </p>
           <p>
          <Link className='Button'  to="/Teacher">Submit</Link>
              
           </p>
       </form>

      </div>
    )
  }
}