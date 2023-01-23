import { useEffect, useState } from "react"
import { request } from "../../url"
import { Link } from "react-router-dom"
export const Users = ()=>{
const [data,setdata] = useState()

useEffect(()=>{
request.get("users").then(response=>setdata(response.data))
},[])

  return (
  !data?  <h2>loading...</h2> :
  (<ul>
    {data.map(el=>{
      return (
      <li key={el.id}>
        <h4 ><Link to={`${el.id}`}>{el.name}</Link></h4>
      </li>)
    })}
</ul>) 
  )
}