import React from 'react'

class DevCard extends React.Component {
    render(){
        console.log(Object.values(this.props))
        console.dir(this.props)
        return(
            <div className="DevCard">
                {/* <h1>{this.props.DevData.name}</h1>
                <h1>{this.props.DevData.demo}</h1> */}
            </div>
        )
    }
}    

export default DevCard