import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Animals from './Animals';
import Planes from './Planes';
import Fruits from './Fruits';
import Hover from './Hover';
import Buildings from './Buildings';
import Cars from './Cars';


class RouteComponent extends React.Component{
	render(){
		return(
				<Router>
					<div>
					    <Route exact path = "/" component = {Hover} />
				        <Route path = "/animals" component = {Animals} />
				        <Route path = "/planes" component = {Planes} />
				        <Route path = "/cars" component = {Cars} /> 
				        <Route path = "/Fruits" component = {Fruits} /> 
				         <Route path = "/buildings" component = {Buildings} /> 
			        </div>           
			    </Router>
			);
	}
}
export default RouteComponent;