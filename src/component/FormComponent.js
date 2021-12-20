import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { AiOutlineHome, AiOutlineImport } from 'react-icons/ai';
import { Link } from 'react-router-dom'


const FormComponent = () => {
    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [startDate, setStartDate] = useState(new Date());

    return (
        <body>
            
        <main>

            <div className='form-container'>
                <form className="">       
                    <h1>Bienvenue</h1>
                    <input type="text" name="name"  value={name} onChange={(e)=>setName(e.target.value) } required/>
                    <br />
                    <input type="text" name="name" value={lastName} onChange={(e)=>setLastName(e.target.value)}  required/>
                    <br />
                    <div>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                
                     <input type="button" value="Add" />
                     <Link to="/" className='lnk btn input'> <AiOutlineHome/> Return </Link>
       

                </form>
                <div className="drop drop-1"></div>
                
            </div>
        </main>
    </body>
    )
}





export default FormComponent
