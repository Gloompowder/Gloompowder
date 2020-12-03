import React from 'react'
import IMG_8023 from '../../src/IMG_8023.jpg'
import pdf from '../../src/William Lin Resume.pdf'
class Home extends React.Component {
    render(){
        return(
            <div className="Home">
                <img className = "portrait" src={IMG_8023} alt="william-lin"/>
                <h1 className = "intro" >Hello!</h1>
                <h1 className = "intro" > My name is William.</h1>
                <p className="about-me">I'm a New York City based web-developer and designer.</p>
                <button
                className="resume-button"
                href={pdf}
                color="transparent"
                target="_blank"
                download>Resume
                </button>
            </div>
        )
    }
} 

export default Home