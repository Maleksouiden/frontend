import React from 'react'
import "./style.css" 
import Navbar from '../navbar'


const Profil= () => {
    return (
        <> 

<Navbar></Navbar>

<div  className="container-fluid">
<div  className="row gutters">
	<div  className="col-12  col-md-12 col-lg-3 ">
		<div  className="card ">
			<div  className="card-body">
				<div  className="account-settings">
					<div  className="user-profile">
						<div  className="user-avatar">
							<img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Maxwell Admin"/>
						</div>
						<h5  className="user-name">Yuki Hayashi</h5>
						<h6  className="user-email">yuki@Maxwell.com</h6>
					</div>
					<div  className="about">
						<h5  className="mb-2 text-primarys">About</h5>
						<p className='parag'>I'm Yuki. Full Stack Designer I enjoy creating user-centric, delightful and human experiences.</p>
					</div>
				</div>
			</div>
		</div>

        <div  className="card ">
			<div  className="card-body">
				<div  className="account-settings account-settingss">
		
					<div  className="about row">
                        <div className='col-12 containturl'>
                            <a className='urls' href="#"><i className="fas fa-link"></i> &nbsp; https:\\stda.tn</a>
                        </div>

                        <div className='col-12 containturl'>
                            <a className='urls' href="#"><i className="fab fa-github-alt"></i> &nbsp; https:\\stda.tn</a>
                        </div>
                        <div className='col-12 containturl'>
                            <a className='urls' href="#"><i className="fab fa-linkedin"></i> &nbsp; https:\\stda.tn</a>
                        </div>
				
					</div>
				</div>
			</div>

		</div>

        <div  className="card ">
			<div  className="card-body">
				<div  className="account-settings account-settingss" style={{width:'100%'}}>
		
					<div  className="about aboutm">

                        <div className='col-12 containturl  containturl'>
                         <p className='rating' > Rating : &nbsp;&nbsp; <i className="fas fa-star"></i> <span>7.3</span>/10</p> 
                        </div>

               
					</div>
				</div>
			</div>

		</div>


	</div>

	<div  className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
		<div  className="card ">
			<div  className="card-body">
                <h3 className='titre'> Git Projects :</h3>
        <div className='row'> 

        <div className='col-3 col-md-3 col-lg-1'>

<button className='btn btnprojet'> Webdev </button>
        </div>
        <div className='col-3 col-md-3 col-lg-1'>

<button className='btn btnprojet'> Webdev </button>
        </div>
        <div className='col-3 col-md-3 col-lg-1'>

<button className='btn btnprojet'> Webdev </button>
        </div>
        <div className='col-3 col-md-3 col-lg-1'>

<button className='btn btnprojet'> Webdev </button>
        </div>

        <div className='col-3 col-md-3 col-lg-1'>
<button className='btn btnprojet'> Webdev </button>

        </div>
        </div>

        <h3 className='titre mt-5'> GoMyJob Projects :</h3>
		
        <div className='row'> 

<div className='col-12 col-md-6'>
    
<div className="card cardm" style={{width: '18rem;'}}>


<div className="card-body">
    <h5 className="card-title titrexo">Fetching-Random-Users-with-react</h5>
    <h6 className="card-subtitle mb-2 text-muted">Public</h6>
    <p className="card-text card-textmodif"> JavaScript.</p>

  </div>

</div>

</div>


<div className='col-12 col-md-6'>
    
<div className="card cardm" style={{width: '18rem;'}}>


<div className="card-body">
    <h5 className="card-title titrexo">Fetching-Random-Users-with-react</h5>
    <h6 className="card-subtitle mb-2 text-muted">Public</h6>
    <p className="card-text card-textmodif"> JavaScript.</p>

  </div>

</div>

</div>






</div>
			</div>
		</div>

        <div  className="card ">
			<div  className="card-body">
            <h3 className='titre mt-2'> Your Offers :</h3>
            <div className='row'>

                    <div className='col-6 col-md-3'>
                    <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Titre de projet</h5>
    <h6 className="card-subtitle mb-2 text-muted"></h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <div className='' style={{textAlign:'center'}}> <a href="#" className="card-link danger">Refuse</a>
    <a href="#" className="card-link succes">See more</a></div>
  </div>
</div>
                    </div>


                    <div className='col-6 col-md-3'>
                    <div className="card" style={{width: '18rem'}}>
  <div className="card-body">
    <h5 className="card-title">Titre de projet</h5>
    <h6 className="card-subtitle mb-2 text-muted"></h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <div className='' style={{textAlign:'center'}}> <a href="#" className="card-link danger">Refuse</a>
    <a href="#" className="card-link succes">See more</a></div>
  </div>
</div>
                    </div>

            </div>

			</div>
		</div>
	</div>





</div>
</div>
  
        







    </>
    )
}

export default Profil