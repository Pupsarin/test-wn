import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './index.css';
import { ChatApp } from './ChatApp';

ReactDOM.render(
	<Provider store={store}>
		<ChatApp />
	</Provider>,
	document.getElementById('root')
);
