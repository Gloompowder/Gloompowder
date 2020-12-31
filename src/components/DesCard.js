import React from 'react'

class DesCard extends React.Component {
    render(){
        return(
            <div className="desCard">
                <div className = 'desContent'>
                    <h1>{this.props.desdata.description}</h1>
                    <p>"some description"</p>
                </div>
            </div>
        )
    }
} 

export default DesCard