
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
            <Link to='./profil' className="nav-link active"  aria-current="page" >Profil</Link>

            <Link to='./sign' className="nav-link active btn-join" aria-current="page" href="#6">  Join us </Link>
            <Link to='./login' className="nav-link active btn-join" aria-current="page" href="#7">Login</Link>
           <a className="nav-link active" aria-current="page">    <input type="search" class="form-control formsxd" /> </a> 
           <a className="nav-link active" aria-current="page" style={{    marginLeft: '-61px', marginTop: '4px'}}>     <i class="fas fa-search searchmodif"></i></a>
         
          </div>
        </div>
      </div>
    </nav>
  </div>

<div className='searchcard'>
  <div className="card">
  <div className="card-body row">
    <div className='col-12'>
      <div className='cip' style={{width:'350px'}}>
       <img src='https://bootdey.com/img/Content/avatar/avatar1.png' style={{maxWidth:'50px',borderRadius:'50%',marginBottom:'7px'}}/> 
 <span style={{ fontSize: '1.3rem'}}>&nbsp; &nbsp; &nbsp;<span> Nom </span> / <span> Prenom </span> / </span> 
 <p className='rating'> Rating : &nbsp;&nbsp; <i className="fas fa-star"></i> <span>7.3</span>/10</p> 
 </div>
    </div>
  </div>
</div>
</div>
        
        
        </>
    )
}

export default Navbar