import '../Layout/index.scss'
import AnimatedLetters from '../AnimatedLetters'

const About = () => {
    
    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
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
                    I am loyal to the cause, confident, curious and always looking for more opportunity 
                    to improve myself one step at a time.
                </p>
            </div>
        </div>
    )
}

export default About

