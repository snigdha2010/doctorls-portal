import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className='col-md-4 text-center'>
            <img style={{height:'50px'}} src={service.img} alt=""/>
            <h6 className='mt-3 mb-3'>{service.name}</h6>
            <p className='text-secondary'> lorem10</p>
        </div>
    );
};

export default ServiceDetails;