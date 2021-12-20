import React from 'react'
import {FaUserEdit} from 'react-icons/fa'
import { Link } from 'react-router-dom'
const List = ({people})=>{
    return (
        <>
            {people.map((person)=>{
                const {id,name,age,image} = person
                return <section key={id} className="person">

                    
                    <img src={image} alt="icon" className="card-img  "  />
                    <div className="info-container" >
                    <h4>{name}</h4>
                    <p>{age} years</p>
                    
                    </div>

                    <div className="icon-container">
                    <Link className='lnk' to={`/person/${id}`}><FaUserEdit className='icon'/></Link>
                    </div>
                    
                </section>
            })}
        </>
    )
}
export default List
