import './ChatList.css'
import {Link, Outlet} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import {Button} from "@mui/material";
import React, {useContext, useState} from "react";
import { ThemeContext } from "../../utils/ThemeContext";


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

    const { changeTheme } = useContext(ThemeContext);



    return (
        <>

            <div className="chat-list">
                {chats.map((chat) => (
                    <Link to={`/chat/${chat.id}`} key={chat.id} className="chat-item">
                        {chat.name}
                        <FontAwesomeIcon icon={faTrashCan} />

                    </Link>
                ))}
                <button>add chats</button>
            </div>

            <Outlet/>
        </>
    );
}