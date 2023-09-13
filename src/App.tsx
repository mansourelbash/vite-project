import './App.css'
import Users from './components/Users'
import { v4 as uuidv4 } from 'uuid';
import {useEffect, useState} from 'react'
type Email = {
  email: string,
  name: string
}
type Types = {
  gender: "male" | "female"
}[]
const alluser =[{
  name: 'Mansour bashqaabsheh',
  id: uuidv4(),
  city: 'ramtha',
  age: 29,
  gender: 'male',
  phone: '08938384',
  email: 'mansour@gmail.com',
},
{
  name: 'Ahmad',
  id: uuidv4(),
  city: 'irbid',
  age: 39,
  gender: 'male',
  phone: '08947839733',
  email: 'ahmad@gmail.com',
},
{
  name: 'Yaroub bashabseh',
  id: uuidv4(),
  city: 'jarash',
  age: 24,
  gender: 'male',
  phone: '079484763',
  email: 'yarboub@gmail.com',
},
{
  name: 'Yousef Bashabsheh',
  id: uuidv4(),
  city: 'ajloun',
  age: 6,
  gender: 'male',
  phone: '079484763',
  email: 'Yoiseffff@gmail.com',
}]

type Users = {
  allusers: {
    name: string,
    id: string,
    city: string,
    age: number,
    gender: "male" | "female",
    phone: string,
    email: string
  }[]
  }

function App() {
const initialUsersState: Users = {allusers: [],};  
const [users, setUsers] = useState<Users>(initialUsersState);
const [types, setTypes] = useState<Types>([{gender: 'male'}, {gender: 'female'},{gender: 'female'},{gender: 'female'},{gender: 'female'},{gender: 'female'},{gender: 'female'},{gender: 'female'}]);
const [email, setEmail] = useState<Email>({name: '', email:''})

  const setNewUsers = () => {
     setUsers((prevState)=> {return {
      allusers: [{
        name: 'Mansour bashqaabsheh',
        id: uuidv4(),
        city: 'ramtha',
        age: 29,
        gender: 'male',
        phone: '08938384',
        email: 'mansour@gmail.com',
      },
      {
        name: 'Ahmad',
        id: uuidv4(),
        city: 'irbid',
        age: 39,
        gender: 'male',
        phone: '08947839733',
        email: 'ahmad@gmail.com',
      }]
     }}
     );

     setEmail({name:'ahmad bash', email:'mansour@yahoo.com'});
  }
  useEffect(()=>{
    console.log('should be duplicated when render any component')
  })
  useEffect(()=>{
    console.log('not rendered more than once')
  },[])

  return (
    <>
      <Users  name={"dd"} allusers={users.allusers.length > 0 ? users.allusers : alluser}/>
      {types ? types.map((type, index)=> (<div key={index}>{type.gender}</div>)) : ''}
      <div className='flex'>
      <p> {email ? email.email : ''} </p>
      <p> {email ? email.name : ''} </p>
      </div>



      <button onClick={setNewUsers}>Update It</button>
    </>
  )
}

export default App
