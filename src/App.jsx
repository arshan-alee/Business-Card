import React ,{ useState } from 'react'
import Info from './info'
import About from './about'
import Interests from './interests'
import Footer from './footer'
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <Info pic="./pfp.JPG" name="Mir Arshan Ali" headline= "React JS Developer" website="mirarshanali.website"/>
    <div className='description'>
    <About/>
    <Interests/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
