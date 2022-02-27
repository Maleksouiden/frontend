
import React from 'react'
import Logopos from '../assets/logo.png'
import { Link } from 'react-router-dom'

import "./style.css" 




const Navbar= () => {
    return (
        <> 
 



  <div className="sticky"
    style={{}}>
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"> 
        <img className="top-logo" src={Logopos}/></a>


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav navbar-navmodif" style={{}}>
            <Link to="/" className="nav-link active" aria-current="page" href="#">Accueil</Link>
            <a className="nav-link active" aria-current="page" href="#1">Nous Connaître</a>
            <a className="nav-link active" aria-current="page" href="#2">Nos Services</a>
            <a className="nav-link active" aria-current="page" href="#3">Nos Partenaires</a>
            <a className="nav-link active" aria-current="page" href="#4">Notre equipe</a>
            <a className="nav-link active" aria-current="page" href="#5">Contactez-nous</a>

            <Link to='./login/sign.js' className="nav-link active btn-join" aria-current="page" href="#6">  Join us </Link>
            <Link to='./login' className="nav-link active btn-join" aria-current="page" href="#7">Login</Link>
           
          </div>
        </div>
      </div>
    </nav>
  </div>






        
        
        </>
    )
}

export default Navbar