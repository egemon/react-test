require("./Protocol/Protocol");

import React from 'react';
import ReactDOM from 'react-dom';
import Protocol from './Protocol/Protocol';
import store from './Store/store';

const render = () => {
	ReactDOM.render(
		<Protocol {...store.getState()}/>,
		document.getElementById('protocol')
	);
};
store.subscribe(render);
render();