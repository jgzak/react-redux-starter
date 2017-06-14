import _ from 'lodash';

import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import initialState from './initialState'
import thunk from 'redux-thunk'


// export const store = createStore(reducer, initialState, applyMiddleware(thunk))
export const store = applyMiddleware(thunk)(createStore)(reducer)

// class App extends React.Component {
//   render () {
//     return <p> Hello React!</p>;
//   }
// }
render(<Provider store={store}>
			<App/>
		</Provider>, 
		document.getElementById('app'));

export default store;