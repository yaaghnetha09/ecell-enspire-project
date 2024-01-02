import {BrowserRouter, Routes, Route} from 'react-router-dom'


import React from 'react'
import Home from './pages/home/Home'
import Gallery from './pages/gallery/Gallery'
import Contact from './pages/contact/Contact'
import Teams from './pages/teams/Teams'



const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar/>
            <Route path='home' element={<Home/>}/>
             <Route path='contact' element={<Contact/>}/>
             <Route path='teams' element={<Teams/>}/>
             <Route path='gallery' element={<Gallery/>}/>
            </BrowserRouter>
        </div>

    )
}

export default App