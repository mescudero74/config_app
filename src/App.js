import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { CreateConsortiForm } from './Components/Forms/CreateConsortiForm'
import { CreateEnvForm } from './Components/Forms/CreateEnvForm'
import { CreateVeronaBuildForm } from './Components/Forms/CreateVeronaBuildForm'
import { ConsortiumTable } from './Components/Tables/ConsortiumTable'
import { VeronaBuildTable } from './Components/Tables/VeronaBuildTable'
import { EnvTable } from './Components/Tables/EnvTable'
import { Menu } from './Components/Layouts/Menu'
import './App.css';

function App() {
  const [envs, setEnvs] = useState([]);
  const [veronaBuilds, setVeronaBuilds] = useState([])
  const [consorcios, setConsorcios] = useState([]);
  const [env, setEnv] = useState([]);
  const [veronaBuild, setVeronaBuild] = useState([])
  const [consorcio, setConsorcio] = useState([]);

  return (
    <div className="App">
        <Router>
        <Menu/>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <div>
          <Switch>
          <Route path="/consorcios">
              <ConsortiumTable consorcios={consorcios}/>
            </Route>
            <Route path="/envs">
              <EnvTable envs={envs}/>
            </Route>
            <Route path="/verona_build">
              <VeronaBuildTable veronaBuilds={veronaBuilds}/>
            </Route>
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
    </div>
  );
}

export default App;


