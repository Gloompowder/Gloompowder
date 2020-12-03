import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    render(){
        return(
            <div className="Nav">
                <img className = "logo" src ="" alt ="" />
                <ul>
                    <li className = "NavHome"> <Link to="/">Home</Link></li>
                    <li className = "NavDevelop"> <Link to="/developer">Develop</Link></li>
                    <li className = "NavDesign"> <Link to="/designer">Design</Link></li>
                    <li className = "NavContact"><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        )
    }
} 

export default Nav