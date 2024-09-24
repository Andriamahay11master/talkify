import { Link } from 'react-router-dom'
import './home.scss'
export default function Home() {
    return (
        <div className='main-page page-home'>
            <div className="main-logo">
                <img src="/logo-talkify.png" alt="Logo Talkify" className="logo" />
            </div>
            <div className="main-welcome">
                <h1 className="title-h1">Welcome to Talkify</h1>
                <p>
                    Read our <Link className="btn btn-link" to="/privacy-policy">Privacy Policy</Link>. Tap “Agree and Continue” to accept.
                </p>
                <Link className="btn btn-secondary" to="/signIn">Agree and Continue</Link>
            </div>
        </div>
    )
}