import React from 'react'
import github from '../../src/github.svg'
import linkedin from '../../src/linkedin.svg'
import gmail from '../../src/gmail.svg'
import twitter from '../../src/twitter.svg'

const IconLink = props => {
        return(
            <div className="IconLink">
                <h4>This is where icons go for social media.</h4>
                <img src={ github } alt="https://www.flaticon.com/authors/freepik"/> 
                <img src={ linkedin } alt="https://www.flaticon.com/authors/pixel-perfect"/>
                <img src={ twitter } alt="https://www.flaticon.com/authors/pixel-perfect"/> 
                <img src={ gmail } alt="https://www.flaticon.com/authors/freepik"/>
            </div>
        )
} 


export default IconLink