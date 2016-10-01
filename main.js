require("./Protocol/Protocol");

import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import {Provider} from "react-redux";
import Protocol from "./Protocol/Protocol";
import reducer from "./Reducer/reducer";
ReactDOM.render(
	<Provider
		store={createStore(reducer)}
	>
		<Protocol/>
	</Provider>,
	document.getElementById("protocol")
);
