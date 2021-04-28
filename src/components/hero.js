import DKeyboard from '../assets/desktop/image-keyboard.jpg'
import TKeyboard from '../assets/tablet/image-keyboard.jpg'
import MKeyboard from '../assets/mobile/image-keyboard.jpg'

export default function Hero() {
    return (
        <div className="background">
            <div className="container flex">
                <div >
                    <h1>Typemaster keyboard</h1>
                    <p className="release">Improve your productivity and gaming without breaking the bank. Upgrade to a high quality
                    mechanical typing experience.</p>
                    <div className="flex info">
                        <button type="button" className="button_1">Pre-order now</button>
                        <p >Release on 5/27</p>
                    </div>
                </div>
                <img src={DKeyboard} className="deskImage" alt="Keyboard Example" />
                <img src={TKeyboard} className="tabletImage" alt="Keyboard Example" />
                <img src={MKeyboard} className="mobileImage" alt="Keyboard Example" />
            </div>
        </ div >
    )
}