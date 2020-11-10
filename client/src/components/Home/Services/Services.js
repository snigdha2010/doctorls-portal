import React from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import floride from '../../../images/floride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whittning.png';

const Services = () => {
    const servicesData = [
        {
            name:'Flourid Treatment ',
            img:floride
        },{
            name:'Cavity Filling',
            img: cavity
        },
        {
            name:'Teeth Whitening',
            img: whitening
        }
    ]
    return (
        <section>
            <div className='text-center service-container mt-5'>
                <h5 style={{color:'#51DDD6'}}>Our Services</h5>
                <h2>Services we provide</h2>
            </div>
            <div className= 'd-flex justify-content-center'>
                <div className='row w-75 mt-5 pt-5'>
                    {
                        servicesData.map(service =><ServiceDetails 
                        key = {service.name} 
                        service ={service}></ServiceDetails>)
                    }
                </div>

            </div>
        </section>
    );
};

export default Services;