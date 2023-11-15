//it is a function and it access state and action 
import {createReducer} from '@reduxjs/toolkit'

const initialState={
    name:"pritam",
    age:"26",
    status:"Programmer",
    city:"kolkata",
    phone:"9966369865"
  }

// use toolkit

export default createReducer(initialState,(builder)=>{
    // builder.addCase('UPDATE_AGE',(state,action)=>{
    //     state.age=action.payload
    // })
    builder.addCase('UPDATE_NAME',(state,action)=>{
        state.name=action.payload
    })
    // builder.addCase('UPDATE_STATUS',(state,action)=>{
    //     state.status=action.payload
    // })
})