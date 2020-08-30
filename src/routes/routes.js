import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Cubo from "../components/cubo";
import ICube from "../components/interactive-cube";

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/" component={Cubo} />
			<Route path="/icube" component={ICube} />
		</Switch>
	);
}