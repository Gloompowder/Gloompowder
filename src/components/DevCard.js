import React from 'react'
import devData from '../components/DevData'

class DevCard extends React.Component {
    render(){
        return(
            <div className="DevCard">
                <h1>{this.props.devData.name}</h1>
                <h1>{this.props.devData.demo}</h1>
            </div>
        )
    }
} 

export default DevCard