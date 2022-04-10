import './ChatList.css'
import {Link, Outlet} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'



const chats = [
    {
        name: "Chat1",
        id: "chat1",
    },
    {
        name: "Chat2",
        id: "chat2",
    },
    {
        name: "Chat3",
        id: "chat3",
    },
];

export const ChatList = () => {

    const deleteChat = ()=>{
        console.log(12)
    }

    return (
        <>
            <div className="chat-list">
                {chats.map((chat) => (
                    <Link to={`/chat/${chat.id}`} key={chat.id} className="chat-item">
                        {chat.name}
                        <FontAwesomeIcon icon={faTrashCan} onClick={deleteChat}/>

                    </Link>
                ))}
                <button>add chats</button>
            </div>

            <Outlet/>
        </>
    );
}