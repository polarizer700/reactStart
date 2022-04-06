
import "./App.css";
import React, { useEffect, useRef, useState }  from "react";
import { AUTHORS } from "../../utils/constants";

import { Form } from "../form/Form";
import { MessageList } from "../MessageList/MessageList";
import {ChatList} from "../ChatList/ChatList";


function App() {
    const [messages, setMessages] = useState([]);
    const timeout = useRef();
    const wrapperRef = useRef();

    const addMessage = (newMsg) => {
        setMessages([...messages, newMsg]);
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
        if (messages[messages.length - 1]?.author === AUTHORS.human) {

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

    return (
        <div className="App" ref={wrapperRef}>
            <ChatList />
            <div className="message-content">
                <div className="message-content-body">
                    <MessageList messages={messages}/>
                </div>

                <Form onSubmit={sendMessage} />
            </div>

        </div>
    );
}

export default App;