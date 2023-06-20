import {OwnMessage} from "../OwnMessage/OwnMessage"
import {PartnerMessage} from "../PartnerMessage/PartnerMessage"
import {Message} from "../types/types"
//border: 1px solid rgb(38, 38, 38);
export const MessageCard = (msg:Message) => {
    return (
        <div className="partner__message">
        <h6>{msg.username ? msg.username : 'name'} - {msg.createAt ? String(msg.createAt) : '06-06-2023-12:49'}</h6>
        <p>{msg.message}</p>
        
    </div>
    )
}