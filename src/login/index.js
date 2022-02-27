import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./style.css" 
import axios from 'axios'


const Login= () => {
    const [adress, setAdress] = useState('');
    const [pasword, setPassword] = useState('');
    useEffect(async () => {
        const res = await axios({
            url: 'http://localhost:3000/graphql',
            method: 'post',
            data: {
                query: `
                protected {
                 _id
                  }   `
            }
        })

        console.log(res.data) ;
    })
    

    return (
        <> 

<div className='container'>
    <div className='contitem'><div id="main-wrapper" className="container">
    <div className="row justify-content-center">
        <div className="col-xl-10">
            <div className="card ">
                <div className="card-body p-0">
                    <div className="row no-gutters">
                        <div className="col-lg-6">
                            <div className="p-5">
                                <div className="mb-5">
                                    <h2 className=" font-weight-bold text-theme">Login</h2>
                                </div>

                                <h6 className="h5 mb-0">Welcome back!</h6>
                                <p className=" mt-2 mb-5">Connect with Your Social Accounts.</p>



         <div className=' icons'>
                    
           <button className='btn'> <i className="fab fa-facebook fbicon allicon"></i></button>
           <button  className='btn'><i className="fab fa-google gmailicon allicon "></i></button>
           <button  className='btn'> <i className="fab fa-linkedin linkicon allicon"></i> </button>
          </div>
          
          <hr/>
                                <form>
                                    <div className="form-group topf">
                                        <label >Email address</label>
                            
                                        <input  value={adress} onChange={(e) => setAdress(e.target.value)} name='email' type="email" className="form-control" id="exampleInputEmailx"/>
                                    </div>
                                    <div className="form-group mb-5">
                                        <label >Password</label>
                                        <input  value={pasword} onChange={(e) => setPassword(e.target.value)} name='psw' type="password" className="form-control" id="exampleInputPasswordy"/>
                                    </div>
                                    <button type="submit" className="btn btn-theme">Login</button>
                                    <a className="forgot-link float-right text-primary forgetpw" style={{color:''}}>Forgot password?</a>
                                </form>

                            </div>
                        </div>

                        <div className="col-lg-6 d-none d-lg-inline-block">
                            <div className="account-block rounded-right">
                                <div className="overlay rounded-right"></div>
                                <div className="account-testimonial">
                                    <h4 className="text-white mb-4">This  beautiful job is yours!</h4>
                                    <p className="lead text-white">"Work and you’ll get what you need; work harder and you’ll get what you want."</p>
                                    <p>- Prabakaran Thirumalai</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        

            <p className=" text-center mt-5 mb-0">Don't have an account? <Link to='/sign' className="text-primary ml-1 text-primaryx">Register</Link></p>

{/* <Router>

<Route patch="sign" component={Sign} />

</Router> */}


        </div>
      
    </div>
</div>
    </div>
    </div>
            
</>
    )
}


export default Login