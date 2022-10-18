import React from 'react';
import './Single.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'

const Single = (props) => {
    const{first_name, last_name, email, gender, image, phone} = props.single;
    
    return (
        <div className='fullDiv'>
            <div className='img-part'>
                <img src={image}></img>
            </div>
            <div>
                    <small><h3 className='name'>{first_name + ' ' + last_name} </h3>({gender})  </small> 
                    <h4>Email : {email}</h4>
                    <h4>Phone : {phone}</h4>
                </div>
                <div>
                    <button onClick={() => props.handleBtn(props.single)} className='btn'> 
                        <FontAwesomeIcon className='icon' icon={faUser} />
                        Add Me
                    </button>
                </div>
        </div>
    );
};

export default Single;