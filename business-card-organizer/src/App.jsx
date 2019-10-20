import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Register      from './components/Register';
import Login         from './components/Login';
import CreateCard    from './components/CreateCard';
import Card          from './components/Card';
import ScanCard      from './components/ScanCard';
import PasswordReset from './components/PasswordReset';



function App() {
  const [currentUser, setCurrentUser] = useState( {} );
/* 
  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);
 */
  return (
    <div className="App">
      <Route exact path='/'
        render={ ( props ) =>
          <Login { ...props }
            user           = { currentUser    }
            setCurrentUser = { setCurrentUser } /> }
      />
      <Route exact path='/register'
        render={ ( props ) =>
          <Register { ...props }
            user           = { currentUser    }
            setCurrentUser = { setCurrentUser } /> }
      />
      <Route exact path='/create-card'
        render={ ( props ) =>
          <CreateCard { ...props }
            user           = { currentUser    }
            setCurrentUser = { setCurrentUser } /> }
      />
      <Route exact path='/card'
        render={ ( props ) =>
          <Card { ...props }
            user           = { currentUser    }
            setCurrentUser = { setCurrentUser } /> }
      />
      <Route exact path='/pass-reset' component={ PasswordReset } />
      <Route exact path='/scan-card'  component={ ScanCard      } />
    </div>
  );
}

export default App;
