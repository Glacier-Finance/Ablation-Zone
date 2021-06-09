import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';

function MainPage(props: any) {
  return (
    <div className="App">
      <Home />
      <About />
      <Team />
    </div>
  );
}

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={MainPage} />
    </Switch>
  </Router>
  );
}

export default App;
