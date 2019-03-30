import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Animals from './Animals';
import Planes from './Planes';
import Fruits from './Fruits';
import Comp1 from './Comp1';
import Buildings from './Buildings';
import Cars from './Cars';
import './demp.css';

class Demo extends React.Component{
	render(){
		return(
		<Router>
			<div>
				<Route exact path = "/" component = {Comp1} />
				<Route path = "/animals" component = {Animals} />
				<Route path = "/planes" component = {Planes} />
				<Route path = "/cars" component = {Cars} /> 
				<Route path = "/Fruits" component = {Fruits} /> 
				<Route path = "/buildings" component = {Buildings} /> 
			</div>           
		</Router>
		)
	}
}

export default Demo;
