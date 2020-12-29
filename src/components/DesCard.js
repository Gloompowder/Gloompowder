import React from 'react'


class DesCard extends React.Component {
    render(){
        console.log(this.props)
        return(
            <div className="desCard">
                <h1>{this.props.description}</h1>
            </div>
        )
    }
} 

export default DesCard