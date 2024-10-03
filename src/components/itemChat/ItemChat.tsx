import './itemChat.scss'
import {ItemChatType} from '../../models/ItemChat'

export default function ItemChat({imgSrc, name, date, text} : ItemChatType) {

    return (
        <div className="itemChat">
            <div className="itemCol">
                <img src={imgSrc ? imgSrc : '/user.png'} alt="image user" title="images user"/>
            </div>
            <div className="itemCol">
                <div className="info">
                    <h3 className="title-h3">{name}</h3>
                    <span className="info-date">{date}</span>
                </div>
                <p>{text}</p>
            </div>
        </div>
    )
}
