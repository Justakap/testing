import './App.css';
import React from 'react'
import Navbar from './components/Navbar'
import NewsC from './components/NewsC'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<NewsC key="general" pageSize={5} country="in" category="general" />} />
          <Route path='/business' element={<NewsC key="business" pageSize={5} country="in" category="business" />} />
          <Route path='/entertainment' element={<NewsC key="entertainment" pageSize={5} country="in" category="entertainment" />} />
          <Route path='/health' element={<NewsC key="health" pageSize={5} country="in" category="health" />} />
          <Route path='/science' element={<NewsC key="science" pageSize={5} country="in" category="science" />} />
          <Route path='/sports' element={<NewsC key="sports" pageSize={5} country="in" category="sports" />} />
          <Route path='/technology' element={<NewsC key="technology" pageSize={5} country="in" category="technology" />} />

        </Routes>

      </Router>
    </>
  )

}
export default App;