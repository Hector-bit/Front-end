import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import Register          from './components/Register';
import Login             from './components/Login';
import CreateCard        from './components/CreateCard';
import CardContainer     from './components/CardContainer';
import ScanCard          from './components/ScanCard';
import PasswordReset     from './components/PasswordReset';
import Account           from './components/Account';
import ListEvents        from './components/ListEvents';
import DisplayEvent      from './components/DisplayEvent';
import CreateEvent       from './components/CreateEvent';
import HandleScanResults from './components/HandleScanResults';
import DefaultCollection from './components/DefaultCollection';



function App() {
  const [currentUser, setCurrentUser] = useState( {} );

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
      <Route exact path='/edit-card'
        render={ ( props ) =>
          <CreateCard { ...props }
            user           = { currentUser    }
            setCurrentUser = { setCurrentUser } /> }
      />
      <Route exact path='/card'
        render={ ( props ) =>
          <CardContainer { ...props }
            user           = { currentUser      }
            setCurrentUser = { setCurrentUser   } /> }
      />
      <Route exact path='/account'
        render={ ( props ) =>
          <Account { ...props }
          user           = { currentUser    }
          setCurrentUser = { setCurrentUser } /> }
      />
      <Route exact path='/events'
        render={ ( props ) =>
          <ListEvents { ...props } 
            user           = { currentUser }
            setCurrentUser = { setCurrentUser } /> }
      />
      <Route exact path='/events/:event'
        render={ ( props ) =>
          <DisplayEvent { ...props } 
            user={ currentUser } /> }
      />
      <Route exact path='/create-event'
        render={ ( props ) =>
          <CreateEvent { ...props }
            user           = { currentUser    }
            setCurrentUser = { setCurrentUser } /> }
      />
      <Route exact path='/scan'
        render={ ( props ) =>
          <ScanCard { ...props }
            user           = { currentUser    }
            setCurrentUser = { setCurrentUser } /> }
      />
      <Route exact path='/default'
        render={ ( props ) =>
          <DefaultCollection { ...props } 
            user={ currentUser } /> }
      />
      <Route exact path='/scan-result'
        render={ ( props ) =>
          <HandleScanResults { ...props }
          user           = { currentUser    }
          setCurrentUser = { setCurrentUser } /> }
      />
      <Route exact path='/pass-reset' component={ PasswordReset } />
      <Route exact path='/scan-card'  component={ ScanCard      } />
    </div>
  );
}

export default App;
