import React from 'react';

import {Link } from 'react-router-dom';

class Comp1 extends React.Component {
   render() {
      return (
         <div className="navy">           
            <ul>
               <li> <Link to="/Animals">Animals</Link></li>
               <li> <Link to="/fruits">Fruits</Link></li>
               <li> <Link to="/buildings">Building</Link></li>
               <li> <Link to="/cars">Cars</Link></li>
               <li> <Link to="/planes">Planes</Link></li>               
            </ul>
      
         </div>
      );
   }
}
export default Comp1;