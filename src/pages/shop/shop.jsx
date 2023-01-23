import wop from "./shop.module.css"
import React, { useEffect, useState } from "react"
import { shopurl } from "../../url"

export const Shop = ()=>{
    let a 
  const [data,setdata] = useState()
  const [category,setcategory] = useState("all")
  useEffect(()=>{
    shopurl.get().then(response => setdata(response.data))
  },[])
  if(category == "all"){
    a = data
  }else{
    a = data.filter((el)=>{
      return el.category == category
    })
  }

 



  return (<>
  <ul className={wop.list2}>
    <li> <button onClick={()=>setcategory("all")}>all</button> </li>
    <li><button onClick={()=>setcategory("jewelery")}>jewelery</button></li>
    <li><button onClick={()=>setcategory("electronics")}>electronics</button></li>
    <li><button onClick={()=>setcategory("men's clothing")}>men's clothing</button></li>
    <li><button onClick={()=>setcategory("women's clothing")}>women's clothing</button></li>
  </ul>
  {a? (<ul className={wop.list}>
      {a?.map((el)=>{ return <li className={wop.block} key={el.id}> 
             <img className={wop.imeg} src={el.image} alt="rasm" />
             <h2 className={wop.title}>{el.title}</h2>
        </li>
      })}
</ul>):<h1>loading...</h1>}
  </>)
}