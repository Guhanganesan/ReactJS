// Class Component

import React from 'react';

class AddContact extends React.Component{
    state = {
        name:"",
        email:""
    }

    /**
     * This method is used to add the data in state
     */
    addData = (event) =>{
        event.preventDefault();
        if(this.state.name === "" || this.state.email === ""){
            alert("All fields are mantatory....");
            return;
        }
        console.log(this.state)
        // pass data to parent component
        this.props.addContactHandler(this.state);
        //clear data
        this.setState({name:"", email:""})
    }

    /**
     * This method will render the html part in frontend and collects the forms data
     */
    render(){
        return (
            <div className='ui main'>
                <h2> AddContact</h2>
                <form className="ui form" onSubmit={this.addData}>
                    <div className='field'>
                        <label>Name</label>
                        <input type='text' name='name' placeholder='Name'
                        value={this.state.name}
                        onChange={(event)=>this.setState({name:event.target.value})} />
                    </div>
                    <div className='field'>
                        <label>Email</label>
                        <input type='text' name='email' placeholder='Email' 
                        value={this.state.email}
                        onChange={(event)=>this.setState({email:event.target.value})}/>
                    </div>
                    <button className='ui button blue'>Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact;