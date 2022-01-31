import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  BrowserRouter as Router,
  Routes, Route,
  Navigate, 
  Link, 
  Outlet } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/myapps' element={<Navigate replace to='/learn' />} />
      <Route path='/learn' element={<Learn />}>
        <Route path='courses' element={<Courses />}/>
        <Route path='bundles' element={<Bundles />}/>
      </Route>
    </Routes>
  </Router>,
  document.getElementById('root')
);

function Home() {
  return (
    <div>
      <h1>
        Home route
      </h1>
    </div>
  )
} 

function Learn() {
  return (
    <div>
      <h1>
        Learn
      </h1>
      <h4>All the courses are listed here</h4>
      <Link className='btn btn-success' to='/learn/courses'> courses  </Link>
      {"  "}
      <Link className='btn btn-primary' to='/learn/bundles'> bundle </Link>
     <Outlet />
    </div>
  )
}

function Courses() {
  return (
    <div>
      <h1>
      My Courses
      </h1>
    </div>
  )
}

function Bundles() {
  return (
    <div>
      <h1>
      My Bundles
      </h1>
    </div>
  )
 
}
reportWebVitals();
