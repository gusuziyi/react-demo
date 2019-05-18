import React from 'react'
import { HashRouter as Router, Route, Switch,Link } from "react-router-dom"
import Home from './FrantRouter/Home'
import ScratchProgram from './FrantRouter/ScratchProgram'
import Cableprogram from './FrantRouter/Cableprogram'
import AdvancedClassroom from './FrantRouter/AdvancedClassroom'
import OfficialStracture from './FrantRouter/OfficialStracture'
import ControlCenter from './FrantRouter/ControlCenter'
import CreativeSpace from './FrantRouter/CreativeSpace'
class App extends React.Component {
  render(){ 
    return(
        <Router> 
            <ul className="nav" >
               <li>
                   <Link to="/">Home</Link>
               </li>
               <li>
                   <Link to="/ScratchProgram">ScratchProgram</Link>
               </li>
               <li>
                   <Link to="/Cableprogram">Cableprogram</Link>
               </li>
               <li>
                    <Link to="/AdvancedClassroom">AdvancedClassroom</Link>
               </li>
               <li>
                    <Link to="/OfficialStracture">OfficialStracture</Link>
               </li>
               <li>
                    <Link to="/ControlCenter">ControlCenter</Link>
               </li>
               <li>
                    <Link to="/CreativeSpace">CreativeSpace</Link>
               </li>
            </ul>
            <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/ScratchProgram" exact component={ScratchProgram} />
               <Route path="/Cableprogram" exact component={Cableprogram} />
                <Route path="/AdvancedClassroom" exact component={AdvancedClassroom} />
                <Route path="/OfficialStracture" exact component={OfficialStracture} />
                <Route path="/ControlCenter" exact component={ControlCenter} />
                <Route path="/CreativeSpace" exact component={CreativeSpace} />
            </Switch>
      </Router>
      );
  }
}
export default App;