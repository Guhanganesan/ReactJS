import './App.css';
import React, {useState, useEffect} from 'react';
import {uuid} from 'uuidv4';
import Header from './Header';
import AddContact from './AddContact';
import ContactCard from './ContactCard';
import ContactList from './ContactList';

function App() {
  //Props => <ContactList contacts={contacts} />

  const LOCAL_STORAGE_KEY = "contacts";
  
  // contacts = [] and setContacts will call in useEffect to add array values in contacts
  const [contacts, setContacts] = useState([]); 

  //store data
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, contacts)

  // //retrieve data
  useEffect(()=>{
    const res = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(res){
      setContacts(res);
    }
  }, contacts) 

  
  /**
   * Using props we can pass data from parent to chil
   * By using handler we are going to get data from child 
   */ 
  const addContactHandler = (contact)=>{
    //set all contacts value with rest of the contacts
    contacts.push(contact)
    setContacts(contacts); // will replace [] into array values in useState([{....}])
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