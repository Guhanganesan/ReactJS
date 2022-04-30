import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) =>{
    console.log(props)
    const renderContactList = props.contacts.map((val)=>{
        return (
            <ContactCard contacts={val}></ContactCard>
        )
    })
 
    return (
        <div className="ui celled list">
           {renderContactList}
        </div>
    )
}

export default ContactList;