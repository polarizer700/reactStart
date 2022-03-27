import './App.css';
import React from 'react';
import Message from "../message/Message";
function App(props) {


    const textSome = 'some text'
    const messageText = [
        { text: 'Drink Coffee', classStyle: 'text-red', id: 1 },
        { text: 'Drink Coffee', classStyle: 'text-green', id: 2 },
        { text: 'Drink Coffee', classStyle: 'text-blue', id: 3 }
    ];
    return (
        <div className="App">
            <header className="App-header">
                My First React App
                <h3>Hello, {props.name}</h3>
                <Message items={messageText}/>
            </header>

        </div>
    );
}
export default App;
