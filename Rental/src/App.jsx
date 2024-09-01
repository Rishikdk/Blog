import './App.css'
import {HashRouter as Router, Routes, Route} from "react-router-dom"
import {About} from './assets/pages/About'
import { Contact } from './assets/pages/Contact'
import {CreateBlog} from './assets/pages/CreateBlog'
import { Home } from './assets/pages/Home'
import { Landing } from './assets/pages/Landing'
import { Profile } from './assets/pages/Profile'
import { ReadBlog } from './assets/pages/ReadBlog'
import { Navbar } from './assets/Components/navbar'
import { Layout } from './assets/Components/Layout'

function App() {
  //Pages
  //Landing pages
  //Home Pages(filtered by recency)
  //ReadBlog
  //Profile
  //About
  //Contact


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route element={<Layout/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/createblog' element={<CreateBlog/>}/>
          <Route path='/readblog/:id' element={<ReadBlog/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
