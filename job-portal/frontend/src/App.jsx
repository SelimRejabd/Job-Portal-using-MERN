// eslint-disable-next-line no-unused-vars
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Navbar from './components/shared/Navbar'
import router from './routes/Index'


function App() {

  return (
    <>  
    <Navbar /> 
    <RouterProvider router={router}/>
    </>
  )
}

export default App
