
import "./App.css";
import React, { useEffect, useRef, useState }  from "react";
import {Provider} from "react-redux";
import {Button} from "@mui/material";
import {ChatList} from "../ChatList/ChatList";
import {BrowserRouter, Link, NavLink, Route, Routes} from "react-router-dom";
import { Chat } from '../../screens/Chat';
import { ThemeContext} from "../../utils/ThemeContext";
import { Profile } from "../../screens/Profile";
import {store} from "../../store";

const Home = () => (
    <h4>Home Page</h4>
)

export default function App(){
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
        console.log(1254)
    };

    return(
        <Provider store={store}>
        <ThemeContext.Provider value={{ theme, changeTheme: toggleTheme}}>
        <BrowserRouter>

            <ul className="menu">
                <li><NavLink style={({isActive}) => ({ color: isActive ? "green" : "yellow"})} to="/">Home</NavLink></li>
                <li><NavLink style={({isActive}) => ({ color: isActive ? "green" : "yellow"})} to="/chat">Chat</NavLink></li>
                <li><NavLink style={({isActive}) => ({ color: isActive ? "green" : "yellow"})} to="/profile">Profile</NavLink></li>
                <Button onClick={toggleTheme}>Click</Button>
            </ul>


                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/profile" element={<Profile />}/>
                    <Route path="/chat" element={<ChatList />}>
                        <Route path=":id" element={<Chat  />} />
                    </Route>
                    <Route path="*" element={<h4>404</h4>} />
                </Routes>
        </BrowserRouter>
        </ThemeContext.Provider>
        </Provider>
);
}