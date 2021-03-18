import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
/* import './index.css'; */
/* import App from './App'; */

/** METODO SIN JSX */
/* const root  = document.getElementById('root'),
    element = React.createElement('h1', {className: "title"}, "Hola Mundo");

ReactDOM.render(element, root);
 */

/** METODO CON JSX */
/* const root  = document.getElementById('root');

ReactDOM.render(<h1 className="title2">Hola mundo</h1>, root); */

const root  = document.getElementById('root');

ReactDOM.render(<App />, root);
