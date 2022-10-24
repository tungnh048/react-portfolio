import { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_h6ta4v3',
                'template_d5w6vzn',
                refForm.current,
                'xFkd2fV6YNtbQG9tO'
            )
            .then(
                () => {
                    alert('Message successfuly sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in backend job opportunity - but I am also open for frontend as well.
                        I am new, ambitious and willing to learn. If you have a request or question, don't hesitate
                        to contact me using the form below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className="half">
                                    <input type="email" name="email" placeholder="Email" required />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message" name="message" required />
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Hoang Tung "Bill" Nguyen,
                    <br/>
                    Canada
                    <br/>
                    19 Viewmount Drive
                    <br/>
                    Ottawa
                    <br/>
                    <span>tungnh048@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[45.34271671652712, -75.74539683067987]} zoom={14}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[45.34271671652712, -75.74539683067987]}>
                            <Popup>Tung Nguyen lives near here (On this road)</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact