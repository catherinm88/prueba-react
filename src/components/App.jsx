import React, {Component} from 'react';
import "../styles/styles.scss";
import Countries from './pages/countriesHome'; 
import Country from './pages/country';
import MainMenu from './organisms/MainMenu';
import { store } from '../store/store';
import { Provider } from "react-redux";
//import History from './history'; 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
 render(){ 
   return(
     <Provider store={store}>
      <Router>
        <MainMenu />
        <Switch>
          <Route path="/" exact component={ Countries } />
          <Route path="/:name" component={ Country } />
          <Route component={ () => (
            <div className="ed-grid">
              <h1>Error 404</h1>
              <span>Página no encontrada</span>
            </div>
          )
          } />
        </Switch>
      </Router>
     </Provider>
)}
}

export default App;
