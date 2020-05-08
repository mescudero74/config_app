import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { CreateConsortiForm } from './Components/Forms/CreateConsortiForm'
import { CreateEnvForm } from './Components/Forms/CreateEnvForm'
import { CreateVeronaBuildForm } from './Components/Forms/CreateVeronaBuildForm'
import './App.css';

function Home() {
  return <h2>Home</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/crear_verona_build">Crear Verona Build</Link>
              </li>
              <li>
                <Link to="/crear_consorcio">Crear consorcio</Link>
              </li>
              <li>
                <Link to="/crear_env">Crear Env</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/crear_consorcio">
              <CreateConsortiForm />
            </Route>
            <Route path="/crear_env">
              <CreateEnvForm />
            </Route>
            <Route path="/crear_verona_build">
              <CreateVeronaBuildForm />
            </Route>
          </Switch>
        </div>
        </Router>
      </header>
    </div>
  );
}

export default App;


