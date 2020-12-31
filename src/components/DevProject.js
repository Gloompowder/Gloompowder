import React from 'react'
import DevData from '../components/DevData'
import DevCard from '../components/DevCard'

class DevProject extends React.Component {
    render(){
        console.log(DevData)
        return(
            <div className="DevProject">
                <DevCard data={DevData}/>
            </div>
        )
    }
} 

export default DevProject