import _ from 'lodash';

import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import App from './containers/App'
import reducer from './reducers'


debugger
const store = createStore(reducer)

// class App extends React.Component {
//   render () {
//     return <p> Hello React!</p>;
//   }
// }
render(<Provider store={store}>
			<App/>
		</Provider>, 
		document.getElementById('app'));