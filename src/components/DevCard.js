import React from 'react'

class DevCard extends React.Component {
    render(){
        return(
            <div className="DevCard">
                <h1>{this.props.data.name}</h1>
                <h1>{this.props.data.demo}</h1>
            </div>
        )
    }
}    

export default DevCard