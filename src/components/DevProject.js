import React from 'react'
import DevData from '../components/DevData'
import DevCard from '../components/DevCard'

class DevProject extends React.Component {
    render(){
        return(
            <div className="DevProject">
                {DevData.map(data => 
                <DevCard Devdata={data}/>
                )}
            </div>
        )
    }
} 

export default DevProject