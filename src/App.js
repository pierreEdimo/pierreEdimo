import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AppHeader from './header/header';
import Footer from './footer/footer';
import About from './about/about'; 


import './App.css';
import Landing from './landing/landing';

function App() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/about" >
          <About/>
        </Route>
        <Route path="/" >
          <Landing />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
