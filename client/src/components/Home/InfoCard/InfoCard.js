import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({info}) => {
    return (
        
            <div className='info-card col-md-4 '>
                <div className={` info-container text-white d-flex align-items-center info-${info.background} `}>
                     <div className='mr-3 '> <FontAwesomeIcon className='info-icon' icon={ info.icon } /></div>
                    <div>
                     <h6>{info.title}</h6>
                     <small>{info.description}</small>
                </div>
                </div>
                </div>
               
       
    );
};

export default InfoCard;