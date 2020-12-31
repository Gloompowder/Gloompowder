import React from 'react'
import DesCard from '../components/DesCard'
import DesData from '../components/DesData'

class DesProject extends React.Component {
    render(){
        return(
            <div className="DesProject">
                {DesData.map(data => 
                <DesCard desdata={data}/>
                )}
            </div>
        )
    }
} 

export default DesProject