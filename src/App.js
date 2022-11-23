import React,{useState,useEffect} from 'react'
import axios from "axios"
import "./style.css"
function App() {
const[data,setData]=useState([])
useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users").then((resp)=>{
setData(resp.data)
},[])
console.log(data);
})
return (
    <>
    <div className='imran'>
    {
      <table border="5px">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Address</td>
            
          </tr>
          </thead>
          {
            data.map((item)=>
              <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.username}</td>
            <td>{item.email}</td>
            <td>{item.address.street}</td>
          </tr>
            )
          }
        
      </table>
    }
    </div>
</>
  )
}
export default App