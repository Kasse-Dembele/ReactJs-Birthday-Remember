import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { AiOutlineHome, AiOutlineImport } from 'react-icons/ai';
import { Link } from 'react-router-dom'
<<<<<<< HEAD
const image = "https://picsum.photos/200/200"

const FormComponent = ({addUser}) => {
    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [age, setAge] = useState('');
=======


const FormComponent = () => {
    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [startDate, setStartDate] = useState(new Date());
>>>>>>> ca489c1b018ab41c6e15435e6816a8877a748041

    return (
        <body>
            
        <main>

            <div className='form-container'>
                <form className="">       
                    <h1>Bienvenue</h1>
<<<<<<< HEAD
                    <input type="text" name="name" placeholder='First Name'  value={name} onChange={(e)=>setName(e.target.value) } required/>
                    <br />
                    <input type="text" name="lastName" placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)}  required/>
                    <br />
                    <input type="text" name="age" placeholder='Age' value={age} onChange={(e)=>setAge(e.target.value)}  required/>        
                     <br />
                     <input type="button" value="Add" onClick={()=>{addUser({id:Math.ceil(Math.random(10000)),name:`${name} ${lastName}`,age:parseInt(age),image})}}/>
                     <Link to="/" className='lnk  input'> <AiOutlineHome/> Return </Link>
=======
                    <input type="text" name="name"  value={name} onChange={(e)=>setName(e.target.value) } required/>
                    <br />
                    <input type="text" name="name" value={lastName} onChange={(e)=>setLastName(e.target.value)}  required/>
                    <br />
                    <div>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                
                     <input type="button" value="Add" />
                     <Link to="/" className='lnk btn input'> <AiOutlineHome/> Return </Link>
>>>>>>> ca489c1b018ab41c6e15435e6816a8877a748041
       

                </form>
                <div className="drop drop-1"></div>
                
            </div>
        </main>
    </body>
    )
}





export default FormComponent
