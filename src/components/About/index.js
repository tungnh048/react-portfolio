import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faReact } from '@fortawesome/free-brands-svg-icons'
import { faC } from '@fortawesome/free-solid-svg-icons'
import AssemblyLogo from '../../assets/images/assembly-logo.png'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I am a very ambitious recent grad student that is looking for a role in 
                    an established IT company for the opportunity to work with the latest technologies
                    on challenging and diverse projects.
                </p>
                <p>
                    I am loyal, dependable, confident, curious and always looking for more opportunity 
                    to improve myself one step at a time.
                </p>
                <p>
                    alllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
                </p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <FontAwesomeIcon icon={faJava} color="#DD0031" />
                    </div>
                    <div className="face2">
                        <FontAwesomeIcon icon={faC} color="#F06529" />
                    </div>
                    <div className="face3">
                        <FontAwesomeIcon icon={faC} color="#28A4D9" />++
                    </div>
                    <div className="face4">
                        <FontAwesomeIcon icon={faC} color="#5ED4F4" />#
                    </div>
                    <div className="face5">
                        <FontAwesomeIcon icon={faReact} color="#EFD81D" />
                    </div>
                    <div className="face6">
                        <img src={AssemblyLogo} alt="Assembly" width="200" height="200"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

