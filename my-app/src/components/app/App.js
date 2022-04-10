
import "./App.css";
import React, { useEffect, useRef, useState }  from "react";

import {ChatList} from "../ChatList/ChatList";
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import { Chat } from '../../screens/Chat';


const Home = () => (
    <h4>Home Page</h4>
)

export default function App(){
    return(
        <BrowserRouter>
            <ul className="menu">
                <li><NavLink style={({isActive}) => ({ color: isActive ? "green" : "yellow"})} to="/">Home</NavLink></li>
                <li><NavLink style={({isActive}) => ({ color: isActive ? "green" : "yellow"})} to="/chat">Chat</NavLink></li>
            </ul>


                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/chat" element={<ChatList />}>
                        <Route path=":id" element={<Chat />} />
                    </Route>
                    <Route path="*" element={<h4>404</h4>} />
                </Routes>
        </BrowserRouter>
);
}