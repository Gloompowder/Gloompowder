import React from 'react'
import devData from './DevData'

class DevCard extends React.Component {
    render(){
        return(
            <div className="DevCard">
                <h1>{devData.name}</h1>
            </div>
        )
    }
} 

export default DevCard