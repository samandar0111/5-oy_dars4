import wop from "./shop.module.css"
import React, { useEffect, useState } from "react"
import { shopurl } from "../../url"

export const Shop = ()=>{
  
  const [data,setdata] = useState()
  const [category,setcategory] = useState("all")
  useEffect(()=>{

    if(category == "all"){
      shopurl.get().then(response => setdata(response.data))
    }else{
      shopurl.get(`/category/${category}`).then(response => setdata(response.data))
    }
  },[category])
 



  return (<>
  <ul className={wop.list2}>
    <li> <button onClick={()=>setcategory("all")}>all</button> </li>
    <li><button onClick={()=>setcategory("jewelery")}>jewelery</button></li>
    <li><button onClick={()=>setcategory("electronics")}>electronics</button></li>
    <li><button onClick={()=>setcategory("men's clothing")}>men's clothing</button></li>
    <li><button onClick={()=>setcategory("women's clothing")}>women's clothing</button></li>
  </ul>
  {data? (<ul className={wop.list}>
      {data?.map((el)=>{ return <li className={wop.block} key={el.id}> 
             <img className={wop.imeg} src={el.image} alt="rasm" />
             <h2 className={wop.title}>{el.title}</h2>
        </li>
      })}
</ul>):<h1>loading...</h1>}
  </>)
}