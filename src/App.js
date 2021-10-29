import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import SearchPokemon from './components/SearchPokemon/SearchPokemon';
import PersonalPokedex from './components/PersonalPokedex/PersonalPokedex';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={SearchPokemon} />
        <Route path='/my-pokedex' component={PersonalPokedex} />
      </Switch>
    </Router>
  );
};
export default App;
