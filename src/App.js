import './App.css';
import React, { useState } from 'react';
import NewUser from './form/NewUser';
import MyList from './list/MyList';

const userExample = [
  {
    id:"1",
    name:"Pamela",
    age:"26",
  },
  // {
  //   id:"2",
  //   name:"kevin",
  //   age:"27",
  // },
  // {
  //   id:"3",
  //   name:"Madeline",
  //   age:"54",
  // },
  // {
  // id:"5",
  // name:"Freddy",
  // age:"59"
  // }
];

function App() {
  const [users, setUsers] = useState(userExample);

  const addUserHandler = (data) => {
    setUsers(
      (prevUsers) => {
      return [data, ...prevUsers];
    }
    );
  };

  

  return (
    <div className="site-background">
        <NewUser onAddUser={addUserHandler} />
      <div className='scroll'>
        <MyList userData={users}/>
      </div>
    </div>
  );
}

export default App;
