import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import AssemblyLogo from '../../assets/images/assembly-logo.png'
import JavaLogo from '../../assets/images/java-logo.png'
import CLogo from '../../assets/images/c-logo.png'
import CPlusPlusLogo from '../../assets/images/cplusplus-logo.png'
import CSharpLogo from '../../assets/images/csharp-logo.png'
import ReactLogo from '../../assets/images/react-logo.png'
import Loader from 'react-loaders'

const About = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
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
                    I am a very ambitious student and a recent college graduate. Currently, I am looking for a role in 
                    an established IT company for the opportunity to work with the latest technologies
                    on challenging and diverse projects.
                </p>
                <p>
                    Check confident in my ability to adapt to most situations, always curious to learn more, dependable as a worker 
                    and always try to improve myself one step at a time.
                </p>
                <p> If I have to describe myself in 3 words, those will be: </p>
                    
                    <h3>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['T', 'R', 'U', 'S', 'T', 'W', 'O', 'R', 'T', 'H', 'Y']}
                            idx={15}
                        />    
                    </h3> 
                        <p>My TRUSTWORTHINESS means that I plan to stay working with you for a lengthy amount of time. I will be a positive role model for the company</p>
                    <h3>
                    <h3>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['S', 'E', 'L', 'F', '-', 'M', 'O', 'T', 'I', 'V', 'A', 'T', 'E', 'D']}
                            idx={15}
                        />    
                    </h3> 
                    </h3>
                        <p>My levels of SELF-MOTIVATION mean that I will come into the role and I will dedicate the time needed to learn the job quickly and to make sure I do it
                        to a high standard with little supervision.</p>
                    <h3>
                    <h3>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['D', 'E', 'P', 'E', 'N', 'D', 'A', 'B', 'L', 'E']}
                            idx={15}
                        />    
                    </h3> 
                    </h3>
                        <p> Finally, my DEPENDABLITY means that I will never let you down and I will be available to work at short notive if needed to help out.</p>
            </div>

            <div className="stage-cube-cont">
                <div className="cubespinner">
                    <div className="face1">
                        <img src={JavaLogo} alt="Java" height="190" width="190"/>
                    </div>
                    <div className="face2">
                        <img src={CLogo} alt="C" height="190" width="190"/>
                    </div>
                    <div className="face3">
                        <img src={CPlusPlusLogo} alt="C++" height="190" width="190"/>
                    </div>
                    <div className="face4">
                        <img src={CSharpLogo} alt="C#" height="190" width="190"/>
                    </div>
                    <div className="face5">
                        <img src={ReactLogo} alt="React" height="190" width="190"/>
                    </div>
                    <div className="face6">
                        <img src={AssemblyLogo} alt="Assembly" height="190" width="190"/>
                    </div>
                </div>
            </div>
        </div>
            <Loader type="pacman" />
        </>
    )
}

export default About

