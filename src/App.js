import React,{useState,Suspense} from 'react';

import {BrowserRouter,Route,NavLink} from 'react-router-dom';

import './App.css';

const Users = React.lazy(()=>import('./container/Users'));
const UserAdd = React.lazy(()=>import('./container/UserAdd'));

function App() {

  const userFields = {
    fields:[
      { 
        id:'full_name',
        lable:'Full Name',
        fieldType:'input',
        attributes:{type:'text',id:'full_name'}
      },
      { 
        id:'mob',
        lable:'Mobile',
        fieldType:'input',
        attributes:{type:'number',id:'mob'}
      },
      { 
        id:'mail',
        lable:'Email',
        fieldType:'input',
        attributes:{type:'text',id:'mail'}
      }
    ]
  };


  const users = [];

  const [usersState,setUsersState] = useState(users);

  const usersHandeler = (user) => {

    let updateUsersState = [...usersState];

    updateUsersState = updateUsersState.concat(user);

    setUsersState(updateUsersState);

    alert('Added');

  }


  return (
    <BrowserRouter>
    <div className="App">

      <nav>
            <ul>
                <li>
                    <NavLink to="/">
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/add-user">
                        Add User
                    </NavLink>
                </li>
            </ul>
        </nav>

      <Route path="/" exact render={

        ()=>{

          return (
            <Suspense fallback={<h1>Loading...</h1>}>
            <Users users={usersState}/>
            </Suspense>
          );

        }

      } />

    <Route path="/add-user" exact render={

      ()=>{

        return (
          
          <Suspense fallback={<h1>Loading...</h1>}>
            <UserAdd fields={userFields} click={usersHandeler}/>
          </Suspense>

        );

      }

    } />
      
    </div>
    </BrowserRouter>
  );
}

export default App;
