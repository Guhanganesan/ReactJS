import React from 'react';
import user from '../images/user.png';

const ContactCard = (props)=>{
    const {id, name, email} = props.contacts;
    return (
        <div className="item">
            <div className="content">
                <img className="ui avatar image" src={user}></img>
                <div className="header">
                    Id: {id}
                </div>
                <div className="header">
                    Name: {name}
                </div>
                <div className="header">
                    Email: {email}
                </div>
            </div>
            <i className="trash alternate outline icon"
            style={{color:'red', marginTop:'7px'}}></i>
        </div>
    )
}

export default ContactCard;