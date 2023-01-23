
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { request } from "../../url";
 
export const UserFunk = ()=>{
const param = useParams()
const [user,setuser] = useState()


useEffect(()=>{
request.get(`/users/${param.id}`).then((response)=>setuser(response.data))
},[])
return (
 user? (<div>
 <h2>name: {user.name}</h2>
 <h2>email: {user.email}</h2>
 <h2>phone: {user.phone}</h2>
</div>) : (<h1>loading...</h1>)
)

 
}