import React from 'react';
import img from '../../../images/chair.png'
import { Link } from 'react-router-dom';
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center'>
            <div className='col-md-4 offset-md-1'>
                <h1>Your New Smile <br/>Start Here</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officiis sint, quia odit sed possimus?</p>
                <Link to = '/appointment'><button className='btn btn-primary'> Get Appointment</button></Link> 
            </div>
            <div className='col-md-6'>
                <img  className ='img-fluid'src={img} alt=""/>
            </div>
            
        </main>
    );
};

export default HeaderMain;