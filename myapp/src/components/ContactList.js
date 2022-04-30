import React from 'react';

const ContactList = (props) =>{
    console.log(props)
    const renderContactList = props.contacts.map((val)=>{
        return (
            <div className="item">
                <div className="content">
                    <div className="header">
                        Name: {val.name}
                    </div>
                    <div>
                        Email: {val.email}
                    </div>
                    <i className="trash alternate outline icon"></i>
                </div>
            </div>
        )
    })
 
    return (
        <div className="ui celled list">
           {renderContactList}
        </div>
    )
}

export default ContactList;