import React from 'react'
import DevProject from '../components/DevProject'
// import FilterDev from '../components/FilterDev'
// import devdata from '../components/DevData'

class Dev extends React.Component {
    render(){
        return(
            <div className="Dev">
                <h1 className='Dev-title'>Coding Projects</h1>
                    {/* <FilterDev/> */}
                <DevProject/>
            </div>
        )
    }
} 

export default Dev