import logo from '../assets/shared/logo.svg'

export default function Header() {
    return (
        <header className="container flex">
            <img src={logo} className="logo" alt="logo" />
            <button type="button" className="button_2">Pre-order now</button>
        </header>
    )
}