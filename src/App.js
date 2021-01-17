import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './header/header';
import About from './about/about'; 
import Contact from './contact/contact'; 
import './App.css';
import Landing from './landing/landing';

function App() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/contact" >
          <Contact/>
        </Route>
        <Route path="/about" >
          <About/>
        </Route>
        <Route path="/" >
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
