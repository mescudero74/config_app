import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CreateConsortiForm } from "./Components/Forms/CreateConsortiForm";
import { CreateEnvForm } from "./Components/Forms/CreateEnvForm";
import { CreateVeronaBuildForm } from "./Components/Forms/CreateVeronaBuildForm";
import { UpdateConsortiForm } from "./Components/Forms/UpdateConsortiForm";
import { UpdateEnvForm } from "./Components/Forms/UpdateEnvForm";
import { UpdateVeronaBuildForm } from "./Components/Forms/UpdateVeronaBuild";
import { ConsortiumTable } from "./Components/Tables/ConsortiumTable";
import { VeronaBuildTable } from "./Components/Tables/VeronaBuildTable";
import { EnvTable } from "./Components/Tables/EnvTable";
import { Menu } from "./Components/Layouts/Menu";
import "./App.css";
import { Consortium } from "./Services/Consortia";
import { Env } from "./Services/Env";
import { VeronaBuild } from "./Services/VeronaBuild";

function App() {
  const [envs, setEnvs] = useState([]);
  const [veronaBuilds, setVeronaBuilds] = useState([]);
  const [consorcios, setConsorcios] = useState([]);
  const [env, setEnv] = useState([]);
  const [veronaBuild, setVeronaBuild] = useState([]);
  const [consorcio, setConsorcio] = useState([]);
  useEffect(() => {
    Env().then((data) => setEnvs(data));
    Consortium().then((data) => setConsorcios(data));
    VeronaBuild().then((data) => setVeronaBuilds(data));
  }, []);
  return (
    <div className="App">
      <Router>
        <Menu />
        {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
        <div>
          <Switch>
            <Route path="/consorcios">
              <ConsortiumTable
                consorcios={consorcios}
                setConsorcio={setConsorcio}
                setConsorcios={setConsorcios}
              />
            </Route>
            <Route path="/envs">
              <EnvTable envs={envs} setEnv={setEnv} setEnvs={setEnvs}/>
            </Route>
            <Route path="/verona_build">
              <VeronaBuildTable
                veronaBuilds={veronaBuilds}
                setVeronaBuild={setVeronaBuild}
                setVeronaBuilds={setVeronaBuilds}
              />
            </Route>
            <Route exact path="/crear_consorcio">
              <CreateConsortiForm setConsorcios={setConsorcios} />
            </Route>
            <Route path="/crear_env">
              <CreateEnvForm setEnvs={setEnvs} />
            </Route>
            <Route path="/crear_verona_build">
              <CreateVeronaBuildForm setVeronaBuilds={setVeronaBuilds} />
            </Route>

            <Route exact path="/editar_consorcio">
              <UpdateConsortiForm
                setConsorcios={setConsorcios}
                consorcio={consorcio}
              />
            </Route>
            <Route path="/editar_env">
              <UpdateEnvForm setEnvs={setEnvs} env={env} />
            </Route>
            <Route path="/editar_verona_build">
              <UpdateVeronaBuildForm
                setVeronaBuilds={setVeronaBuilds}
                veronaBuild={veronaBuild}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
