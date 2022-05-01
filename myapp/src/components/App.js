import './App.css';
import React, {useState} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactCard from './ContactCard';
import ContactList from './ContactList';

function App() {
  //Props => <ContactList contacts={contacts} />
  // const contacts = [
  //   {
  //     id:'1',
  //     name:"Guhan",
  //     email:"guhan@gmail.com"
  //   },
  //   {
  //     id:'2',
  //     name:"Anbu",
  //     email:"anbu@gmail.com"
  //   },
  //   {
  //     id:'3',
  //     name:"Raja",
  //     email:"raja@gmail.com"
  //   }
  // ]
  const [contacts, setContacts] = useState([]);

  // using props we can pass data from parent to child
  // by using handler we are going to get data from child 
  const addContactHandler = (contact)=>{
    console.log(contact)
  }

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;