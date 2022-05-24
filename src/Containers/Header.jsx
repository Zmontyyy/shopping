import React from 'react'
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';


function Header() {
  const getData = useSelector((state)=>{
    return state.CartItem.carts
 })

  return (

    <div>
      <nav className="navbar navbar-expand-lg fixed-top animate__animated animate__fadeIn  navbar-light bg-light">
        <div className="container-fluid  ms-auto  ">
          <a className="navbar-brand " href="#">COLO <span style={{ color: "#fe4c50" }} >SHOP</span></a>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav  ">
              <li className="nav-item">
                <Link className="nav-link " to={'/'}>Home</Link>
              </li>
             
              <li className="nav-item">
                <Link className="nav-link" to={'/Jew'} >jewelery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/Electronics'} >electronics</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to={'/About'} >About us </Link>
              </li>
            </ul>
              <Badge badgeContent={getData.length} color="primary">
                <Link to='/Cart'><i className="fa-solid fa-cart-shopping">  </i></Link>
              </Badge>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header