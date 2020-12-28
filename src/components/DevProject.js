import React from 'react'
import devData from '../components/DevData'
import devCard from '../components/DevCard'

class DevProject extends React.Component {
    render(){
        return(
            <div className="DevProject">
                <devCard devData={devData}/>
            </div>
        )
    }
} 

export default DevProject