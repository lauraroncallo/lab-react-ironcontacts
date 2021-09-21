import logo from './logo.svg';
import './App.css';
import contactsJSON from "./contacts.json";
import React, {useState} from "react";

function App() {

  const [contacts, setContacts] = useState(contactsJSON.slice(0,5));

  const addRandomContact=() => {
  const index = Math.floor(Math.random() * contactsJSON.length);
  const newRandomContact = contactsJSON[index];
  contactsJSON.slice(index,1);
  setContacts([newRandomContact,...contacts]);
  };

  const sortByPopularity=()=>{
 contacts.sort((a,b)=> (b.popularity - a.popularity));
  setContacts([...contacts]);
 
  };

  const sortByName=()=>{
    contacts.sort((a,b)=> a.name.localeCompare(b.name));
    setContacts([...contacts]);
   
    };

    const deleteContact = (id) => {
     setContacts(contacts.filter((contact) => contact.id !== id));
    };
  
  return (
<>
<div className="App">
<table>
<tr>
<th><h2>Picture</h2></th>
 <th><h2>Name</h2></th>
<th><h2>Popularity</h2></th>
<th><h2>Won Oscar</h2></th>
<th><h2>Won Emmy</h2></th>
<th><h2>Actions</h2></th>
</tr>
{contacts.map((contact) => {
            return (
                <tr>
<th><img src={contact.pictureUrl} width="200" height="200"/> </th>
                  <th>{contact.name}</th>
                  <th>{contact.popularity}</th>
                  <th>{contact.wonOscar ? "🏆" : "" }</th>
                  <th>{contact.wonEmmy ? "🏆" : ""}</th>
                  <th> <button onClick={() => deleteContact(contact.id)}>Delete</button></th>
                </tr>
            )
          })}
</table>
<button onClick={addRandomContact}>Add random contact</button>
<button onClick={sortByPopularity}>Sort by popularity</button>
<button onClick={sortByName}>Sort by Name</button>
</div> 
</>  
  )   
}

export default App;
