import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">React Crud</a>
        <ul className="navbar-nav mr-5">
          <li className="nav-item mr-5">
           <Link to="/">Home</Link>
          </li>
          <li className="nav-item mr-5">
          <Link to="/one">One </Link>
          </li>
          <li className="nav-item mr-5">
          <Link to="/two">Two </Link>
          </li>
          <li className="nav-item mr-5">
          <Link to="/crud">Crud </Link>
          </li>
        </ul>


      </div>

    </nav>
  )
}
