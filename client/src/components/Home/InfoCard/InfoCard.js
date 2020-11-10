import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({infocard}) => {
    return (
        
            <div className='info-card col-md-4 '>
                <div className={` info-container text-white d-flex align-items-center info-${infocard.background} `}>
                     <div className='mr-3 '> <FontAwesomeIcon className='info-icon' icon={ infocard.icon } /></div>
                    <div>
                     <h6>{infocard.title}</h6>
                     <small>{infocard.description}</small>
                </div>
                </div>
                </div>
               
       
    );
};

export default InfoCard;