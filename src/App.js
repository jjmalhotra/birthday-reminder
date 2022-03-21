import React, {useState} from 'react';
import './App.css';
import {data} from './data';
import PresentDay from './PresentDay';
import List from './List';



function App() {

  const [friend, setFriend] = useState(data);  //data coming from data.js

  const [display, setDisplay] = useState( <List friend={friend}/>)

  
  return (
    <main>      
      <section id='container' className='container'>
      <h3>Birthday Calendar</h3>
      {display}
      <button onClick={()=> setDisplay(<PresentDay friend={friend}/>)}>Today's Birthday's</button>
   
      <button onClick={() => setDisplay(<List friend={friend}/>)}>Birthday List</button>
      <button className="btn" onClick={() => setDisplay(<h5>Keep Calm!! The list is empty ..</h5>)}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
