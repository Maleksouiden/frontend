

import React, { useEffect, useState } from 'react'
/* import { Routes, Route, Outlet, Link, Router } from "react-router-dom"; */
/* import Login from '.'; */
/* import slide2 from './image/bglogin.jpg' */
import "./style.css"
import { Link } from 'react-router-dom'
import axios from 'axios'


const Sign = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthdate, setbirthdate] = useState(new Date());
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [type, setType] = useState('');
    useEffect(async () => {
        const res = await axios({
            url: 'https://localhost:3000/graphql',
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
                                <div className="card border-0">
                                    <div className="card-body p-0">
                                        <div className="row no-gutters">


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
                                            <div className="col-lg-6">
                                                <div className="p-5">
                                                    <div className="mb-1">
                                                        <h2 className=" font-weight-bold text-theme">Sign UP</h2>
                                                    </div>

                                                    <h6 className="h5 mb-0">Welcome !</h6>
                                                    <p className="text-muted  ">Connect with Your Social Accounts.</p>



                                                    <div className=' icons'>

                                                        <button className='btn'> <i className="fab fa-facebook fbicon allicon"></i></button>
                                                        <button className='btn'><i className="fab fa-google gmailicon allicon "></i></button>
                                                        <button className='btn'> <i className="fab fa-linkedin linkicon allicon"></i> </button>
                                                    </div>

                                                    <hr style={{ marginBottom: '10px' }} />
                                                    <form>
                                                        <div className='row'>

                                                            <div className=" col-6 form-group ">
                                                                <label >First Name</label>
                                                                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} name='first' type="text" className="form-control" id="exampleInputEmail1" />
                                                            </div>
                                                            <div className="col-6 form-group ">
                                                                <label >Last</label>
                                                                <input value={lastName} onChange={(e) => setLastName(e.target.value)} name='last' type="text" className="form-control" id="exampleInputPassword1" />
                                                            </div>
                                                            <div className="col-12 form-group ">
                                                                <label >Email</label>
                                                                <input value={email} onChange={(e) => setEmail(e.target.value)} name='email' type="mail" className="form-control" id="exampleInputPassword2" />
                                                            </div>
                                                            <div className="col-12 form-group ">
                                                                <label >Birthday</label>
                                                                <input value={birthdate} onChange={(e) => setbirthdate(e.target.value)} name='age' type="date" className="form-control" id="exampleInputPassword3" />
                                                            </div>
                                                            <div className="col-6 form-group ">
                                                                <label >Password</label>
                                                                <input value={password} onChange={(e) => setPassword(e.target.value)} name='pw' type="password" className="form-control" id="exampleInputPassword11" />
                                                            </div>
                                                            <div className="col-6 form-group ">
                                                                <label >Confirm password</label>
                                                                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name='pw2' type="password" className="form-control" id="exampleInputPassword112" />
                                                            </div>
                                                            <div className="col-12 form-group mb-5">
                                                                <label className=" mb-2">Account Type</label>
                                                                <br />
                                                                <input className="form-check-input" type="radio" name="radio1" id="flexRadioDefault1" />
                                                                <label style={{ marginLeft: '5px' }} className="form-check-label" for="flexRadioDefault1">Default radio</label>

                                                                <input style={{ marginLeft: '15px' }} className="form-check-input " type="radio" name="radio1" id="flexRadioDefault1" />
                                                                <label style={{ marginLeft: '5px' }} className="form-check-label" for="flexRadioDefault1">Default radio</label>

                                                                <input style={{ marginLeft: '15px' }} className="form-check-input  " type="radio" name="radio1" id="flexRadioDefault1" />
                                                                <label style={{ marginLeft: '5px' }} className="form-check-label" for="flexRadioDefault1">Default radio</label>
                                                            </div>


                                                            <button type="submit" className="btn btn-theme">Login</button>


                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <p className="text-muted text-center mt-5 mb-0">Do you have an account? <Link to={'/Login'} className="text-primary ml-1 text-primaryx">Login</Link></p>





                            </div>

                        </div>
                    </div>
                    </div>
                </div>

            </>
        )
    }


export default Sign