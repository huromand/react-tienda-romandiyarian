import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light rounded" aria-label="Fourth navbar example">
        <div className="container-fluid">
                <a className="navbar-brand ms-5" href="#">
                    <h1>SuperTienda</h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <CartWidget/>
            
                <div className="navbar-collapse collapse show" id="navbarsExample04">
                    <ul className="navbar-nav ms-md-auto me-md-5 mb-2 mb-md-0 " >
                        <li className="nav-item justify-content-center d-inline-flex me-md-3">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item justify-content-center d-inline-flex mx-md-3">
                            <a className="nav-link active" href="#">Productos</a>
                        </li>
                        <li className="nav-item justify-content-center d-inline-flex mx-md-3">
                            <a className="nav-link active" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>

  )
}

export default NavBar