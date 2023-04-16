import React, { Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { isMobile } from 'react-device-detect';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
// import LoadSpinnerComponent from './utility/loader';
const Links = React.lazy(()=>import('./Header/Header'))
const Home = React.lazy(()=>import('./Home/Home'));
const BrickGameComponent = React.lazy(()=> import('./BrickGame/BrickGame'));
const SnakeGameComponent = React.lazy(()=> import('./SnakeGame/SnakeGame'));
const Tank90GameComponent = React.lazy(()=> import('./Tank90/Tank90'));

function App(props) {
  // const [usernameState, changeState] = useState({
  //   user1 : 'abc'
  // })
  // const [showhideState, toggler ] = useState({showhide : true})
  //
  // const changeHandler = (event) => {
  //   changeState({user1 : event.target.value})
  // }
  //
  // const toggleOutput = () =>{
  //   toggler({showhide : !showhideState.showhide})
  // }
  if(isMobile){
    return <React.Fragment>
      <div className="smallScreenMessage">
        <h2>Message</h2>
        <p className="midpoint">Please switch to a desktop for exploring the HTML-5 and javascript video game section...</p>
      </div>
    </React.Fragment>

  }
  else{
  return (
    <div>
    <div className="App">
  {/*  <button onClick={toggleOutput}>{ showhideState.showhide ? 'Hide ' :  'Show '}Output</button>
    <UserInput changed = {changeHandler} name = {usernameState.user1}/>
    { showhideState.showhide ? <UserOutput name = {usernameState.user1} /> : null }
    */}
    <section >
    <Router>
      <Suspense fallback={<>Loading...</>}><Links/></Suspense>
        <div style={{'paddingTop':'30px'}}>
        <Switch>
        <Route exact path="/home" component={()=><Suspense fallback={<>Loading...</>}><Home /></Suspense>} />
        <Route exact path="/brick" component={()=><Suspense fallback={<>Loading...</>}><BrickGameComponent /></Suspense> } />
        <Route exact path="/snake" component={()=><Suspense fallback={<>Loading...</>}><SnakeGameComponent /></Suspense>} />
        <Route exact path="/t90" component={()=><Suspense fallback={<>Loading...</>}><Tank90GameComponent /></Suspense>} />
        <Route exact path="/*" component={()=><Redirect to="/home" />} />
        </Switch>
        </div>
    </Router>
    </section>

    </div>
    </div>
  );
  }
}

export default App;
