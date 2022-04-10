import React, {useEffect, useRef, useState} from "react";
import {AUTHORS} from "../utils/constants";
//import {ChatList} from "../components/ChatList/ChatList";
import {MessageList} from "../components/MessageList/MessageList";
import {Form} from "../components/form/Form";
import {useParams, Navigate} from "react-router-dom";

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

const initMessages = {
    chat1: [],
    chat2: [],
    chat3: [],
};

export function Chat() {
    const {id} = useParams();

    const [messages, setMessages] = useState(initMessages);
    const timeout = useRef();
    const wrapperRef = useRef();

    const addMessage = (newMsg) => {
        setMessages({ ...messages, [id]: [...messages[id], newMsg] });
    };

    const sendMessage = (text) => {
        addMessage({
            author: AUTHORS.human,
            text,
            id: `msg-${Date.now()}`,
            classNameBlock: 'msg-human',
        });
    };

    useEffect(() => {
        const lastMessage = messages[id]?.[messages[id]?.length - 1];
        if (lastMessage?.author === AUTHORS.human) {

            timeout.current = setTimeout(() => {
                addMessage({
                    author: AUTHORS.robot,
                    text: "hello friend",
                    id: `msg-${Date.now()}`,
                    classNameBlock: 'msg-robot',
                });
            }, 1000);
        }

        return () => {
            clearTimeout(timeout.current);
        };
    }, [messages]);

    if (!messages[id]) {
        return <Navigate to="/chat" replace />
    }


    return (
        <div className="App" ref={wrapperRef}>

                <div className="message-content">
                <div className="message-content-body">
                <MessageList messages={messages[id]} />
                </div>
                <Form onSubmit={sendMessage} />
                </div>
        </div>
    );
}

