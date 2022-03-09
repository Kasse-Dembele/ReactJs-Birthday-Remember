import React from 'react'
import { useState } from 'react';
import List from '../component/listComponent'
import {AiOutlineDelete} from 'react-icons/ai'
import { BsPersonPlus, } from "react-icons/bs";

import { Link } from 'react-router-dom'
const Home = ({people,clearAll}) => {

  
  console.log("Test ")
    return (
        <main>
          <section className="container">
            <h3>{people.length} birthdays today</h3>
            <List people={people}/>
            <div className='btn-container'>
              <button className='btn' onClick={()=> clearAll()}><AiOutlineDelete className='icon'/> Clear All</button>
              <Link to={`/add`} className='lnk btn'><BsPersonPlus className='icon'/> Add</Link>
            </div>

          </section>
        </main>
    )
}

export default Home
