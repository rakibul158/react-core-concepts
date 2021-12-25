import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const friendsArray = ['Tipu','Sajib','Roy','Ali','Pappu'];
  const friendsArrayObj = [
    {
      name: 'Md Tipu Farazi',
      age: 25,
      job: 'Agriculture'
    },
    {
      name: 'Md Sajib Alom',
      age: 25,
      job: 'MBBS Doctor'
    },
    {
      name: 'Md Pappu',
      age: 25,
      job: 'Web Developor'
    }
  ]; 
  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Person</p>
        <Count></Count>
        <Users></Users>
        <ul>
          {
            friendsArray.map(friend => <li>{friend}</li>)
          }
        </ul>
        {
          friendsArrayObj.map(person => <Person personInfo={person}></Person>)
        }
        {
          friendsArrayObj.map(person => <li>{person.name}</li>)
        }
       
      </header>
    </div>
  );
}

function Count() {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count -1)}>Decrement</button>
      <button onClick={()=> setCount(count +1)}>Increment</button>
    </div>
  );
}

function Users() {
  const personstyle = {
    backgroundColor: 'lightgray',
    width: '300px',
    borderRadius: '5px',
    color: 'black',
    margin: '10px'

  };

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[]);

  return(
    <div >
      {
        users.map(user => 
          <div style={personstyle}>
            <h2>{user.name}</h2>
            <p>{user.phone}</p>
            <p>{user.email}</p>
          </div>  
        )
      }
      
    </div>
  );
}

function Person(props) {

  const personstyle = {
    backgroundColor: 'lightgray',
    width: '300px',
    borderRadius: '5px',
    color: 'black',
    margin: '10px'

  };
  return(
    <div style={personstyle}>
      <h2>{props.personInfo.name}</h2>
      <p>{props.personInfo.job}</p>
      <p>{props.personInfo.age}</p>
    </div>
  );
}



export default App;
