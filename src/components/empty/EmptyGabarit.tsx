import { Link } from "react-router-dom"
import './emptyGabarit.scss'
interface EmptyGabaritProps {
    linkButton: string
    valButton: string
}
export default function EmptyGabarit({linkButton, valButton} : EmptyGabaritProps) {
    return (
        <div className="emptyBlock">
            <div className="emptyBlockContent">
                <div className="logo">
                    <i className="icon-chat"></i>
                    <p className="logoText">Talkify</p>
                </div>
                <p className="emptyText">You haven't chat yet</p>
                <Link to={linkButton}>{valButton}</Link>
            </div>
        </div>
    )
}