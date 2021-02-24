import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch
} from 'react-router-dom';

import {
    Title,
    Register,
    Login,
    Profile,
    Posts,
    CreatePost,
} from './components';

const App = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [registerToken, setRegisterToken] = useState('');
    const [loginToken, setLoginToken] = useState('');

    return (
        <Router>
        <div className="app">

            <nav>
                <Link to='/home'>Home</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/'>Logout</Link>
            </nav>
            <main>
                <Switch>
                <Route exact path='/'>
                <Title />
                <Login username={username} password={password} setUsername={setUsername} setPassword={setPassword}
                loginToken={loginToken} setLoginToken={setLoginToken}/>
                </Route>

                <Route exact path='/posts'>
                    <CreatePost loginToken={loginToken}/>
                    <Posts />
                </Route>

                <Route exact path='/profile'>
                    <Profile />
                </Route>

                <Route exact path='/register'>
                    <Title />
                    <Register username={username} password={password} confirmedPassword={confirmedPassword} 
                    registerToken={registerToken} setUsername={setUsername} setPassword={setPassword} 
                    setConfirmedPassword={setConfirmedPassword} setRegisterToken={setRegisterToken}/>
                </Route>
             </Switch>
            </main>

    </div>
    </Router>
    )
}


ReactDOM.render(
    <Router>
         <App />
    </Router>,
    document.getElementById('app'),
  )