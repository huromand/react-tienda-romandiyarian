import React from 'react'
import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light rounded" aria-label="Fourth navbar example">
        <div className="container-fluid">
                <a className="navbar-brand ms-5" >
                    <h1>SuperTienda</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <CartWidget/>
            
                <div className="navbar-collapse collapse show" id="navbarsExample04">
                    <ul className="navbar-nav ms-md-auto me-md-5 mb-2 mb-md-0 " >
                        <li className="nav-item justify-content-center d-inline-flex me-md-3">
                            <NavLink to="/" className="nav-link active">Home</NavLink>
                        </li>
                        <li className="nav-item justify-content-center d-inline-flex mx-md-3">
                            <a className="nav-link disable" >Contacto</a>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>

  )
}

export default Navbar