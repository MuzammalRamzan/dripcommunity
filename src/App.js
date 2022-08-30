
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Swap from './components/Swap/Swap';
import Facuet from './components/Facuet/Facuet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/swap" component={Swap} />
          <Route exact path="/facuet" component={Facuet} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
