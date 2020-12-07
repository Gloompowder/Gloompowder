import React from 'react'
import IMG_8023 from '../../src/IMG_8023.jpg'
import pdf from '../../src/William Lin Resume.pdf'
import IconLink from '../components/IconLink'
class Home extends React.Component {
    render(){
        return(
            <div className="Home">
                <img className = "portrait" src={IMG_8023} alt="william-lin"/>
                <h1 className = "intro" >Hello! My Name is William</h1>
                <p className="about-me">
                    I'm a New York City based web-developer and designer.
                    I recently graduated from a high-intensity software development bootcamp designed to push students towards job-readiness. You may reach me through the links below!
                    </p>
                <IconLink />
                <button
                className="resume-button"
                href={ pdf }
                color="transparent"
                target="_blank"
                download>Resume
                </button>
            </div>
        )
    }
} 

export default Home