import Dglass from '../assets/desktop/image-glass-and-keyboard.jpg'
import Dphone from '../assets/desktop/image-phone-and-keyboard.jpg'
import Tglass from '../assets/tablet/image-glass-and-keyboard.jpg'
import Tphone from '../assets/tablet/image-phone-and-keyboard.jpg'
import Mglass from '../assets/mobile/image-glass-and-keyboard.jpg'
import Mphone from '../assets/mobile/image-phone-and-keyboard.jpg'

export default function Main() {
    return (
        <div className="background_left ">
            <div className="container flex">
                <div className="flex image_container">
                    <div className="firstImage">
                        <img src={Dphone} className="deskImage" alt="Keyboard Example" />
                        <img src={Tphone} className="tabletImage" alt="Keyboard Example" />
                        <img src={Mphone} className="mobileImage" alt="Keyboard Example" />
                    </div>
                    <div className="secondImage">
                        <img src={Dglass} className="deskImage" alt="Keyboard Example" />
                        <img src={Tglass} className="tabletImage" alt="Keyboard Example" />
                        <img src={Mglass} className="mobileImage" alt="Keyboard Example" />
                    </div>

                </div>
                <div >
                    <div className="content">
                        <h2>Mechanical wireless keyboard</h2>
                        <p className="release">
                            The Typemaster keyboard boasts top-notch build and practical design. It offers a wide variety
                          of switches and keycaps, along with reliable wireless connectivity.</p>
                    </div>

                </div>

            </div>
        </ div >
    )
}