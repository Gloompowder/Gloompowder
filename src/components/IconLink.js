import React from 'react'
import github from '../../src/github.svg'
import linkedin from '../../src/linkedin.svg'
import gmail from '../../src/gmail.svg'
import twitter from '../../src/twitter.svg'

const IconLink = props => {
        return(
            <div className="IconLink">
                <img className = "github" src = { github } target = "_blank" href = "https://www.github.com/Gloompowder" alt = "https://www.flaticon.com/authors/freepik"/> 
                <img className = "linkedin" src = { linkedin } target = "_blank" href = "https://www.Linkedin.com/williamlincodeanddesign" alt = "https://www.flaticon.com/authors/pixel-perfect"/>
                <img className = "twitter" src = { twitter } target = "_blank" href = "https://www.twitter.com/@Gloompowder" alt = "https://www.flaticon.com/authors/pixel-perfect"/> 
                <img className = "gmail" src = { gmail } target = "_blank" href = "https://www.gmail.com" src = { gmail } alt = "https://www.flaticon.com/authors/freepik"/>
            </div>
        )
} 


export default IconLink