import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {updateStatusCode,fetchName} from '../reducers/action/Actions'

const Prifile = () => {
    const{name,age,city,status,phone}=useSelector((state)=>{
        console.log(state);
        return state
    })
    //initialze the dispatch
    const dispatch=useDispatch()

    //update the age value 
    // const updateAge=(age)=>{
    //     //action to dispatch use useDispatch hooks and after gose to thw reducer
    //     dispatch({type:'UPDATE_AGE',payload:age})
    // }
    const updateName=async()=>{
      //const res= await fetch('https://jsonplaceholder.typicode.com/users')
      //const result =await res.json()
      //dispatch({type:'UPDATE_NAME',payload:result[1].name})


      //**use async action */
      dispatch(fetchName())
      
    }

    // const updatestatus=(status)=>{
    //   dispatch(updateStatusCode(status))
    // }
  return (
    <div>
      <h1>My name is {name}</h1>
      <h1>My age is {age}</h1>
      <h1>My city is {city}</h1>
      <h1>my fev language is : {status}</h1>
      <h1>my phone number is : {phone}</h1>

      {/* <button onClick={()=>updateAge(40)}>AgeUpdate</button> */}
      <button onClick={()=>updateName()}>NameUpdate</button>
      <button>PhoneUpdate</button>
      {/* <button onClick={()=>updatestatus()}>UpdateStatus</button> */}
    </div>
  )
}

export default Prifile
