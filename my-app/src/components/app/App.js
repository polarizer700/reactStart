
import "./App.css";
import React, { useEffect, useRef, useState }  from "react";
import { AUTHORS } from "../../utils/constants";
import { Message }  from "../message/Message";
import { Form } from "../form/Form";
import { MessageList } from "../MessageList/MessageList";





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
        });
    };

    useEffect(() => {
        if (messages[messages.length - 1]?.author === AUTHORS.human) {
            timeout.current = setTimeout(() => {
                addMessage({
                    author: AUTHORS.robot,
                    text: "hello friend",
                    id: `msg-${Date.now()}`,
                });
            }, 1000);
        }

        return () => {
            clearTimeout(timeout.current);
        };
    }, [messages]);

    return (
        <div className="App" ref={wrapperRef}>
            <div className="message-content">
            <MessageList messages={messages}/>
            </div>
            <Form onSubmit={sendMessage} />
        </div>
    );
}

export default App;