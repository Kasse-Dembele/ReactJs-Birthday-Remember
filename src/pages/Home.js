import React from 'react'
import { useState } from 'react';
import List from '../component/listComponent'
import {AiOutlineDelete} from 'react-icons/ai'
import { BsPersonPlus, } from "react-icons/bs";
import data from '../data'
import { Link } from 'react-router-dom'


const Home = () => {

    const [people,setPeople]= useState(data)
    return (
        <main>
          <section className="container">
            <h3>{people.length} birthdays today</h3>
            <List people={people}/>
            <div className='btn-container'>
              <button className='btn' onClick={()=> setPeople([])}><AiOutlineDelete className='icon'/> Clear All</button>
              <Link to={`/form`} className='lnk btn'><BsPersonPlus className='icon'/> Add</Link>
            </div>

          </section>
        </main>
    )
}

export default Home
