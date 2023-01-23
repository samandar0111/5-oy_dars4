import { useState } from 'react'
import { Routes,Route,useParams } from "react-router-dom"
import { MainLayout } from './layout/layout'
import './App.css'
import { Home,Users,Shop ,UserFunk} from './pages/pages'
function App() {


  return (
   <>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='users' element={<Users/>}/>
          <Route path={`users/:id`} element={<UserFunk/>}/>
          <Route path='shop' element={<Shop/>}/>
      </Route>
      <Route path='*' element={<h1>page not found</h1>}/>
    </Routes>

   
   </>
  )
}

export default App
