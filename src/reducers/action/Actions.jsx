// action ceator  is a function that return a function

//we update status in using action creator

//is this method we creacte a normal action type
// export default (status)=>{
//     return{
//         type:'UPDATE_STATUS',
//         payload:status
//     }
// }


// now we use action creator in reduxtoolkit
//  import {createAction} from '@reduxjs/toolkit'

//  export const updateStatusCode=createAction('UPDATE_STATUS')

 //useing thunk for network call api
export const fetchName=()=>{
return async (dispatch)=>{
    const res= await fetch('https://jsonplaceholder.typicode.com/users')
     const result =await res.json()
     dispatch({type:'UPDATE_NAME',payload:result[0].name})
}
}