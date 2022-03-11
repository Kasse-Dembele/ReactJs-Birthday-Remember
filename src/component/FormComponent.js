import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { AiOutlineHome, AiOutlineImport } from 'react-icons/ai';
import { Link } from 'react-router-dom'


const image = "https://picsum.photos/200/200"

const FormComponent = ({addUser}) => {
    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [age, setAge] = useState('');
    console.log("Test");
    return (
        <body>
            
        <main>

            <div className='form-container'>
                <form className="">       
                    <h1>Bienvenue</h1>

                    <input type="text" name="name" placeholder='First Name'  value={name} onChange={(e)=>setName(e.target.value) } required/>
                    <br />
                    <input type="text" name="lastName" placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)}  required/>
                    <br />
                    <input type="text" name="age" placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)}  required/>        
                     <br />
                     <input type="button" value="Add" onClick={()=>{addUser({id:Math.ceil(Math.random(10000)),name:`${name} ${lastName}`,age:parseInt(age),image})}}/>
                     <Link to="/" className='lnk  input'> <AiOutlineHome/> Return </Link>

       

                </form>
                <div className="drop drop-1"></div>
                
            </div>
        </main>
    </body>
    )
}





export default FormComponent
